import React from "react";

// Import BS Components
import Container from "react-bootstrap/Container";

// Import Custom Components
import Entry from "./Entry";

/** Container for the Entries **/
const EntryList = ( { groups, setGroups, filter, defaultGroupName, setDefaultGroupName } ) => {
	return (
		<Container fluid={true}>
			{
				groups.map(group => {
					console.log(group.members);
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