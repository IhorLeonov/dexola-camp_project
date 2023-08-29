import styles from "./JoinUs.module.scss";
import flagIcon from "../../assets/icons/flag-ukr.svg";
import { Formik } from "formik";
import { Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const required = "Please complete this field.";
const schema = Yup.object().shape({
  email: Yup.string().email("Is not valid email.").trim().required(required),
  phone: Yup.string()
    .trim()
    .matches(/^\+?3?8?(0\d{9})$/, "Is not valid phone.")
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

        // if (!window.ethereum)
        //   return toast.error("No crypto wallet found. Please install it!");
        // if (!userAccount) return toast.error("Please connect to wallet!");

        handleSubmit(email, phone, password, confirmPass);
        actions.resetForm();
      }}
    >
      {() => (
        // {
        // dirty,
        // errors,
        // touched
        // }
        <Form className={styles.join_form}>
          <label className={styles.join_form_label}>
            <span className={styles.join_form_marker}>*</span>
            <Field
              className={styles.join_form_input}
              type="email"
              name="email"
              placeholder="Enter email"
              autocomplete="off"
            />
          </label>
          <div className={styles.join_form_error_box}>
            <ErrorMessage
              className={styles.join_form_error}
              name="email"
              component="p"
            />
          </div>

          <label className={styles.join_form_label}>
            <img
              className={styles.join_form_flagicon}
              src={flagIcon}
              alt="Flag of Ukraine"
            />
            <Field
              className={styles.join_form_input}
              type="text"
              name="phone"
              placeholder="+38(0__) ___ __ __"
              autocomplete="off"
            />
          </label>
          <div className={styles.join_form_error_box}>
            <ErrorMessage
              className={styles.join_form_error}
              name="phone"
              component="p"
            />
          </div>

          <label className={styles.join_form_label}>
            <span className={styles.join_form_marker}>*</span>
            <Field
              className={styles.join_form_input}
              type="text"
              name="password"
              placeholder="Password"
              autocomplete="off"
            />
          </label>
          <div className={styles.join_form_error_box}>
            <ErrorMessage
              className={styles.join_form_error}
              name="password"
              component="p"
            />
          </div>
          <label className={styles.join_form_label}>
            <span className={styles.join_form_marker}>*</span>
            <Field
              className={styles.join_form_input}
              type="text"
              name="confirmPass"
              placeholder="Confirm Password"
              autocomplete="off"
            />
          </label>
          <div className={styles.join_form_error_box}>
            <ErrorMessage
              className={styles.join_form_error}
              name="confirmPass"
              component="p"
            />
          </div>

          <button className={styles.join_form_btn} type="submit">
            Send it
          </button>
        </Form>
      )}
    </Formik>
  );
};
