
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an H1 tag")]
    ),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am an H1 tag"), React.createElement("h2", {}, "I am an H1 tag")]
    )
);

// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

//console.log(heading);

root.render(parent);
