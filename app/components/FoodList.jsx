var React = require("react");
var FoodItem = require("./FoodItem.jsx")

module.exports = React.createClass({
    render:function(){
        return(
            <div className="row-md-3">
                 <div className="col-md-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            {this.props.info.name}
                        </div>
                        <div>
                        {
                            this.props.info.types.map(function(s,index){
                                return(
                                    <FoodItem food={s} key={"food"+index} />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
           </div>
        )
    }
})
