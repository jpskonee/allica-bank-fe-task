import React from "react";
import Typography from "../../component/UI/Typography/Typography";

type Props = {
  message?: string;
};

const Error500 = ({ message = "An Error Occurred" }: Props) => {
  return (
    <div>
      <Typography variant="h5" customStyle="color:red">
        {message}
      </Typography>
    </div>
  );
};

export default Error500;
