import { Fragment } from "react";

const FeedItem = (props) => {
    return <Fragment>
        <li>
            <div className='sliderLiCont'>
                <div className='slideImgCont'>
                    <img src={props.item.imageUrl} />
                </div>
                <p className='sliderText mb-0'>{props.item.name}</p>
            </div>
        </li>
    </Fragment>;
} 

export default FeedItem;