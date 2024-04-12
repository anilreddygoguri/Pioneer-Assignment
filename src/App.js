import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import NotFound from './components/NotFound'
import Assets from './components/Assets'
import History from './components/History'
import Organisation from './components/Organisation'
import Trade from './components/Trade'


import './App.css';


const App=()=>{
  return(
    <BrowserRouter>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
     <Route path="/organization" element={<Organisation/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/trade" element={<Trade/>}/>
      <Route path="/assets" element={<Assets/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default App;
