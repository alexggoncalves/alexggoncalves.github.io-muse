import { useRef } from "react";

const About = () => {
    const textRef = useRef();

    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    };

    const toggleAboutVisibility = () => {
        if (textRef.current && !isMobile())
            textRef.current.classList.toggle("hide");
    };

    const toggleAboutVisibilityMobile = () => {
        if (textRef.current && isMobile()) textRef.current.classList.toggle("hide");
    };

    return (
        <div
            className="about"
            onMouseEnter={toggleAboutVisibility}
            onMouseLeave={toggleAboutVisibility}
            
        >
            <span onClick={toggleAboutVisibilityMobile}>?</span >
            <div className="about-text hide" ref={textRef}>
                <p>
                    Muse serves as a comprehensive search platform for exploring
                    the vast collection of art objects housed in Rijksmuseum in
                    Amsterdam.
                </p>
                <p>
                    Click on the images to navigate to each object's dedicated
                    page and delve deeper into their individual stories and
                    details.
                </p>
                <span
                    className="about-exit"
                    onClick={toggleAboutVisibilityMobile}
                >
                    Ok
                </span>
            </div>
        </div>
    );
};

export default About;
