import React from "react";
import Typography from "../UI/Typography/Typography";
import { Film } from "../../utils/contants/types.constant";
import StyedCard from "../UI/Card/StyleCard";

const FilmCard = ({
  director = "N/A",
  producer = "N/A",
  release_date = "",
  title = "N/A",
}: Film) => {
  return (
    <StyedCard data-id="film-card">
      <Typography variant="h4" customStyle="padding:10px">
        {title}
      </Typography>
      <Typography customStyle="color:gray" variant="h6">
        Director
      </Typography>
      <Typography variant="p">{director}</Typography>
      <Typography customStyle="margin-top:5px;color:gray" variant="h6">
        Producer
      </Typography>
      <Typography customStyle="text-align:center" variant="p">
        {producer}
      </Typography>
      <Typography customStyle="margin-top:5px;color:gray" variant="h6">
        Released
      </Typography>
      <Typography variant="p">
        {release_date ? new Date(release_date).toDateString() : "N/A"}
      </Typography>
    </StyedCard>
  );
};

export default FilmCard;
