import "./searchControls.css";
import { v4 as uuidv4 } from "uuid";

import { ArtContext } from "../../contexts/ArtContext";
import { useContext, useEffect } from "react";
import DropDown from "./dropDown";

const SearchControls = () => {
    const artContext = useContext(ArtContext);

    const materials = artContext.materials;
    const techniques = artContext.techniques;

    const capitalizeFirstLetter = (str) => {
        const output = str.charAt(0).toUpperCase() + str.slice(1);
        return output;
    };

    return (
        <div className="search-controls-container">
            <div>
                <p className="search-controls-title">search</p>
                <input className="search-control" placeholder="..."></input>
            </div>
            <DropDown options={materials} title={'material'} setChoice={artContext.setMaterial}/>
            <DropDown options={techniques} title={'technique'} setChoice={artContext.setTechnique}/>
            <div>
                <p className="search-controls-title">order</p>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default SearchControls;
