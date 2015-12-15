const requireDir = require("require-dir");
const {createStore, applyMiddleware} = require("redux");
const reducers = requireDir("./reducers");

const logger = store => next => action => {
  return next(action);
}

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const store = createStoreWithMiddleware((state, action) => {
  state = state || {};
  state.text = reducers.text(state.text, action);
  state.preview = reducers.preview(state, action);
  return state
});

module.exports = store;
