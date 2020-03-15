module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/examples/$1',
    '^~/(.*)$': '<rootDir>/packages/$1'
  }
};
