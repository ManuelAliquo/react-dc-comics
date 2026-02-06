import FooterNav from "./FooterNav.jsx";

export default function Footer({ items, dccomicslinks, shoplinks, dclinks, siteslinks }) {
  return (
    <footer className="page-footer text-white">
      {/* prop drilling? */}
      <FooterNav items={items} />
      {/* links section */}
      <section className="footer-links">
        <div className="container-custom d-flex gap-4">
          <div>
            {/* dc comics menu */}
            {dccomicslinks.map((item, index) => (
              <div key={index} className="list-container">
                <h6>{item.title}</h6>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* shop menu */}
            {shoplinks.map((item, index) => (
              <div key={index} className="list-container mt-3">
                <h6>{item.title}</h6>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* dc menu */}
          {dclinks.map((item, index) => (
            <div key={index} className="list-container">
              <h6>{item.title}</h6>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* sites menu */}
          {siteslinks.map((item, index) => (
            <div key={index} className="list-container">
              <h6>{item.title}</h6>
              <ul>
                {item.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <img className="background-logo img-fluid" src="/dc-logo-bg.png" alt="Background Logo" />
        </div>
      </section>
      {/* social section */}
      <div className="social-section py-4">
        <div className="container-custom d-flex justify-content-between">
          <a className="btn text-white" href="#">
            SIGN-UP NOW!
          </a>
          <div className="d-flex align-items-center gap-3">
            <span>FOLLOW US</span>
            <a href="#">
              <img src="src/assets/img/footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="src/assets/img/footer-twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="src/assets/img/footer-youtube.png" alt="YouTube" />
            </a>
            <a href="#">
              <img src="src/assets/img/footer-pinterest.png" alt="Pinterest" />
            </a>
            <a href="#">
              <img src="src/assets/img/footer-periscope.png" alt="Periscope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
