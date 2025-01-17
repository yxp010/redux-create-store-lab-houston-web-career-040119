export default function createStore(reducer) {
  // add your code here

  let state

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  function getState() {
    return reducer(state, {type: 'lol'})
  }

  return {
    getState,
    dispatch
  }

}

function render() {
  const container = document.getElementById('container');
}
