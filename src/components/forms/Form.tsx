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
import InputMask from 'react-text-mask'
import { useState } from 'react'
import { BodyText } from 'components/typography/BodyText'

interface FormFields {
  fullName: string
  email: string
  companyName: string
  companySize: string
  message: string
}
// My modification
// interface FormFields {
//   fullName: string
//   email: string
//   companyName: string
//   companySize: string
// }

type Props = {
  levelUp?: boolean
}

export function FooterForm({ levelUp }: Partial<Props>) {
  const [submitStatus, setSubmitStatus] = useState('')
  const initialValues: FormFields = {
    fullName: '',
    email: '',
    companyName: '',
    companySize: '',
    message: ''
  }

  // my modification
  // const initialValues: FormFields = {
  //   fullName: '',
  //   email: '',
  //   companyName: '',
  //   companySize: ''
  // }

  const validate = Yup.object({
    fullName: Yup.string().required('This field is required'),
    email: Yup.string().email().required('This field is required'),
    companyName: Yup.string(),
    companySize: Yup.string(),
    message: Yup.string().required()
  })

  // My modification
  // const validate = Yup.object({
  //   fullName: Yup.string().required('This field is required'),
  //   email: Yup.string().email().required('This field is required'),
  //   companyName: Yup.string(),
  //   companySize: Yup.string()
  // })

  const phoneNumberMask = [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]

  const MaskedField = (props: FieldProps & FieldAttributes<any>) => {
    return <Field {...props} component={InputMask} />
  }

  const containerStyles = 'relative'
  const inputStyles = (
    touched: boolean | undefined,
    errors: string | undefined
  ) => {
    const validate = touched && errors ? 'border-2 border-red-600' : 'border-0'
    return (
      `peer font-Poppins text-dark text-lg sm:bg-[#dfe1e5] md:bg-darkmid rounded-2xl p-5 w-full border ` +
      validate
    )
  }
  const labelStyles = (value: string) => {
    const baseStyles = 'font-Poppins font-medium text-dark text-lg absolute '
    const focusStyles =
      'peer-focus:-top-2 peer-focus:bg-floatingLabel peer-focus:to-light peer-focus:p-0 peer-focus:mx-4 '
    const labelStylesIdle = 'left-0 p-5'
    const labelStylesActive =
      'left-0 p-5 -top-2 bg-floatingLabel to-light p-0 mx-4'
    if (value.length > 0) {
      return baseStyles + focusStyles + labelStylesActive
    } else {
      return baseStyles + focusStyles + labelStylesIdle
    }
  }

  async function submitForm(
    values: FormikValues,
    actions: FormikHelpers<FormFields>
  ) {
    console.log('submitted')
    try {
      const response = await fetch(import.meta.env.VITE_EMAIL_API_URL+'/ms-site/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const result = await response.json()
      console.log(result)
      setSubmitStatus('success')
      actions.resetForm()
    } catch(error: any) {
      console.log(error.message)
      setSubmitStatus('fail')
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, actions) => submitForm(values, actions)}
    >
      {(props) => (
        <Form
          data-static-form-name="contact"
          className="grid w-full gap-2 z-[9] relative"
        >
          <div className={containerStyles}>
            <Field
              id="fullName"
              name="fullName"
              className={inputStyles(
                props.touched.fullName,
                props.errors.fullName
              )}
            />
            <label
              htmlFor="fullName"
              className={labelStyles(props.values.fullName)}
            >
              FULL NAME
            </label>
            <ErrorMessage
              name="fullName"
              className="text-red-600"
              component="div"
            />
          </div>
          {/* <div className={containerStyles}>
            <Field
              id="lastName"
              name="lastName"
              className={inputStyles(
                props.touched.lastName,
                props.errors.lastName
              )}
            />
            <label
              htmlFor="lastName"
              className={labelStyles(props.values.lastName)}
            >
              LAST NAME
            </label>
            <ErrorMessage
              name="lastName"
              className="text-red-600"
              component="div"
            />
          </div> */}
          <div className={containerStyles}>
            <Field
              id="email"
              name="email"
              type="email"
              className={inputStyles(props.touched.email, props.errors.email)}
            />
            <label htmlFor="email" className={labelStyles(props.values.email)}>
              EMAIL
            </label>
            <ErrorMessage
              name="email"
              className="text-red-600"
              component="div"
            />
          </div>
          <div className={containerStyles}>
            <Field
              id="companyName"
              name="companyName"
              className={inputStyles(
                props.touched.companyName,
                props.errors.companyName
              )}
            />
            <label
              htmlFor="companyName"
              className={labelStyles(props.values.companyName)}
            >
              COMPANY NAME
            </label>
            <ErrorMessage
              name="CompanyName"
              className="text-red-600"
              component="div"
            />
          </div>
          <div className={containerStyles}>
            <Field
              id="companySize"
              name="companySize"
              className={inputStyles(
                props.touched.companySize,
                props.errors.companySize
              )}
            />
            <label
              htmlFor="companySize"
              className={labelStyles(props.values.companySize)}
            >
              COMPANY SIZE
            </label>
            <ErrorMessage
              name="companySize"
              className="text-red-600"
              component="div"
            />
          </div>

          <div className={containerStyles}>
            <Field
              id="message"
              name="message"
              as="textarea" // Use a textarea for the message field

              className={inputStyles(
                props.touched.message,
                props.errors.message
              )}
            />
            <label
              htmlFor="message"
              className={labelStyles(props.values.message)}
            >
              MESSAGE
            </label>
            <ErrorMessage
              name="message"
              className="text-red-600"
              component="div"
            />
          </div>
          {/* <div className={containerStyles}>
            <MaskedField
              mask={phoneNumberMask}
              id="phone"
              name="phone"
              className={inputStyles(props.touched.phone, props.errors.phone)}
              error={props.touched.phone && props.errors.phone}
              value={props.values.phone}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            <label htmlFor="phone" className={labelStyles(props.values.phone)}>
              PHONE NUMBER
            </label>
            <ErrorMessage
              name="phone"
              className="text-red-600"
              component="div"
            />
          </div> */}
          {levelUp == true ? (
            <p className="font-medium text-accent font-Poppins">
              Ready to level up?
            </p>
          ) : (
            ''
          )}
          {submitStatus == 'success' ? (
            <BodyText className="text-dark">
              We Recieved your Submission!
            </BodyText>
          ) : submitStatus == 'fail' ? (
            <BodyText className="text-red-600">Submission Failed</BodyText>
          ) : (
            <></>
          )}

          <button
            className="px-12 py-3 mt-2 font-bold bg-gradient-to-b from-accent to-[#FFAD72] text-light font-DM rounded sm:w-full-auto w-full md:w-max xl:justify-self hover:from-[#FFAD72] hover:to-accent"
            type="button"
            onClick={() => props.handleSubmit()}
          >
            Let's Chat
          </button>
        </Form>
      )}
    </Formik>
  )
}
