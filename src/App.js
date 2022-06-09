import { Routes , Route , BrowserRouter } from 'react-router-dom';
import Artists from "./Pages/Artists";
import LogIn from "./Pages/LogIn";
import Albums from "./Pages/Albums";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LogIn/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/albums/:artistId" element={<Albums/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
