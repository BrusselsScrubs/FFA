var React = require("react");
var ReactDOM = require("react-dom");
var FridgeList = require("./components/FridgeList.jsx");
var FoodListStore = require("./stores/FoodListStore");

var _foods = FoodListStore.getFoodLists();
FoodListStore.onChange(function(foodlists){
  _foods = foodlists;
  render();
});
function render(){
    ReactDOM.render(<FridgeList foods={_foods} />, document.getElementById("container"));
}
render();
