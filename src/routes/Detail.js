import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
      <h1>{movie.title}</h1>
      <img alt={movie.title} src={movie.medium_cover_image} />
      <br></br>
      <span>rates : {movie.rating}</span>
      <br></br>
      <span>year: {movie.year}</span>
      <br></br>
      <h4>Info</h4>
      <br></br>
      <span>{movie.description_full}</span>
    </div>
  );
}
export default Detail;
