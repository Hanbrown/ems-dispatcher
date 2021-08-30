import React from "react";

// Import BS Components
import Container from "react-bootstrap/Container";

// Import Custom Components
import Entry from "./Entry";

/** Container for the Entries **/
const EntryList = ( { entries, setEntryList, groups, setGroups, filter } ) => {
	return (
		<Container fluid={true}>
			{entries.map(entry => {
				if( filter.value.test(entry[filter.key]) )
					return (
						<Entry
							key={entry.id} entry={entry}
							entries={entries} setEntryList={setEntryList}
							groups={groups} setGroups={setGroups}
							filter={filter}
						/>
					);
			})}
		</Container>
	);
}

export default EntryList;