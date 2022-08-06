import './App.css';
import MoreEffect from "./components/MoreEffect";
import {useState} from "react";
import ThemeModifier from "./components/ThemeModifier";
import DummyView from "./components/DummyView";

//Hooks adalah fitur yang baru ada di React 16.8.
//Fitur ini memungkinkan penggunaan state tanpa membuat class javascript
const App = () => {
    //Gunakan hook di paling atas, sebelum react function yang lainnya (sebelum return)
    // const [dark, setDark] = useState(false);
    // return (
    //     <div style={{backgroundColor: dark ? 'black' : 'white'}}>
    //         <p style={{color: dark ? 'white' : 'black'}}>Color : {dark ? 'black' : 'white'}</p>
    //         <button onClick={() => setDark(!dark)}>
    //             Set Theme {dark ? 'white' : 'black'}
    //         </button>
    //     </div>
    // );
    // Berikut contoh penggunaan sederhana useEffect
    // const [pageId, setPageId] = useState(0);
    // return (
    //     pageId === 0 ? <ThemeModifier onNavigate={() => setPageId(1)}/> : <DummyView onNavigate={() => setPageId(0)}/>
    // );
    return <MoreEffect/>
}

export default App;
