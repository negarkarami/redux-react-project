import {useSelector} from "react-redux";

const Profile = () => {
    const user = useSelector((state) => state.user.value )
    const themeColor = useSelector((state) => state.theme.value )
    return(
        <div style={{color: themeColor}}>
            <h2>profile</h2>
            <div>
                <p>name : {user.name}</p>
                <p>age : {user.age}</p>
                <p>email : {user.email}</p>
                <p>redNegar : {user.redNegar}</p>
            </div>
            <button>logout profile</button>
        </div>
    )

}
export default Profile