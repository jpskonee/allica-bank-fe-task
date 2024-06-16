import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Typography from "../UI/Typography/Typography";
import { Character } from "../../utils/contants/types.constant";
import Button from "../UI/Button/Button";
import { baseColour } from "../../utils/contants/colors.contant";
import Form from "../Form/Form";
import Input from "../Form/Input";
import Select from "../Form/Select";

const optionData = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "others", label: "Others" },
];

type EditProps = {
  height?: string;
  gender?: string;
};

const DetailSection = ({
  gender,
  name,
  hair_color,
  eye_color,
  height,
  homePlanetData,
}: Character) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newData, setNewData] = useState<EditProps>({ gender, height });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Make API call to patch character with updated data.
    setIsEdit(false);
  };
  const handleCancel = () => {
    //reset prev data;
    setNewData({ gender, height });
    setIsEdit(false);
  };

  return (
    <RootComponent>
      <Typography variant="h1">{name}</Typography>
      <Typography variant="p" customStyle={`text-transform:capitalize`}>
        Hair Colour: {hair_color}
      </Typography>
      <Typography variant="p" customStyle={`text-transform:capitalize`}>
        Eye Colour: {eye_color}
      </Typography>
      <Typography variant="p" customStyle={`text-transform:capitalize`}>
        Planet: {homePlanetData?.name || "N/A"}
      </Typography>
      {!isEdit ? (
        <>
          <Typography variant="p" customStyle={`text-transform:capitalize`}>
            Gender: {newData.gender}
          </Typography>
          <Typography variant="p" customStyle={`text-transform:capitalize`}>
            Height: {newData.height}
          </Typography>

          <Button customStyle="margin-top:20px" onClick={() => setIsEdit(true)}>
            Edit
          </Button>
        </>
      ) : (
        <Form customStyle="max-width:250px" onSubmit={handleSubmit}>
          <InputWrapper>
            <Select
              onChange={(e) => {
                const gender = e.target.value;
                setNewData((prev) => ({ ...prev, gender }));
              }}
              value={newData.gender}
              options={optionData}
            />
            <Input
              placeholder="Please enter height"
              type="number"
              min={1}
              onChange={(e) => {
                const height = e.target.value;
                setNewData((prev) => ({ ...prev, height }));
              }}
              value={newData.height}
            />
          </InputWrapper>

          <ButtonWrapper>
            <Button
              customStyle={`background: ${baseColour.blue}`}
              type="submit"
            >
              Save
            </Button>
            <Button type="button" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonWrapper>
        </Form>
      )}
    </RootComponent>
  );
};

const RootComponent = styled.div`
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-direction: column;
`;

export default DetailSection;
