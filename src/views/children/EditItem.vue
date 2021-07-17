<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4"> <span v-bind:class="__state" v-on:click="changeState(__state)"></span>
      <h1 class="h6 mb-0 text-gray-800">{{ currentItem.themeTitle }}: {{ title }} jui</h1>
      <span v-on:click="editItem" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-edit fa-sm text-white-50"></i> {{ edit_item }}</span>
    </div>
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
            <input type="search" class="form-control form-control-sm" placeholder="Title item" v-model="title"><br>
            <textarea style="overflow:hidden" rows="111" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' class="form-control form-control-sm" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
    </div>
    <span v-on:click="editItem" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-edit fa-sm text-white-50"></i> {{ edit_item }}</span><br><br>
  </div>
</template>
<script>
import firebase from 'firebase/app';
export default {
  data() {
    return {
      __state: 'pendientIssueGrey',
      edit_item: 'Edit item',
      currentItem: {}, title: '',
      description: '',
      itemId: this.$route.params.id
    }
  },
  methods: {
    changeState(__state){ let newStateIqual = ''; let currentContext = this
      if( __state === 'pendientIssueGrey')  newStateIqual = 'pendientIssueGreen';
      else newStateIqual = 'pendientIssueGrey';
      let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko'
      firebase.database().ref('users/' + stringUid + '/items/' + this.itemId).update({ __state: newStateIqual, title: currentContext.title }).then(() => {
        firebase.database().ref().child('users/' + stringUid + '/items/' + this.itemId).on('value', (snapshot) => {
           currentContext.__state = snapshot.val().__state;
        });
      });
    },
    requestTitleItem(){
       let currentContext = this
       let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko'
       firebase.database().ref().child('users/' + stringUid + '/items/' + this.itemId).on('value', (snapshot) => {
         currentContext.currentItem = snapshot.val(); currentContext.title = snapshot.val().title; currentContext.__state = snapshot.val().__state || 'pendientIssueGreen';
       })
     },
    requestDescription(){
      let currentContext = this;
      let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
      firebase.firestore().collection(stringUid).doc(this.itemId).get().then(doc => {
        currentContext.description = doc.data().description;
      });
    },

     editItem(){
       if( !this.title.trim() || !this.description.trim() ) return; 
       this.edit_item = 'Editing ... ';
       let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
       let currentContextData = this;

       firebase.database().ref('users/' + stringUid + '/items/' + this.itemId).update({ title: currentContextData.title }).then(() => {
              this.requestTitleItem();
                setTimeout(function (){ currentContextData.edit_item = 'Edited';
                setTimeout(function (){ currentContextData.edit_item = 'Edit item';}, 1000);
             }, 1000);
            }).catch((error) => {
              currentContextData.save_new_item = 'Error';
              setTimeout(function (){ currentContextData.save_new_item = 'Edit item';}, 20000);
            });

       firebase.firestore().collection(stringUid).doc(this.itemId).update({ description: currentContextData.description }).then( docRef => this.requestDescription() );
     }
  },
  created(){
    this.requestTitleItem(); this.requestDescription(); let thisContext = this;
    document.addEventListener('keydown', function(e){
      if(e.key == 'Tab') { if(e.preventDefault) { e.preventDefault(); } thisContext.description += "     "; return false; }
      if(e.ctrlKey && e.key == 's' || e.key == 'S'){ if(e.preventDefault) { e.preventDefault(); } thisContext.editItem(); return false; }
    });
  },
}

</script>





























