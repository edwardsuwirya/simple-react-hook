import {useEffect, useState} from "react";

//useEffect, sebuah built in hook yang memiliki tujuan yang sama dengan
// componentDidMount, componentDidUpdate, and componentWillUnmount
// useEffect selalu dijalankan setiap render,tapi bisa diatur supaya tidak dijalankan setiap render
const ThemeModifier = (props) => {
    const [dark, setDark] = useState(false);

    // Sama dengan componentDidMount and componentDidUpdate:
    useEffect(() => {
        //document.title untuk mengubah text pada tab browser
        document.title = `Theme ${dark ? 'black' : 'white'}`;

        //Effect cleanup
        //1. dipanggil ketika componentWillUnmount,
        //2. effect pertama kali dijalankan, ketika strict mode diaktifkan pada saat development
        //3. proses re-rendering saat deps diisi state value
        return () => {
            console.log('Component will unmount')
        };

        //Mengatur kapan effect dipanggil, gunakan deps untuk melakukan Checking prevState vs currState,
        // 1. ketika tidak diberikan apa", effect akan SELALU DIPANGGIL
        // 2. ketika diberikan array kosong, useEffect hanya dijalankan saat RENDER PERTAMA SAJA
        // 3. ketika diberikan array dengan state value, useEffect dijalankan ketika state berubah
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