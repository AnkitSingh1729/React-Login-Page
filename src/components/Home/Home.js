import React, {useContext} from "react";
import AuthContext from "../store/auth-context";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

// In Button we could use context instead of props, it works. But props is ok here
// becuase we are directly using the prev props in this component rather than passing
// it to whole new component
const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={props.onLogout}>Log Out</Button>     
    </Card>
  );
};

export default Home;
