import {useEffect, useState} from "react";

//useEffect, sebuah built in hook yang memiliki tujuan yang sama dengan
// componentDidMount, componentDidUpdate, and componentWillUnmount
const ThemeModifier = (props) => {
    const [dark, setDark] = useState(false);

    // Sama dengan componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You current theme ${dark ? 'white' : 'black'} times`;

        //dipanggil ketika componentWillUnmount, effect pertama kali dijalankan dan proses re-rendering
        return () => {
            console.log('Component will unmount')
        };
    });
    return (
        <div style={{backgroundColor: dark ? 'black' : 'white'}}>
            <p style={{color: dark ? 'white' : 'black'}}>Color : {dark ? 'black' : 'white'}</p>
            <button onClick={() => setDark(!dark)}>
                Set Theme {dark ? 'white' : 'black'}
            </button>
            <button onClick={props.onNavigate}>Go to dummy</button>
        </div>
    );
}

export default ThemeModifier;
