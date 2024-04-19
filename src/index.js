import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FontStyle from './pages/ShareComponent/Font/FontStyle';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './redux';

let persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <FontStyle>
                    <App />
                </FontStyle>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
