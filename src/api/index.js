import firebase from 'firebase/app';

async function putCurrentItemNewSee( itemId, seen ){
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    seen++;
    await firebase.database().ref('users/' + stringUid + '/' + itemId).update({
        seen: seen
    });
}

async function getListThemes(){ // return await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    return firebase.database().ref('users/' + stringUid + '/themes').orderByChild('seen')
        .once('value', (snapshot) => snapshot )
        .then((res) => {
            let result = [];
            res.forEach(function (childSnapshot) { result.push(childSnapshot.val()); });
            return result;
        });
}

async function otherVersion(){
   // let result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   // result = await result.json();
   // return result;
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    let result = await firebase.database().ref('users/' + stringUid + '/themes').orderByChild('seen');
    result = await result.once('value', (snapshot) => snapshot);
    let arrayEmpty = [];
    result.forEach(function (childSnapshot) { arrayEmpty.push(childSnapshot.val());});
    return arrayEmpty;
}

export default {
    putCurrentItemNewSee, getListThemes, otherVersion
}