import React from "react";
import { Container, Grid } from "@mui/material";
import style from "./index.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { deleteService, getAllServices } from "../../../../api/httpsrequests";
const Services = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  useEffect(() => {
    getAllServices().then((res) => {
      setServices(res);
    });
  }, []);
  function handleDelete(id) {
    deleteService(id)
      .then(() => {
        setServices((service) => service.filter((x) => x._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSearch(e) {
    getAllServices(e.target.value).then((res) => {
      setServices(res);
    });
  }
  return (
    <>
      <section className={style.section}>
        <Container maxWidth="lg">
          {/* Search */}
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Services..."
              onChange={(e) => handleSearch(e)}
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {/* Card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={style.sectionTop}>
              <h1 className={style.heading}>OUR SERVICE</h1>
              <p className={style.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Ut
                enim.
              </p>
            </div>
          </div>
          <div className={style.sectionBottom}>
            <Grid container spacing={2}>
              {services.map((service) => {
                return (
                  <Grid key={service._id} item lg={3} md={6} sm={12} xs={12}>
                    <div className={style.card}>
                      <img src={service.imageURL} alt={service.name} />
                      <h3 className={style.heading3}>
                        <Link
                          style={{ color: "black" }}
                          to={`/detail/service/${service._id}`}
                        >
                          {service.name}
                        </Link>
                      </h3>
                      <p className={style.paragraph3}>{service.description} </p>
                      <button
                        className={style.button}
                        onClick={(e) => handleDelete(service._id)}
                      >
                        Delete
                      </button>
                      <button className={style.editButton}>
                        <Link
                          style={{ color: "white" }}
                          to={`/edit/service/${service._id}`}
                        >
                          Edit
                        </Link>
                      </button>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
