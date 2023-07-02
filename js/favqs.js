const api_url ="https://zenquotes.io/api/quotes/";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log('xxxx');
  console.log(data);
}

getapi(api_url);
