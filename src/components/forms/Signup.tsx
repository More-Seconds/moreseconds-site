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
import { Button } from '../Button'

type Props = {
  className?: string
  variant: string
}

const initialValue = { signUpEmail: '' }

const validate = Yup.object({
  signUpEmail: Yup.string().email('Must be valid email')
})

function getConditionalStyles(variant: string) {
  switch (variant) {
    default:
      return 'bg-black border-2 rounded-full bg-opacity-90 border-dark'
    case 'secondary':
      return 'bg-darkermid rounded-full bg-opacity-90'
  }
}

export function Signup(props: Props) {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, actions) => console.log(values, actions)}
    >
      <Form className="z-10 max-w-md lg:max-w-lg">
        <fieldset
          className={'flex pr-1 ' + getConditionalStyles(props.variant)}
        >
          <Field
            type="email"
            id="sign-up-email"
            name="signUpEmail"
            placeholder="your email"
            className={
              'bg-transparent text-light placeholder:text-mid placeholder:uppercase pl-6 py-3.5 w-full focus:rounded-l-full ' +
              props.className
            }
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
