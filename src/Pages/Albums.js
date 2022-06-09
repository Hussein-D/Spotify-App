import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Album from '../Components/Album';
import { FaArrowLeft } from "react-icons/fa";
const Albums = () => {
    const[albums , setAlbums] = useState([]);
    let token = localStorage.getItem("token");
    const params = useParams();
    const id = params.artistId;
    const artistAlbums = async (id)=>{
        const res = await fetch(`https://api.spotify.com/v1/artists/${id}/albums?limit=10&offset=5&market=ES`,{
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + token 
            }
        });
        const data = await res.json();
        setAlbums(data.items);
        return data;
    }
    useEffect(()=>{
        artistAlbums(id)
    },[])
    return (
    <section className='albums'>
        <FaArrowLeft style={{marginLeft : "1rem" , cursor : "pointer"}} onClick={
            ()=>{
                window.location.href=`/artists/`
            }
        }/>
        <h1 className='title'>Albums</h1>
        <div className='container'>
            {
                albums.length>0 ?
                albums.map((album)=>{
                    return(<Album key={album.id} id={album.id} name={album.name} artistName={album.artists} tracks={album.total_tracks} date={album.release_date} images={album.images}/>)
                }) :
                <div>No Albums Yet</div>
            }
        </div>
    </section>
)
}

export default Albums