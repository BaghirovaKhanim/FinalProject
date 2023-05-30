import React from "react";
import { Container, Grid } from "@mui/material";
import style from "./index.module.css";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import PaidIcon from "@mui/icons-material/Paid";
const HappyClient = () => {
  return (
    <>
      <section className={style.section}>
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={style.sectionTop}>
              <h1 className={style.heading}>HAPPY CLIENT</h1>
              <p className={style.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim.
              </p>
            </div>
          </div>
          <div className={style.sectionBottom}>
            <Grid container spacing={2}>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <div className={style.card}>
                  <div>
                    <BusinessCenterIcon className={style.cardIcon} />
                  </div>
                  <div className={style.cardBody}>
                    <h3 className={style.heading3}>1172 </h3>
                    <p className={style.paragraph3}>Project Complete</p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <div className={style.card}>
                  <div>
                    <SentimentSatisfiedAltIcon className={style.cardIcon} />
                  </div>
                  <div className={style.cardBody}>
                    <h3 className={style.heading3}>1000 </h3>
                    <p className={style.paragraph3}>Project Complete</p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <div className={style.card}>
                  <div>
                    <PersonIcon className={style.cardIcon} />
                  </div>
                  <div className={style.cardBody}>
                    <h3 className={style.heading3}>1200 </h3>
                    <p className={style.paragraph3}>Project Complete</p>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <div className={style.card}>
                  <div>
                    <PaidIcon className={style.cardIcon} />
                  </div>
                  <div className={style.cardBody}>
                    <h3 className={style.heading3}>1172 </h3>
                    <p className={style.paragraph3}>Project Complete</p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HappyClient;
