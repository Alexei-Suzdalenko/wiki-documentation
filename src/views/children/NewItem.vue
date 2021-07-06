<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h5 mb-0 text-gray-800">New item, currentTheme = {{ this.$store.state.suzdalenko.currentTheme }} New item</h1>
      <span v-on:click="saveNewItem" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-upload fa-sm text-white-50"></i> {{ save_new_item }}</span>
    </div>
    <div class="card shadow mb-4">
      <div class="card-body">
        <div class="table-responsive">
            <input type="search" class="form-control form-control-sm" placeholder="Title item" v-model="title"><br>
            <textarea rows="35" class="form-control form-control-sm" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app';
export default {
  data(){
    return{
      save_new_item: 'Save item',
      count: 0,
      timeCurrentSecond: String(parseInt(new Date().getTime() / 1000)),
      title: '',
      description: '',
      currentTheme: this.$store.state.suzdalenko.currentTheme
    }
  },
  methods: {
    saveNewItem(){
      if( !this.title.trim() ) return; if(!this.description.trim()) { this.description = ' '; }
      this.save_new_item = 'Saving ... ';
      let currentContextData = this;
      let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
 
      firebase.database().ref('users/' + stringUid + '/items/' + this.timeCurrentSecond).set({
         title: currentContextData.title,
         seen: 0,
         id: currentContextData.timeCurrentSecond,
         themeId: currentContextData.currentTheme.id,
         themeTitle: currentContextData.currentTheme.title
       }).then(() => { 
         ++currentContextData.count;
         setTimeout(function (){ currentContextData.save_new_item = 'Saved';
            setTimeout(function (){ currentContextData.save_new_item = 'Save item';}, 2000);
         }, 1000); 
       }).catch((error) => {
          currentContextData.save_new_item = 'Error';
          setTimeout(function (){ currentContextData.save_new_item = 'Save item';}, 20000);
       });  

       firebase.firestore().collection(stringUid).doc(this.timeCurrentSecond).set({
         description: currentContextData.description,
         id: currentContextData.timeCurrentSecond
       }).then((docRef) => { 
             ++currentContextData.count;
       }).catch((error) => {
             console.error("Error adding document: ", error);
       });

    },
  },
  created() {

       
  },

  watch: {
    'count': function(newValue){
      if(newValue == 2){
        this.$router.push('/dashboard/item/' + this.timeCurrentSecond);
      }
    }
  }


}
</script>