---
outline: deep
description: API reference for Termeh palettes, including defining colors and variants, overriding them per scheme or component, writing resolvers, and reading colors as CSS variables.
---

# Color Palette

> __Iteration__{data-type="iteration" title="This module provides iterator helper"}

Termeh provides a *__palette system__* for defining the colors of your theme and reading them back as *__CSS variables__*. A palette is a named color, such as `"primary"`{scss} or `"error"`{scss}.

The special `"base"`{scss} palette is the __main color of the theme__: it is usually the document background, and it decides whether the theme is *light* or *dark*.

Each palette has *__variants__*, which are colors derived from it for a specific purpose, such as `hover`, `light`, or `foreground`. A variant is found in this order:

1. The __explicitly defined__ color, if you defined one. It is returned directly and no resolver runs.
2. A color created by a [resolver](/guide/reference/resolver).
3. The __fallback__ value passed to the getter, if there is one.

A __*resolver*__ is a function that builds a variant from the *palette color* and the *base color*. You can __add as many resolvers as you need__, *globally* or for a *single component*, so every project and component can reshape its colors without touching Termeh itself. See [Resolvers](/guide/reference/resolver) for the full explanation.

All getters that return a *__CSS variable__* also register the __base color__, the __variant__, and __every scheme override__, so a color changes automatically when the active scheme changes.

::: info
See [Default Colors](/guide/config/colors) for the palettes, variants, and resolvers that Termeh registers by default.
:::

::: warn Warning
Avoid the default sass color functions. Use `termeh.mix` to blend two colors and `termeh.alpha` to change a color's opacity.
:::

## General Variants

Termeh creates the following __general variants__ out of the box with its default resolvers, so you can read them with `variant()`{scss} right away. You can replace any of them with `define-variant()`{scss} or add new ones __with your own resolver__.

The *__base palette__* has these variants:

| Variant | Description |
| -- | -- |
| `foreground` | Default foreground |
| `background` | The background color of document |
| `separator` | The color of borders and dividers |
| `surface` | A slightly different background for raised areas, such as cards |
| `surface-hover` | The hover state of the surface variant |
| `disabled-border` | The border color of disabled elements |
| `disabled-foreground` | The text color of disabled elements |
| `disabled-background` | The background color of disabled elements |

__Every other palette__ has these variants:
  
| Variant | Description |
| -- | -- |
| `text` | The text color of the palette on a plain background |
| `foreground` | The text color used on top of the palette color |
| `decorator` | A decorative accent of the palette, such as borders and small details |
| `hover` | The hover state of the palette color |
| `light` | A soft tinted background of the palette color |
| `light-hover` | The hover state of the light variant |
| `muted` | A subdued, less saturated text color of the palette color |
| `muted-hover` | The hover state of the muted variant |

## Resolvers

A __resolver__ is a function that creates a variant that has *no explicitly defined color*. Resolvers are registered globally or for a single component.

- `define-resolver` __adds__ a resolver that is called before all existing ones, so it can replace a built-in color.
- `fallback-resolver` __adds__ a resolver that is called after all existing ones, so it only handles variants that nothing else can create.

::: info
See [Resolvers](/guide/reference/resolver) for the resolver function, the general and component scopes, the resolution order, and the signatures of both mixins.
:::

## Define Palette

__Sets__ or __replaces__ a named palette.

::: signature

```scss
@mixin define-palette($name, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The unique name for the palette |
| `$color` | *color* | The palette color |

```scss
@include termeh.define-palette("base", white);
@include termeh.define-palette("primary", #2196f3);
@include termeh.define-palette("error", #c00021);
```

:::

::: error
Throw error if `$name` is not a *string* or `$color` is not a *color*.
:::

## Override Palette

__Sets__ or __replaces__ the color of a __defined palette__ for a specific __*scheme*__.

::: signature

```scss
@mixin override-palette($scheme, $name, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of a defined palette to override |
| `$color` | *color* | The palette color for the scheme |

```scss
@include termeh.override-palette("dark", "base", #0d1b2a);
@include termeh.override-palette("dark", "primary", #6fb4ed);
@include termeh.override-palette("dark", "error", #b94e5f);
```

:::

::: warn
Override the `"base"`{scss} palette for every scheme you add. Variants are resolved for a scheme only when it overrides `"base"`{scss}, because the base color decides whether the scheme is light or dark.
:::

::: error
Throw error if `$scheme` or `$name` is not a *string*, `$color` is not a *color*, or `$name` is not a defined palette.
:::

## Define Variant

__Sets a fixed variant color__ for a __defined palette__. A fixed color is used as is, and *resolvers are never called for it*.

::: signature

```scss
@mixin define-variant($name, $variant, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined palette |
| `$variant` | *string* | The name of the variant |
| `$color` | *color* | The color of the variant |

```scss
@include termeh.define-variant("base", "surface", #f8f9fa);
@include termeh.define-variant("primary", "hover", #1976d2);
```

:::

::: error
Throw error if `$name` or `$variant` is not a *string*, `$color` is not a *color*, or `$name` is not a defined palette.
:::

## Override Variant

__Sets a variant color__ of a __defined palette__ for a specific __*scheme*__.

::: signature

```scss
@mixin override-variant($scheme, $name, $variant, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of a defined palette |
| `$variant` | *string* | The name of the variant |
| `$color` | *color* | The color of the variant for the scheme |

```scss
@include termeh.override-variant("dark", "base", "surface", #33373e);
```

:::

::: error
Throw error if `$scheme`, `$name` or `$variant` is not a *string*, `$color` is not a *color*, or `$name` is not a defined palette.
:::

## Define Component Variant

__Sets a variant color__ of a __defined palette__ that is used by *specific component*.

::: signature

```scss
@mixin define-component-variant($component, $name, $variant, $color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$component` | *string* | The name of the component |
| `$name` | *string* | The name of a defined palette |
| `$variant` | *string* | The name of the variant |
| `$color` | *color* | The color of the variant for the component |

```scss
@include termeh.define-component-variant(
  "button", "primary", "hover", #1565c0
);
```

:::

::: error
Throw error if `$component`, `$name` or `$variant` is not a *string*, `$color` is not a *color*, or `$name` is not a defined palette.
:::

## Override Component Variant

__Sets a variant color__ of a __defined palette__ for *specific component* in specific __*scheme*__.

::: signature

```scss
@mixin override-component-variant(
  $scheme, $component, $name, $variant, $color
) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$component` | *string* | The name of the component |
| `$name` | *string* | The name of a defined palette |
| `$variant` | *string* | The name of the variant |
| `$color` | *color* | The color of the variant for the component in the scheme |

```scss
@include termeh.override-component-variant(
  "dark", "button", "primary", "hover", #90caf9
);
```

:::

::: error
Throw error if `$scheme`, `$component`, `$name` or `$variant` is not a *string*, `$color` is not a *color*, or `$name` is not a defined palette.
:::

## Color

Returns the *__CSS variable__* of a palette color. It also registers the __palette color__ and all __scheme overrides__ in the __*scheme system*__. Use this *__getter__* in component styles, so the color follows the active scheme.

::: signature

```scss
@function color($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined palette |

```scss
.button {
  background-color: termeh.color("primary");
  border-color: termeh.color("primary");
}
```

:::

::: error
Throw error if `$name` is not a *string* or is not a defined palette.
:::

## Variant

Returns the *__CSS variable__* of a palette variant. It also registers the __variant__ and all __scheme overrides__ in the __*scheme system*__. A variant that is not defined is *created by the resolvers*, or taken from the *fallback* when they cannot create it.

The function returns `null` when the variant cannot be resolved and there is no fallback.

::: signature

```scss
@function variant($name, $variant, $fallback: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a palette |
| `$variant` | *string* | The name of the variant |
| `$fallback` | *var\<color\>*, *color* | The fallback value when the variant cannot be resolved |

```scss
.button {
  background-color: termeh.color("primary");

  &:hover {
    background-color: termeh.variant("primary", "hover");
  }
}
```

:::

::: error
Throw error if `$name` or `$variant` is not a *string*.
:::

## Variant For

Returns the *__CSS variable__* of a palette variant for *specific component*. It uses the variants and resolvers of that component, and registers the __variant__ and all __scheme overrides__ in the __*scheme system*__. A variant that is not defined is *created by the resolvers*, or taken from the *fallback* when they cannot create it.

The function returns `null` when the variant cannot be resolved and there is no fallback.

::: signature

```scss
@function variant-for($component, $name, $variant, $fallback: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$component` | *string* | The name of the component |
| `$name` | *string* | The name of a palette |
| `$variant` | *string* | The name of the variant |
| `$fallback` | *var\<color\>*, *color* | The fallback value when the variant cannot be resolved |

```scss
.button:hover {
  $fallback: termeh.variant("primary", "hover");

  background-color: termeh.variant-for(
    "button", "primary", "hover",
    $fallback
  );
}
```

:::

::: error
Throw error if `$component`, `$name` or `$variant` is not a *string*.
:::

## Colors

Returns a map of *__palette names__* and their *__CSS variables__*, *optionally filtered by name*. It registers each returned __color__ and its __scheme overrides__ in the __*scheme system*__, which makes it a good fit for generating __color modifiers__ such as `.is-primary` or `.is-error`.

::: signature

```scss
@function colors($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | The palette names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | The palette names to exclude |

```scss
@each $name, $color in termeh.colors($excludes: ("error",)) {
  .button.is-#{$name} {
    background-color: $color;
  }
}

@each $name, $color in termeh.colors($includes: "all") {
  .alert.is-#{$name} {
    border-color: $color;
  }
}
```

:::

::: warn
The `base` palette is never included in modifiers.
:::

::: error
Throw error if `$includes` or `$excludes` is not *null*, *all*, or a *list*.
:::

:::::: appendix

## Appendix

For __special use cases__, the following functions return the __raw values__ __*without*__ registering anything in the __*scheme system*__. *Use them when Sass needs the actual color for calculations*.

### Color Value

Returns the *__raw color__* of a defined palette.

```scss
@function color-value($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined palette |

::: error
Throw error if `$name` is not a *string* or is not a defined palette.
:::

### Scheme Color

Returns a palette's *__overridden color__* for a __specific scheme__, or `null` if the scheme does not override it.

```scss
@function scheme-color($scheme, $name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of a defined palette |

::: error
Throw error if `$scheme` or `$name` is not a *string*, or `$name` is not a defined palette.
:::

### Variant Value

Returns the *__raw color__* of a variant, or `null` if the variant is not defined or cannot be resolved.

```scss
@function variant-value($name, $variant) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a palette |
| `$variant` | *string* | The name of the variant |

::: error
Throw error if `$name` or `$variant` is not a *string*.
:::

### Variant Value For

Returns the *__raw color__* of a variant for __specific component__, or `null` if variant is not defined or cannot be resolved.

```scss
@function variant-value-for($component, $name, $variant) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$component` | *string* | The name of the component |
| `$name` | *string* | The name of a palette |
| `$variant` | *string* | The name of the variant |

::: error
Throw error if `$component`, `$name` or `$variant` is not a *string*.
:::

### Scheme Variant

Returns a palette's *__overridden variant color__* for a __specific scheme__, or `null` if the scheme does not override it or cannot be resolved.

```scss
@function scheme-variant($scheme, $name, $variant) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$name` | *string* | The name of a palette |
| `$variant` | *string* | The name of the variant |

::: error
Throw error if `$scheme`, `$name` or `$variant` is not a *string*.
:::

### Scheme Variant For

Returns the *__overridden variant color__* for a palette in a __specific scheme__ and __component__, or `null` if the scheme does not override it or cannot be resolved.

```scss
@function scheme-variant-for($scheme, $component, $name, $variant) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string* | The name of the scheme |
| `$component` | *string* | The name of the component |
| `$name` | *string* | The name of a palette |
| `$variant` | *string* | The name of the variant |

::: error
Throw error if `$scheme`, `$component`, `$name` or `$variant` is not a *string*.
:::

::::::
