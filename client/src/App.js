import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/authContext';

import GlobalStyle from "./styles/globalStyles";

import Header from './components/header';

import Home from './pages/home';
import SignUp from './pages/auth/signup';
import Login from './pages/auth/login';
import Dashboard from './pages/dashboard/dashboard';


export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth">
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};
