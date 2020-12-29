module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:vue/recommended"],
    parserOptions: {
        parser: "babel-eslint"
    }
};