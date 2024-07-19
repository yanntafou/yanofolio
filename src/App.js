import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import LoginPage from './components/auth/LoginPage';
import RegistrationPage from './components/auth/RegistrationPage';
import ConditionalFooter from './components/common/ConditionalFooter';
import ConditionalNavbar from './components/common/ConditionalNavbar';
import ConditionalTopbar from './components/common/ConditionalTopbar';
import HomePage from "./components/HomePage";
import UserService from './components/service/UserService';
import ProfilePage from './components/userspage/ProfilePage';
import UpdateUser from "./components/userspage/UpdateUser";
import UserManagementPage from './components/userspage/UserManagementPage';


function App() {

  return (
    <BrowserRouter>
        
      <div className="container-fluid mx-0 px-0">
        <ConditionalTopbar />   
        <ConditionalNavbar />
          <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Check if user is authenticated and admin before rendering admin-only routes */}
            {UserService.adminOnly() && (
              <>
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/admin/user-management" element={<UserManagementPage />} />
                <Route path="/update-user/:userId" element={<UpdateUser />} />
              </>  
              
            )}
            <Route path="*" element={<Navigate to="/login" />} />‰
          </Routes>


        <ConditionalFooter /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
