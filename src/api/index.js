import firebase from 'firebase/app';

function putCurrentItemNewSee( itemId, seen ){
    let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
    seen++;

       firebase.database().ref('users/' + stringUid + '/' + itemId).update({
           seen: seen
       });

}

export default {
    putCurrentItemNewSee
}