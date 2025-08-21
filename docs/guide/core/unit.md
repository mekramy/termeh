# Grid Units

Termeh provides utilities to define and retrieve grid size units. These units can represent fractional widths, full widths, or any custom unit for layouts and components.

## Define Unit

Defines a new grid unit.

::: code-group

```scss [usage.scss]
@mixin define-unit($name, $unit);
```

```scss [example.scss]
@include define-unit("full", 100%);
@include define-unit("1-of-3", 33.333%);
@include define-unit("2-of-3", 66.666%);
```

:::

## Unit

Gets a unit value by its name.

::: code-group

```scss [usage.scss]
@function unit($name);
```

```scss [example.scss]
$one-third: unit("1-of-3"); // 33.333%
$full: unit("full"); // 100%
```

:::

## Units

Gets a filtered map of units.

::: code-group

```scss [usage.scss]
@function units($includes: null, $excludes: null);
```

```scss [example.scss]
$some-units: units(("1-of-3", "2-of-3"));
$all-but-full: units(null, ("full"));
```

:::
