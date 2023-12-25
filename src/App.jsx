import "./App.css";
import ArtList from "./components/ArtList";
import Header from "./components/Header";
import SearchControls from "./components/SearchControls/SearchControls";

import { ArtProvider } from "./contexts/ArtContext";

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
