import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
};

export default config;