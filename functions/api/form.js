export async function onRequestPost(request) {
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
        email: 'sender@example.com',
        name: 'Workers - MailChannels integration'
      },
      subject: 'Look! No servers',
      content: [
        {
          type: 'text/plain',
          value: 'And no email service accounts and all for free too!'
        }
      ]
    })
  })
  const response = await fetch(send_request)
  console.log(response)
  const result = await response.json()
  const body = {
    request: request,
    response: result
  }
  return new Response(body, {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
}
