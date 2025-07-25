// netlify/functions/form-handler.js
const querystring = require('querystring');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const formData = querystring.parse(event.body);
  console.log('Nova inscrição:', formData);

  return {
    statusCode: 302,
    headers: { Location: '/obrigado.html' }
  };
};
