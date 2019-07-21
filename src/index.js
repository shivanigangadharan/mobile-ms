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

Notification.requestPermission(function (result) {
    if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.showNotification('Notification Heading', {
                body: 'Body of notification',
                vibrate: [200, 100, 200, 100, 200],
                image: 'https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

            });
        });
        console.log("Permission granted. ");

    }
    else {
        console.log("Permission not received");
    }
});



