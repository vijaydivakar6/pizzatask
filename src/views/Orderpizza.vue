<template>
  <div class="orderpizza">
    <Header />
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <div class="panel panel-default text-left">
            <div class="panel-heading">Order Pizza</div>

            <div class="panel-body">

              <div class="row">
                <div class="col-lg-12">
                  <form class="form-horizontal">
                     <div class="form-group">
                      <label class="col-sm-2 control-label">Order Id</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="orderid"
                          placeholder="Order Id"
                          class="form-control"
                        v-model="orderid"  />
                      </div>
                      </div>
                      <div class="form-group">
                      <label class="col-sm-2 control-label">Name</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          class="form-control"
                        v-model="name" />
                      </div>
                      </div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Address</label>
                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="address"
                          placeholder="Your Address"
                          class="form-control"
                        v-model="address" />
                      </div>
                    </div>

                    <div class="form-group">
                      <label class="col-sm-2 control-label">Size</label>

                      <div class="col-sm-10">
                        <div>
                          <label>
                            <input
                              type="radio"
                              checked=""
                              value="medium"
                              id="medium"
                              name="size"
                           v-model="checkedNames" />
                            Medium
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="radio"
                              value="large"
                              id="large"
                              name="size"
                          v-model="checkedNames"  />
                            Large
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="radio"
                              value="extra-large"
                              id="extra-large"
                              name="size"
                          v-model="checkedNames"  />
                            Extra Large
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Toppings</label>
                      <div class="col-sm-10">
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="pepperoni"
                            id="pepperoni"
                             v-model="checkedBoxs"
                          />
                          Pepperoni
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="extra-cheese"
                            id="extra-cheese"
                             v-model="checkedBoxs"
                          />
                          Extra Cheese
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="mushrooms"
                            id="mushrooms"
                             v-model="checkedBoxs"
                          />
                          Mushrooms
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="ground-beef"
                            id="ground-beef"
                             v-model="checkedBoxs"
                          />
                          Ground Beef
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="pineapple"
                            id="inlineCheckbox3"
                             v-model="checkedBoxs"
                          />
                          Pineapple
                        </label>
                      </div>
                    </div>
                    <div class="hr-line-dashed"></div>

                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Instructions</label>

                      <div class="col-sm-10">
                        <input
                          type="text"
                          name="instructions"
                          placeholder="Special Instructions here"
                          class="form-control" v-model="instructions"
                        />
                      </div>
                    </div>
                     <div class="hr-line-dashed"></div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Status</label>

                      <div class="col-sm-10">
                        <select v-model="selected">
                      <option disabled value="">Please select status</option>
                      <option>Order Received</option>
                      <option>Preparing</option>
                      <option>Ready to Serve</option>
                    </select>
                      </div>
                    </div>




                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                      <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-success" type="submit" @click.prevent="saveData()">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "orderpizza",
  components: {
    Header,
  },
  props: {},

  data() {
    return {
      orderid:'',
      name:'',
      address:'',
       checkedNames: [],
       checkedBoxs: [],
       instructions:'',
       userData:[],
       selected: ''
    };
  },

  methods: {
  saveData(){
  
    var data ={
      order:this.orderid,
      name:this.name,
     address: this.address,
     checkednames: this.checkedNames,
     checkedboxs:this.checkedBoxs,
     instruction:this.instructions,
     selected:this.selected
   }
this.userData.push(data);
localStorage.setItem('uservalue', JSON.stringify(this.userData));
this.$router.push('/');

  }
  },
  mounted(){
   
    if(JSON.parse(localStorage.getItem('uservalue')) === null ){
        this.userData= []
    }else{
      
      this.userData=JSON.parse(localStorage.getItem('uservalue'))
    }
    
  }
};
</script>
<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
</style>
