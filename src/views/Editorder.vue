<template>
  <div class="editorder">
    <Header />
    <div class="container mt-5">
      <div class="row text-left">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default">
            <div class="panel-heading">Edit Order Status</div>

            <div class="panel-body">
              <div class="alert alert-success"></div>

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
                        v-model="user.orderid"  disabled="disabled" />
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
                        v-model="user.name"  disabled="disabled" />
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
                        v-model="user.address"   disabled="disabled"/>
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
                           v-model="user.checkedNames"   disabled="disabled"/>
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
                          v-model="checkedNames"  disabled="disabled" />
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
                          v-model="user.checkedNames"  disabled="disabled" />
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
                             v-model="user.checkedBoxs"
                          disabled="disabled" />
                          Pepperoni
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="extra-cheese"
                            id="extra-cheese"
                             v-model="user.checkedBoxs"
                           disabled="disabled"/>
                          Extra Cheese
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="mushrooms"
                            id="mushrooms"
                             v-model="user.checkedBoxs"
                           disabled="disabled"/>
                          Mushrooms
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="ground-beef"
                            id="ground-beef"
                             v-model="user.checkedBoxs"
                          disabled="disabled" />
                          Ground Beef
                        </label>
                        <label class="checkbox-inline">
                          <input
                            type="checkbox"
                            name="toppings"
                            value="pineapple"
                            id="inlineCheckbox3"
                             v-model="user.checkedBoxs"
                          disabled="disabled" />
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
                          class="form-control" v-model="user.instructions"
                       disabled="disabled"  />
                      </div>
                    </div>
                     <div class="hr-line-dashed"></div>
                    <div class="form-group">
                      <label class="col-sm-2 control-label">Status</label>

                      <div class="col-sm-10">
                        <select v-model="user.selected">
                      <option disabled value="">Please select status</option>
                      <option>Delivered</option>
                      <option>Yet to be deliver</option>
                      <option>Preparing</option>
                    </select>
                      </div>
                    </div>




                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                      <div class="col-sm-4 col-sm-offset-2">
                        <button class="btn btn-success" type="submit" @click="updateMe()">
                          Update Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- end panel-body -->
          </div>
          <!-- end panel -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  name: "editorder",
  components: {
    Header,
  },
  props: {},

  data() {
    return {
      user:{},
     sldUserID :'',
     editValue:[]
    };
  },
   created (){
     	var data=JSON.parse(localStorage.getItem('myEdit'));	
  	console.log(data)
  	this.user.orderid = data.order ;	 
  	this.user.name=data.name;
  	this.user.address=data.address;
  	this.user.checkedNames=data.checkednames;
  	this.user.checkedBoxs=data.checkedboxs;
    this.user.instructions=data.instruction;
    this.user.selected=data.selected;
    this.editValue =data
    
   },
  methods: {
    updateMe(){
  	console.log(this.user);
  	var dataValue=JSON.parse(localStorage.getItem('uservalue'))
  	console.log(dataValue)
  	const newState = dataValue.map(obj =>
    obj.orderid === this.orderid ? { ...obj, 
		 order:	this.user.orderid,
      name:this.user.name,
     address: this.user.address,
     checkednames: this.user.checkedNames,
     checkedboxs:this.user.checkedBoxs,
     instruction:this.user.instructions,
     selected:this.user.selected
		} : obj
	);
	console.log(newState)
  localStorage.setItem('uservalue', JSON.stringify(newState));
  this.$router.push('/');
  }
  },
}

</script>
<style>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
</style>