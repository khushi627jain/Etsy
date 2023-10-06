
import './App.css';
import Footer from './Footer/footer';
import Navbar from './Navbar/navbar';

import AllRouter from './Routes/allroute';



function App() {



  return (
    <div className="App">
    <Navbar/>

    <AllRouter/>
    <Footer/>
    </div>
  );
}

export default App;
