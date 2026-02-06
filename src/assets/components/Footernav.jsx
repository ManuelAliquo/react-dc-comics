export default function FooterNav({ items }) {
  return (
    <section className="footer-nav py-5">
      <div className="container-custom ">
        <nav className="row">
          {items.map((item) => (
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
