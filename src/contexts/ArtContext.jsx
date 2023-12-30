import { createContext, useEffect, useState } from "react";

const initialValue = null;
// const API_KEY = "QZkKctkz";

const API_KEY = import.meta.env.VITE_API_KEY;

console.log(API_KEY)

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
    const [count, setCount] = useState();
    const [amountPerPage, setAmountPerPage] = useState();

    const fetchArtObjects = (amount) => {
        const endPoint = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&imgonly=true&p=${page}&ps=${amount}&material=${material}&technique=${technique}&s=${order}&q=${searchInput}`;
        useEffect(() => {
            setArt([]);
            setLoading(true);
            fetch(endPoint)
                .then((res) => res.json())
                .then((json) => {
                    setArt(json.artObjects);
                    setCount(json.count);
                    setAmountPerPage(amount);
                    if (materials.length == 0)
                        setMaterials(json.facets[4].facets);
                    if (techniques.length == 0)
                        setTechniques(json.facets[5].facets);
                    setLoading(false);
                    return true;
                });
        }, [order, page, material, technique, searchInput]);
    };

    const nextPage = () => {
        setPage(page + 1);
        scrollTo(0, 0);
    };

    const previousPage = () => {
        setPage(page - 1);
        scrollTo(0, 0);
    };

    useEffect(() => {
        setPage(1);
    }, [order, material, technique, searchInput]);

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
                page,
                loading,
                nextPage,
                previousPage,
                count,
                amountPerPage,
            }}
        >
            {children}
        </ArtContext.Provider>
    );
}
