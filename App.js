const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement(
        "h1",
        {
          id: "head1",
          key: "1",
        },
        "hello tanmay in react world"
      ),
      React.createElement(
        "h1",
        {
          id: "head2",
          key: "2",
        },
        "hello das in react world"
      ),
    ]
  )
);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(heading);

{
  /* <div id="parent">
  <div id="child">
    <h1 id="head1"></h1>
    <h1 id="head2"></h1>
  </div>
</div>; */
}
