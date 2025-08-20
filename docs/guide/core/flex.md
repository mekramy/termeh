# Flex Utilities Package

Provides utility functions for commonly used `align-items` and `justify-content` values in flexbox layouts.

---

## Flex Aligns

Returns a filtered map of available `align-items` values.

::: code-group

```scss [usage.scss]
@function flex-aligns($includes: null, $excludes: null);
```

```scss [example.scss]
$all-aligns: flex-aligns();
$only-center: flex-aligns(("center"));
$no-stretch: flex-aligns(null, ("stretch"));
```

:::

::: details Available

```scss
$flex-start → flex-start
$flex-end → flex-end
$center → center
$space-between → space-between
$space-around → space-around
$space-evenly → space-evenly
```

:::

---

## Flex Justifies

Returns a filtered map of available `justify-content` values.

::: code-group

```scss [usage.scss]
@function flex-justifies($includes: null, $excludes: null);
```

```scss [example.scss]
$all-justifies: flex-justifies();
$only-center: flex-justifies(("center"));
$without-around: flex-justifies(null, ("space-around"));
```

:::

::: details Available

```scss
$flex-start → flex-start
$flex-end → flex-end
$center → center
$space-between → space-between
$space-around → space-around
$space-evenly → space-evenly
```

:::
