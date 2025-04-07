import React from "react";
import Card from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    let array = [
		{title:"1" , text:"1", img:""},
		{title:"2" , text:"2", img:""},
		{title:"3" , text:"3", img:""},
		{title:"4" , text:"4", img:""},
	];

	
	return (
		<div className=" px-3 d-flex justify-content-between text-center">
			{
				array.map((item,index) =>(
					<Card key={index} title={item.title} text={item.text} img={item.img}/>
				))
			}
		</div>
	);
};

export default Home;