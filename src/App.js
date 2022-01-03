import logo from "./logo.svg";
import "./App.css";
import AutoComplete from "./Components/AutoComplete";
import { states } from "./states";
import { useState } from "react";
function App() {
	const [searchTerms, setSearchTerms] = useState("");
	const [filteredResult, setfilteredResult] = useState([]);
	const handelSearchTextChange = (e) => {
		console.log(e.target.value);
		setSearchTerms(e.target.value);
		if (searchTerms !== "") {
			const newStateList = states.filter((state) => state.name.toLowerCase().includes(searchTerms));
			setfilteredResult(newStateList);
		} else {
			setfilteredResult(states);
		}
	};
	return (
		<div className="App">
			<AutoComplete
				searchTerms={searchTerms}
				handelSearchTextChange={handelSearchTextChange}
				data={searchTerms.length < 1 ? states : filteredResult}
			/>
		</div>
	);
}

export default App;
