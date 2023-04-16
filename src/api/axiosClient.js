/* axiosはAPIを叩くためのライブラリ */
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

//ローカルストレージからトークンを取得
const getToken = () => {
  localStorage.getItem("token");
};

/* カスタムでaxiosのインスタンスを作成(https://axios-http.com/docs/instance) */
/* 追加できるオブジェクト一覧(https://axios-http.com/docs/req_config) */
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

/* APIを叩く前（リクエストを送る前）に前処理を捕まえる(https://axios-http.com/docs/interceptors) */
axiosClient.interceptors.request.use(async (config) => {
  return {
    config,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`, //リクエストヘッダにJWTをつけてサーバーに渡す
    },
  };
});
