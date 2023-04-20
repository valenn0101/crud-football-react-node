import React from "react";
import { Layout } from "@/components/Layout";
import { ApiUrl } from "@/services/apirest";
import axios from "axios";

import styles from "./index.module.css";
import ActionButton from "./ActionButton/ActionButton";

export default class HomePage extends React.Component {
  state = {
    clubs: [],
  };

  componentDidMount() {
    const url = ApiUrl;
    axios.get(url).then((res) => {
      console.log(res);
      this.setState({
        clubs: res.data.data,
      });
    });
  }

  render() {
    return (
      <Layout page="Home">
        <div className="container">
          <table className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Club</th>
                <th scope="col">Crest</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.clubs.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {value.crestUrl ? (
                        <img
                          className={styles.img}
                          src={value.crestUrl}
                          alt="Club Crest"
                        />
                      ) : (
                        <img
                          className={styles.img}
                          src={value.crestLocal}
                          alt="Club Crest"
                        />
                      )}
                    </td>
                    <td>{value.name}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic outlined example"
                      >
                        <ActionButton
                          url={`/api/v1/clubs/show/${value.id}`}
                          type="success"
                          name="Ver"
                        />
                        <ActionButton
                          url={`/api/v1/clubs/edit/${value.id}`}
                          type="primary"
                          name="Editar"
                        />

                        <form
                          id="delete-form"
                          action={`/api/v1/clubs/delete/${value.id}`}
                          method="get"
                        >
                          <input type="hidden" name="_method" value="DELETE" />
                          <button
                            className="btn btn-outline-warning"
                            type="submit"
                          >
                            Eliminar
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
