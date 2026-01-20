import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        languageOptions:{
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
                beforeEach:'readonly',
                afterEach:'readonly',
                process: 'readonly',
                console: 'readonly',
            }
        },
        rules: {
            'no-unused-vars': 'warn',
        }
    }
]