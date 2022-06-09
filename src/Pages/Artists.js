import { useState } from 'react';
import Artist from '../Components/Artist';
const Artists = () => {
    const [search, setSearch] = useState("");
    const [myArtists, setMyArtists] = useState([]);
    const url = window.location.hash.toString();
    let token = url.substring(14, url.length);
    localStorage.setItem("token", token);
    const seacrchArtist = async (artist) => {
        const res = await fetch(`https://api.spotify.com/v1/search?query=${artist}&type=artist&limit=10&offset=5&market=ES`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + token
            }
        });
        const data = await res.json();
        setMyArtists(data.artists.items);
        return data.artists.items;
    }
    return (
        <section className='artists'>
            <h1 className='title'>Artists</h1>
            <form>
                <input placeholder='Search for an artist...' onChange={
                    (e) => {
                        setSearch(e.target.value);
                    }
                } />
                <button className='btn' onClick={
                    async (e) => {
                        e.preventDefault();
                        await seacrchArtist(search);
                    }
                }>Search</button>
            </form>
            <div className='container'>
                {
                    myArtists.length > 0 ?
                        myArtists.map((artist) => {
                            return (<Artist key={artist.id} id={artist.id} followers={artist.followers.total} name={artist.name} popularity={artist.popularity} images={artist.images} />)
                        }) :
                        <div>No Matches Found</div>
                }
            </div>
        </section>
    )
}

export default Artists