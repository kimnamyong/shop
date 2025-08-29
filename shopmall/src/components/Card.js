import { 재고Context } from "../App";
import React, { useContext } from "react";

function Card({ shoes, i }) {
 let 재고 = useContext(재고Context);
 console.log(재고)
 return (
  <div className="col-md-4">
   <a href={"/detail/" + (i)}>
    <img
     src={"shoes" + (i + 1) + ".jpg"}
     width="100%"
    />
   </a>
   <h4>{shoes.title}</h4>
   <p>{shoes.content} & {shoes.price}</p>
    재고 : {재고[i]}

  </div>
 )
}

export default Card;