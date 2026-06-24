function Navbar() {
  const user = "Rutuja";

  return (
    <header className="navbar">
      <div>
        <h1>Welcome Back, {user}</h1>
        <p>Track, manage and grow your tokenized asset portfolio</p>
      </div>
    </header>
  );
}

export default Navbar;