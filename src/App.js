import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabelImg from './components';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" Component={LabelImg} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
