import React from "react";

// Import BS Components
import Container from "react-bootstrap/Container";

// Import Custom Components
import Entry from "./Entry";

/** Container for the Entries **/
const EntryList = ( { entries, setEntryList, groups, setGroups, filter } ) => {
	return (
		<Container fluid={true}>
			{
				groups.map(group => {
					console.log("Update!");
					return (
						<div key={group.id}>
							<h6>{group.name}</h6>
							{
								group.members.length ? group.members.map(entry => {
									// Get the currently selected entry;
									//let entry = entries.filter(item => item.id === entryId)[0];
									//console.log(entry);
									if( filter.value.test(entry[filter.key]) ) {
										return (
											<Entry
												key={entry.id} entry={entry}
												entries={entries} setEntryList={setEntryList}
												groups={groups} setGroups={setGroups}
												filter={filter}
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