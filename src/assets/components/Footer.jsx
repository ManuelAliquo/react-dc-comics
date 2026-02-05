const footerDCComicsMenu = [
  {
    title: "DC COMICS",
    links: [
      { text: "Characters", url: "#" },
      { text: "Comics", url: "#" },
      { text: "Movies", url: "#" },
      { text: "TV", url: "#" },
      { text: "Games", url: "#" },
      { text: "Videos", url: "#" },
      { text: "News", url: "#" },
    ],
  },
];
const footerShopMenu = [
  {
    title: "SHOP",
    links: [
      { text: "Shop DC", url: "#" },
      { text: "Shop DC Collectibles", url: "#" },
    ],
  },
];
const footerDCMenu = [
  {
    title: "DC",
    links: [
      { text: "Terms Of Use", url: "#" },
      { text: "Privacy policy (New)", url: "#" },
      { text: "Ad Choices", url: "#" },
      { text: "Advertising", url: "#" },
      { text: "Jobs", url: "#" },
      { text: "Subscriptions", url: "#" },
      { text: "Talent Workshops", url: "#" },
      { text: "CPSC Certificates", url: "#" },
      { text: "Ratings", url: "#" },
      { text: "Shop Help", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
];
const footerSitesMenu = [
  {
    title: "SITES",
    links: [
      { text: "DC", url: "#" },
      { text: "MAD Magazine", url: "#" },
      { text: "DC Kids", url: "#" },
      { text: "DC Universe", url: "#" },
      { text: "DC Power Visa", url: "#" },
    ],
  },
];

footerSitesMenu.map((item) => {
  console.log(item.title);
  item.links.map((link) => {
    console.log(link.text);
  });
});

import Footernav from "./Footernav.jsx";

export default function Footer() {
  return (
    <footer className="page-footer text-white">
      <Footernav />
      {/* links section */}
      <section className="footer-links">
        <div className="container-custom d-flex gap-4">
          <div>
            {/* dc comics menu */}
            {footerDCComicsMenu.map((item, index) => (
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
            {footerShopMenu.map((item, index) => (
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
          {footerDCMenu.map((item, index) => (
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
          {footerSitesMenu.map((item, index) => (
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
          <img
            className="background-logo img-fluid"
            src="public/dc-logo-bg.png"
            alt="Background Logo"
          />
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
