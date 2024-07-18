export type AppConfig = {
    apiPrefix: string;
  };

const appConfig: AppConfig = {
    apiPrefix: process.env.NEXT_PUBLIC_API_PREFIX || "",
  };

export default appConfig;