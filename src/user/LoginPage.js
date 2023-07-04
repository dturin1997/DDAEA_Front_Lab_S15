import LoginPageComponent from "../components/LoginPageComponent";
import axios from "axios";

const loginUserApiRequest = async (UserName, Password) => {
  const { data } = await axios.post(
    "https://localhost:7267/security/createToken",
    {
      UserName,
      Password,
    }
  );
  return data;
};
const LoginPage = () => {
  return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} />;
};

export default LoginPage;
