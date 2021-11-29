import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment, faPaperPlane, faBookmark } from "@fortawesome/free-regular-svg-icons";

import './Post.css';

const Post = (props) => {
    return <div className='postCard'>
        <div className='postHeader d-flex align-items-center'>
            <div className='headImgCont'>
                <span className='roundBadge me-2 withBorder'>
                    <img src='https://picsum.photos/seed/233/200/300' />
                </span>
                <div className='text_ellipsis'>
                    <a className='fw-600 mb-0'>Venkat</a>
                    <a className='mb-0'>Tirunelveli</a>
                </div>
            </div>
            <a className='actionIcon'><FontAwesomeIcon icon={faEllipsisH} /></a>
        </div>
        <div className='postImgBody'>
            <img className='postImage' src='https://picsum.photos/seed/234/200/400' />
        </div>
        <div className='postContent'>
            <div className='d-flex deskIonCont'>
                <a><span><FontAwesomeIcon icon={faHeart} /></span></a>
                <a><span><FontAwesomeIcon icon={faComment} /></span></a>
                <a><span><FontAwesomeIcon icon={faPaperPlane} /></span></a>
                <a className='ms-auto'><span><FontAwesomeIcon icon={faBookmark} /></span></a>
            </div>
            <div className='deskLikeCont'>
                <a><span>2,621</span> likes</a>
            </div>
            <div className='px-3 text_ellipsis'>
                <p className='descPara text_ellipsis'><a className='fw-600 me-1'>Pullingamemes</a> Library Videos uhm Nalla Thana Irukum</p>
            </div>
        </div>
    </div>
}

export default Post;