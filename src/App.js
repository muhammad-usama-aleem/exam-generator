import Navbar from './components/Navbar/Navbar';
import MainPage from './pages/MainPage/MainPage'; 
import Finalize from './pages/Finalize/Finalize.jsx';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
   <Router>
    <Switch>
     <Route exact  path='/'> <Navbar /> <MainPage/> </Route>
     <Route exact path='/finalize'><Finalize/> </Route>
    </Switch>
   </Router>
  );
}

export default App;
