import { useContext } from "react";
import { ArtContext } from "../contexts/ArtContext";

const ArtList = () => {
    const artContext = useContext(ArtContext);
    artContext.fetchArtObjects(10);

    return <div>

    </div>;
};

export default ArtList;
