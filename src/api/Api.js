/* data api ini didapatkan dari kemenag
yang disajikan soleh santrikoding
*/
import axios from "axios";

const Api = axios.create({
  baseURL: "https://imsakiyah-api.santrikoding.com",
});

export default Api;
