 import React from "react";
 import ReactDOM from "react-dom/client";


 // React Element => Object => HTML Elemet (render)
 const heading = React.createElement("h1", {id:"heading", key:1}, "Hello from React");
console.log(heading);

//HTML + JS => JSX
// React and JSX is different both are not same or part of.
// JSX(Syntax) is HTML or XML like syntax
// JSX ==> converted to React.createElement ==> React Element -JS (Object) ==> HTMLElement(render)
// Babel is converting the JSX to React.createElement ==> ...
const jsxHeading = (<h1 id="headingJsx" className="jsxClassName">This is JSX Heading</h1>)
console.log(jsxHeading);
// heading is same as jsxHeading

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

root.render(jsxHeading);


//JSX -(Transpiled before it reaches to the JS Engine.) Transpiled is done by Parcel. Parcel uses other lib like Babel.
// Babel is a JS compiler.
//https://babeljs.io/

//const dom = <h1>h</h1>. ====> 