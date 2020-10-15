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
        const {email} = userAuth;
        const {displayName } = additonalData;
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


export const addCollectionAndDocuments = async(collectionKey , objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const documentRef = firestore.collection(collectionKey);
    const collectionSnapShot = await collectionRef.get();
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj);
    });
    return await batch.commit();
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title , items} = doc.data();
        
        return {
            id:doc.id,
            routeName:encodeURI(title.toLowerCase()),
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator , collection) => {
    accumulator[collection.title.toLowerCase()] = collection;   
    return accumulator;
    },{});
} 

firebase.initializeApp(config);

export const getCurrentUser = ()=> {
    return new Promise((resolve,reject) =>{
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'});

export default firebase;