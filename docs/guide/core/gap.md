# UI Gap

Termeh provides utilities to define and retrieve spacing gaps in a consistent and reusable way. You can create named gaps, access individual values, or filter sets of gaps for use in layouts and components.

## Define Gap

Defines a new gap value.

::: code-group

```scss [usage.scss]
@mixin define-gap($name, $gap);
```

```scss [example.scss]
@include define-gap("small", 8px);
@include define-gap("medium", 16px);
@include define-gap("large", 32px);
```

:::

## Gap

Retrieves a defined gap value by its name.

::: code-group

```scss [usage.scss]
@function gap($name);
```

```scss [example.scss]
$small-gap: gap("small"); // 8px
$medium-gap: gap("medium"); // 16px
```

:::

## Gaps

Gets a filtered map of gaps.

::: code-group

```scss [usage.scss]
@function gaps($includes: null, $excludes: null);
```

```scss [example.scss]
$some-gaps: gaps(("small", "medium")); // Only "small" and "medium"
$all-but-large: gaps(null, ("large")); // All gaps except "large"
```

:::
