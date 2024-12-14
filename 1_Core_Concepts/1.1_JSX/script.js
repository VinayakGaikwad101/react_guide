// class JSXDemo extends React.Component {
//   render() {
//     return <h1>hey</h1>;
//   }
// }

// ReactDOM.render(<JSXDemo />, document.getElementById("root"));

// above renders hey on our webpage

// note that:

// const element = (
//     <h1 className="greeting">
//       Hello, world!
//     </h1>
//   );

// and

// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world!'
//   );

// are the same

// Note: this structure is simplified

// const element = {
//     type: 'h1',
//     props: {
//       className: 'greeting',
//       children: 'Hello, world!'
//     }
//   };