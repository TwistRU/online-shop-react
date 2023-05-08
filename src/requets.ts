import axios from "axios";

export const getData = async (path: string) => {
    const baseURL = "http://158.160.96.8/api/";
  return await axios.get(baseURL+path, {
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  })
  .then(response => response.data)
  .then((responseData) => {
    //console.log(responseData);
    return responseData;
  })

}