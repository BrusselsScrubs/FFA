var React = require("react");
var ReactDOM = require("react-dom");
var FridgeList = require("./components/FridgeList.jsx");

var _foods = [{name:"Meat", types:[{name:"Chicken",quantity:1}]}, {name:"Vegetables", types:[{name:"Brussel Sprouts",quantity:1},{name:"Carrots", quantity:1}]},
{name:"Fruit", types:[{name: "Apple",quantity:1}]},{name:"Misc", types:[{name: "Butter", quantity:1}]}]
function render(){
    ReactDOM.render(<FridgeList foods={_foods} />, document.getElementById("container"));
}
render();
