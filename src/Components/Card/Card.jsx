import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <React.Fragment>
      <div className={`card ${props.color}`}>
        <h2 className="name">{props.name}</h2>
        <div className="price_wrap">
          <p className="price_wrap">
            <span className="price">{props.price}</span>
            <span className="currency">руб/мес</span>
          </p>
        </div>
        <p className="traffic">до {props.traffic} Мбит/сек</p>
        <p className="quantity">{props.quantity}</p>
      </div>
    </React.Fragment>
  );
}

export default Card;
