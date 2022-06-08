import { defineConfig } from "windicss/helpers";

export default defineConfig({
  /* configurations... */
  attributify: {
    prefix: "w:",
  },
  theme: {
    extend: {
      fontFamily: {
        MonoSpace: ["DM Mono"],
      },
      colors: {},
    },
  },
});
