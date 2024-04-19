import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabelImg from './components';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import HomePage from './pages/Home/HomePage/HomePage';
import ImportPage from './pages/Import/Import';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" Component={HomePage}></Route>
                    <Route path="/annotation-tool" Component={LabelImg} />
                    <Route path="/login" Component={Login} />
                    <Route path="/sign-up" Component={SignUp} />
                    <Route path="/import" Component={ImportPage}></Route>
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
