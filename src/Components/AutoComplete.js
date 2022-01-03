import React from "react";
import "./autocomplete.css";
export default function AutoComplete({ searchTerms, handelSearchTextChange, data = [] }) {
	return (
		<div>
			<p>Autocomplete</p>
			<input
				placeholder="Type to search"
				className="input-box"
				type="text"
				value={searchTerms}
				onChange={handelSearchTextChange}
			/>
			<div className="result-parent-box">
				{data.length === 0 ? (
					<p>No Result Found</p>
				) : (
					<>
						{data.map((d) => (
							<p className="result-box" key={d.name}>
								{d.name}
							</p>
						))}
					</>
				)}
			</div>
		</div>
	);
}
