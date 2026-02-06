export default function Header({ links }) {
  return (
    <header className="page-header">
      <div className="container-custom d-flex justify-content-between h-100">
        <a href="#">
          <img src="/dc-logo.png" alt="Logo" />
        </a>
        {/* header nav */}
        <ul className="d-flex align-items-center gap-4 mb-0">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
