import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Preloader() {
  return (
    <div className='preloader'>
      <CircularProgress color="primary" />
    </div>
  );
}
