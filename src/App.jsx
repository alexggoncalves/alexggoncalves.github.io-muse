import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import ArtList from "./components/ArtList/ArtList";
import SearchControls from "./components/SearchControls/SearchControls";

import { ArtProvider } from "./contexts/ArtContext";
import Loading from "./components/ArtList/Loading";

function App() {
    return (
        <ArtProvider>
            <Header />
            <main>
                <span className="logo">MUSE</span>
                <SearchControls></SearchControls>

                <ArtList />
            </main>
        </ArtProvider>
    );
}

export default App;
