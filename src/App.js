import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formheader from './components/Formheader';
import CenteredTabs from './components/Tabs';
import Question_form from './components/Question_form';
import Userform from './components/Userform';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/form/:id" element={<><Formheader/><CenteredTabs/><Question_form/></>}/>
            

          <Route path="/" element={<Header/>}/>
          
          <Route path="/response" element={<Userform/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
