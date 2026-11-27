---
outline: deep
description: API reference for Termeh utility functions for colors, contrast, calculations, shadows, and validation.
---

# Utility Functions

> __Utility__{data-type="utils" title="This module provides utility functions"}

Termeh provides reusable *__utility functions__* for color palettes and contrast, CSS calculations, shadows, and Sass value validation. Use them to keep component styles readable and consistent without repeating calculations.

## Palette

Generates a named *__palette shade__* from a base color. Variant `500` returns the original color. Variants `50` through `400` mix the base color with a bright tone; variants `600` through `900` mix it with a dark tone.

```scss
@function palette($color, $variant) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *color* | The base color |
| `$variant` | *string* | The shade name |

::: alert
Available variants are `50`, `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, and `900`.
:::

::: error
Throw error if `$color` is not a *color*, `$variant` is not a *string*, or `$variant` is unknown.
:::

## Luminance

Calculates the *__relative luminance__* of a color using the *__WCAG formula__*. The result ranges from `0` for the darkest possible color to `1` for the lightest possible color.

```scss
@function luminance($color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *color* | The color to measure |

::: error
Throw error if `$color` is not a *color*.
:::

## Darkest

Returns the __darker__ of two colors by comparing their *luminance*.

```scss
@function darkest($color1, $color2) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color1` | *color* | The first color |
| `$color2` | *color* | The second color |

::: error
Throw error if `$color1` or `$color2` is not a *color*.
:::

## Lightest

Returns the __lighter__ of two colors by comparing their *luminance*.

```scss
@function lightest($color1, $color2) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color1` | *color* | The first color |
| `$color2` | *color* | The second color |

::: error
Throw error if `$color1` or `$color2` is not a *color*.
:::

## Contrast Ratio

Calculates the *__WCAG contrast ratio__* between a background and foreground color. Higher values mean the colors are easier to distinguish. The result ranges from `1` to `21`.

::: tip
For normal text, *__WCAG AA__* recommends a contrast ratio of at least `4.5`.
:::

```scss
@function contrast-ratio($back, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$back` | *color* | The background color |
| `$color` | *color* | The foreground color |

::: error
Throw error if `$back` or `$color` is not a *color*.
:::

## Tone

Checks whether a color is __light__ or __dark__. This function returns `"light"`{scss} or `"dark"`{scss}.

```scss
@function tone($color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *color* | The color to check |

::: error
Throw error if `$color` is not a *color*.
:::

## Contrast

Returns the option with the __higher contrast__ against the *base color*.

```scss
@function contrast($base, $color1, $color2) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$base` | *color* | The base color against which both options are compared |
| `$color1` | *color* | The first option |
| `$color2` | *color* | The second option |

::: error
Throw error if `$base`, `$color1`, or `$color2` is not a *color*.
:::

## Harmony

Returns the option with the __lower contrast__ against the *base color*.

```scss
@function harmony($base, $color1, $color2) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$base` | *color* | The base color against which both options are compared |
| `$color1` | *color* | The first option |
| `$color2` | *color* | The second option |

::: error
Throw error if `$base`, `$color1`, or `$color2` is not a *color*.
:::

## Alpha

Sets a color's *__opacity__* using CSS relative color syntax. It also supports values returned by __palette getters__.

```scss
@function alpha($value, $opacity) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *var\<color\>*, *color* | The base color |
| `$opacity` | *var\<number\>*, *number* | The opacity, from `0` (transparent) to `1` (opaque) |

## Mix

Mixes two colors using a weight. The returned color keeps the alpha channel of `$color`.

```scss
@function mix($color, $base, $weight) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *color* | The main color |
| `$base` | *color* | The color to mix with |
| `$weight` | *number* | The mix weight, from `0` to `1` |

::: error
Throw error if `$color` or `$base` is not a *color*, or `$weight` is not a *number*.
:::

## Iif

Returns one of two values based on a __condition__. This is a compact alternative to an `@if` block inside a declaration.

```scss
@function iif($condition, $truly, $falsy) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$condition` | *boolean* | The condition to check |
| `$truly` | *\** | The value returned when the condition is true |
| `$falsy` | *\** | The value returned when the condition is false |

## Important

Marks a value with `!important`, or returns `null` if the value is *falsy*.

```scss
@function important($value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *\** | The value to mark as important |

## Negate

Reverses the sign of a value using CSS `calc()`.

```scss
@function negate($value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *var\<length\>*, *length* | The value to negate |

## Half

Divides a value by two using CSS `calc()`.

```scss
@function half($value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *var\<length\>*, *length* | The value to halve |

## Double

Multiplies a value by two using CSS `calc()`.

```scss
@function double($value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *var\<length\>*, *length* | The value to double |

## Child Radius

Calculates a child's *__border radius__* from the parent's radius and padding. The result keeps nested corners visually concentric.

```scss
@function child-radius($parent-radius, $padding) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$parent-radius` | *var\<length\>*, *length* | The parent's border radius |
| `$padding` | *var\<length\>*, *length* | The space between the parent and child |

## Shadow

Creates a standard *__box shadow__*. The blur is twice the depth, and the shadow color has `0.1` opacity.

```scss
@function shadow($x, $y, $depth, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$x` | *var\<length\>*, *length* | The horizontal offset |
| `$y` | *var\<length\>*, *length* | The vertical offset |
| `$depth` | *var\<length\>*, *length* | The shadow depth |
| `$color` | *var\<color\>*, *color* | The shadow color |

## Soft Shadow

Creates a *__soft box shadow__*. The blur is three times the depth and the spread is negative depth. The shadow color has `0.1` opacity.

```scss
@function soft-shadow($x, $y, $depth, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$x` | *var\<length\>*, *length* | The horizontal offset |
| `$y` | *var\<length\>*, *length* | The vertical offset |
| `$depth` | *var\<length\>*, *length* | The shadow depth |
| `$color` | *var\<color\>*, *color* | The shadow color |

## Flat Shadow

Creates a *__flat box shadow__* with no offset or blur. The shadow grows the element by the given size in every direction and works well for outlines and focus rings. The shadow color has `0.1` opacity.

```scss
@function flat-shadow($size, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$size` | *var\<length\>*, *length* | The spread size |
| `$color` | *var\<color\>*, *color* | The shadow color |

:::::: appendix

## Appendix

For *__special use cases__*, the following helpers validate values and perform type checks.

### Check Type

Checks whether a value matches a specific Sass type and returns a boolean.

```scss
@function is-bool($value) {}
@function is-number($value) {}
@function is-string($value) {}
@function is-color($value) {}
@function is-list($value) {}
@function is-map($value) {}
@function is-function($value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *\** | The value to check |

### Check Nullable Type

Checks whether a value is `null` or matches a specific Sass type.

```scss
@function is-nullable-bool($value) {}
@function is-nullable-number($value) {}
@function is-nullable-string($value) {}
@function is-nullable-color($value) {}
@function is-nullable-list($value) {}
@function is-nullable-map($value) {}
@function is-nullable-function($value) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *\** | The value to check |

### Assert Value

Returns `$value` when it is valid. Otherwise, returns `$fallback` when the fallback is valid.

```scss
@function assert-bool($value, $caller, $param, $fallback) {}
@function assert-number($value, $caller, $param, $fallback) {}
@function assert-string($value, $caller, $param, $fallback) {}
@function assert-color($value, $caller, $param, $fallback) {}
@function assert-list($value, $caller, $param, $fallback) {}
@function assert-map($value, $caller, $param, $fallback) {}
@function assert-function($value, $caller, $param, $fallback) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *\** | The value to validate |
| `$caller` | *string* | The calling function, used in the error message |
| `$param` | *string* | The parameter name, used in the error message |
| `$fallback` | *\<T\>* | The value returned when `$value` is invalid |

::: error
Throw error if neither `$value` nor `$fallback` is valid.
:::

### Assert Nullable Value

Returns `$value` when it is valid or `null`. Otherwise, returns `$fallback` when the fallback is valid or `null`.

```scss
@function assert-nullable-bool($value, $caller, $param, $fallback) {}
@function assert-nullable-number($value, $caller, $param, $fallback) {}
@function assert-nullable-string($value, $caller, $param, $fallback) {}
@function assert-nullable-color($value, $caller, $param, $fallback) {}
@function assert-nullable-list($value, $caller, $param, $fallback) {}
@function assert-nullable-map($value, $caller, $param, $fallback) {}
@function assert-nullable-function($value, $caller, $param, $fallback) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$value` | *\** | The value to validate |
| `$caller` | *string* | The calling function, used in the error message |
| `$param` | *string* | The parameter name, used in the error message |
| `$fallback` | *\<T\>* | The value returned when `$value` is invalid or `null` |

::: error
Throw error if neither `$value` nor `$fallback` is valid or `null`.
:::

::::::
