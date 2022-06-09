import { FaStar } from 'react-icons/fa';

const Artist = ({ id , name , followers , popularity , images }) => {
    let urls = []
    for(var i = 0 ; i<images.length ; i++){
        urls.push(images[i].url)
    }
    let rating = Math.floor(popularity/20);
    let ratingArray = [];
    for(var i = 0 ; i<rating ; i++){
        ratingArray.push(i);
    }
    return (
    <div className='artist' onClick={
        ()=>{
            window.location.href = `/albums/${id}`
        }
    }>
        <div className='artist-image'>
            <img src={urls[0]} />
        </div>
        <div className='artist-info'>
            <h2>{name}</h2>
            <h4>{ followers } followers</h4>
        </div>
        <div className='artist-rating'>
            {
                ratingArray.length>0?
                ratingArray.map((index)=>{
                    return(<span key={index}><FaStar/></span>)
                }):
                <span>No Rating Yet</span>
            }
        </div>
    </div>
)
}

export default Artist