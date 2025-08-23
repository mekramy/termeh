# Flex Utilities Package

Provides utility functions for commonly used `align-items` and `justify-content` values in flexbox layouts.

## Flex Aligns

Gets a filtered map of flex aligns, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function flex-aligns($includes: LIST = null, $excludes: LIST = null):
    MAP<STRING, FLEX-ALIGN>;
```

**Example:**

```scss
.my-grid {
  display: flex;

  @each $name, $align in termeh.flex-aligns(null, ("stretch")) {
    &.is-#{$name}-aligned {
      flex-align: $align;
    }
  }
}
```

:::

::: termeh Available Aligns

| Key             | Value           |
| --------------- | --------------- |
| `flex-start`    | _flex-start_    |
| `flex-end`      | _flex-end_      |
| `center`        | _center_        |
| `space-between` | _space-between_ |
| `space-around`  | _space-around_  |
| `space-evenly`  | _space-evenly_  |

:::

## Flex Justifies

Gets a filtered map of flex justifies, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function flex-justifies($includes: LIST = null, $excludes: LIST = null):
    MAP<STRING, FLEX-ALIGN>;
```

**Example:**

```scss
.my-grid {
  display: flex;

  @each $name, $justify in termeh.flex-justifies(null, ("stretch")) {
    &.is-#{$name}-justified {
      justify-content: $align;
    }
  }
}
```

:::

::: termeh Available Aligns

| Key             | Value           |
| --------------- | --------------- |
| `flex-start`    | _flex-start_    |
| `flex-end`      | _flex-end_      |
| `center`        | _center_        |
| `space-between` | _space-between_ |
| `space-around`  | _space-around_  |
| `space-evenly`  | _space-evenly_  |

:::
