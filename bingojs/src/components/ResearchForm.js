import { useFormik } from "formik";
import styled from "styled-components";
import { useState } from "react";
import * as Yup from "yup";
export const ResearchForm = () => {
  const [showLoader, setShowLoader] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState({ visible: false, message: "" });
  const formik = useFormik({
    initialValues: {
      experience: "",
      field: "",
      location: "",
    },
    validationSchema: yupSchema,
    onSubmit: (values) => {
      setShowLoader(true);
    },
  });

  return (
    <Wrapper>
      <Title>Search:</Title>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          {error.visible && <FormError>{error.message}</FormError>}
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="experience"
            placeholder="experience"
            value={formik.values.experience}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.experience && formik.touched.experience && (
            <FormError>{formik.errors.experience}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="field"
            placeholder="field"
            value={formik.values.field}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.field && formik.touched.field && (
            <FormError>{formik.errors.field}</FormError>
          )}
        </FormGroup>
        <FormGroup>
          <FormField
            type="text"
            name="location"
            placeholder="location"
            value={formik.values.location}
            onChange={formik.handleChange}
          ></FormField>
          {formik.errors.location && formik.touched.location && (
            <FormError>{formik.errors.location}</FormError>
          )}
        </FormGroup>

        {showLoader && <Spinner></Spinner>}
        <FormButton disabled={showLoader}>enregistrer</FormButton>
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
const FormError = styled.p`
  color: #f74b1b;
`;
const Spinner = () => (
  <Loader viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="2"
    />
  </Loader>
);
const Loader = styled.svg`
  animation: rotate 2s linear infinite;
  display: flex;
  align-self: center;
  width: 50px;
  height: 50px;
  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const yupSchema = Yup.object({
  experience: Yup.string(),
  field: Yup.string(),
  location: Yup.string(),
});
