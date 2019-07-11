import firebase from 'firebase';
import React, { useContext } from 'react';
import { AuthContext } from '../../auth';

const gql = require("graphql-tag"); //App
const getMainDefinition = require("apollo-utilities");
const HttpLink = require("apollo-link-http");
const split = require("apollo-link");
const ApolloClient = require("apollo-client");
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

//Object which stores user object and its details
const authstate = {
    status: "loading",
    userObj: {},
    token: ""
};

//Token extractor
var tx;
//Put query here
var ourQuery = ``;
const PL_SUB = gql + ourQuery;

//Function to Set Authstate
const setAuthState = ({ status, user, token }) => {
    authstate.status = status;
    authstate.userObj = user;
    authstate.token = token;
};

//On detection of state change sets status and claims
var useEffect = useEffectFunction;

//FETCH THEM FROM USER FRONT END
const email = "";
const password = "";

//Loads Content if status != loading
loadContentOnStatusIn();
firebase.auth().signOut();
const signout = async () => {
    try {
        authstate.status = "loading";
        await firebase.auth().signOut();
        console.log("signed out");
    } catch (error) {
        console.log(error);
    }
};
const name = "";
const emailVerified = "";
const CurrentUserExtract = async () => {
    if (user) {
        if (user != null) {
            name = user.displayName;
            email = user.email;
            emailVerified = user.emailVerified;
        }
    } else {
        console.log("No user Signed In");
    }
};

const SetEmailOfCurrentUser = async () => {
    var user = firebase.auth().currentUser;
    await user
        .updateEmail("wufwevugw@qifq.com")
        .then(() => {
            console.log("email update successful");
        })
        .catch(() => {
            console.log("error is setting email");
        });
};

var content = "";

function loadContentOnStatusIn() {
    if (authstate.status === "loading") {
        content = null;
    } else {
        console.log("Load Content");
    }
}
function createNewUserWithSignUp() {
    return async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        }
    };
}

export var finallog = "";

async function existingUserSignIN(email, password) {
    try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log("user: ", user.operationType);
        return user;
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
// function signout() {
//     return async () => {
//         try {
//             authstate.status = "loading";
//             await firebase.auth().signOut();
//             console.log("signed out");
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

function useEffectFunction() {
    const token = "";
    return () => {
        firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                const tokenx = await user.getIdToken();
                const idTokenResult = await user.getIdTokenResult();
                const hasuraClaim =
                    idTokenResult.claims["https://hasura.io/jwt/claims"];
                if (hasuraClaim) {
                    token = user.token;
                    tx = tokenx;
                    setAuthState({
                        status: "in",
                        user,
                        token
                    });
                    authstate.status = "in";
                    setInterval(() => {
                        App({ authstate }, tx);
                    }, 10000);
                } else {
                    token = user.token;
                    const metadataRef = firebase
                        .database()
                        .ref("metadata/" + user.uid + "/refreshTime");
                    metadataRef.on("value", async () => {
                        const token = await user.getIdToken(true);
                        await setAuthState({
                            status: "in",
                            user,
                            token
                        });
                    });
                }
            } else {
                setAuthState({
                    status: "out"
                });
            }
        });
    };
}

//App function stores all function for hasura connections - All functions are made inline
function App({ authstate }, toker) {
    console.log(authstate);
    const isIn = authstate.status === "in";
    console.log(authstate.status);
    console.log("inside app of ./app");
    const headers = isIn
        ? { Authorization: `Bearer ${toker}` }
        : {
            /*"x-hasura-admin-secret": "msdelhi123" */
        };
    console.log(isIn);
    console.log(headers);
    const httpLink = new HttpLink.HttpLink({
        uri: "https://delhimohallasabha.herokuapp.com/v1/graphql",
        headers
    });
    const link = createNewLink();
    const client = newApolloClient();
    return console.log("Returned");
    function newApolloClient() {
        return new ApolloClient.ApolloClient({
            link,
            cache: new InMemoryCache.InMemoryCache()
        });
    }
    function createNewLink() {
        return split.split(
            ({ query }) => {
                const { kind, operation } = getMainDefinition(query);
                return kind === "OperationDefinition" && operation === "subscription";
            },
            httpLink,
            httpLink
        );
    }
}

//Sign Up
export const signUpWithEmail = createNewUserWithSignUp;
//sign Out
export const existingUserSignOut = signout;
//sign In
export const signInWithEmail = existingUserSignIN;

//Extract Current user
export const getCurrentUser = CurrentUserExtract;
//reset Email of current user | This needs to be created again in front end
export const setEmail = SetEmailOfCurrentUser;

// const main = async () => {
//     await signInWithEmail();
//     await useEffect();

//     await setInterval(() => {
//         console.log(authstate);
//     }, 60000); //after 1 minute
//     // await setEmail();
//     await getCurrentUser();
//     await signOut();
// };

// main();

function Auth(props) {
    console.log("Auth username = ", props.email, "and password = ", props.password);
    return (
        <div>
            <h1> Auth js heading </h1>
        </div>
    );

}

export default Auth;

