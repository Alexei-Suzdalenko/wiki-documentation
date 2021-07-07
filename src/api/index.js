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
    return firebase.database().ref('users/' + stringUid + '/themes')
        .orderByChild('seen')
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

async function getDataCurrentTheme(themeId) {
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    // console.log(themeId);
    return firebase.database().ref('users/' + stringUid + '/themes/' + themeId).once('value').then(snapshot => snapshot.val());
    // .once('value', snapshot => snapshot.val());
}

async function getListTitlesFromCurrentTheme(themeId){
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    return firebase.database().ref('users/' + stringUid + '/items')
         .orderByChild('themeId').equalTo(themeId)
         .once('value')
         .then(snapshot => snapshot.val());
}

async function addThisThemeOneSeem(themeId, seen){ ++seen;
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    return firebase.database().ref('users/' + stringUid + '/themes/' + themeId).update({ 'seen': seen })
        .then(() => 'ok');
}

async function addNewSeenFromCurrentItem(itemId, seen){ ++seen;
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    await firebase.database().ref('users/' + stringUid + '/items/' + itemId).update({ 'seen': seen });
}

async function addThisThemeOneSeemById(themeId){
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    firebase.database().ref('users/' + stringUid + '/themes/' + themeId).once('value').then(snapshot => {
        console.log(snapshot.val().seen);
        let currentSeem = snapshot.val().seen; ++currentSeem;
        firebase.database().ref('users/' + stringUid + '/themes/' + themeId).update({'seen': currentSeem});
    });
}

export default {
    putCurrentItemNewSee, getListThemes, otherVersion, getDataCurrentTheme, getListTitlesFromCurrentTheme, addThisThemeOneSeem, addNewSeenFromCurrentItem, addThisThemeOneSeemById
}























