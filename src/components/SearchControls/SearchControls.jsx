import "./searchControls.css";

import { ArtContext } from "../../contexts/ArtContext";
import { useContext} from "react";

import DropDown from "./dropDown";
import SortOptions from "./SortOptions";

const SearchControls = () => {
    const artContext = useContext(ArtContext);

    const materials = artContext.materials;
    const techniques = artContext.techniques;

    return (
        <div className="options-container">
            <div className="search-controls-container">
                <div>
                    <p className="search-controls-title">search</p>
                    <input className="search-bar" placeholder="..."></input>
                </div>
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
            <SortOptions/>
        </div>
    );
};

export default SearchControls;
