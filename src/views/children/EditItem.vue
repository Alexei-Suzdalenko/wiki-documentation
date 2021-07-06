<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h6 mb-0 text-gray-800">{{ title }}</h1>
      <span v-on:click="editItem" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-edit fa-sm text-white-50"></i> {{ edit_item }}</span>
    </div>
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
            <input type="search" class="form-control form-control-sm" placeholder="Title item" v-model="title"><br>
            <textarea rows="35" class="form-control form-control-sm" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
    </div>
    <span v-on:click="editItem" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-edit fa-sm text-white-50"></i> {{ edit_item }}</span><br><br>
  </div>
</template>>
<script>
import firebase from 'firebase/app';
export default {
  data() {
    return {
      edit_item: 'Edit item',
      title: '',
      description: '',
      itemId: this.$route.params.id
    }
  },
  created() {
     this.requestCurrentItem();
   },
  methods: {
     requestCurrentItem(){
       let currentContext = this;
       let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';

       firebase.database().ref().child('users/' + stringUid + '/' + this.itemId).on('value', (snapshot) => {
         currentContext.title = snapshot.val().title;
       });

       firebase.firestore().collection(stringUid).doc(this.itemId).get().then(doc => {
         currentContext.description = doc.data().description;
       });
     },

     editItem(){
       if( !this.title.trim() || !this.description.trim() ) return; 
       this.edit_item = 'Editing ... ';
       let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
       let currentContextData = this;

        firebase.database().ref('users/' + stringUid + '/' + this.itemId).update({
         title: currentContextData.title
       }).then(() => { 
         this.requestCurrentItem();
         setTimeout(function (){ currentContextData.edit_item = 'Edited';
            setTimeout(function (){ currentContextData.edit_item = 'Edit item';}, 2000);
         }, 1000); 
       }).catch((error) => {
          currentContextData.save_new_item = 'Error';
          setTimeout(function (){ currentContextData.save_new_item = 'Edit item';}, 20000);
       });  

       firebase.firestore().collection(stringUid).doc(this.itemId).update({
         description: currentContextData.description
       }).then((docRef) => { 
         this.requestCurrentItem();
       });
     }
  }
}
</script>