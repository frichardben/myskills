module.exports = {
  preset: "react-native",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
  transformIngnorePatters: ["node_modules/(?!@react-native|react-native|)"],
};
