import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchControls from "./components/SearchControls/SearchControls";

const ArtList = lazy(() => import("./components/ArtList/ArtList"));

import { ArtProvider } from "./contexts/ArtContext";
import Loading from "./components/ArtList/Loading";

function App() {
    return (
        <ArtProvider>
            <Header />
            <main>
                <span className="logo">MUSE</span>
                <SearchControls></SearchControls>
                <Suspense fallback={<Loading />}>
                    <ArtList />
                </Suspense>
            </main>
        </ArtProvider>
    );
}

export default App;
