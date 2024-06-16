import React from "react";
import Typography from "../UI/Typography/Typography";
import { Character } from "../../utils/contants/types.constant";
import StyedCard from "../UI/Card/StyleCard";

const PeopleCard = ({ gender, name, homePlanetData }: Character) => {
  return (
    <StyedCard data-id="people-card" customStyle="height:150px;">
      <Typography data-id="people-name" variant="h4">
        {name}
      </Typography>
      <Typography
        data-id="people-gender"
        variant="p"
        customStyle={`text-transform:capitalize`}
      >
        {gender}
      </Typography>
      <Typography
        data-id="people-planet"
        variant="p"
        customStyle={`text-transform:capitalize`}
      >
        Planet: {homePlanetData?.name || "N/A"}
      </Typography>
    </StyedCard>
  );
};

export default PeopleCard;
