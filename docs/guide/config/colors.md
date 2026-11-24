---
outline: deep
description: Default color palettes and variants that Termeh registers, how colors are resolved, and how to change or extend them.
---

# Default Colors

__Palettes__ are the =only source of color= in Termeh. Every color the UI generates, such as text, backgrounds, borders, hover states, and modifiers like `is-primary`, is created from a palette. Because components never hard-code colors, changing the @scheme@ restyles every component that uses it.

Termeh already defines a default set of palettes and a default set of __variants__ (such as _hover_, _muted_, or _surface_) for them, so the framework looks consistent out of the box. A default is used whenever you have not defined that color yourself. You can =change= a palette color, =add= new palettes, =fix= a variant to a color you choose, or write your own @resolvers@ to change how variants are created.

::: tip Note
Define your colors and resolvers =before= you include any component module, so that components pick up your custom values.
:::

::: note
See [Palette Reference](/guide/reference/palette) for advanced usage and complete reference.
:::

## How Colors Work

A __palette__ is a named base color, such as `primary` or `error`. The special `base` palette is the main color of the theme: it is usually the document background, and it decides whether the theme is =light= or =dark=. All other palettes are accent colors.

The default variants are usually derived from the `base` palette too, so they match the light or dark mode of the theme.

A __variant__ is a color derived from a palette for a specific purpose, such as `hover`, `light`, or `foreground`. When a component asks for a variant, Termeh finds it in this order:

1. An =explicitly defined= variant color. If you defined it, it is used and no resolver runs.
2. A color created by a @resolver@. Resolvers are functions that build the variant from the palette color and the base color.
3. The =fallback= value passed by the component, if there is one.

Resolvers receive the _scheme_, the _palette name_, whether the base color _is light_, the _base color_, the _palette color_, and the _variant name_. They return a =color=, or `null` when they do not know the variant so the next resolver can try. The =first color returned wins=.

Termeh generates shades of a color with =weights= from `50` to `900`, where `500` is the original color. The built-in resolvers pick different weights for light and dark themes, so variants keep a good contrast on both.

::: warning
Variants are resolved for a scheme only when that scheme overrides the =base palette=, because the base color decides whether the scheme is light or dark. When you add a scheme, override `base` for it as well.
:::

## Default Values

Termeh registers these palettes by default. Each palette is a base color that =variant colors are created from=.

```scss
@include termeh.define-palette("base", white);
@include termeh.define-palette("shade", #667085);
@include termeh.define-palette("primary", #2196f3);
@include termeh.define-palette("error", #c00021);
```

- __base__ ~color~ - Base theme color and document background.
- __shade__ ~color~ - Neutral gray palette.
- __primary__ ~color~ - Main accent color palette.
- __error__ ~color~ - Error and danger color palette.

## Customize

Use `define-palette` to =change= the color of a default palette or =add= a new palette. A new palette gets all the general variants automatically.

```scss
@include termeh.define-palette("primary", #6750a4);
@include termeh.define-palette("success", #4caf50);
```

Use `override-palette` to change a color only for a specific @scheme@. _Remember to override `base` for the scheme, so its variants are resolved_.

```scss
@include termeh.override-palette("dark", "base", #0d1b2a);
@include termeh.override-palette("dark", "primary", #5db1f7);
```

Use `define-variant` to fix a variant to a =specific color= instead of letting resolvers create it. Use `override-variant` to do it for one scheme only.

```scss
@include termeh.define-variant("primary", "hover", #1976d2);
@include termeh.override-variant("dark", "base", "surface", #1b263b);
```

Use `define-component-variant` and `override-component-variant` when only =one component= needs a different shade.

```scss
@include termeh.define-component-variant(
    "button", "primary", "hover", #1565c0
);
@include termeh.override-component-variant(
    "dark", "button", "primary", "hover", #90caf9
);
```

### Custom Resolvers

Use a resolver when you want to =create variants by rule= instead of fixing each one by hand, or when you need a variant that Termeh does not provide. Pass the component name to apply the resolver to that component only; without it, the resolver applies to the general variants of every palette.

```scss
@use "sass:meta";
@use "termeh";

@function brand-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $variant == "soft" {
        @return termeh.mix($color, $base, 12%);
    }

    @return null;
}

@include termeh.fallback-resolver(
    meta.get-function("brand-resolver")
);
```

- `fallback-resolver` =adds= the resolver as a last resort. It is called only if the other resolvers cannot create the requested variant.
- `define-resolver` =adds= a resolver that is tried before previously defined resolvers. Resolvers are tried in reverse definition order, so the most recently defined resolver has priority and can replace a color produced by an earlier one.

```scss
@include termeh.define-resolver(
    meta.get-function("table-resolver"),
    "table"
);
```

::: note
Resolvers run only for variants that have =no explicitly defined color=. A variant defined with `define-variant` is always returned directly.
:::

## Default Resolvers

Termeh provides =built-in resolvers= for the general variants of palettes and for the _overlay_, _box_, _table_, _input_, and _component_ components. The following sections list the variants each one creates.

### Base Resolver

Creates the color variants for the =base palette=. It skips any other palette and returns the following variants for the base palette:

::: signature

| Variant | Returns |
| -- | -- |
| __foreground__ | `#0d1b2a` |
| __background__ | =Base color= itself |
| __separator__ | `#e0e4eb` |
| __surface__ | `#f8f9fa` |
| __surface-hover__ | `#eef0f3` |
| __disabled-border__ | =Base separator= variant |
| __disabled-foreground__ | =Shade muted= variant |
| __disabled-background__ | =Base surface= variant |

:::

::: note
This is a =global resolver=. It only processes the `base` palette and ignores all others.
:::

### Palette Resolver

Creates color variants for all =non-base palettes=.

::: signature

| Variant | Returns |
| -- | -- |
| __text__ | =Weight 700= (light) or =200= (dark), _mixed with the base color_ |
| __foreground__ | =Weight 900= (light) or =100= (dark), _mixed with the base color_ |
| __decorator__ | =Weight 800= (light) or =200= (dark), _mixed with the base color_ |
| __hover__ | =Weight 700= (light) or =300= (dark) |
| __light__ | =Weight 800= (light) or =200= (dark), _mixed with the base color_ |
| __light-hover__ | =Weight 800= (light) or =200= (dark), _mixed with the base color_ |
| __muted__ | =Weight 900= (light) or =100= (dark), _mixed with the shade color_ |
| __muted-hover__ | =Weight 900= (light) or =100= (dark), _mixed with the shade color_ |

:::

::: note
This is a =global resolver=. It only processes the `non-base` palettes and ignores the `base` palette.
:::

### Overlay Resolver

Creates the colors for overlays.

::: signature

| Variant | Returns |
| -- | -- |
| __accent__ | =text= variant, or =base foreground= variant for the =base palette= |
| __foreground__ | =Base foreground= variant |
| __background__ | =Base color= |

:::

::: note
This resolver is registered for the `"overlay"` component.
:::

### Box Resolver

Creates the colors for boxes, including the overlay colors used inside them.

::: signature

| Variant | Returns |
| -- | -- |
| __background__ | =base color= |
| __surface__ | =base surface= variant |
| __separator__ | =base separator= variant |
| __overlay-accent__ | =overlay accent= variant |
| __overlay-foreground__ | =overlay foreground= variant |
| __overlay-background__ | =overlay background= variant |

:::

::: note
This resolver is registered for the `"box"` component.
:::

### Table Resolver

Creates the colors for tables.

::: signature

| Variant | Returns |
| -- | -- |
| __decorator__ | =color=, or =primary= color for =base palette= |
| __sorted-text__ | =text= variant, or =primary text= variant for =base palette= |
| __sorted-background__ | =color=, or =primary= color for =base palette=, _with 5% opacity_ |
| __striped-background__ | =Base surface= variant |
| __hover-background__ | =Base surface-hover= variant |
| __row-separator__ | =Base separator= variant |
| __column-separator__ | Transparent |
| __section-separator__ | =Shade= color, _with 35% opacity_ |

:::

::: note
This resolver is registered for the `"table"` component.
:::

### Input Resolver

Creates the colors for input fields.

::: signature

| Variant | Returns |
| -- | -- |
| __accent__ | =color=, or =primary= color for =base palette= |
| __accent-text__ | =text= variant, or =primary text= variant for =base palette= |
| __accent-foreground__ | =foreground= variant, or =primary foreground= variant for =base palette= |
| __meta__ | =Shade text= variant |
| __placeholder__ | =Shade light= variant |
| __border__ | =Base separator= variant |
| __background__ | White (light) or =base color= (dark) |
| __hover-background__ | =Base surface= variant |
| __disabled-border__ | =Base disabled-border= variant |
| __disabled-foreground__ | =Base disabled-foreground= variant |
| __disabled-background__ | Transparent |

:::

::: note
This resolver is registered for the `"input"` component.
:::

### Component Resolver

Creates the colors for general components.

::: signature

| Variant | Returns |
| -- | -- |
| __text__ | =Shade text= variant |
| __separator__ | =Base separator= variant |
| __muted__ | =muted= variant, or =Shade muted= variant for the =base palette= |
| __simple-accent__ | =color=, or =Shade color= for the =base palette= |
| __simple-text__ | =text= variant, or =Shade text= variant for the =base palette= |
| __simple-hover__ | =light= variant, or =Shade light= variant for the =base palette= |
| __light-accent__ | =color=, or =Shade color= for the =base palette= |
| __light-foreground__ | =text= variant, or =Shade text= variant for the =base palette= |
| __light-background__ | =light= variant, or =Shade light= variant for the =base palette= |
| __light-hover__ | =light-hover= variant, or =Shade light-hover= variant for the =base palette= |
| __accent__ | =color=, or =primary= color for the =base palette= |
| __accent-text__ | =text= variant, or =primary text= variant for the =base palette= |
| __accent-foreground__ | =foreground= variant, or =primary foreground= variant for the =base palette= |
| __accent-background__ | =color=, or =primary= color for the =base palette= |
| __accent-hover__ | =hover= variant, or =primary hover= variant for the =base palette= |
| __disabled-text__ | =Shade muted= variant |
| __disabled-border__ | =Base disabled-border= variant |
| __disabled-foreground__ | =Base disabled-foreground= variant |
| __disabled-background__ | =Base disabled-background= variant |

:::

::: note
This resolver is registered for the `"component"` component.
:::
