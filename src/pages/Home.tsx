import { Layout } from 'components/Layout'

export function Homepage() {
  return (
    <Layout>
      <div className="">
        <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-light uppercase">
              Welcome to
            </h2>
            <p className="my-3 text-4xl font-bold text-light sm:text-5xl sm:tracking-tight lg:text-6xl">
              More Seconds 😃
            </p>
            <p className="mt-5"></p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
