import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/users/";

const register = (email:string) => {
  return axios.post(API_URL + "create-coach", {
    email
  });
};

const login = (email:string, password:string) => {
  return axios
    .post(API_URL + "coach-login", {
      email,
      password
    })
    .then((response) => {
      //console.log("response from server", response);
      // if (response.data.accessToken) {
      //   localStorage.setItem("user", JSON.stringify(response.data));
      // }
      return response.data;
    });
};

const otp = (email:string, otp:number) => {
  console.log("sending otp",otp);
  return axios.post(API_URL + "coach-otp", {
    email,
    otp
  }).then((response) => {
    console.log("response from server", response);
    if (response.data.token) {
      localStorage.setItem("coach", JSON.stringify(response.data.coach));
    }
    return response.data;
  });;
};

const logout = () => {
  localStorage.removeItem("coach");
};

const authService = {
  register,
  login,
  logout,
  otp
};

export default authService;