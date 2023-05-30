import { Container, Grid } from "@mui/material";
import React from "react";
import style from "./index.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const Hero = () => {
  return (
    <>
      <section className={style.section}>
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className={style.button2}>Special Offer Now $10</button>
          </div>
          <Grid container spacing={2}>
            <Grid item lg="8" md={12} sm={12} xs={12}>
              <div className={style.wrapperContent}>
                <h1 className={style.heading1}>BEST WEB HOSTING SERVER</h1>
                <h3 className={style.heading2}>CREATE YOUR DOMAIN STARTED</h3>
                <h6 className={style.paragraph}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </h6>
                <div className={style.listWrapper}>
                  <ul className={style.list}>
                    <li className={style.listItem}>
                      <CheckCircleOutlineIcon className={style.listIcon} />
                      Summo tamquam.
                    </li>
                    <li className={style.listItem}>
                      <CheckCircleOutlineIcon className={style.listIcon} />
                      Summo tamquam.
                    </li>
                  </ul>
                  <ul className={style.list}>
                    <li className={style.listItem}>
                      <CheckCircleOutlineIcon className={style.listIcon} />
                      Summo tamquam.
                    </li>
                    <li className={style.listItem}>
                      <CheckCircleOutlineIcon className={style.listIcon} />
                      Summo tamquam.
                    </li>
                  </ul>
                </div>
                <button className={style.button}>STARTED NOW</button>
              </div>
            </Grid>
            <Grid item lg="4" md={12} sm={12} xs={12}>
              <div className={style.wrapperImage}>
                <img
                  className={style.image}
                  src="https://preview.colorlib.com/theme/drimo/drimo/img/banner/server-shap.png"
                  alt=""
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Hero;
