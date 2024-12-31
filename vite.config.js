import { defineConfig } from "vite";

const baseURL = process.env.BASEURL || "/";

export default defineConfig({
  base: baseURL,
});
