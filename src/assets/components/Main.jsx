import ComicList from "./Comics/ComicList";

export default function Main() {
  return (
    <main className="text-white">
      <div className="jumbo-section">
        <img src="src/assets/img/jumbotron.jpg" alt="Jumbotron" />
      </div>
      {/* comics section */}
      <section className="container-custom comics-section">
        <h2 className="h5 d-inline-block py-2 px-4 fw-bolder">CURRENT SERIES</h2>
        <div className="row gy-4 mx-1 mb-3">
          <ComicList />
        </div>
        <div className="text-center">
          <button className="btn text-white fw-bolder px-5 py-2 my-3">LOAD MORE</button>
        </div>
      </section>
    </main>
  );
}
