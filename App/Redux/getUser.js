import firebase from "../Services/Firebase";

export const getUser = (fuid) => {
    
   return new Promise((resolve, reject) => {
    firebase
    .firestore()
    .collection("users")
    .where("fuid", "==", fuid)
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(user => {
        console.log('the data is ', user);
        resolve(user);
      });
    }).catch(function(error) {
        reject(error);
      })
});
}

