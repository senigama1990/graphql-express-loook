async function request1(query, variables) {
  let response = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  })

  response = await response.json()
  return response.data
}


function createElement(...elements) {
  let res = []
  for (let el of elements) {
    res.push(document.createElement(el));
  }
  return res
}


function getElement(...elements) {
  let res = [];
  for (let el of elements) {
    res.push(document.querySelector(el));
  }
  return res;
}