import { createContext, useEffect, useState } from "react";

// import categories from "../components/shared/categories.json";

const initialValue = null;
const API_KEY = "QZkKctkz";

export const ArtContext = createContext(initialValue);

export function ArtProvider({ children }) {
    const [art, setArt] = useState([]);
    const [order, setOrder] = useState("");
    const [materials, setMaterials] = useState([]);
    const [techniques, setTechniques] = useState([]);
    const [material, setMaterial] = useState("");
    const [technique, setTechnique] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState("");

    const fetchArtObjects = async () => {
        const endPoint = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&imgonly=true&p=${page}&ps=15&material=${material}&technique=${technique}&s=${order}&q=${searchInput}`;
        useEffect(() => {
           fetch(endPoint)
                .then((res) => res.json())
                .then((json) => {
                    setArt(json.artObjects);
                    if (materials.length == 0)
                        setMaterials(json.facets[4].facets);
                    if (techniques.length == 0)
                        setTechniques(json.facets[5].facets);
                });
        }, [order, page, material, technique]);
    };

    return (
        <ArtContext.Provider
            value={{
                art,
                fetchArtObjects,
                setOrder,
                order,
                materials,
                techniques,
                setMaterial,
                setTechnique,
                setSearchInput,
            }}
        >
            {children}
        </ArtContext.Provider>
    );
}
