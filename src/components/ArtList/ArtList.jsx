import "./artList.css";

import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { ArtContext } from "../../contexts/ArtContext";
import Loading from "./Loading";
import ArtObject from "./ArtObject";

import PageNavigator from "./PageNavigator";
import NoResults from "./NoResults";

const ArtList = () => {
    const artContext = useContext(ArtContext);
    artContext.fetchArtObjects(30);
    const resultList = artContext.art;
    const count = artContext.count;
    const loading = artContext.loading;

    return (
        <>{count != 0 ?
            <div className="page-results-container">
                 <PageNavigator /> 
                <div className="results-count"><b>{count}</b> results found!</div>    
            </div> : undefined}

            <div className="art-list">
                {loading ? <Loading /> : undefined}
                {!loading && count == 0 ? <NoResults /> : undefined}
                {resultList?.map((object) => (
                    <ArtObject key={uuidv4()} object={object} />
                ))}
            </div>
            {!loading && count != 0 ? <PageNavigator /> : undefined}
        </>
    );
};

export default ArtList;
