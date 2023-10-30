module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.vue", "!src/**/*.spec.js", "!src/**/style.vue", "!src/**/template.vue"]
};