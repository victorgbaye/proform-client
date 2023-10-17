import './App.css';
import Sidebar from './components/compound/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForms from './pages/MyForms/MyForms';
import Support from './pages/Support/Support';
import CreateForm from './pages/CreateForm/CreateForm';
import CreateFormX from './pages/CreateForm/CreateFormX';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';


function App() {
  return (
    <div className="App">
     <Sidebar/>
      <main className='content'>
      <Router>
        <Routes>
          <Route path="/myforms" element={<MyForms />}/>
          <Route path="/helpandsupport" element={<Support />}/>
          <Route path="/createform" element={<CreateForm />}/>
          <Route path="/sample" element={<CreateFormX />}/>
          <Route path="/sample" element={<CreateFormX />}/>  
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>



        </Routes>
      </Router>
      </main>
    </div>
  );
}

export default App;
