import Header from '../header/header';
import {AuthContext} from '../../context/Auth';
import  {When}  from 'react-if';
import {useContext} from 'react';
function Main() {
    const auth = useContext(AuthContext);

    return (
        <div className="main">
            <When condition={auth.isLoggedIn}>
                <Header />
            </When>
            
        </div>
    );
}

export default Main;