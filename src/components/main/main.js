import Header from '../header/header';
import { AuthContext } from '../../context/Auth';
import { When } from 'react-if';
import { useContext } from 'react';
import Admin from '../admin/Admin'
import Student from '../student/Student';
import Teacher from '../teacher/Teacher';
import './main.scss';
function Main() {
    const auth = useContext(AuthContext);

    return (
        <div className="main">
            <When condition={auth.isLoggedIn}>
                <Header />
                <div className="main-content">
                <When condition={auth.user.role === 'admin'}>
                    <Admin />
                </When>
                <When condition={auth.user.role === 'student'}>
                    <Student />
                </When>
                <When condition={auth.user.role === 'teacher'}>
                    <Teacher />
                </When>
                </div>
            </When>

        </div>
    );
}

export default Main;