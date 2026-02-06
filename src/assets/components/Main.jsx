import ComicList from "./Comics/ComicList";

export default function Main() {
  return (
    <main className="text-white">
      <div className="jumbo-section">
        <img src="src/assets/img/jumbotron.jpg" alt="Jumbotron" />
      </div>
      {/* comics section */}
      <section className="container-custom comics-section">
        <ComicList />
      </section>
    </main>
  );
}
