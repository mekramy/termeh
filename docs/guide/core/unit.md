# Grid Units

Termeh provides utilities to define and retrieve grid size units. These units can represent fractional widths, full widths, or any custom unit for layouts and components.

## Define Unit

Register a new grid unit.

::: definition

**Signature:**

```scss
@mixin define-unit($name: STRING, $unit: NUMBER);
```

**Example:**

```scss
@include termeh.define-unit("full", 100%);
@include termeh.define-unit("1-of-3", 33.333%);
@include termeh.define-unit("2-of-3", 66.666%);
```

:::

## Unit

Gets a unit value by its name or generates an _error_ if the unit is not defined.

::: definition

**Signature:**

```scss
@function unit($name: STRING): NUMBER;
```

**Example:**

```scss
$one-third: termeh.unit("1-of-3"); // 33.333%
$full: termeh.unit("full"); // 100%
```

:::

## Units

Gets a filtered map of units, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function units($includes: LIST = null, $excludes: LIST = null): MAP<STRING, NUMBER>;
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
