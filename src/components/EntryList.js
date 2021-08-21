import React from "react";

// Import BS Components
import Container from "react-bootstrap/Container";

// Import Custom Components
import Entry from "./Entry";

/** Container for the Entries **/
const EntryList = ( { entries, setEntryList } ) => {
	return (
		<Container fluid={true}>
			{entries.map(entry => (
				<Entry key={entry.id} entry={entry} setEntryList={setEntryList} />
			))}
		</Container>
	);
}

export default EntryList;