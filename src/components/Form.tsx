import { Button } from "./Button";
import * as Yup from "yup";
import { Formik, Field, Form as Formi, FormikHelpers } from "formik";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string(),
});

export type Email = {
  type:
    | "general"
    | "Life Insurance"
    | "Super Visa Insurance"
    | "Investments"
    | "Travel Insurance";
  message: string;
};
const emailTemplates: Email[] = [
  {
    type: "general",
    message: "Im interested in hearing more about the services offered!",
  },
  { type: "Life Insurance", message: "Need a quote regarding Life insurance" },
  {
    type: "Super Visa Insurance",
    message: "Need a quote regarding Super Visa Insurance",
  },
  {
    type: "Investments",
    message: "Need a quote for investment opportunities offered",
  },
  {
    type: "Travel Insurance",
    message: "Need a quote for Travel Insurance",
  },
];

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subject: number;
}

export const Form = ({ type }: { type: Email["type"] }) => {
  console.log(type);

  return (
    <div className="p-4 py-6 rounded-lg bg-white  md:p-8">
      <Formik
        enableReinitialize={true}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message:
            type && !!emailTemplates.find((e) => e.type === type)?.message
              ? emailTemplates.find((e) => e.type === type)?.message ?? ""
              : emailTemplates[0].message,
          subject:
            type && emailTemplates.findIndex((e) => e.type === type)
              ? emailTemplates.findIndex((e) => e.type === type)
              : 0,
        }}
        validationSchema={SignupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => (
          <Formi>
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                {props.errors.firstName && props.touched.firstName ? (
                  <div className="text-red">{props.errors.firstName}</div>
                ) : null}
                <Field
                  autoFocus={true}
                  name="firstName"
                  type="text"
                  placeholder="John "
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                {props.errors.lastName && props.touched.lastName ? (
                  <div className="text-red">{props.errors.lastName}</div>
                ) : null}
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                Email address
              </label>
              {props.errors.email && props.touched.email ? (
                <div className="text-red">{props.errors.email}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                Subject
              </label>

              <Field
                onChange={(e: { target: { value: number } }) => {
                  props.handleChange(e);
                  const value = e.target.value;
                  console.log(e.target.value);
                  props.setFieldValue("message", emailTemplates[value].message);
                }}
                name="subject"
                as="select"
                placeholder="johndoe@example.com"
                className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                {emailTemplates.map((e, i) => (
                  <option key={e.type} value={i}>
                    {e.type}
                  </option>
                ))}
              </Field>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-lg text-gray-600 dark:text-gray-200">
                Message
              </label>
              {props.errors.message && props.touched.message ? (
                <div className="text-red">{props.errors.message}</div>
              ) : null}
              <Field
                name="message"
                as="textarea"
                className="block w-full h-32 px-5 py-2.5 mt-2  bg-white border rounded-lg md:h-56 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Message"
              />
            </div>
            <Button type="submit" className="w-full my-5 bg-primary text-white">
              Send message
            </Button>
          </Formi>
        )}
      </Formik>
    </div>
  );
};
