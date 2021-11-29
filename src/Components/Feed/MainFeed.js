import { Fragment } from "react";
import FeedSlider from "./FeedSlider/FeedSlider";
import FeedContent from "./FeedContent/FeedContent";

const MainFeed = () => {
    return <Fragment>
        <FeedSlider />
        <FeedContent />
    </Fragment>
}

export default MainFeed;