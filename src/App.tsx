import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Workspace from "./pages/Workspace"
import Form from './pages/Form';
import Account from './pages/Account';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Workspace/>} />
      <Route path="/workspace" element={<Workspace/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/account" element={<Account/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
