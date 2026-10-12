# UI Gap

Termeh makes it easy to define and reuse spacing gaps throughout your styles. Give each gap a name, retrieve its value, or filter a set of gaps for use in layouts and components.

::: scheme
Gaps are scheme-based, so each gap can have a different value in the active color scheme.
:::

## Define Gap

Define a named gap and its value.

::: definition

**Signature:**

```scss
@mixin define-gap($name: String, $gap: Length);
```

**Example:**

```scss
@include termeh.define-gap("small", 8px);
@include termeh.define-gap("medium", 16px);
@include termeh.define-gap("large", 32px);
```

:::

::: error
**throw** If the name is not a string or the gap value is not a number.
:::

## Override Gap

Set a different value for an existing gap in a specific scheme.

::: definition

**Signature:**

```scss
@mixin override-gap($scheme: String, $name: String, $gap: Length);
```

**Example:**

```scss
@include termeh.override-gap("dark", "small", 10px);
```

:::

::: error
**throw** If the scheme or name is not a string, the gap value is not a number, or the gap is not defined in the main scheme.
:::

## Gap Value

Get a gap's value by name.

::: definition

**Signature:**

```scss
@function gap-value($name: String): Length;
```

**Example:**

```scss
$small-gap: termeh.gap-value("small"); // 8px
$medium-gap: termeh.gap-value("medium"); // 16px
```

:::

::: error
**throw** If the name is not a string or no gap with that name is found.
:::

## Scheme Gap

Get a gap's value for a specific scheme. If that scheme has no override, the main scheme's value is returned.

::: definition

**Signature:**

```scss
@function scheme-gap($scheme: String, $name: String): Length;
```

**Example:**

```scss
$small-gap-dark: termeh.scheme-gap("dark", "small"); // 10px
```

:::

::: error
**throw** If the scheme or name is not a string, or the gap is not defined in the main scheme.
:::

## Gap

Get the CSS variable reference for a gap by name.

::: definition

**Signature:**

```scss
@function gap($name: String): Variable;
```

**Example:**

```scss
$small-gap: termeh.gap("small"); // var(--termeh-gap-small, 8px)
$medium-gap: termeh.gap("medium"); // var(--termeh-gap-medium, 16px)
```

:::

::: error
**throw** If the name is not a string or no gap with that name is found.
:::

## Gaps

Get a filtered map of gaps for iteration. Each entry contains a gap name and its CSS variable reference.

::: definition

**Signature:**

```scss
@function gaps(
  $includes: List = null,
  $excludes: List = null
): Map<String, Variable<Length>>;
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
