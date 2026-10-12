# Grid Units

Use Termeh's grid unit utilities to define and retrieve reusable sizes for layouts and components. A unit can represent a fractional width, a full width, or any custom value.

## Define Unit

Register a named grid unit so you can reuse its value in your styles.

::: definition

**Signature:**

```scss
@mixin define-unit($name: String, $unit: Length);
```

**Example:**

```scss
@include termeh.define-unit("full", 100%);
@include termeh.define-unit("1-of-3", 33.333%);
@include termeh.define-unit("2-of-3", 66.666%);
```

:::

::: error
**throw** If the name is not a string or the unit value is not a number.
:::

## Unit

Look up a unit by name. If the unit is not defined, this function generates an _error_.

::: definition

**Signature:**

```scss
@function unit($name: String): Length;
```

**Example:**

```scss
$one-third: termeh.unit("1-of-3"); // 33.333%
$full: termeh.unit("full"); // 100%
```

:::

::: error
**throw** If the name is not a string or no unit with that name is defined.
:::

## Units

Get a filtered map of units with their names and values. Use it to iterate over selected units in your styles.

::: definition

**Signature:**

```scss
@function units($includes: List = null, $excludes: List = null): MAP<String, Length>;
```

**Example:**

```scss
.my-grid {
  .column {
    @each $name, $unit in termeh.units(null, ("full")) {
      &.is-#{$name} {
        width: $unit;
      }
    }
  }
}
```

:::
