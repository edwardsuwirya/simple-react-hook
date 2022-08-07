import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {setupStore} from "./store";
import MoreEffectService from "./services/moreEffectService";
import {DepsProvider} from "./context/depContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore();
root.render(
    <Provider store={store}>
        <DepsProvider services={{
            moreEffectService: MoreEffectService()
        }}>
            <App/>
        </DepsProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
