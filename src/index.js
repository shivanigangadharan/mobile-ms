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
//         throw new Error('No Service Worker support.')
//     }
//     if (!('PushManager' in window)) {
//         throw new Error('No Push API Support.')
//     }
// }
// const registerServiceWorker = async () => {
//     const obj = await navigator.serviceWorker.register('service.js'); //notice the file name
//     return obj;
// }
// const main = async () => { //notice I changed main to async function so that I can use await for registerServiceWorker
//     check();
//     const obj = await registerServiceWorker();
//     const permission =  await requestNotificationPermission();
// }
// main();

// const requestNotificationPermission = async () => {
//     const permission = await window.Notification.requestPermission();
//     if(permission !== 'granted'){
//         throw new Error('Permission not granted for Notification');
//     }
// }
// console.log(Notification.permission);

// navigator.serviceWorker.register('serviceWorker.js');
Notification.requestPermission(function (result) {
    if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification('Vibration Sample', {
                body: 'HeLLO WORLD',
                vibrate: [200, 100, 200, 100, 200, 100, 200],
                tag: 'vibration-sample'
            });
        });
        console.log("Permission granted. ");

    }
    else {
        console.log("Permission not received");
    }
});
const mynote = new Notification("Hello world", {
    body: 'Body of notif',
    image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
});

