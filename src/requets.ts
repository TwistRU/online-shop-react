export const getData = async (path: string) => {
  return fetch(`http://localhost:3000/data/${path}`
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  )
  .then(response => response.json())
  .then((responseData) => {
    //console.log(responseData);
    return responseData;
  })

}