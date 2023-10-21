import './App.css';
import Sidebar from './components/compound/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForms from './pages/MyForms/MyForms';
import Support from './pages/Support/Support';
import CreateForm from './pages/CreateForm/CreateForm';
import CreateFormX from './pages/CreateForm/CreateFormX';
import Login from './pages/Auth/Login/Login';
import Signup from './pages/Auth/Signup/Signup';
import SingleForm from './pages/SingleForm/SingleForm';

function App() {
  return (
    <div>
    <p style={{textAlign:'center', position:'absolute', background: '#f07a56', width:'100%', color:'rgb(102, 60, 0)', padding: '6px'}}> Please note that this project is currently under developement!</p>
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
          <Route path="/singleform" element={<SingleForm />}/>



        </Routes>
      </Router>
      </main>
    </div>
    </div>
  );
}

export default App;
