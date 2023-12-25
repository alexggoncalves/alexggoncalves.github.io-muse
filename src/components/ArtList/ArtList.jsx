import "./artList.css";

import { v4 as uuidv4 } from "uuid";

import { Suspense, useContext, useState } from "react";
import { ArtContext } from "../../contexts/ArtContext";
import Loading from "./Loading";

const ArtList = () => {
    const [page, setPage] = useState(1);
    const artContext = useContext(ArtContext);
    artContext.fetchArtObjects();

    const resultList = artContext.art;

    return (
        <div className="art-list">
            {resultList?.map((object) => (
                <img
                    className="art-image"
                    key={uuidv4()}
                    src={object.webImage.url}
                ></img>
            ))}
        </div>
    );
};

export default ArtList;
