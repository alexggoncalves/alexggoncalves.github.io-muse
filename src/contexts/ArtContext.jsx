import { createContext, useEffect, useState } from "react";

// import categories from "../components/shared/categories.json";

const initialValue = null;
const API_KEY = "QZkKctkz"

export const ArtContext = createContext(initialValue);

export function ArtProvider({ children }) {
  const [art, setArt] = useState([]);
  const [order, setOrder] = useState('artist')
  const [materials, setMaterials] = useState([])
  const [techniques, setTechniques] = useState([])
  const [material, setMaterial] = useState("")
  const [technique, setTechnique] = useState("")

  const fetchArtObjects = (amount) => {
    const endPoint = `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&material=paper`
    useEffect(() => {
      fetch(endPoint)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setArt(json);
            setMaterials(json.facets[4].facets)
            setTechniques(json.facets[5].facets)
        });
    }, [order]);
  };

  return (
    <ArtContext.Provider
      value={{
        art,
        fetchArtObjects,
        setOrder,
        materials,
        techniques,
        setMaterial,
        setTechnique
      }}
    >
      {children}
    </ArtContext.Provider>
  );
}