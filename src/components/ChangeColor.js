import {useState} from "react";
import {useDispatch} from "react-redux";
import {logout} from "../features/user";
import {changeColor} from "../features/theme";


const ChangeColor = () => {
    const dispatch = useDispatch()

    const [color, setColor] = useState("")
    return(
        <>
            <input type={"text"} onChange={(e) => setColor(e.target.value) }/>
            <button onClick={() => {dispatch(changeColor(color))}}>ChangeColor</button>
        </>
    )

}

export default ChangeColor