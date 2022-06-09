import { FaSpotify } from 'react-icons/fa';
const LogIn = () => {
    const client_id = "b9493a39cee146f4a6680ca7c248e730";
    const redirect_uri = "http://localhost:3000/artists";
    const scopes = 'user-read-private user-read-email';
    const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=`+encodeURIComponent(client_id)+"&scope="+encodeURIComponent(scopes)+"&redirect_uri="+ encodeURIComponent(redirect_uri);
    return (
    <button className='btn log-in-btn' onClick={
        ()=>{
            window.location = url;
        }
    }>Log In To <FaSpotify/> </button>
)
}

export default LogIn