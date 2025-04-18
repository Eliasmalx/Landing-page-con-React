import React from "react";

const Card = ({title,text,img}) => {

    return (
        <div className="card"  style={{width:"18rem"}}>
            <img src={img} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
        </div>

);
};



export default Card;