import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginReg from './component/Pages/LoginReg';
import Polls from './component/Pages/auth/Polls';
import AdminDashbord from './component/Pages/auth/AdminDashbord';
import Layout from './component/Pages/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="login" element={<LoginReg />} />
            <Route path="polls" element={<Polls />} />
            <Route path="AdminDashbord" element={<AdminDashbord />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;