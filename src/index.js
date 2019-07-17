import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AuthProvider from './auth';

ReactDOM.render(
    <AuthProvider>
        <App />
    </AuthProvider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

// const check = () => {
//     if (!('serviceWorker' in navigator)) {
//         throw new Error('No Service Worker support!')
//     }
//     if (!('PushManager' in window)) {
//         throw new Error('No Push API Support!')
//     }
// }

// check();

// const registerServiceWorker = async () => {
//     const swRegistration = await navigator.serviceWorker.register(
//         'service.js'
//     );
//     return swRegistration;
// }
