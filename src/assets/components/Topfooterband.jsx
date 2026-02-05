const footerNavItems = [
  { id: 1, url: "#", src: "src/assets/img/buy-comics-digital-comics.png", title: "DIGITAL COMICS" },
  { id: 2, url: "#", src: "src/assets/img/buy-comics-merchandise.png", title: "DC MERCHANDISE" },
  { id: 3, url: "#", src: "src/assets/img/buy-comics-subscriptions.png", title: "SUBSCRIPTION" },
  {
    id: 4,
    url: "#",
    src: "src/assets/img/buy-comics-shop-locator.png",
    title: "COMIC SHOP LOCATOR",
  },
  { id: 5, url: "#", src: "src/assets/img/buy-dc-power-visa.svg", title: "DC POWER VISA" },
];

export default function Topfooterband() {
  return (
    <section className="footer-nav py-5">
      <div className="container-custom ">
        <nav className="row">
          {footerNavItems.map((item) => (
            <div key={item.id} className="col">
              <a href={item.url}>
                <img className="img-fluid" src={item.src} alt={item.title} />
                <div>{item.title}</div>
              </a>
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
