const jade = require("jade");

module.exports = (state, action) => {
  switch(action.type) {
    case "@@redux/INIT":
    case "UPDATE_TEXT":
      try {
        return jade.render(state.text, {pretty: true});
      } catch(e) {
        return state.preview; 
      }
  }
  return state.preview;
}
