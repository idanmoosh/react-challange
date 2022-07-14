import React from "react";
import { Tile } from '../tile/Tile';



export const TileList = (props) => {
  const tileList=props.tileList

  return (
    <div>
      {props.tileList.map(tile=>
        <Tile key={tile} tile={tile}/>
      )}

    </div>
  );
};
