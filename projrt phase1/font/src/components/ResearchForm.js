import { useFormik } from "formik";
import styled from "styled-components";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
export const ResearchForm = ({ getProfiles }) => {
  const [scrappedList, setScrappedList] = useState([]);
  const [loader, setLoader] = useState(true);
  const formik = useFormik({
    initialValues: {
      experience: "",
      field: "",
      location: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      getProfiles(values);
    },
  });

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
    setLoader(false);
    console.log(scrappedList);
  }, []);

  return (
    <Wrapper>
      <Title>Search:</Title>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormField
            type="number"
            name="experience"
            placeholder="experience"
            value={
              formik.values.field
                ? formik.values.experience
                : (formik.values.experience = "")
            }
            onChange={formik.handleChange}
            disabled={!formik.values.field}
          ></FormField>
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="field"
            placeholder="field"
            list="field"
            value={formik.values.field}
            onChange={formik.handleChange}
          ></FormField>
          <datalist id="field">
            {scrappedList?.map((opt) =>
              opt.scrapReq.split(" ")?.map((field) => <option value={field} />)
            )}
          </datalist>
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="location"
            placeholder="location"
            list="location"
            value={formik.values.location}
            onChange={formik.handleChange}
          ></FormField>
          <datalist id="location">
            {scrappedList?.map((opt) => (
              <option value={opt.location} />
            ))}
          </datalist>
        </FormGroup>

        <FormButton type="submit">Search</FormButton>
      </Form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 973px) {
    margin-top: 5%;
    margin-bottom: 5%;
  }
`;
const Title = styled.h2`
  color: black;
`;
const FormGroup = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
`;
const Form = styled.form`
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
`;
const FormField = styled.input`
  color: black;
  padding: 15px;
  outline: 0;
  border-radius: 10px;
  border-width: 0 0 2px;
  border-color: #ebebeb;
  ::placeholder {
    color: grey;
    opacity: 0.6px;
  }
`;
const FormButton = styled.button`
  background: #7386d5;
  text-transform: uppercase;
  color: white;
  border-radius: 10px;
  padding: 15px;
  border: 0;
  font-size: large;
  margin: 10px 0;
  font: 200 larger Kiona;
`;

const yupSchema = Yup.object({
  experience: Yup.string(),
  field: Yup.string(),
  location: Yup.string(),
});
