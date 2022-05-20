module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/jsx-runtime"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "rules": { "react/prop-types": 0,
    "react/react-in-jsx-scope": 0
    }
}
