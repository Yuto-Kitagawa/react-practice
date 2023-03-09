import React from 'react';
import { Link } from 'react-router-dom';


const TopPage = () => {

    const [loginState, setLoginState] = React.useState(false);

    const getLoginState = () => {
        return (localStorage.getItem('isAuth') ? true : false);
    }

    console.log(getLoginState());

    return (
        <Link to={'/login'}>ログインページに移動</Link>
    )
}

export default TopPage;