import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import React, { useContext } from 'react';
import { AuthContext } from '../../auth';
import { async } from "q";

import { ApolloClient } from 'apollo-client';

const getMainDefinition = require("apollo-utilities");
const HttpLink = require("apollo-link-http");
const split = require("apollo-link");
// const ApolloClient = require("apollo-client");
const InMemoryCache = require("apollo-cache-inmemory");
require("cross-fetch/polyfill");
require("ws");
let user;

//Configuration of delhi mohalla sabha firebase
var firebaseConfig = {
    apiKey: "AIzaSyCsz4SfnH26uuVFUmglnIULtptcwXbv1tM",
    authDomain: "delhims-c4d96.firebaseapp.com",
    databaseURL: "https://delhims-c4d96.firebaseio.com",
    projectId: "delhims-c4d96",
    storageBucket: "delhims-c4d96.appspot.com",
    messagingSenderId: "338239768419",
    appId: "1:338239768419:web:e98daf739d35996b"
};
firebase.initializeApp(firebaseConfig);

var tx;

//Loads Content if status != loading
export const signout = async () => {
    try {
        // authstate.status = "loading";
        await firebase.auth().signOut();
        console.log("signed out");
    } catch (error) {
        console.log(error);
    }
};

const setEmailOfCurrentUser = async (m) => {
    var user = firebase.auth().currentUser;
    await user.updateEmail(m);
};


async function createNewUserWithSignUp(email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.log(error);
    }
};


export async function existingUserSignIN(email, password) {
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("user: ", userCredential);
        await getTokenID(userCredential);
        return ("loggedin");
    }
    catch (error) {
        console.log(error);
    }
}

export function testlogin() {
    var user1 = firebase.auth().currentUser;
    console.log("var user = ", user1);
    return user1;
}

export async function getTokenID(userCredential) {

    const tokenx = await userCredential.user.getIdToken();
    const idTokenResult = await userCredential.user.getIdTokenResult();
    const hasuraClaim = idTokenResult.claims["https://hasura.io/jwt/claims"];
    if (hasuraClaim) {
        tx = tokenx;
    } else {
        //refresh reqd or not check
        const metadataRef = firebase.database().ref("metadata/" + userCredential.uid + "/refreshTime");
        metadataRef.on("value", async () => {
            const token = await userCredential.getIdToken(true);
        });
    }

    console.log("JWT = ", tx);

};


