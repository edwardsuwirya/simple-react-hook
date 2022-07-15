import './App.css';
import {useState} from "react";

//Hooks adalah fitur yang baru ada di React 16.8.
//Fitur ini memungkinkan penggunaan state tanpa membuat class javascript
const App = () => {
    const [dark, setDark] = useState(false);
    return (
        <div style={{backgroundColor: dark ? 'black' : 'white'}}>
            <p style={{color: dark ? 'white' : 'black'}}>Color : {dark ? 'black' : 'white'}</p>
            <button onClick={() => setDark(!dark)}>
                Set Theme {dark ? 'white' : 'black'}
            </button>
        </div>
    );
}

export default App;
