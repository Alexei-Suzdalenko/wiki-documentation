<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h5 mb-0 text-gray-800">{{ loading }}</h1>
    </div>
    <div class="card shadow mb-4" v-if="isLoading">
      <div class="card-body">
        <div class="table-responsive">
          <table class="table table-bordered" width="100%" cellspacing="0">
            <thead>
            <tr>
              <th>Seen at</th>
              <th>Title item</th>
              <th>Title theme</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in listServerItemsFiltered" v-bind:key="index">
              <td><i v-on:click="goToCurrentItem(item.id, item.seen)" class="fa fa-arrow-up fafontsize"></i> {{ item.seen }}</td>
              <td><router-link v-bind:to="'/dashboard/item/' + item.id" class="decoration">{{ item.title }}</router-link></td>
              <td><router-link v-bind:to="'/dashboard/theme/' + item.themeId" class="decoration">{{ item.themeTitle }}</router-link></td>
            </tr>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import api from '@/api/index';
export default {
  data(){
    return{
       listServerItems: [],
       loading: 'Loading ...',
       isLoading: false
    }
  },
  created() {
    this.requestDataToServer();
  },
  methods: {
    requestDataToServer(){
      let emptyArray = [];
      let currentContext = this;
      let stringUid = window.localStorage.getItem('uid') || 'alexei suzdalenko';
      firebase.database().ref('users/' + stringUid + '/items').orderByChild('seen')
      .once('value', function(snapshot) {
        snapshot.forEach(function (childSnapshot) {
          console.log( childSnapshot.val() );
          emptyArray.push(childSnapshot.val());
        });
        currentContext.loading = 'All items';
        currentContext.isLoading = true;
        currentContext.listServerItems = emptyArray.reverse();
      });
    },
    goToCurrentItem(itemId, seen){
      api.putCurrentItemNewSee(itemId, seen);
      window.open('/dashboard/item/' + itemId);
    }
  },
  computed: {
    listServerItemsFiltered(){
      let key = this.$store.state.suzdalenko.searchValue || '';
      let filteredArray = this.listServerItems.filter(function(itm){
        return itm.title.toLowerCase().indexOf(key.toLowerCase()) > -1;
      });
      if(key) return filteredArray;
      return this.listServerItems;
    }
  }
}
</script>