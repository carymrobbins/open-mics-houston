import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://caryrobbins.com",
  base: "/open-mics-houston/",
  integrations: [react()],
});
