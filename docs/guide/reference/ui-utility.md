---
outline: deep
description: API reference for Termeh UI utilities, including flex alignment, text alignment, and font weight values.
---

# UI Utilities

> __Iteration__{data-type="iteration" title="This module provides iterator helper"}

Termeh provides named *__UI utility values__* for building consistent *flex layouts* and *typography*. Each collection is returned as a __name-to-value map__, so you can loop over it to generate *__utility classes__* or *__modifiers__*. *Includes* and *excludes* let you keep only the names you need.

## Flex Aligns

Returns the available *__align-items values__* for flex layouts, *optionally filtered by name*.

::: alert
Available values are `stretch`, `start`, `end`, `center`, and `baseline`.
:::

::: signature

```scss
@function flex-aligns($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Alignment names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Alignment names to exclude |

```scss
.my-flex {
  @each $name, $align in termeh.flex-aligns($excludes: ("stretch")) {
    .is-#{$name}-aligned {
      align-items: $align;
    }
  }
}
```

:::

::: error
Throw error if `$includes` or `$excludes` is not *null*, *all*, or a *list*.
:::

## Flex Justifies

Returns the available *__justify-content values__* for flex layouts, *optionally filtered by name*.

::: alert
Available values are `start`, `end`, `center`, `space-between`, `space-around`, and `space-evenly`.
:::

::: signature

```scss
@function flex-justifies($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Justification names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Justification names to exclude |

```scss
.my-flex {
  $inc: ("center", "space-between");
  @each $name, $justify in termeh.flex-justifies($includes: $inc) {
    .is-#{$name}-justified {
      justify-content: $justify;
    }
  }
}
```

:::

::: error
Throw error if `$includes` or `$excludes` is not *null*, *all*, or a *list*.
:::

## Text Aligns

Returns the available *__text alignment values__*, *optionally filtered by name*.

::: alert
Available values are `start`, `end`, `center`, and `justify`.
:::

::: signature

```scss
@function text-aligns($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Alignment names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Alignment names to exclude |

```scss
p {
  @each $name, $align in termeh.text-aligns() {
    .is-#{$name}-align {
      text-align: $align;
    }
  }
}
```

:::

::: error
Throw error if `$includes` or `$excludes` is not *null*, *all*, or a *list*.
:::

## Weights

Returns a map of *__weight names__* and their *__font weight values__*, *optionally filtered by name*. It is useful for generating *__font weight modifiers__*.

::: alert
Available values are `lighter`, `light`, `normal`, `medium`, `semibold`, `bold`, and `bolder`.
:::

::: signature

```scss
@function weights($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Weight names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Weight names to exclude |

```scss
span {
  @each $name, $weight in termeh.weights() {
    .is-#{$name} {
      font-weight: $weight;
    }
  }
}
```

:::

::: error
Throw error if `$includes` or `$excludes` is not *null*, *all*, or a *list*.
:::

:::::: appendix

## Appendix

For *__special use cases__*, the following function provides direct access to a single font weight.

### Weight

Returns the *__font weight__* of a *defined weight name*.

::: alert
Available values are `lighter`, `light`, `normal`, `medium`, `semibold`, `bold`, and `bolder`.
:::

```scss
@function weight($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined weight |

::: error
Throw error if `$name` is not a *string* or is not a defined weight.
:::

::::::
