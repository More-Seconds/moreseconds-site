import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps
} from 'formik'

interface FormFields {
  firstName: string
  lastName: string
  email: string
  business: string
  businessSize: string
  phone: string
}

export function FooterForm() {
  const initialValues: FormFields = {
    firstName: '',
    lastName: '',
    email: '',
    business: '',
    businessSize: '',
    phone: ''
  }

  const containerStyles = 'relative'
  const labelStyles =
    'font-Poppins font-medium text-dark text-lg absolute left-0 p-5 peer-focus:-top-2 peer-focus:bg-floatingLabel to-light peer-focus:p-0 peer-focus:mx-4'
  const inputStyles =
    'peer font-Poppins font-medium text-dark text-lg bg-darkmid rounded-2xl p-5 w-full'
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => console.log(values, actions)}
    >
      <Form className="grid gap-2 w-full">
        <div className={containerStyles}>
          <Field id="firstName" name="firstName" className={inputStyles} />
          <label htmlFor="firstName" className={labelStyles}>
            FIRST NAME
          </label>
        </div>
        <div className={containerStyles}>
          <Field id="lastName" name="lastName" className={inputStyles} />
          <label htmlFor="lastName" className={labelStyles}>
            LAST NAME
          </label>
        </div>
        <div className={containerStyles}>
          <Field id="email" name="email" className={inputStyles} />
          <label htmlFor="email" className={labelStyles}>
            EMAIL
          </label>
        </div>
        <div className={containerStyles}>
          <Field id="business" name="business" className={inputStyles} />
          <label htmlFor="business" className={labelStyles}>
            BUSINESS
          </label>
        </div>
        <div className={containerStyles}>
          <Field
            id="businessSize"
            name="businessSize"
            className={inputStyles}
          />
          <label htmlFor="businessSize" className={labelStyles}>
            BUSINESS SIZE
          </label>
        </div>
        <div className={containerStyles}>
          <Field id="phone" name="phone" className={inputStyles} />
          <label htmlFor="phone" className={labelStyles}>
            PHONE NUMBER
          </label>
        </div>
        <button
          type="submit"
          className="py-3 px-12 mt-2 bg-accent text-light font-DM font-bold w-fit rounded-3xl justify-self-center lg:justify-self-auto"
        >
          Let's Chat
        </button>
      </Form>
    </Formik>
  )
}
