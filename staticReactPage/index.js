function React_logo() {
  return (
    <nav>
      <img src="./react-logo.png" alt="react logo" width="40px"></img>
    </nav>
  );
}
function Page_header() {
  return <h1>Fun Facts about React</h1>;
}
function React_facts() {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  );
}
function Page() {
  return (
    <div>
      <React_logo />
      <Page_header />
      <React_facts />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<Page />, root);
