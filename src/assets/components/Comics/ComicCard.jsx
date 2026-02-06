export default function ComicCard({ thumb, series }) {
  return (
    <div className="col-2">
      <a href="#">
        <div className="img-container">
          <img src={thumb} alt={series} />
        </div>
        <div className="comic-title">{series}</div>
      </a>
    </div>
  );
}
