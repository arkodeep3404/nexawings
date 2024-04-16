import React from "react";
import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Custom Software
          <br className="sm:block hidden" />
          Development
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Custom Web Applications <br /> Customer Support Software <br />{" "}
          Enterprise Software <br /> Custom CRM and Dashboard
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
    </section>
  );
};

export default CardDeal;
