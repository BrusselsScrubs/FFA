var React = require("react");
var FoodList = require("./FoodList.jsx")

module.exports = React.createClass({
   render:function(){
       return(
           <div>
                {
                    this.props.foods.map(function(s,index){
                        return(
                            <FoodList info={s} key={"foodlist"+index} />
                        )
                    })
                }
           </div>
       )
   }
});
