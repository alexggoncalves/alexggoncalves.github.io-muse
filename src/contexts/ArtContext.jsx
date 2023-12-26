import { createContext, useEffect, useState } from "react";

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
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const fetchArtObjects = async () => {
        const endPoint = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&imgonly=true&p=${page}&ps=30&material=${material}&technique=${technique}&s=${order}&q=${searchInput}`;
        useEffect(() => {
            setArt([])
            setLoading(true);
            fetch(endPoint)
                .then((res) => res.json())
                .then((json) => {
                    setArt(json.artObjects);
                    // console.log(json)
                    if (materials.length == 0)
                        setMaterials(json.facets[4].facets);
                    if (techniques.length == 0)
                        setTechniques(json.facets[5].facets);
                    setLoading(false)
                });
        }, [order, page, material, technique,searchInput]);
    };

    useEffect(()=>{
        setPage(1)
    },[order, material, technique,searchInput])

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
                setPage,
                page,
                loading
            }}
        >
            {children}
        </ArtContext.Provider>
    );
}
