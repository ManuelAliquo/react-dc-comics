const headerLinks = [
  { url: "#", text: "CHARACTERS" },
  { url: "#", text: "COMICS" },
  { url: "#", text: "MOVIES" },
  { url: "#", text: "TV" },
  { url: "#", text: "GAMES" },
  { url: "#", text: "COLLECTIBLES" },
  { url: "#", text: "VIDEOS" },
  { url: "#", text: "FANS" },
  { url: "#", text: "NEWS" },
  { url: "#", text: "SHOP" },
];

export default function Header() {
  return (
    <header className="page-header">
      <div className="container-custom d-flex justify-content-between h-100">
        <a href="#">
          <img src="/dc-logo.png" alt="Logo" />
        </a>
        {/* header nav */}
        <ul className="d-flex align-items-center gap-4 mb-0">
          {headerLinks.map((link) => (
            <li>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
