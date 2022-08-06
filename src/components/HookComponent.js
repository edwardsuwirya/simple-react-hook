import {useDispatch, useSelector} from "react-redux";
import {hookSelector} from "../redux/hookSelector";
import {updateHook} from "../redux/hookAction";

export const HookComponent = () => {
    //Ketika ada action yang di-dispatch,useSelector akan melakukan compare prev state dengan current state
    //Apabila berbeda, akan dilakukan re-render
    const num = useSelector(hookSelector);
    const dispatch = useDispatch()
    return (
        <>
            <div>{num}</div>
            <button onClick={() => dispatch(updateHook(`${Number(num) + 1}`))}>Update</button>
        </>
    )
}