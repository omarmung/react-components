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

var GroceryListItem = (props) => (
  <ul>
    <li>{props.items[0]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
      <GroceryListItem items={["kale", "shrimp", "peas"]}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));