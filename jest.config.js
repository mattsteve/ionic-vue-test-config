module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    runner: '@jest-runner/electron',
    testEnvironment: '@jest-runner/electron/environment',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        '^.+\\.tsx?$': 'ts-jest'
    },
    transformIgnorePatterns: [
        'node_modules/?!(\\@ionic-enterprise)'
    ],
    modulePaths: [
        '<rootDir>'
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'json',
        'vue',
        'ts',
        'tsx'
    ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|styl|less|sass|sscss|svg|png|jpg|ttf|woff|woff2)$': '<rootDir>/empty-module.js',
        'vue.runtime.common.dev.js$': '<rootDir>/node_modules/vue/dist/vue.runtime.common.prod.js'
    },
    snapshotSerializers: [
        'jest-serializer-vue'
    ],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,ts,vue}',
        '!src/assets/**',
        '!src/types-vendor/**'
    ],
    globals: {
        'ts-jest': {
            babelConfig: true,
            diagnostics: false
        },
        'vue-jest': {
            diagnostics: false
        }
    },
    setupFilesAfterEnv: [
        './jest.setup-after-env.js'
    ]
};
