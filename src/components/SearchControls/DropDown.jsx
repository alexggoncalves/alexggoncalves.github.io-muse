import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

import chevron from "../../assets/icons8-chevron-30.png";

import { useContext, useState } from "react";
import { ArtContext } from "../../contexts/ArtContext";

const DropDown = ({ options, title, setChoice }) => {
    const optionsRef = useRef();
    const dropDownRef = useRef();
    const placeHolderRef = useRef();

    // capitalize first letter and remove text inside parentheses
    const parseOptionName = (str) => {
        let output = str.charAt(0).toUpperCase() + str.slice(1);
        const parethesesIndex = output.indexOf("(");

        if (parethesesIndex !== -1) {
            output = output.substring(0, parethesesIndex);
        }

        return output;
    };

    const toggleDropdown = () => {
        optionsRef.current.classList.toggle("hide");
        dropDownRef.current.classList.toggle("dropdown-active");
    };
    const selectOption = (event) => {
        placeHolderRef.current.textContent = event.target.textContent;
        setChoice(event.target.id);
        if(event.target.id == "any") setChoice("");

    };

    return (
        <>
            <div>
                <p className="search-controls-title">{title}</p>
                <div
                    className="dropdown"
                    onClick={toggleDropdown}
                    ref={dropDownRef}
                >
                    <div className="dropdown-placeholder">
                        <p className="placeholder" ref={placeHolderRef}>
                            Any
                        </p>
                        <img className="chevron" src={chevron} alt="chevron" />
                    </div>
                    <div className="options hide" ref={optionsRef}>
                        <div
                            className="option"
                            id={"any"}
                            onClick={(event) => {
                                selectOption(event);
                            }}
                        >
                            Any
                        </div>
                        {options?.map((option) => (
                            <div
                                className="option"
                                key={uuidv4()}
                                id={option.key}
                                onClick={(event) => {
                                    selectOption(event);
                                }}
                            >
                                {parseOptionName(option.key)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropDown;
