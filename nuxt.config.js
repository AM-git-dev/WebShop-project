export default defineNuxtConfig({
  compatibilityDate: "2025-02-27",
    css: ["~/assets/css/reset.css"],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost/backend/routes"
    }
  }
});