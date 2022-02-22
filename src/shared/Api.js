import axios from "axios";

// 데이터 들어오는 지 확인용
axios.get("http://localhost:4000/requests").then((data) => console.log(data));

const Api = axios.create({
  baseURL: "http://localhost:4000/requests",
});

export default Api;