import "./artList.css";

import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ArtContext } from "../../contexts/ArtContext";
import Loading from "./Loading";
import ArtObject from "./ArtObject";

import arrowRight from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRightDisabled from "../../assets/arrow-right-disabled.png";
import arrowLeftDisabled from "../../assets/arrow-left-disabled.png";

const ArtList = () => {
    const artContext = useContext(ArtContext);
    const currentPage = artContext.page;

    artContext.fetchArtObjects();

    const resultList = artContext.art;

    const nextPage = () => {
        artContext.setPage(artContext.page++);
    };

    const previousPage = () => {
        artContext.setPage(artContext.page--);
    };

    return (
        <>
            <div className="page-navigator">
               
                <span className="current-page">page {artContext.page}</span>
                {currentPage == 1 ? (
                    <img src={arrowLeftDisabled}  className="page-arrow disabled"/>
                ) : (
                    <img src={arrowLeft} onClick={previousPage}  className="page-arrow"/>
                )}
                <img src={arrowRight} onClick={nextPage}  className="page-arrow"/>
            </div>
            <div className="art-list">
                {artContext.loading ? <Loading /> : undefined}
                {resultList?.map((object) => (
                    <ArtObject key={uuidv4()} object={object} />
                ))}
            </div>
        </>
    );
};

export default ArtList;
