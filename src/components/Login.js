import {useDispatch} from "react-redux";
import {login, logout} from "../features/user";

const Login = () => {
    const dispatch = useDispatch()
    return(
        <div>
            <button onClick={() => {dispatch(login({name: "pedro", age: 27, email: "pedro@gmail.com"}))}} >login</button>
            <button onClick={() => {dispatch(logout())}} >logout</button>
        </div>
    )

}
export default Login