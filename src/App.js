// import logo from './logo.svg';
// import './App.css';

import { Routes , Route, useLocation, useNavigate } from "react-router";
// import { Route } from "router";
import About from "./About";
import Error from "./Error";
import Gallary from "./Gallary";
import Home from "./Home";
import Nav from "./Nav";
import Map from "./Map";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


const App = () =>
{
  const location = useLocation();
  const history = useNavigate();
  // console.log(location);
 
  const loc = location.pathname;



  return(
    <>

       <Map />

     {/* <h1>my current location = {loc}  </h1> */}

      {location.pathname == '/sky' ? <button onClick={ () => history('/gallary')}>niru</button> : null } 
  
    <Nav /> 
    <Routes>
      

   <Route path="/" element={<About />} />
   <Route path="home" element ={<Home /> } /> 
   <Route path="gallary" element = {<Gallary />} />      
    <Route path="*"  element={<Error />} />
     </Routes>
      {/* <About />
      <Gallary />
      <Home /> */}

      <button onClick={ () => history(-1)}>Previous</button>

      <button onClick={ () => history(1)}>next</button>

    </> 
  )
}

export default App;






















