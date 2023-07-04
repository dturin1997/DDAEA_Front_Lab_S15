import HomePageComponent from "../components/HomePageComponent";
import axios from "axios";

const getPeople = async (token) => {
  const { data } = await axios.get("https://localhost:7267/People/Get", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const HomePage = () => {
  return <HomePageComponent getPeople={getPeople} />;
};

export default HomePage;
