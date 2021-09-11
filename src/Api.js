import axios from "axios";

const fetchClient = () => {
  const defaultOptions = {
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  //   instance.interceptors.request.use(function (config) {
  //     const token =
  //       "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzQyOGU1ZDAwYWUzYjU3YWFlNDE0M2U4YzgxYzEzYiIsInN1YiI6IjYxM2NhNTMxZDRjYzhlMDAyYWI1NzE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zeSxJild7pPEHVpaHZ4X5M3OTqgbpCK2lAdioaX58VE";
  //     config.headers.Authorization = token ? `Bearer ${token}` : "";
  //     return config;
  //   });

  return instance;
};

export default fetchClient();
