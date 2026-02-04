export default function Footer() {
  return (
    <footer className="page-footer text-white">
      <section className="footer-nav d-flex align-items-center py-4">
        <nav className="container-custom d-flex justify-content-around align-items-center">
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
      <section className="footer-links pt-4 pb-5">
        <div className="container-custom d-flex gap-4">
          <div className="list-container ">
            <h6>DC COMICS</h6>
            <ul>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
            </ul>
            <h6 className="mt-3">SHOP</h6>
            <ul>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h6>DC</h6>
            <ul>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
            </ul>
          </div>
          <div className="list-container">
            <h6>SITES</h6>
            <ul>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
              <li>
                <a href="#">link</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="social-section py-4">
        <div className="container-custom d-flex justify-content-between">
          <a className="btn text-white" href="#">
            SIGN-UP NOW!
          </a>
          <div className="d-flex align-items-center gap-3">
            <span>FOLLOW US</span>
            <img src="src\assets\img\footer-facebook.png" alt="Facebook" />
            <img src="src\assets\img\footer-twitter.png" alt="Twitter" />
            <img src="src\assets\img\footer-youtube.png" alt="YouTube" />
            <img src="src\assets\img\footer-pinterest.png" alt="Pinterest" />
            <img src="src\assets\img\footer-periscope.png" alt="Periscope" />
          </div>
        </div>
      </section>
    </footer>
  );
}
