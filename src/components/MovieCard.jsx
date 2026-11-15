import styled from "@emotion/styled";
import { baseImagePath } from "../service/baseImagePath";

const StyledCard = styled.li`
  & .thumb {
    height: 427px;
    background-color: gray;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
  }
  & a {
    display: block;
    height: 100%;
  }
`;

export const MovieCard = ({ movie }) => {
  return (
    <StyledCard bgImage={`${baseImagePath}${movie.poster_path}`}>
      <a href={`/${movie.id}`}>
        <div className="thumb"></div>
        <p>{movie.title}</p>
        <h3>{movie.release_date}</h3>
        <h3>{movie.vote_average}</h3>
      </a>
    </StyledCard>
  );
};
