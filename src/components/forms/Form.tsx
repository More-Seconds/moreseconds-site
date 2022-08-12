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
  firstName: string
  lastName: string
  email: string
  business: string
  businessSize: string
  phone: string
}

type Props = {
  levelUp?: boolean
}

export function FooterForm({ levelUp }: Partial<Props>) {
  const [submitStatus, setSubmitStatus] = useState('')
  const initialValues: FormFields = {
    firstName: '',
    lastName: '',
    email: '',
    business: '',
    businessSize: '',
    phone: ''
  }

  const validate = Yup.object({
    firstName: Yup.string().required('This field is required'),
    lastName: Yup.string().required('This field is required'),
    email: Yup.string().email().required('This field is required'),
    business: Yup.string(),
    businessSize: Yup.string(),
    phone: Yup.string()
  })

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
      `peer font-Poppins text-dark text-lg bg-darkmid rounded-2xl p-5 w-full border ` +
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
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const result = await response.json()
      console.log(result)
      setSubmitStatus(result.response)
      actions.resetForm()
    } catch {
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
        <Form data-static-form-name="contact" className="grid w-full gap-2">
          <div className={containerStyles}>
            <Field
              id="firstName"
              name="firstName"
              className={inputStyles(
                props.touched.firstName,
                props.errors.firstName
              )}
            />
            <label
              htmlFor="firstName"
              className={labelStyles(props.values.firstName)}
            >
              FIRST NAME
            </label>
            <ErrorMessage
              name="firstName"
              className="text-red-600"
              component="div"
            />
          </div>
          <div className={containerStyles}>
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
          </div>
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
              id="business"
              name="business"
              className={inputStyles(
                props.touched.business,
                props.errors.business
              )}
            />
            <label
              htmlFor="business"
              className={labelStyles(props.values.business)}
            >
              BUSINESS
            </label>
            <ErrorMessage
              name="business"
              className="text-red-600"
              component="div"
            />
          </div>
          <div className={containerStyles}>
            <Field
              id="businessSize"
              name="businessSize"
              className={inputStyles(
                props.touched.businessSize,
                props.errors.businessSize
              )}
            />
            <label
              htmlFor="businessSize"
              className={labelStyles(props.values.businessSize)}
            >
              BUSINESS SIZE
            </label>
            <ErrorMessage
              name="businessSize"
              className="text-red-600"
              component="div"
            />
          </div>
          <div className={containerStyles}>
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
          </div>
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
            type="submit"
            className="px-12 py-3 mt-2 font-bold bg-gradient-to-b from-accent to-[#FFAD72] text-light font-DM rounded-[40px] xl:justify-self-auto w-full sm:w-max"
            onClick={() => {
              props.handleSubmit()
              //props.resetForm()
            }}
          >
            Let's Chat
          </button>
        </Form>
      )}
    </Formik>
  )
}
