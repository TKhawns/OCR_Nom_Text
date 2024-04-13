import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabelImg from './components';
import Login from './pages/Login/Login';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" Component={LabelImg} />
                    <Route path="/login" Component={Login} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
