import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

export const ScrappingConf = () => {
  const [scrappedList, setScrappedList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [scrappedNumber, setScrappedNumber] = useState(0);
  const [countries, setCountries] = useState([]);
  const [obj, setObj] = useState({});

  const formik = useFormik({
    initialValues: {
      option1: "",
      option2: "",
      option3: "",
      location: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      startScrapping(values);
    },
  });
  const getCountries = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  };

  const startScrapping = (value) => {
    console.log(value);
    axios
      .post(
        `http://localhost:3001/scrapping/startScrapping/${value.location} ${value.option1} ${value.option2} ${value.option3}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .post(`http://localhost:3001/scrapping/scrap/`, {
        location: `${value.location}`,
        scrapReq: `${value.option1} ${value.option2} ${value.option3}`,
      })
      .then((res) => {
        console.log(res);
        getScrappedList();
        formik.resetForm();
      })
      .catch((err) => console.log(err));

    console.log(obj);

    formik.values = formik.initialValues;
  };

  const getScrappedNumber = () => {
    axios
      .get("http://localhost:3001/profiles/sum")
      .then((res) => {
        console.log(res.data);
        setScrappedNumber(res.data);
      })
      .catch((err) => console.log(err));
  };
  const getScrappedList = () => {
    axios
      .get("http://localhost:3001/scrapping/scrap")
      .then((res) => {
        console.log(res.data);
        setScrappedList(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getScrappedList();
    getScrappedNumber();
    getCountries();
    setLoader(false);
    console.log(scrappedList);
  }, []);
  return (
    <>
      {loader ? (
        "loading"
      ) : (
        <>
          <Fragment>
            <FragmentScrappedNumber>
              <h5>Profile scrapped:</h5>
              <h4>{scrappedNumber}</h4>
            </FragmentScrappedNumber>
          </Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <Form>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        name="location"
                        placeholder="location"
                        type="text"
                        className="form-control"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        list="location"
                      />
                      <datalist id="location">
                        {countries?.map((opt) => (
                          <option value={opt.name} />
                        ))}
                      </datalist>
                    </div>
                    <div className="form-group">
                      <input
                        name="option1"
                        type="text"
                        className="form-control"
                        placeholder="Option 1"
                        onChange={formik.handleChange}
                        value={
                          formik.values.location
                            ? formik.values.option1
                            : (formik.values.option1 = "")
                        }
                        disabled={!formik.values.location}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="option2"
                        className="form-control"
                        placeholder="Option 2"
                        value={
                          formik.values.location
                            ? formik.values.option2
                            : (formik.values.option2 = "")
                        }
                        disabled={!formik.values.option1}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="option3"
                        className="form-control"
                        placeholder="Option 3"
                        value={
                          formik.values.location
                            ? formik.values.option3
                            : (formik.values.option3 = "")
                        }
                        disabled={!formik.values.option2}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={!formik.values.location}
                    >
                      Start Scrapping
                    </button>
                  </form>
                </Form>
              </div>
              <div className="col-6">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th scope="col">location</th>
                      <th scope="col">searched key words</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scrappedList?.map((object) => (
                      <tr>
                        <td>{object.location}</td>
                        <td>{object.scrapReq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const FragmentScrappedNumber = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Fragment = styled.div`
  display: flex;

  justify-content: flex-end;
`;

const Form = styled.div`
  padding: 10px;
`;

const yupSchema = Yup.object({
  option1: Yup.string(),
  option2: Yup.string(),
  option3: Yup.string(),
  location: Yup.string(),
});
