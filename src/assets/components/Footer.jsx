export default function Footer() {
  return (
    <footer className="page-footer text-white">
      <section className="footer-nav d-flex align-items-center">
        <nav className="container-custom d-flex justify-content-evenly align-items-center">
          <a href="#">
            <img src="src/assets/img/buy-comics-digital-comics.png" alt="Digital Comics" />
            <span>DIGITAL COMICS</span>
          </a>
          <a href="#">
            <img src="src/assets/img/buy-comics-merchandise.png" alt="Merch" />
            <span>DC MERCHANDISE</span>
          </a>
          <a href="#">
            <img src="src/assets/img/buy-comics-subscriptions.png" alt="Subscriptions" />
            <span>SUBSCRIPTION</span>
          </a>
          <a href="#">
            <img src="src/assets/img/buy-comics-shop-locator.png" alt="Shop Locator" />
            <span>COMIC SHOP LOCATOR</span>
          </a>
          <a href="#">
            <img src="src/assets/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
            <span>DC POWER VISA</span>
          </a>
        </nav>
      </section>
      <section className="footer-links">
        <div className="container-custom d-flex gap-4">
          <div className="list-container ">
            <h6>DC COMICS</h6>
            <ul>
              <li>
                <a href="#">Characters</a>
              </li>
              <li>
                <a href="#">Comics</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">TV</a>
              </li>
              <li>
                <a href="#">Games</a>
              </li>
              <li>
                <a href="#">Videos</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
            <h6 className="mt-3">SHOP</h6>
            <ul>
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop DC Collectibles</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h6>DC</h6>
            <ul>
              <li>
                <a href="#">Terms Of Use</a>
              </li>
              <li>
                <a href="#">Privacy policy (New)</a>
              </li>
              <li>
                <a href="#">Ad Choices</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Subscriptions</a>
              </li>
              <li>
                <a href="#">Talent Workshops</a>
              </li>
              <li>
                <a href="#">CPSC Certificates</a>
              </li>
              <li>
                <a href="#">Ratings</a>
              </li>
              <li>
                <a href="#">Shop Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h6>SITES</h6>
            <ul>
              <li>
                <a href="#">DC</a>
              </li>
              <li>
                <a href="#">MAD Magazine</a>
              </li>
              <li>
                <a href="#">DC Kids</a>
              </li>
              <li>
                <a href="#">DC Universe</a>
              </li>
              <li>
                <a href="#">DC Power Visa</a>
              </li>
            </ul>
          </div>
          <img
            className="background-logo"
            src="src/assets/img/dc-logo-bg.png"
            alt="Background Logo"
          />
        </div>
      </section>
      <section className="social-section py-4">
        <div className="container-custom d-flex justify-content-between">
          <a className="btn text-white" href="#">
            SIGN-UP NOW!
          </a>
          <div className="d-flex align-items-center gap-3">
            <span>FOLLOW US</span>
            <a href="#">
              <img src="src\assets\img\footer-facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="src\assets\img\footer-twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="src\assets\img\footer-youtube.png" alt="YouTube" />
            </a>
            <a href="#">
              <img src="src\assets\img\footer-pinterest.png" alt="Pinterest" />
            </a>
            <a href="#">
              <img src="src\assets\img\footer-periscope.png" alt="Periscope" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
