import Header from '../header/header';
import {AuthContext} from '../../context/Auth';
import  {When}  from 'react-if';
import {useContext} from 'react';
import Admin from '../admin/Admin'
function Main() {
    const auth = useContext(AuthContext);

    return (
        <div className="main">
            <When condition={auth.isLoggedIn}>
                <Header />
                <Admin/>
            </When>
            
        </div>
    );
}

export default Main;