import React from "react";
import { graphql } from "gatsby";
import * as styles from "./PastWinners.module.css";
import BrandButton from "../../../../components/UI/BrandButton/BrandButton";

const PastWinners = ({ year, winner, founder, link }) => {
  
  return (
    <div className={`text-center ${styles.border}`}>
      <h4 className={`text-center align-items-end ${styles.subHeading}`}>{year}</h4>
      <p className={`${styles.content} ${styles.contentWinner}`}>{winner}</p>
      <p className={`${styles.content} ${styles.contentFounders}`}>Founders:</p>
      {/* maps through the array of founders names. */}
      {
        founder.map((founders) => {
          return founders?.map((foundingMember) => {
            return <p className={styles.content}>{foundingMember}</p>;
          });
        })
      }
      <div className="d-flex justify-content-center">
        <div className={styles.absolute}>
          <BrandButton
            onClick={() => window.open(link)}
            className={`d-flex justify-content-center ${styles.btn} btn--small`}
          >
            Watch Video
          </BrandButton>
        </div>
      </div>
    </div>
  );
};

export default PastWinners;
