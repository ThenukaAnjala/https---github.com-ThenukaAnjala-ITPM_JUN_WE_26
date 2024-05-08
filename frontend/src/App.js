import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element ={/*user*/<LoginPage/>}
          />

        <Route
          path='/mappage'
          element ={/*user*/<MapPage/>}
          />
        
      </Routes>
    </Router>
  );
}


export default App;
