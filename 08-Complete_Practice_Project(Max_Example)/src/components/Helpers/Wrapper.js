const Wrapper = (props) => {
  // Remember the children prop holds all the content
  // you're passing between the opening and closing tag of your custom component.
  // Now it is valid in a component to just return that content
  // which you got between the opening and closing text.

  //this is basically an empty component.
  return props.children;
};

export default Wrapper;
