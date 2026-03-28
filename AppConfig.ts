interface Environment {
  APP_ENVIRONMENT: string;
  BASE_URL: string;
}

// ✅ Load from Nuxt runtime env
const environment: Environment = {
  APP_ENVIRONMENT: process.env.NODE_ENV || "development",
  BASE_URL: process.env.BASE_URL || "http://localhost:3000/v1",
};

export default environment;