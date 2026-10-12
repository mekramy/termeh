# Flex Utilities

Provides utility functions for commonly used `align-items` and `justify-content` values in flexbox layouts.

## Flex Aligns

Gets a filtered map of flex aligns, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function flex-aligns($includes: List = null, $excludes: List = null):
  Map<String, FlexAlign>;
```

**Example:**

```scss
.my-grid {
  display: flex;

  @each $name, $align in termeh.flex-aligns(null, ("baseline")) {
    &.is-#{$name}-aligned {
      align-items: $align;
    }
  }
}
```

:::

::: block Available Aligns

| Key               | Value           |
|-------------------|-----------------|
| **stretch**       | `stretch`       |
| **flex-start**    | `flex-start`    |
| **flex-end**      | `flex-end`      |
| **center**        | `center`        |
| **baseline**      | `baseline`      |

:::

## Flex Justifies

Gets a filtered map of flex justifies, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function flex-justifies($includes: List = null, $excludes: List = null):
  Map<String, FlexJustify>;
```

**Example:**

```scss
.my-grid {
  display: flex;

  @each $name, $justify in termeh.flex-justifies(null, ("space-around")) {
    &.is-#{$name}-justified {
      justify-content: $justify;
    }
  }
}
```

:::

::: block Available Justifies

| Key               | Value           |
|-------------------|-----------------|
| **flex-start**    | `flex-start`    |
| **flex-end**      | `flex-end`      |
| **center**        | `center`        |
| **space-between** | `space-between` |
| **space-around**  | `space-around`  |
| **space-evenly**  | `space-evenly`  |

:::
