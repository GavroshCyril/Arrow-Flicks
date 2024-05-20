import { useState } from "react";
import { Card, Image, Text, Flex, Rating } from "@mantine/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const MovieCard = ({ movie }) => {
  const { genres } = useSelector((state) => state.genres);
  const [ratingColor, setRatingColor] = useState("#D5D6DC");

  const handleClick = () => {
    setRatingColor(ratingColor === "#D5D6DC" ? "#9854F6" : "#D5D6DC");
  };

  const getGenreNames = () => {
    return movie.genre_ids.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : "";
    });
  };

  return (
    <div className="card-container">
      <Card radius="12" h={218} w={482} p="24px">
        <Flex justify="space-between">
          <Link to={`/movie/${movie.id}`}>
            <Flex>
              <Image
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                w={119}
                height={170}
                alt={movie.title}
              />
              <Flex justify="space-between" direction="column" ml={16}>
                <Flex direction="column" gap={8}>
                  <Text style={{ textWrap: "balance" }} fw={600} c={"#9854F6"} fz="20px">
                    {movie.title}
                  </Text>
                  <Text span fw={400} c={"#7B7C88"}>
                    {new Date(movie.release_date).getFullYear()}
                  </Text>
                  <Flex align="center">
                    <Rating
                      defaultValue={Math.round(movie.vote_average / 2)}
                      size="xl"
                      count={1}
                      color="#FAB005"
                      readOnly
                    />
                    <Text span fw={600} ml={4} c="black">
                      {movie.vote_average}
                    </Text>
                    <Text span c={"#7B7C88"} ml={8}>
                      ({movie.vote_count})
                    </Text>
                  </Flex>
                </Flex>
                <Flex gap={8}>
                  <Text c="#7B7C88">Genres</Text>
                  <Text span c="black">
                    {getGenreNames().join(", ")}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>
          <Flex align="flex-start">
            <Rating
              defaultValue={2}
              size="xl"
              count={1}
              color={ratingColor}
              onChange={handleClick}
            />
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};
