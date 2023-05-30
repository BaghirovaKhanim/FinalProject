import React from "react";
import { Container, Grid } from "@mui/material";
import style from "./index.module.css";
import { Card } from "antd";
const News = () => {
  return (
    <>
      <section className={style.section}>
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={style.sectionTop}>
              <h1 className={style.heading}>LATEST NEWS</h1>
              <p className={style.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim.
              </p>
            </div>
          </div>
          <div className={style.sectionBottom}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    textAlign: "start",
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-1.jpg"
                    />
                  }
                >
                  <p className={style.heading3}>Professional Website Hosting</p>
                  <p className={style.paragraph3}>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    textAlign: "start",
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-2.jpg"
                    />
                  }
                >
                  <p className={style.heading3}>Professional Website Hosting</p>
                  <p className={style.paragraph3}>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born.
                  </p>
                </Card>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Card
                  hoverable
                  style={{
                    textAlign: "start",
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-3.jpg"
                    />
                  }
                >
                  <p className={style.heading3}>Professional Website Hosting</p>
                  <p className={style.paragraph3}>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born.
                  </p>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default News;
