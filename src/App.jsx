import "./App.css";
import About from "./components/About";
import ArtList from "./components/ArtList/ArtList";
import SearchControls from "./components/SearchControls/SearchControls";

import { ArtProvider } from "./contexts/ArtContext";

function App() {
    return (
        <ArtProvider>
            <header>
                <span className="logo">MUSE</span>
                <About />
            </header>
            <main>
                <SearchControls></SearchControls>
                <ArtList />
            </main>
        </ArtProvider>
    );
}

export default App;
