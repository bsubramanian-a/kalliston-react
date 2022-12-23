import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/v1/users/";
// const API_URL = "https://kalliston-api.onrender.com/api/v1/users/";


const register = (email:string) => {
  return axios.post(API_URL + "create-coach", {
    email
  });
};

const forget = (email:string) => {
  return axios.post(API_URL + "coach-forget", {
    email
  });
};

const forgetotp = (email:string, otp:number) => {
  console.log("sending otp",otp);
  return axios.post(API_URL + "coach-otp-forget", {
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

const login = (email:string, password:string) => {
  return axios
    .post(API_URL + "coach-login", {
      email,
      password
    })
    .then((response) => {
      return response.data;
    });
};

const coachUpdateProfilePic = async(image:any) => {
  const formData = new FormData();
  formData.append("image", image);

  const res = await axios({
    method: "post",
    url: API_URL + "coach-update-profile-pic",
    data: formData,
    headers: authHeader(),
  });
  localStorage.setItem("coach", JSON.stringify(res.data.coach));
  return res.data;
};

const coachUpdateProfile = (email?:string, firstname?:string, lastname?:string, gender?:any, dob?:any, email_notification?:any, client_request_notification?:any, message_from_client?:any, two_factor_auth?:any, sync_google?:any, cal?:any, bio?:any, customized_link?:any, website_link?:any, instagram_link?:any, facebook_link?:any, tiktok_link?:any, youtube_link?:any, cover_image?:any, user_type?:any, your_goal?:any, current_fitness_level?:any, latitude?:any, longitude?:any, billing_address1?:any, billing_address2?:any, city?:any, country?:any, experience?:any, certifications?:any, areas_of_interest?:any, long_description?:any) => {
  console.log("coach profile service", firstname)
  return axios
    .put(API_URL + "coach-update-profile", {
      email, 
      gender, 
      dob,  
      firstname, 
      lastname, 
      email_notification,
      client_request_notification,
      message_from_client,
      two_factor_auth,
      sync_google,
      cal,
      bio,
      customized_link,
      website_link,
      instagram_link,
      facebook_link,
      tiktok_link,
      youtube_link,
      cover_image,
      user_type,
      your_goal,
      current_fitness_level,
      latitude,
      longitude,
      billing_address1,
      billing_address2,
      city,
      country,
      experience,
      certifications,
      areas_of_interest,
      long_description
    }, { headers: authHeader() })
    .then((response) => {
      localStorage.setItem("coach", JSON.stringify(response.data.coach));
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
      localStorage.setItem("accesstoken", JSON.stringify(response.data.token));
    }
    return response.data;
  });;
};

const changepassword = (email:string, currentpassword:number, newpassword:number) => {
  console.log("email1",email);
    console.log("currentpassword1",currentpassword);
    console.log("newpassword1",newpassword);
  return axios.post(API_URL + "coach-change-password", {
    email,
    currentpassword,
    newpassword
  }, { headers: authHeader() }).then((response) => {
    console.log("response from server", response);
    if (response.data.token) {
      localStorage.setItem("coach", JSON.stringify(response.data.coach));
      localStorage.setItem("accesstoken", JSON.stringify(response.data.token));
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
  otp,
  forget,
  forgetotp,
  coachUpdateProfile,
  changepassword,
  coachUpdateProfilePic
};

export default authService;