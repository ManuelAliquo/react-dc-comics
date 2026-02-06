import ComicList from "./Comics/ComicList";

export default function Main({ comics }) {
  return (
    <main className="text-white">
      <div className="jumbo-section">
        <img src="src/assets/img/jumbotron.jpg" alt="Jumbotron" />
      </div>
      {/* comics section */}
      <section className="container-custom comics-section">
        {/* prop drilling? */}
        <ComicList comics={comics} />
      </section>
    </main>
  );
}
