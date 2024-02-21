import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Workspace from "./pages/Workspace"
// import Form from './pages/Form';
import Account from './pages/Account';
import Form from './pages/Form';
import FormResponseView from './pages/FormResponseView';
import Responses from './pages/Responses';
import NotFound from './pages/NotFound';
import FormView from './pages/FormView';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Workspace/>} />
      <Route path="/workspace" element={<Workspace/>} />
      <Route path="/form" element={<Form/>} />
      <Route path="/form/response" element={<Responses/>} />
      <Route path="/account" element={<Account/>} />
      <Route path="/response-view" element={<FormResponseView/>} />
      <Route path="/view" element={<FormView/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

      <Route path="*" element={<NotFound/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
