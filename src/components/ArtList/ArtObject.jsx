import { useEffect, useRef } from "react";

const ArtObject = ({ object }) => {
    const captionRef = useRef();

    const parseCaption = (str) => {
        const commaIndex = str.indexOf(",");

        return (
            <>
                <p className="bold">{str.substring(0, commaIndex)}</p>
                <p>{str.substring(commaIndex + 2, str.length)}</p>
            </>
        );
    };

    const toggleCaptionVisibility = () => {
        captionRef.current.classList.toggle("hide");
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
        document.addEventListener("wheel", moveCaption);
        return () => {
            document.removeEventListener("mousemove", moveCaption);
            document.removeEventListener("wheel", moveCaption);
        };
    }, []);

    return (
        <div className="art-object">
            <a
                href={object.links.web}
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    className="art-image"
                    src={object.webImage.url}
                    alt={object.title}
                    onMouseEnter={toggleCaptionVisibility}
                    onMouseLeave={toggleCaptionVisibility}
                />
                
            </a>
            <div ref={captionRef} className={`hide floating-caption`}>
                    {parseCaption(object.longTitle)}
            </div>
        </div>
    );
};

export default ArtObject;
