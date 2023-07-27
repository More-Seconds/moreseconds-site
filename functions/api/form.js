export async function onRequestPost(request) {
  try {
    const requestData = await request.request.json()
    console.log(requestData)
    let message
    if (requestData.signUpEmail) {
      message = `New Signup Email: ${requestData.signUpEmail}`
    } else if (requestData.fullName) {
      message = `New Form Sumbission. \n Name: ${requestData.fullName} \n Email: ${requestData.email} \n Business: ${requestData.companyName} \n Business Size: ${requestData.companySize} \n Message: ${requestData.message}`
    } else {
      message = 'error'
    }
    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'hello@moreseconds.com', name: 'Test Recipient' }]
          }
        ],
        from: {
          email: 'no-reply@moreseconds.com',
          name: 'More Seconds'
        },
        subject: 'New Form Submission',
        content: [
          {
            type: 'text/plain',
            value: message
          }
        ]
      })
    })
    // console.log(response)
    const body = JSON.stringify({
      request: JSON.stringify(requestData),
      response: response.status == 202 ? 'success' : 'fail'
    })
    return new Response(body, {
      headers: {
        'content-type': 'application/json'
      }
    })
  } catch (err) {
    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'ejensen@moreseconds.com', name: 'Test Recipient' }]
          }
        ],
        from: {
          email: 'no-reply@moreseconds.com',
          name: 'More Seconds'
        },
        subject: 'Look! No servers',
        content: [
          {
            type: 'text/plain',
            value: `There was an error submitting the contact form on the MS site. \n ${err}`
          }
        ]
      })
    })
    // const fullRes = await response.json()
    console.log(err)
    return new Response(JSON.stringify({ status: 'failed' }), {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
