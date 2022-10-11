const react_logo = (
  <nav>
    <img src="./react-logo.png" alt="react logo" width="40px"></img>
  </nav>
);
const header = <h1>Fun Facts about React</h1>;
const react_facts = (
  <ul>
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k stars on Github</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
);

const root = document.getElementById("root");
ReactDOM.render([react_logo, header, react_facts], root);
