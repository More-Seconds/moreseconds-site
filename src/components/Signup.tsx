import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FieldAttributes,
  ErrorMessage,
  FormikTouched,
  FormikErrors
} from 'formik'
import * as Yup from 'yup'
import { Button } from './Button'

interface FormField {
  email: string
}

const initialValue = { signUpEmail: '' }

const validate = Yup.object({
  signUpEmail: Yup.string().email('Must be valid email')
})

export function Signup() {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, actions) => console.log(values, actions)}
    >
      <Form className="z-10 max-w-md lg:max-w-lg">
        <fieldset className="flex pr-1 bg-black border-2 rounded-full bg-opacity-90 border-dark">
          <Field
            type="email"
            id="sign-up-email"
            name="signUpEmail"
            placeholder="Enter your email"
            className="bg-transparent text-light placeholder:text-light pl-6 py-3.5 w-full focus:rounded-l-full"
          ></Field>
          <div className="min-w-max py-3.5">
            <Button href="#">Get More Seconds</Button>
          </div>
        </fieldset>
        <ErrorMessage
          name="signUpEmail"
          className="text-red-600"
          component="span"
        />
      </Form>
    </Formik>
  )
}
