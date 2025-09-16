/** @type {import('stylelint').Config} */
module.exports = {
    extends: ["stylelint-config-standard-scss"],
    plugins: ["stylelint-scss"],
    rules: {
        "property-no-vendor-prefix": null,
        "at-rule-empty-line-before": null,
        "scss/no-global-function-names": null,
        "scss/dollar-variable-empty-line-before": null,
        "scss/at-mixin-argumentless-call-parentheses": null,
        "scss/double-slash-comment-empty-line-before": null,
        "scss/at-extend-no-missing-placeholder": null
    }
};
