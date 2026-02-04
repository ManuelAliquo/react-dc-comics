export default function Header() {
  return (
    <header className="page-header">
      <div className="container-custom d-flex justify-content-between h-100">
        <a href="#">
          <img src="src/assets/img/dc-logo.png" alt="Logo" />
        </a>
        <ul className="d-flex align-items-center gap-4 mb-0">
          <li>
            <a href="#">CHARACTERS</a>
          </li>
          <li className="active">
            <a href="#">COMICS</a>
          </li>
          <li>
            <a href="#">MOVIES</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">GAMES</a>
          </li>
          <li>
            <a href="#">COLLECTIBLES</a>
          </li>
          <li>
            <a href="#">VIDEOS</a>
          </li>
          <li>
            <a href="#">FANS</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
