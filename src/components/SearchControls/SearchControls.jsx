import "./searchControls.css";

import { ArtContext } from "../../contexts/ArtContext";
import { useContext, useEffect, useRef } from "react";

import DropDown from "./dropDown";
import SortOptions from "./SortOptions";
import searchIcon from "./../../assets/icons8-search-150.png";
import SearchInput from "./SearchInput";

const SearchControls = () => {
    const artContext = useContext(ArtContext);

    const materials = artContext.materials;
    const techniques = artContext.techniques;

    return (
        <div className="options-container">
            <div className="search-controls-container">
                <SearchInput/>
                <div className="dropdowns-container">
                    <DropDown
                        options={materials}
                        title={"material"}
                        setChoice={artContext.setMaterial}
                    />
                    <DropDown
                        options={techniques}
                        title={"technique"}
                        setChoice={artContext.setTechnique}
                    />
                </div>
            </div>
            <SortOptions />
        </div>
    );
};

export default SearchControls;
