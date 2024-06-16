import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Error500 from "../error/Error500";
import PageSkeleton from "../../component/UI/Loading/PageSkeleton";
import Button from "../../component/UI/Button/Button";
import DetailCard from "../../component/People/DetailSection";
import { fetchCharacter } from "../../api/factory/people";
import DetailFilmList from "../../component/People/DetailFilmList";

const PeopleDetail = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery(`/people/${id}`, () =>
    fetchCharacter(id)
  );

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, []);

  if (isLoading) return <PageSkeleton />;
  if (error || !data?.url) return <Error500 message={"An Error Occurred"} />;

  return (
    <>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </Button>
      <DetailCard {...data!} />
      <DetailFilmList charData={data} />
    </>
  );
};

export default PeopleDetail;
