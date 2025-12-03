 import React from "react";
 import ReactDOM from "react-dom/client";

/***
 * 
 *  <div id="parent">
 *     <div id="child">
 *            <h1> I am h1 tag</h1>
 *            <h2> I am h1 tag</h2>
 *     <div>
 * 
 * <div>
 * 
 * const h2 = React.createElement("h2", {}, "This is h2 tag");
const h3 = React.createElement("h3", {}, "This is h3 tag");
const child = React.createElement("div", {id:"child1"}, [h2, h3]);

 */


 

/***
 * 
 *  <div id="parent">
 *     <div id="child1">
 *            <h1> I am h1 tag</h1>
 *            <h2> I am h1 tag</h2>
 *     <div>
 * <div id="child2">
 *            <h1> I am h1 tag</h1>
 *            <h2> I am h1 tag</h2>
 *     <div>
 * 
 * <div>
 */


const h2ch1 = React.createElement("h2", {id:"h2ch1", key:"h2ch1"}, "This is child 1 h2 tag from react");
const h3ch1 = React.createElement("h3", {id:"h3ch1", key:"h3ch1"}, "This ischild 1  h3 tag");
const child1 = React.createElement("div", {id:"child1", key:"C1"}, [h2ch1, h3ch1]);

const h2ch2 = React.createElement("h2", {id:"h2ch2", key: "h2ch2"}, "This is h2 tag");
const h3ch2 = React.createElement("h3", {id:"h3ch2", key:"h3ch2"}, "This is h3 tag, I am from react and load faster.");
const child2 = React.createElement("div", {id:"child2", key:"C2"}, [h2ch2, h3ch2]);


const parent = React.createElement("div", {id:"paranet"},[child1, child2] );

 
//const heading = React.createElement("h1", {id:"heading"}, "Hello from React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// Notes: 
        