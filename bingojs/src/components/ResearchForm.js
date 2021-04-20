import { useFormik } from "formik";
import styled from "styled-components";
import { useState } from "react";
import * as Yup from "yup";
export const ResearchForm = ({ getProfiles }) => {
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

  return (
    <Wrapper>
      <Title>Search:</Title>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup></FormGroup>
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
            value={formik.values.field}
            onChange={formik.handleChange}
          ></FormField>
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="location"
            placeholder="location"
            value={formik.values.location}
            onChange={formik.handleChange}
          ></FormField>
        </FormGroup>

        <FormButton type="submit">enregistrer</FormButton>
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
