function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <img
          className="react-logo"
          src="./react-logo.png"
          alt="react logo"
        ></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Page_title() {
  return <h1>Fun Facts about React</h1>;
}
function Main_content() {
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
function Footer() {
  return (
    <footer>
      <small>Created by ccairns33</small>
    </footer>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Page_title />
        <Main_content />
      </div>
      <Footer />
    </div>
  );
}
const root = document.getElementById("root");
ReactDOM.render(<Page />, root);
