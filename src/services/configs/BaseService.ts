import axios from "axios";
import appConfig from "./app.config";

const BaseService = axios.create({
  baseURL: appConfig.apiPrefix,
});

// BaseService.interceptors.request.use(
//   (config) => {
//     const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
//     const persistData = deepParseJson(rawPersistData);

//     let accessToken = (persistData as any).auth.session.token;

//     if (!accessToken) {
//       const { auth } = store.getState();
//       accessToken = auth.session.token;
//     }

//     const { auth } = store.getState();

//     if (accessToken) {
//       config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
//       config.headers["location"] = `${auth?.session?.selectedLocation?.value}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default BaseService;
