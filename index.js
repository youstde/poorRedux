import { createStore } from './redux';

let initState = {
  count: 0,
  counter: {
    count: 0
  },
  info: {
    name: '',
    description: ''
  }
}

let store = createStore(initState);


store.subscribe(() => {
  let state = store.getState();
  console.log(state.count);
});

store.dispatch({
    type: 'ADD'
})