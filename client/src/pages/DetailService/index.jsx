import React from "react";
import { Button, Container, Grid } from "@mui/material";
import style from "./index.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getServiceByID } from "../../api/httpsrequests";
import { Helmet } from "react-helmet";

const DetailService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    getServiceByID(id).then((res) => {
      setService(res);
    });
  }, [id]);
  return (
    <>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <section className={style.section}>
        <Container maxWidth="lg">
          <div className={style.sectionBottom}>
            <Grid container spacing={2}>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <div className={style.card}>
                  <img src={service.imageURL} alt={service.name} />
                  <h3 className={style.heading3}>{service.name} </h3>
                  <p className={style.paragraph3}>{service.description} </p>
                  <Button variant="contained" color="success">
                    <Link style={{ color: "white" }} to="/">
                      Go Back
                    </Link>
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default DetailService;
