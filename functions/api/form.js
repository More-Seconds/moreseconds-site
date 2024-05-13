export async function onRequestPost(request) {
  try {
    const requestData = await request.request.json()
    console.log(requestData)
    const response = await fetch('http://3.95.225.68/api/ms-site/form-submission', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        data: requestData
      })
    });
    console.log(response.status);
    const body = JSON.stringify({
      request: JSON.stringify(requestData),
      response: response.status == 200 ? 'success' : 'fail'
    })
    return new Response(body, {
      headers: {
        'content-type': 'application/json'
      }
    })
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ response: 'fail' }), {
      headers: {
        'content-type': 'application/json'
      }
    })
  }
}
