import "./App.css";
import ArtList from "./components/ArtList/ArtList";
import SearchControls from "./components/SearchControls/SearchControls";

import { ArtProvider } from "./contexts/ArtContext";

function App() {
    return (
        <ArtProvider>
            <main>
                <header>
                    <span className="logo">MUSE</span>
                    <SearchControls></SearchControls>
                </header>

                <ArtList />
            </main>
        </ArtProvider>
    );
}

export default App;
