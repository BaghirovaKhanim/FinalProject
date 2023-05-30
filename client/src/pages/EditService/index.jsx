import React, { useState } from "react";
import style from "./index.module.css";
import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { putService, getServiceByID } from "../../api/httpsrequests";
import { ServiceSchema } from "../../schema";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const EditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [service, setService] = useState({});

  async function fetchData() {
    const data = await getServiceByID(id);
    setService(data);
    formik.setValues({
      imageURL: data.imageURL,
      name: data.name,
      description: data.description,
    });
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  const handleSubmit = async (values, actions) => {
    putService(id, values);
    setService(values);
    navigate("/");
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      imageURL: service.imageURL,
      name: service.name,
      description: service.description,
    },
    onSubmit: handleSubmit,
    validationSchema: ServiceSchema,
  });
  return (
    <>
      <Helmet>
        <title>Edit Service</title>
      </Helmet>
      <section className={style.EditSection}>
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h1 style={{ textAlign: "center", color: "green" }}>
                Edit Service
              </h1>
              <form action="" onSubmit={formik.handleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Enter Image URL"
                  variant="outlined"
                  name="imageURL"
                  type="url"
                  onChange={formik.handleChange}
                  value={formik.values.imageURL}
                  onBlur={formik.handleBlur}
                  className={style.input}
                />
                {formik.errors.imageURL && formik.touched.imageURL && (
                  <span style={{ color: "red" }}>{formik.errors.imageURL}</span>
                )}
                <TextField
                  id="outlined-basic"
                  label="Enter Name"
                  variant="outlined"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  className={style.input}
                />
                {formik.errors.name && formik.touched.name && (
                  <span style={{ color: "red" }}>{formik.errors.name}</span>
                )}
                <TextField
                  id="outlined-basic"
                  label="Enter Description"
                  variant="outlined"
                  name="description"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  onBlur={formik.handleBlur}
                  className={style.input}
                />
                {formik.errors.description && formik.touched.description && (
                  <span style={{ color: "red" }}>
                    {formik.errors.description}
                  </span>
                )}
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  className={style.button}
                >
                  Edit
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EditService;
