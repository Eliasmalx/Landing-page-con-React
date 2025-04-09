import React from "react";
import Card from "./Card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    let array = [
		{title:"Paisajes" , text:"Conoce los increibles paisajes de nuestro mundo", img:"https://wallpapers.com/images/featured/fondos-de-hermosos-paisajes-wnxju2647uqrcccv.jpg"},
		{title:"Playas" , text:"Las mas hermosas playas del caribe", img:"https://img.freepik.com/fotos-premium/exoticos-paisajes-playa-tropical-suenos_287743-1067.jpg"},
		{title:"Comida" , text:"Los platos mas valorados mundialmente", img:"https://editorialtelevisa.brightspotcdn.com/58/eb/b537a4714c11890dfba66649ee13/flautas-transformed.jpeg"},
		{title:"Animales" , text:"Animales que no creeras que existen", img:"https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2018/02/21/239349.jpg"},
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