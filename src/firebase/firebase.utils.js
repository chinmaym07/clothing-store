import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBXQCC-miBfF27YuW48XIggDchuTRbF8Nw",
    authDomain: "crown-db-ed4b7.firebaseapp.com",
    databaseURL: "https://crown-db-ed4b7.firebaseio.com",
    projectId: "crown-db-ed4b7",
    storageBucket: "crown-db-ed4b7.appspot.com",
    messagingSenderId: "304665701144",
    appId: "1:304665701144:web:2e21e57862d2e8f3210c6d",
    measurementId: "G-H1GNY53501"

};

export const createUserProfileDocument = async(userAuth , additonalData)=> {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists)
    {
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        }catch(error)
        {
            console.log('error creating user ',error.message());
        }
        
    }
    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;