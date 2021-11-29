import FeedItem from './FeedItem';
import './FeedSlider.css';

const FeedSlider = () => {
    const initialItems = [
        {
            id: 1,
            name: 'Venkat',
            imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: 2,
            name: 'Muthu',
            imageUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
    ]
    return <div className='slideContainer'>
        <ul className='SliderUl mb-0'>
            {initialItems.map(item => {
                return <FeedItem key={item.id} item={item}/>
            })}
        </ul>
    </div>
}

export default FeedSlider;