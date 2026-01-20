
export default {
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    collectCoverage: true,
    coveageDirectory: 'coverage',
    coverageReporters:['text','lcov','html'],
    transform: {},
    testPathIgnorePatterns:['/node_modules/']
};