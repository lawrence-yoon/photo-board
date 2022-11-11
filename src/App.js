import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import PhotocardArea from './components/PhotocardArea';

//i need to fix a bunch of stuff...
//going to set a media query for widths
//need to fix burger navbar
//need to fix header image, with fill?
//basic layout done, brought in images form the image list.
function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <PhotocardArea/>
    </div>
  );
}

export default App;
