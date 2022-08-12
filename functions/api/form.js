export async function onRequestPost(request) {
  const requestData = await request.request.json()
  let message
  if (requestData.signUpEmail) {
    message = `New Signup Email: ${requestData.signUpEmail}`
  } else if (requestData.firstName) {
    message = `New Form Sumbission. Name: ${requestData.firstName} ${requestData.lastName} \n Email: ${requestData.email} \n Business: ${requestData.business} \n Business Size: ${requestData.businessSize} \n Phone: ${requestData.phone}`
  } else {
    message = 'error'
  }
  const send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
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
          value: message
        }
      ]
    })
  })
  const response = await fetch(send_request)
  console.log(response)
  const body = JSON.stringify({
    request: JSON.stringify(requestData),
    response: response.status == 202 ? 'success' : 'fail'
  })
  return new Response(body, {
    headers: {
      'content-type': 'application/json'
    }
  })
}
