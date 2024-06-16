import React from "react";
import PageSkeleton from "../../component/UI/Loading/PageSkeleton";
import Error500 from "../error/Error500";
import PeopleCard from "../../component/People/PeopleCard";
import StyledLink from "../../component/UI/Link/StyledLink";
import { useQuery } from "react-query";
import { GridContainer } from "../../component/UI/Grid/GridContainer";
import Typography from "../../component/UI/Typography/Typography";
import { fetchCharacterList } from "../../api/factory/people";

const PeopleIndex = () => {
  const {
    data = [],
    isLoading,
    error,
  } = useQuery("people", fetchCharacterList);

  if (error) return <Error500 message={"An Error Occured"} />;
  if (isLoading) return <PageSkeleton />;

  return (
    <>
      <Typography
        customStyle="margin-bottom: 30px; text-align: center"
        variant="h1"
      >
        Star Wars People
      </Typography>
      <GridContainer>
        {data?.map((ech: any) => {
          return (
            <StyledLink key={ech.id} to={`/${ech.id}`}>
              <PeopleCard {...ech} />
            </StyledLink>
          );
        })}
      </GridContainer>
    </>
  );
};

export default PeopleIndex;
