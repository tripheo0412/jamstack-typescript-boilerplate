module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/config/testing/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/index.tsx',
    '!src/App.tsx',
  ],
  transform: {
    '^.+\\.jsx?$': `<rootDir>/jest-preprocess.js`,
  },
  // individual test will be reported
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node', 'json'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/testing/__mocks__/fileMock.ts',
    '\\.(css|less|sass|scss)$':
      '<rootDir>/config/testing/__mocks__/styleMock.ts',
    // '<rootDir>/src/services/i18n.ts':
    // 	'<rootDir>/config/testing/__mocks__/i18nMock.tsx',
  },
  // Where Jest detectes test files
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{ts,tsx,js,jsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx,js,jsx}',
  ],
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  // configure minimum threshold enforcement for coverage results
  // https://jestjs.io/docs/en/configuration#coveragethreshold-object
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
}
