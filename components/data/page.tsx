import React, { useState } from "react";
import Styles from "./data.module.css";

const page = () => {
  const [isData, setIsData] = useState(false);
  return <div className={Styles.container}>page</div>;
};

export default page;
