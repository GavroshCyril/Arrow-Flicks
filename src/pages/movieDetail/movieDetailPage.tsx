import { Card, Image, Text, Flex, Rating, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movieDetails";
import { CustomLoader, Breadcrumbs } from "../../components";
import "./movieDetailPage.scss";

export const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Movie ID:", id);
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <div className="centered-wrapper">
        <CustomLoader />
      </div>
    );
  }

  const breadcrumbItems = [
    { title: "Movies", href: "/" },
    { title: movie.title, href: `/movie/${movie.id}` },
  ];

  return (
    <div className="container">
      <div className="breadcrumbs">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {/* <Image
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        width={250}
        height={352}
        alt={movie.title}
      /> */}
    </div>
  );
};

export default MovieDetailPage;
