import './App.css';
import ThemeModifier from "./ThemeModifier";
import DummyView from "./DummyView";
import {useState} from "react";

//Hooks adalah fitur yang baru ada di React 16.8.
//Fitur ini memungkinkan penggunaan state tanpa membuat class javascript
const App = () => {
    const [pageId, setPageId] = useState(0);
    return (
        pageId === 0 ? <ThemeModifier onNavigate={() => setPageId(1)}/> : <DummyView onNavigate={() => setPageId(0)}/>
    );
}

export default App;
