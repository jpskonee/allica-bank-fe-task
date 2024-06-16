import React, { useId } from "react";
import { useQuery } from "react-query";
import PageSkeleton from "../../component/UI/Loading/PageSkeleton";
import Typography from "../../component/UI/Typography/Typography";
import FilmCard from "../../component/Film/FilmCard";
import { GridContainer } from "../../component/UI/Grid/GridContainer";
import Error500 from "../../pages/error/Error500";
import { fetchCharacterFilms } from "../../api/factory/people";
import { Character } from "../../utils/contants/types.constant";

type Props = {
  charData?: Character;
};

const DetailFilmList = ({ charData }: Props) => {
  const uniqueId = useId();
  const cacheKey = `${uniqueId}-${charData?.url || ""}-films`;
  const { data, isLoading, error } = useQuery(cacheKey, () =>
    fetchCharacterFilms(charData?.films || [])
  );

  if (isLoading) return <PageSkeleton />;
  if (error) return <Error500 message={"An Error Occurred"} />;

  return (
    <>
      <Typography customStyle="margin:60px 0px 10px" variant="h4">
        Films Appearance:
      </Typography>
      <GridContainer mediumColumns={2} largeColumns={4}>
        {data?.map((film, index) => {
          return <FilmCard key={`${index + 1}`} {...film} />;
        })}
      </GridContainer>
    </>
  );
};

export default DetailFilmList;
