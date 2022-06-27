import {Link} from 'react-router-dom'
import './nav.scss'
export default function Navbar(props) {
    return (
        <div className='navBar'>
            <nav className='navs'>
                <ul className='ul'>
                <Link to={`content-class/${props.id}`}><li><a className='a' href="/">Content</a></li></Link>
                <Link to={`announcement-class/${props.id}`}><li><a className='a' href="/">Announcements</a></li></Link>
                <Link to={`classList/${props.id}`}><li><a className='a' href="/">ClassList</a></li></Link>
                <Link to={`classTool/${props.id}`}><li><a className='a' href="/">ClassTool</a></li></Link>
                </ul>
            </nav>
        </div>
    )
}