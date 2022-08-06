import {useEffect, useState} from "react";
import MoreEffectService from "../services/moreEffectService";

const MoreEffect = () => {
    const {doPrint} = MoreEffectService();
    // Cara yang SALAH, result tidak akan tercetak di browser, diperlukan perubahan state
    let result = 'empty';
    useEffect(() => {
        result = doPrint('1')
        console.log(result)
    });
    return (
        <>
            <h1>Print:{result}</h1>
        </>
    )

    // Hati", Backend akan di-flooding dengan request
    // Karena useEffect == componentDidMount & ComponentDidUpdate,
    // const [result, setResult] = useState('');
    // useEffect(() => {
    //     setResult(doPrint('1'))
    //     console.log('1');
    // });

    // Cara yang banyak digunakan
    // const [result, setResult] = useState();
    // useEffect(() => {
    //     setResult(doPrint('1'));
    //     console.log('1');
    // }, []);
    //
    // return (
    //     <>
    //         <h1>Print:{result}</h1>;
    //     </>
    // )

    // useEffect akan dipanggil lagi ketika ada perubahan id
    // const [result, setResult] = useState('');
    // const [id, setId] = useState('');
    // useEffect(() => {
    //     setResult(doPrint(id));
    //     console.log('1');
    // }, [id]);
    //
    // return (
    //     <>
    //         <button onClick={() => setId('12')}>Click</button>
    //         <h1>Print:{result}</h1>;
    //     </>
    // )
}
export default MoreEffect;
