import React from "react";

// Import BS Components
import Container from "react-bootstrap/Container";

// Import Custom Components
import Entry from "./Entry";

/** Container for the Entries **/
const EntryList = ( { groups, setGroups, filter, defaultGroupName, setDefaultGroupName } ) => {
	// If there are no members, then show a unique message
	if( groups.length === 0 )
		return (<h5>There's nothing here -- Add a Unit!</h5>);

	// Otherwise, render as normal
	return (
		<Container fluid={true}>
			{
				groups.map(group => {
					return (
						<div key={group.id}>
							<h6>{group.name}</h6>
							{
								group.members.length ? group.members.map(entry => {
									// Get the currently selected entry;
									if( filter.value.test(entry[filter.key]) ) {
										return (
											<Entry
												key={entry.id} entry={entry}
												groups={groups} setGroups={setGroups}
												defaultName={defaultGroupName} setDefaultName={setDefaultGroupName}
											/>
										);
									}
								}) : <h6>Empty</h6>
							}
							{group.name ? <br /> : ""}
						</div>
					)
				})
			}
		</Container>
	);
}

export default EntryList;