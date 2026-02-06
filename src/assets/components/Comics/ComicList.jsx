import ComicCard from "./ComicCard";

export default function ComicList({ comics }) {
  return (
    <>
      <h2 className="h5 d-inline-block py-2 px-4 fw-bolder">CURRENT SERIES</h2>
      <div className="row gy-4 mx-1 mb-3">
        {comics.map((comic) => (
          <ComicCard key={comic.id} series={comic.series} thumb={comic.thumb} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn text-white fw-bolder px-5 py-2 my-3">LOAD MORE</button>
      </div>
    </>
  );
}
