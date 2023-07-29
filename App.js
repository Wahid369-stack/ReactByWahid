// const heading=React.createElement("h1",{id:"heading" , xyz:"abc"},"Hello from react!");
// console.log(heading);
const parent=React.createElement(
    "div",{id:"parent"},
    [
        React.createElement(
            "div",{id:"child"},
        [React.createElement(
            "h1",{},"I am in h1"),React.createElement(
                "h2",{},"I am in h2")]
            ),React.createElement(
                "div",{id:"child2"},
            [React.createElement(
                "h1",{},"I am in h1"),React.createElement(
                    "h2",{},"I am in h2")]
                )
    ]
    );
console.log(parent);
        const root= ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);