import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	// const cardCompenent = robots.map((robot, indx) => {
	// 	return (
	// 		<Card
	// 			key={indx}
	// 			id={robots[indx].id}
	// 			name={robots[indx].name}
	// 			email={robots[indx].email}
	// 		/>
	// 	);
	// });
	return (
		<div>
			{robots.map((robot, indx) => {
				return (
					<Card
						key={indx}
						id={robots[indx].id}
						name={robots[indx].name}
						email={robots[indx].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
