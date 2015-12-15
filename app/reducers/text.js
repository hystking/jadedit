module.exports = (state, action) => {
  switch(action.type) {
    case "UPDATE_TEXT":
      return action.value;
  }
  return `doctype
html
  head
    title Jade Editor
  body
    h1 Hello, Jade`;
}
