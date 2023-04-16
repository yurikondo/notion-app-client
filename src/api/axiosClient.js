/* axiosはAPIを叩くためのライブラリ */
import axios from "axios";
const BASE_URL = "http://localhost:4000/api/v1";

/* カスタムでaxiosのインスタンスを作成(https://axios-http.com/docs/instance) */
/* 追加できるオブジェクト一覧(https://axios-http.com/docs/req_config) */
const axiosClient = axios.create({
  baseURL: BASE_URL,
});
