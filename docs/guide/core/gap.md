# UI Gap

Termeh provides utilities to define and retrieve spacing gaps in a consistent and reusable way. You can create named gaps, access individual values, or filter sets of gaps for use in layouts and components.

::: scheme
Gaps are scheme-based, meaning they can have different values depending on the active color scheme.
:::

## Define Gap

Register a new gap value.

::: error
**throws** If the input name is not a string or the input gap is not a number.
:::

::: definition

**Signature:**

```scss
@mixin define-gap($name: STRING, $gap: NUMBER);
```

**Example:**

```scss
@include termeh.define-gap("small", 8px);
@include termeh.define-gap("medium", 16px);
@include termeh.define-gap("large", 32px);
```

:::

## Override Gap

Overrides an existing gap for a specific scheme.

::: error
**throws** If the input scheme or name is not a string, if the input gap is not a number, or if the gap is not defined in main scheme.
:::

::: definition

**Signature:**

```scss
@mixin override-gap($scheme: STRING, $name: STRING, $gap: NUMBER);
```

**Example:**

```scss
@include termeh.override-gap("dark", "small", 10px);
```

:::

## Gap Value

Gets the value of a gap by its name.

::: error
**throws** If the input name is not a string or if the gap is not found.
:::

::: definition

**Signature:**

```scss
@function gap-value($name: STRING): NUMBER;
```

**Example:**

```scss
$small-gap: termeh.gap-value("small"); // 8px
$medium-gap: termeh.gap-value("medium"); // 16px
```

:::

## Scheme Gap

Retrieves the value of a gap for a specific scheme. This function will return main scheme gap as fallback.

::: error
**throws** If the input scheme or name is not a string, or if the gap is not defined in the main scheme.
:::

::: definition

**Signature:**

```scss
@function scheme-gap($scheme: STRING, $name: STRING): NUMBER;
```

**Example:**

```scss
$small-gap-dark: termeh.scheme-gap("dark", "small"); // 10px
```

:::

## Gap

Returns the CSS variable reference for a gap by its name.

::: error
**throws** If the input name is not a string or if the gap is not found.
:::

::: definition

**Signature:**

```scss
@function gap($name: STRING): VAR();
```

**Example:**

```scss
$small-gap: termeh.gap("small"); // var(--termeh-gap-small, 8px)
$medium-gap: termeh.gap("medium"); // var(--termeh-gap-medium, 16px)
```

:::

## Gaps

Gets a filtered map of gaps, returning both names and CSS variable reference, for iteration.

::: definition

**Signature:**

```scss
@function gaps($includes: LIST = null, $excludes: LIST = null): MAP<STRING, VAR()>;
```

**Example:**

```scss
.container {
  // Only "small" and "medium"
  @each $name, $gap in termeh.gaps(("small", "medium")) {
    &.is-#{$name} {
      padding: $gap;
    }
  }

  // All gaps except "large"
  @each $name, $gap in termeh.gaps(null, ("large")) {
    &.is-#{$name} {
      padding: $gap;
    }
  }
}
```

:::
