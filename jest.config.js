module.exports = {
  verbose: true,
  // testEnvironment: 'jsdom',
  errorOnDeprecated: true,
  "moduleNameMapper": {
    "^react-native$": "react-native-web",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy"
  },
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    '/.*.stories.[jt]sx?$',
    '/.*.test.[jt]sx?$',
    '/node_modules'
  ],
  "setupFiles": [
    "react-app-polyfill/jsdom"
  ],
  "setupFilesAfterEnv": [],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironment: 'node',
};