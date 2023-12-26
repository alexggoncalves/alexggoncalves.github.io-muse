import { Suspense, useContext, useEffect, useState, useRef } from "react";
import { ArtContext } from "../../contexts/ArtContext";
import Loading from "./Loading";

const ArtObject = ({ object }) => {
    const captionRef = useRef();
    console.log(object);
    const toggleCaptionVisibility = () => {
        captionRef.current.classList.toggle("hide");
    };

    const parseCaption = (str) => {
        const commaIndex = str.indexOf(",");

        return (
            <>
                <p className="bold">{str.substring(0, commaIndex)}</p>
                <p>{str.substring(commaIndex + 2, str.length)}</p>
            </>
        );
    };

    const moveCaption = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY + window.scrollY;
        if (captionRef.current) {
            captionRef.current.style.left = mouseX + 10 + "px";
            captionRef.current.style.top = mouseY + 18 + "px";
        }
    };

    useEffect(() => {
        document.addEventListener("mousemove", moveCaption);

        return () => {
            document.removeEventListener("mousemove", moveCaption);
        };
    }, []);

    return (
        <>
            
            <a href={object.links.web} target="_blank" rel="noreferrer noopener">
                <img
                    className="art-image"
                    src={object.webImage.url}
                    onMouseEnter={toggleCaptionVisibility}
                    onMouseLeave={toggleCaptionVisibility}
                />
            </a>
            <div ref={captionRef} className="floating-caption hide">
                {parseCaption(object.longTitle)}
            </div>
        </>
    );
};

export default ArtObject;
