import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCompass, faPlusSquare, faComment } from '@fortawesome/free-regular-svg-icons';
import './header.css'

const Header = () => {
    return <div className='headerCont'>
        <div className='headerSubCont'>
            <img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' className='logoIcon' />
            <div className='searchBoxCont pos-relative'>
                <span className='searchIcon'></span>
                <input type='text' className='searchBox' placeholder='Search'/>
                <span className='closeSearchIcon'></span>
            </div>
            <div>
                <ul className='headUl mb-0'>
                    <li><a href='#'><FontAwesomeIcon icon={faHome} /></a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faComment} /></a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faPlusSquare} /></a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faCompass} /></a></li>
                    <li><a href='#'><FontAwesomeIcon icon={faHeart} /></a></li>
                    <li><a href='#' className='proRoundIcon'><img src='./images/profile.jpg'/></a></li>
                </ul>
            </div>
        </div>
    </div>
}

export default Header;