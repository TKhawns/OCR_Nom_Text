import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FontStyle from './pages/ShareComponent/Font/FontStyle';

ReactDOM.render(
    <React.StrictMode>
        <FontStyle>
            <App />
        </FontStyle>
    </React.StrictMode>,
    document.getElementById('root'),
);
