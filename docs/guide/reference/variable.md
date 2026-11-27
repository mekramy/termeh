---
outline: deep
description: API reference for Termeh variables, including defining, overriding per scheme, and reading component values as CSS variables.
---

# Variables

Termeh provides a shared set of *__variables__* for every component. A variable is registered __*once*__ and read back as a *__CSS variable__*, so one value can change per theme without touching your styles.

::: info
See [Default Variables](/guide/config/variables) to learn about the variables Termeh registers by default.
:::

## Define

__Sets__ or __replaces__ the value of a variable for a component property.

::: signature

```scss
@mixin define($component, $property, $value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$component` | *string* | The component name |
| `$property` | *string* | The property name |
| `$value` | *\** | The property value |

```scss
@include termeh.define("document", "direction", rtl);
@include termeh.define("padding", "control", 1.2em);
```

:::

::: error
Throw error if `$component` or `$property` is not a *string*.
:::

## Override

__Sets__ or __replaces__ the value of a component property for a specific __*scheme*__.

::: signature

```scss
@mixin override($scheme, $component, $property, $value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$component` | *string* | The component name |
| `$property` | *string* | The property name |
| `$value` | *\** | The scheme-specific property value |

```scss
@include termeh.override("compact", "padding", "control", 1.3em);
```

:::

::: error
Throw error if `$scheme`, `$component` or `$property` is not a *string*.
:::

## Var

Returns the *__CSS variable__* of a component property, or a __fallback__ when no value is registered or the value is *falsy*. It also registers the __default value__ and all __scheme overrides__ in the __*scheme system*__. Use this *__getter__* in component styles so that the value follows the active scheme.

::: signature

```scss
@function var($component, $property, $fallback: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$component` | *string* | The component name |
| `$property` | *string* | The property name |
| `$fallback` | *\** | The fallback value when the property has no value |

```scss
.button {
  padding: termeh.var("button", "padding", 1rem);
  border-radius: termeh.var("button", "radius", 0.5rem);
}
```

:::

::: error
Throw error if `$component` or `$property` is not a *string*.
:::

:::::: appendix

## Appendix

For __special use cases__, the following functions return the __raw values__ __*without*__ registering anything in the __*scheme system*__.

### Value

Returns the *__raw value__* of a component property, or `null` when no value is registered.

```scss
@function value($component, $property) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$component` | *string* | The component name |
| `$property` | *string* | The property name |

```scss
$grid-units: termeh.value("grid", "units");
$box-sizes: termeh.value("box", "sizes");
```

::: error
Throw error if `$component` or `$property` is not a *string*.
:::

### Scheme Value

Returns a component property's __override value__ for a specific scheme, or `null` if the scheme has no override.

```scss
@function scheme-value($scheme, $component, $property) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$component` | *string* | The component name |
| `$property` | *string* | The property name |

::: error
Throw error if `$scheme`, `$component` or `$property` is not a *string*.
:::

::::::
