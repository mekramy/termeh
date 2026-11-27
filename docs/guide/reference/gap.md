---
outline: deep
description: API reference for Termeh gaps, including defining named spacing values, overriding them per scheme, and reading them as CSS variables.
---

# Spacing

> __Iteration__{data-type="iteration" title="This module provides iterator helper"}

Termeh provides named *__gap values__* for consistent spacing in components, such as *padding* and *space between elements*. A gap is registered __*once*__ and read back as a *__CSS variable__*, so one value can change per theme without touching your styles.

::: tip
Register gaps in the `em` unit. Because `em` is relative to the current font size, a gap scales with each element, so spacing stays __balanced__ next to both *small* and *large* sizes.
:::

::: info
See [Default Gaps](/guide/config/gaps) to learn about the gaps Termeh registers by default.
:::

## Define Gap

__Sets__ or __replaces__ a named gap.

::: signature

```scss
@mixin define-gap($name, $gap) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The unique name for the gap |
| `$gap` | *length* | The gap value |

```scss
@include termeh.define-gap("small", 0.8em);
@include termeh.define-gap("medium", 1.25em);
@include termeh.define-gap("large", 1.5em);
```

:::

::: error
Throw error if `$name` is not a *string* or `$gap` is not a *number*.
:::

## Override Gap

__Sets__ or __replaces__ the value of a __defined gap__ for a specific __*scheme*__.

::: signature

```scss
@mixin override-gap($scheme, $name, $gap) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of the defined gap to override |
| `$gap` | *length* | The gap value for the scheme |

```scss
@include termeh.override-gap("compact", "medium", 1.1em);
@include termeh.override-gap("compact", "large", 1.3em);
```

:::

::: error
Throw error if `$scheme` or `$name` is not a *string*, `$gap` is not a *number*, or `$name` is not a defined gap.
:::

## Gap

Returns the *__CSS variable__* of a defined gap. It also registers __default value__ and all __scheme overrides__ in the __*scheme system*__. Use this *__getter__* in component styles, so the gap follows the active scheme.

::: signature

```scss
@function gap($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined gap |

```scss
.card {
  padding: termeh.gap("normal");
  gap: termeh.gap("small");
}
```

:::

::: error
Throw error if `$name` is not a *string* or is not a defined gap.
:::

## Gaps

Returns a map of gap *__names__* and their *__CSS variables__*, *optionally filtered by name*. It registers each returned __gap__ and its __scheme overrides__ in the __*scheme system*__, which makes it a good fit for generating __gap modifiers__.

::: signature

```scss
@function gaps($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Gap names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Gap names to exclude |

```scss
.grid {
  @each $name, $gap in termeh.gaps($includes: "all") {
    .is-#{$name}-gap {
      gap: $gap;
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

For __special use cases__, the following functions return the __raw values__ __*without*__ registering anything in the __*scheme system*__. *Use them when Sass needs the actual gap value for calculations*.

### Gap Value

Returns the *__raw value__* of a defined gap.

```scss
@function gap-value($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined gap |

::: error
Throw error if `$name` is not a *string* or is not a defined gap.
:::

### Scheme Gap

Returns a gap's *__overridden value__* for a __specific scheme__, or `null` if the scheme does not override it.

```scss
@function scheme-gap($scheme, $name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of a defined gap |

::: error
Throw error if `$scheme` or `$name` is not a *string*, or `$name` is not a defined gap.
:::

::::::
