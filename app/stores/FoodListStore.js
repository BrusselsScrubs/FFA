var dispatcher = require("../dispatcher");

function FoodListStore() {
  var listeners = [];
  var foodlists = [{name:"Meat", types:[{name:"Chicken",quantity:1}]}, {name:"Vegetables", types:[{name:"Brussel Sprouts",quantity:1},{name:"Carrots", quantity:1}]},
  {name:"Fruit", types:[{name: "Apple",quantity:1}]},{name:"Misc", types:[{name: "Butter", quantity:1}]}];

  function getFoodLists(){
    return foodlists;
  }
  function onChange(listener) {
    listeners.push(listener);
  }
  function addFoodList(foodlist) {
    foodlists.push(foodlist);
    triggerListeners();
  }
  function deleteFoodList(foodlist) {
    var _index;
    foodlists.map(function(s, index) {
      if(s.name === foodlist.name) {
        _index = index;
      }
    });
    foodlists.splice(_index, 1);
    triggerListeners();
  }
  function triggerListeners() {
    listeners.forEach(function (listener){
      listener(foodlists);
    });
  }
  dispatcher.register(function (payload){
    var split = payload.type.split(":");
    if(split[0] === "foodlist") {
      switch (split[1]){
          case "addFoodList":
            addFoodList(payload.foodlist)
            break;
          case "deleteFoodList":
            deleteFoodList(payload.foodlist);
            break;
      }
    }
  });
  return {
    getFoodLists: getFoodLists,
    onChange: onChange
  }
}
module.exports = FoodListStore();
