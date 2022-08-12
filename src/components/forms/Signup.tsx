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
  FormikErrors,
  FormikValues
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

async function submitForm(values: FormikValues) {
  console.log(values)
  const response = await fetch('/api/', {
    method: 'POST',
    headers: {
      accepts: 'application/json'
    },
    body: JSON.stringify(values)
  })
  console.log(await response.json())
}

export function Signup(props: Props) {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, actions) => submitForm(values)}
    >
      <Form
        data-static-form-name="signup"
        className="z-10 max-w-md xl:max-w-none xl:w-[550px]"
      >
        <fieldset
          className={
            'relative flex pr-1 ' + getConditionalStyles(props.variant)
          }
        >
          <Field
            type="email"
            id="sign-up-email"
            name="signUpEmail"
            placeholder="your email"
            className={
              'bg-transparent text-light placeholder:text-mid placeholder:font-bold placeholder:uppercase pl-6 xl:py-6 py-4 w-full focus:rounded-l-full ' +
              props.className
            }
          ></Field>
          <div className="min-w-max xl:py-6 py-4 absolute xl:right-3 right-1.5">
            <button
              type="submit"
              className="'px-12 bg-gradient-to-b from-accent to-[#FFAD72] text-light text-center font-DM min-w-max max-h-fit rounded-3xl justify-self-center xl:justify-self-auto font-bold text-sm sm:text-base px-4 xl:py-4 py-3 sm:rounded-[60px]"
            >
              Get More Seconds
            </button>
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
