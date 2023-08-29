import { BodyText } from 'components/typography/BodyText'
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
import { request } from 'https'
import { useState } from 'react'
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
      return 'bg-black sm:flex sm:flex-col  md:border-dark md:border-2 md:rounded-full md:bg-opacity-90'
    case 'secondary':
      return 'bg-darkermid rounded-full bg-opacity-90'
  }
}

export function Signup(props: Props) {
  const [submitStatus, setSubmitStatus] = useState('')

  async function submitForm(
    values: FormikValues,
    actions: FormikHelpers<{signUpEmail: string}>
  ) {
    try {
      console.log(values)
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const result = await response.json()
      setSubmitStatus(result.response)
      actions.resetForm()
    } catch {
      setSubmitStatus('fail')
      actions.resetForm()
    }
  }
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validate}
      onSubmit={(values, actions) => submitForm(values, actions)}
    >
      {({ handleSubmit, handleReset }) => (
        <Form
          data-static-form-name="signup"
          className="z-10 sm:max-w-[42ch] sm:w-full md:max-w-md xl:max-w-none xl:w-[550px]"
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
              placeholder="Enter your email"
              className={
                'text-light placeholder:text-mid placeholder:font-bold placeholder:uppercase pl-6 sm:border-dark sm:border-2 sm:rounded-0 sm:bg-opacity-90 sm:bg-transparent md:border-0 xl:py-6 py-4 w-full md:focus:rounded-l-full' +
                props.className
              }
            ></Field>
            <div className="py-1 sm:relative md:min-w-max md:absolute md:right-1">
              <button
                className="'px-12 bg-gradient-to-b from-accent to-[#FFAD72] text-light justify-self-center text-center font-DM min-w-max max-h-fit sm:w-full sm:rounded-0 sm:mt-[.3rem] md:mt-0 xl:justify-self-auto font-bold text-sm sm:text-base px-4 xl:py-5 py-3  md:rounded-[60px] hover:from-[#FFAD72] hover:to-accent"
                onClick={() => {
                  handleSubmit()
                }}
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
          {submitStatus == 'success' ? (
            <BodyText>We Recieved your Submission!</BodyText>
          ) : submitStatus == 'fail' ? (
            <BodyText className="text-red-600">Submission Failed</BodyText>
          ) : (
            <></>
          )}
        </Form>
      )}
    </Formik>
  )
}
