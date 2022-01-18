// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  root: "src",
  plugins: [
    'snowpack-plugin-glslify'
  ]
};
