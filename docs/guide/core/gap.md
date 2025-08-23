# UI Gap

Termeh provides utilities to define and retrieve spacing gaps in a consistent and reusable way. You can create named gaps, access individual values, or filter sets of gaps for use in layouts and components.

## Define Gap

Register a new gap value.

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

## Gap

Retrieves a defined gap value by its name or generates an _error_ if the gap is not defined.

::: definition

**Signature:**

```scss
@function gap($name: STRING): NUMBER;
```

**Example:**

```scss
$small-gap: termeh.gap("small"); // 8px
$medium-gap: termeh.gap("medium"); // 16px
```

:::

## Gaps

Gets a filtered map of gaps, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function gaps($includes: LIST = null, $excludes: LIST = null): MAP<STRING, NUMBER>;
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
