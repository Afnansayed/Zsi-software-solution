import axios from 'axios';

  const axiosPublic = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
  })
const UsePublic = () => {
    return  axiosPublic;
};

export default UsePublic;