import React from "react";

export const Tile = (props) => {
  const tile=props.tile
  const tileArray=Object.values(tile)

  



  return (
    <div className="tile-container">
     
     {
      tileArray.map(value=>{
        if (tileArray[0]===value){
          return (<p className="tile-title" key={value}>{value}</p>)
        }
        return (<p className="tile" key={value}>{value}</p>)
      })
     } 
    </div>
  );
};
