import React from "react";
import photo from "./imgs/portrait.jpg";
import styles from "./app.module.scss";
import { SocialIcon } from "react-social-icons";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img className={styles.portrait} src={photo}></img>
        <div className={styles.name}>Harshil Mattoo</div>
        <div className={styles.links}>
          <SocialIcon
            bgColor={"white"}
            url={"https://twitter.com/harshilmattoo"}
          />
          <SocialIcon
            bgColor={"white"}
            url={"https://github.com/HarshilMattoo"}
          />
          <SocialIcon
            bgColor={"white"}
            url={"https://www.linkedin.com/in/harshilmattoo/"}
          />
          <SocialIcon
            bgColor={"white"}
            url={"mailto:harshilmattoo2@gmail.com"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
