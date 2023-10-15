import './App.css';
import Sidebar from './components/compound/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForms from './pages/MyForms/MyForms';
import Support from './pages/Support/Support';


function App() {
  return (
    <div className="App">
     <Sidebar/>
      <main className='content'>
      <Router>
        <Routes>
          <Route path="/myforms" element={<MyForms />}/>
          <Route path="/helpandsupport" element={<Support />}/>
        </Routes>
      </Router>
      </main>
    </div>
  );
}

export default App;
