import axios from "axios";
const api = axios.create({
    baseURL: "https://jiranew.cybersoft.edu.vn/api/",
})
api.interceptors.request.use((config)=>{
    config.headers = {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIxMC8wNC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2ODEwODQ4MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY4MTIzMjQwMH0._MPzAQorNhL5oVaR3-Az5_jYKW0_Acc0NBq1nZapr5k",
        Authorization: localStorage.getItem("JiraSignin")
        ? `Bearer ${JSON.parse(localStorage.getItem("JiraLogin")).accessToken}`
        : ""
    };
    return config;
});

export {api};