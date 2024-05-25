module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        "prettier",
        "plugin:prettier/recommended"
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        "eslint-disable-next-line": 'off',
        // 启用额外规则
        "prettier/prettier": "off", // 这里关闭 prettier 是因为与 eslint 配置冲突导致报错
        "no-case-declarations": "off",
        "no-constant-condition": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        // 这里关闭在 ts 中使用 any 类型报错
        "@typescript-eslint/no-explicit-any": "off",
        // 忽略不使用 const 报错
        "prefer-const": ["off", {
            "destructuring": "any",
            "ignoreReadBeforeAssign": true
        }],
        "no-unused-vars": "off",
        "max-len": "off",
        "indent": "off",
        "comma-dangle": "off",
        "no-debugger": "off"
    },
}
