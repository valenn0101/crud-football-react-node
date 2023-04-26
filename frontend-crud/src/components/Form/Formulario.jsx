import React from "react";
import styles from "./Form.module.css";
import { Formik } from "formik";
import axios from "axios";

export default function Formulario({ clubInfo }) {
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        `https://crud-api-restful.onrender.com/api/v1/crud/edit/${clubInfo.id}`,
        values
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          name: clubInfo.name,
          shortName: clubInfo.shortName,
          tla: clubInfo.tla,
          email: clubInfo.email,
          website: clubInfo.website,
          phone: clubInfo.phone,
          founded: clubInfo.founded,
          venue: clubInfo.venue,
          clubColors: clubInfo.clubColors,
          address: clubInfo.address,
          crestUrl: clubInfo.crestUrl,
          crestLocal: clubInfo.crestLocal,
        }}
        onSubmit={() => {
          console.log("Formulario enviado");
          handleSubmit();
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.shortName) {
            errors.shortName = "Required";
          }
          if (!values.venue) {
            errors.venue = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.crestUrl && !values.crestLocal) {
            errors.crestUrl =
              "You must provide at least one of Crest URL or Crest Local";
            errors.crestLocal =
              "You must provide at least one of Crest URL or Crest Local";
          }
          return errors;
        }}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors }) => (
          <form
            className={styles.formulario}
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
            action={`https://crud-api-restful.onrender.com/api/v1/crud/edit/${clubInfo.id}`}
          >
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Manchester City"
                value={values.name}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="shortName">Short Name</label>
              <input
                type="text"
                id="shortName"
                name="shortName"
                placeholder="Man City"
                value={values.shortName}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.shortName && (
                <p className={styles.error}>{errors.shortName}</p>
              )}
            </div>
            <div>
              <label htmlFor="acronym">Acronym</label>
              <input
                type="text"
                id="tla"
                name="tla"
                placeholder="MCI"
                value={values.tla}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="mancity@mancity.com"
                required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="https://www.mancity.com/"
                value={values.website}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="+44 (0)161 444 1894"
                value={values.phone}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="founded">Founded</label>
              <input
                type="number"
                id="founded"
                name="founded"
                placeholder="1880"
                value={values.founded}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="clubColors">Club Colors</label>
              <input
                type="text"
                id="clubColors"
                name="clubColors"
                placeholder="Sky Blue / White"
                value={values.clubColors}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="venue">Stadium</label>
              <input
                type="text"
                id="venue"
                name="venue"
                placeholder="Etihad Stadium"
                value={values.venue}
                required
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.venue && <p className={styles.error}>{errors.venue}</p>}
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Manchester M11 3FF"
                value={values.address}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="crestUrl">URL Crest</label>
              <input
                type="text"
                id="UrlCrest"
                name="crestUrl"
                placeholder="https://www.mancity.com/content/dam/mancity/logos/crest-large.png"
                value={values.crestUrl}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.crestUrl && (
                <p className={styles.error}>{errors.crestUrl}</p>
              )}
            </div>
            <div>
              <label htmlFor="crestLocal">Local Crest</label>
              <input
                type="file"
                id="crestLocal"
                name="crestLocal"
                placeholder="crestLocal"
                value={values.crestLocal}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.crestLocal && (
                <p className={styles.error}>{errors.crestLocal}</p>
              )}
            </div>
            <div className={styles.btnGroup}>
              <div>
                <button
                className="btn btn-success"
                  type="submit"
                  id="boton-enviar"
                  value="Subir"
                >
                  Enviar
                </button>
              </div>
              <div>
                <a
                  href="/HomePage"
                  className="btn btn-secondary"
                  id="boton-retroceder-equipo"
                  value="retroceder"
                >
                  Retroceder
                </a>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
