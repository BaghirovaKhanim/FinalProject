import React, { useState } from "react";
import style from "./index.module.css";
import { Button, Container, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { postService } from "../../api/httpsrequests";
import { ServiceSchema } from "../../schema";
import { Helmet } from "react-helmet";

const AddService = () => {
  const navigate = useNavigate();
  const [service, setService] = useState({});

  const handleSubmit = async (values, actions) => {
    postService(values);
    setService(values);
    navigate("/");
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      imageURL: "",
      name: "",
      description: "",
    },
    onSubmit: handleSubmit,
    validationSchema: ServiceSchema,
  });
  return (
    <>
      <Helmet>
        <title>Add Service</title>
      </Helmet>
      <section className={style.AddSection}>
        <Container maxWidth="lg">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <h1 style={{ textAlign: "center", color: "green" }}>
                Add Service
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
                  Add
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddService;
