var dispatcher = require("../dispatcher");

module.exports = {
  addFoodList:function(foodlist){
    dispatcher.dispatch({
      foodlist:foodlist,
      type:"foodlist:addFoodList"
    })
  },
  deleteFoodList:function(foodlist){
    dispatcher.dispatch({
      foodlist:foodlist,
      type:"foodlist:deleteFoodList"
    })
  }
}
