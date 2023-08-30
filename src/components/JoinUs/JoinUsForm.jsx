import s from "./JoinUs.module.scss";
import flagIcon from "../../assets/icons/flag-ukr.svg";
import { Formik } from "formik";
import { Form, Field as Input } from "formik";
import * as Yup from "yup";
// import { useState } from "react";

const required = "Please complete this field.";
const schema = Yup.object().shape({
  email: Yup.string().email("Is not valid email.").trim().required(required),
  phone: Yup.string()
    .trim()
    .matches(/^\+?3?8?(0\d{9})$/, "Is not valid phone number.")
    .required(required),
  password: Yup.string()
    .trim()
    .min(6, "Password must be longer.")
    .max(16, "Password must be shorter.")
    .required(required),
  confirmPass: Yup.string()
    .trim()
    .oneOf([Yup.ref("password"), null], "Password mismatch.")
    .required(required),
});

export const JoinUsForm = () => {
  const handleSubmit = (email, phone, password, confirmPass) => {
    console.log({
      email,
      phone,
      password,
      confirmPass,
    });
  };

  return (
    <Formik
      initialValues={{ email: "", phone: "", password: "", confirmPass: "" }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const { email, phone, password, confirmPass } = values;

        handleSubmit(email, phone, password, confirmPass);
        actions.resetForm();
      }}
    >
      {({ touched, errors }) => {
        // adding label invalid class function
        const invalidInput = (inputName) => {
          const checkError = touched[inputName] && errors[inputName];
          return checkError ? "invalid_input" : "";
        };
        // check error existence
        const emailError = touched.email && errors.email;
        const phoneError = touched.phone && errors.phone;
        const passwordError = touched.password && errors.password;
        const confirmPassError = touched.confirmPass && errors.confirmPass;

        return (
          <Form className={s.join_form}>
            <label className={s.join_form_label}>
              <Input
                className={s.join_form_input + " " + invalidInput("email")}
                type="email"
                name="email"
                placeholder="Enter email"
                autoComplete="off"
              />
              <span className={s.join_form_marker}>*</span>
              <div className={s.join_form_error_box}>
                {emailError && (
                  <p className={s.join_form_error}>{errors.email}</p>
                )}
              </div>
            </label>

            <label className={s.join_form_label}>
              <Input
                className={s.join_form_input + " " + invalidInput("phone")}
                type="text"
                name="phone"
                placeholder="+38(0__) ___ __ __"
                autoComplete="off"
              />
              <img
                className={s.join_form_flagicon}
                src={flagIcon}
                alt="Flag of Ukraine"
              />
              <div className={s.join_form_error_box}>
                {phoneError && (
                  <p className={s.join_form_error}>{errors.phone}</p>
                )}
              </div>
            </label>

            <label className={s.join_form_label}>
              <Input
                className={s.join_form_input + " " + invalidInput("password")}
                type="text"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <span className={s.join_form_marker}>*</span>
              <div className={s.join_form_error_box}>
                {passwordError && (
                  <p className={s.join_form_error}>{errors.password}</p>
                )}
              </div>
            </label>

            <label className={s.join_form_label}>
              <Input
                className={
                  s.join_form_input + " " + invalidInput("confirmPass")
                }
                type="text"
                name="confirmPass"
                placeholder="Confirm Password"
                autoComplete="off"
              />
              <span className={s.join_form_marker}>*</span>
              <div className={s.join_form_error_box}>
                {confirmPassError && (
                  <p className={s.join_form_error}>{errors.confirmPass}</p>
                )}
              </div>
            </label>

            <button className={s.join_form_btn} type="submit">
              Send it
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
