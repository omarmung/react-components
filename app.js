// TODO
// var App = () => (
//   <div>Some cliche salutation</div>
// );

// var Cucumbers = () => (
//   <li>
//     Cucumbers
//   </li>
// );

// var GroceryListItem = () => (
//   <li>
    
//   </li>
// );
// return 'text';
  // return props.map(function(item){
  //   return '<li>' + item + '</li>';
  // }).join('');

    // <Items/>
var Item = (props) => (
  <li>{props.anyOtherThing}</li>
);


var GroceryListItem = (props) => (
  <ul>
    {props.listItems.map(function(item){
      return <Item anyOtherThing={item}/>;
    })}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
      <GroceryListItem listItems={["kale", "shrimp", "peas"]}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));