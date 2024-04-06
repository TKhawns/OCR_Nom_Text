import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftTool from './components/Annotation/leftTool';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" Component={LeftTool} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
