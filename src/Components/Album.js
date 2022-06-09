const Album = ({ name , artistName , date , tracks , images , id }) => {
    let urls = [];
    for(var i = 0 ; i<images.length ; i++){
        urls.push(images[i].url)
    }
    return (
    <div className='album'> 
        <div className='album-image'>
            <img src={urls[0]}/>
        </div>
        <div className='album-info' style={{maxHeight : "15%"}}>
            <h3>{name}</h3>
        </div>
        <div className='album-info'>
            {
                artistName.map((artist)=>{
                    return(<h4 key={artist.id}>{artist.name} , </h4>)
                })
            }
        </div>
        <div className='album-info'>
            <h4>{date}</h4>
            <h4>, {tracks} tracks</h4>
        </div>
        <div className='album-footer' onClick={
            ()=>{
                window.open(`https://open.spotify.com/album/${id}`)
            }
        }>
            Preview on Spotify
        </div>
    </div>
)
}

export default Album