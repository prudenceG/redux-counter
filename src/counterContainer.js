import React from "react";
import { connect } from "react-redux";
// Conect permet au composant d'accéder au store

const mapStateToProps = state => ({
  counter: state
});
//on passe les valeurs du state en props au composant

const mapDispatchToProps = dispatch => ({
    add: () => dispatch({ type: 'ADD' }),
    remove: () => dispatch({ type: 'REMOVE' }),
    add10: () => dispatch({ type: 'ADD10' }),
    remove10: () => dispatch({ type: 'REMOVE10' }),
    reset: () => dispatch({ type: 'RESET' }),

});
// on donne accès au dispatch du store
// on y renseigne toutes nos actions qui seront dispatcher vers le reducer lors du click 

const CounterComponent = ({ counter, add, remove, add10, remove10, reset }) => (
  <div>
    <p>{counter}</p>
    <button onClick={add}>+</button>
    <button onClick={remove}>-</button>
    <button onClick={add10}>+10</button>
    <button onClick={remove10}>-10</button>
    <button onClick={reset}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);