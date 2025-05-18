import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default antfu(
    {
        type: "app",
        typescript: true,
        formatters: true,
        stylistic: {
            indent: 4,
            semi: true,
            quotes: "double",
        },
    },
    {
        plugins: {
            "@next/next": nextPlugin,
        },
        rules: {
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs["core-web-vitals"].rules,
        },
    },
    {
        rules: {
            "ts/no-redeclare": "off",
            "ts/consistent-type-definitions": ["error", "type"],
            "no-console": ["warn"],
            "antfu/no-top-level-await": ["off"],
            "node/prefer-global/process": ["off"],
            "node/no-process-env": ["error"],
            "perfectionist/sort-imports": ["error", {
                tsconfigRootDir: ".",
            }],
            "unicorn/filename-case": ["error", {
                case: "kebabCase",
                ignore: ["README.md"],
            }],
        },
    },
);
