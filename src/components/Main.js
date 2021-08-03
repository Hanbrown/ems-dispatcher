import React from "react";
import Buffer from "./Buffer";
import Entry from "./Row";

class Main extends React.Component {
	render() {
		return(
			<div>
				<Buffer/>
				<Entry color={"green"}/>
				<Entry color={"red"}/>
				<Buffer/>
				<Entry color={"yellow"}/>
			</div>
		);
	}
}

export default Main;