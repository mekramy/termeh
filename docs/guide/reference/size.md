---
outline: deep
description: API reference for Termeh sizes, including defining named size values, overriding them per scheme, and reading them as CSS variables.
---

# Element Sizes

> __Iteration__{data-type="iteration" title="This module provides iterator helper"}

Termeh provides named *__size values__* for consistent sizing in components, such as *text*, *headings*, and *inline elements* like *buttons*, *avatars*, and *icons*. A size is registered __*once*__ and read back as a *__CSS variable__*, so one value can change per theme without touching your styles.

::: info
See [Default Sizes](/guide/config/sizes) to learn about the sizes Termeh registers by default.
:::

## Define Size

__Sets__ or __replaces__ a named size.

::: signature

```scss
@mixin define-size($name, $size) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The unique name for the size |
| `$size` | *length* | The size value |

```scss
@include termeh.define-size("small", 0.875rem);
@include termeh.define-size("medium", 1.25rem);
@include termeh.define-size("large", 1.5rem);
```

:::

::: error
Throw error if `$name` is not a *string* or `$size` is not a *number*.
:::

## Override Size

__Sets__ or __replaces__ the value of a __defined size__ for a specific __*scheme*__.

::: signature

```scss
@mixin override-size($scheme, $name, $size) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of the defined size to override |
| `$size` | *length* | The size value for the scheme |

```scss
@include termeh.override-size("compact", "medium", 0.9rem);
@include termeh.override-size("compact", "large", 1.25rem);
```

:::

::: error
Throw error if `$scheme` or `$name` is not a *string*, `$size` is not a *number*, or `$name` is not a defined size.
:::

## Size

Returns the *__CSS variable__* of a defined size. It also registers the __default value__ and all __scheme overrides__ in the __*scheme system*__. Use this *__getter__* in component styles, so the size follows the active scheme.

::: signature

```scss
@function size($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined size |

```scss
.button {
  font-size: termeh.size("medium");
}

.icon {
  width: termeh.size("large");
  height: termeh.size("large");
}
```

:::

::: error
Throw error if `$name` is not a *string* or is not a defined size.
:::

## Sizes

Returns a map of size *__names__* and their *__CSS variables__*, *optionally filtered by name*. It registers each returned __size__ and its __scheme overrides__ in the __*scheme system*__, which makes it a good fit for generating __size modifiers__.

::: signature

```scss
@function sizes($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Size names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Size names to exclude |

```scss
.button {
  @each $name, $size in termeh.sizes($includes: "all") {
    &.is-#{$name} {
      font-size: $size;
    }
  }
}

.avatar {
  @each $name, $size in termeh.sizes($excludes: ("small",)) {
    &.is-#{$name} {
      width: $size;
      height: $size;
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

For __special use cases__, the following functions return the __raw values__ __*without*__ registering anything in the __*scheme system*__. *Use them when Sass needs the actual size value for calculations*.

### Size Value

Returns the *__raw value__* of a defined size.

```scss
@function size-value($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined size |

::: error
Throw error if `$name` is not a *string* or is not a defined size.
:::

### Scheme Size

Returns a size's *__overridden value__* for a __specific scheme__, or `null` if the scheme does not override it.

```scss
@function scheme-size($scheme, $name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of a defined size |

::: error
Throw error if `$scheme` or `$name` is not a *string*, or `$name` is not a defined size.
:::

::::::
