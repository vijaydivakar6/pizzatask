<template>
  <div class="myorders">
    <Header />
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="table-responsive">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Size</th>
                  <th>Toppings</th>
                  <th>Instructions</th>
                  <th>Status</th>
                  <th>View Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in displayUserData" :key="item.message">
                  <td>{{item.order}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.address}}</td>
                  <td>{{item.checkednames}}</td>
                  <td>{{item.checkedboxs}}</td>
                  <td>{{item.instruction}}</td>
                  <td >{{item.selected}}</td>
                  <td><button @click="editUser(item)">View</button></td>
                  <!-- <td><a href="{{ route('admin.orders.edit', $order) }}">{{ $order->status->name }}</a></td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "myorders",
  components: {
    Header,
  },
  props: {
    msg: String,
  },

  data() {
    return {
       displayUserData:[],
   
    };
  },

created () {
       var dataStore=JSON.parse(localStorage.getItem('uservalue'))
  	this.displayUserData = dataStore
    },
    methods:{
       editUser(displayUserData) {
         console.log(this.displayUserData)
    localStorage.setItem('myEdit',JSON.stringify(displayUserData));
    this.$router.push('/editorder');
  }
    }
};
</script>
<style>
</style>
