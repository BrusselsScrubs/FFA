var React = require("react");
var actions = require("../actions/FoodActions");

module.exports = React.createClass({
  getInitialState:function(){
    return {
      name:"",
      types:[]
    }
  },
  addFoodList:function(e){
    e.preventDefault();
    actions.addFoodList(this.state);
  },
  handleInputChange:function(e){
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;
    state[name] = e.target.value;
    this.setState(state);
  },
  handleNestedInputChange:function(e){
    e.preventDefault();
    var name = e.target.name;
    var state = this.state;
    state["types"][name] = e.target.value;
    this.setState(state);
  },
  render:function(){
  return(
          <form className="form" onSubmit={this.addFoodList}>
              <div className="form-group">
                  <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Food List" />
              </div>
              <fieldset>
                <input type="text" className="form-control" id="type_name" name="name" value={this.state.name} onChange={this.handleNestedInputChange} placeholder="Name" />
                <input type="text" className="form-control" id="type_quantity" name="quantity" value={this.state.quantity} onChange={this.handleNestedInputChange} placeholder="Quantity" />
              </fieldset>
              <div className="form-group">
                  <button className="btn" type="submit">Add FoodList</button>
              </div>
          </form>
      )
  }

});
