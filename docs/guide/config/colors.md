---
outline: deep
description: Default color palettes and variants that Termeh registers, how colors are resolved, and how to change or extend them.
---

# Default Colors

__Palettes__ are the =only source of color= in Termeh. Every color the UI generates, such as text, backgrounds, borders, hover states, and modifiers like `is-primary`, is created from a palette. Because components never hard-code colors, changing the @scheme@ restyles every component that uses it.

Termeh already defines a default set of palettes and a default set of __variants__ (such as _hover_, _muted_, or _surface_) for them, so the framework looks consistent out of the box. You can =change= a palette color, =add= new palettes, =fix= a variant to a color you choose, or write your own @resolvers@ to change how variants are created.

::: tip Note
Define your colors and resolvers =before= you include any component module, so that components pick up your custom values.
:::

::: warning
Avoid the default color functions. Use `termeh.mix` to blend two colors and `termeh.alpha` to change a color's opacity. `termeh.alpha` also accepts CSS variables returned by getter functions.
:::

::: note
See [Palette Reference](/guide/reference/palette) for advanced usage and complete reference.
:::

## How Colors Work

A palette is a named base color, such as _primary_ or _error_. The special __base__ palette is the main color of the theme: it is usually the document background, and it decides whether the theme is =light= or =dark=. All other palettes are accent colors.

The default variants are usually derived from the `base` palette too, so they match the light or dark mode of the theme.

A __variant__ is a color derived from a palette for a specific purpose, such as `hover`, `light`, or `foreground`. When a component asks for a variant, Termeh finds it in this order:

1. An =explicitly defined= variant color. If you defined it, it is used and no resolver runs.
2. A color created by a @resolver@. Resolvers are functions that build the variant from the palette color and the base color.
3. The =fallback= value passed by the component, if there is one.

Resolvers receive the _scheme_, the _palette name_, whether the base color _is light_, the _base color_, the _palette color_, and the _variant name_. They return a =color=, or `null` when they do not know the variant so the next resolver can try. The =first color returned wins=.

The `palette` function generates shades of a color across =weights= from __50__ to __900__, where __500__ is the original color. The built-in resolvers choose different weights for light and dark themes, so variants keep good contrast in both.

::: warning
Variants are resolved for a scheme only when that scheme overrides the =base palette=, because the base color decides whether the scheme is light or dark. When you add a scheme, override `base` for it as well.
:::

## Default Palettes

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

Use a resolver when you want to =create variants by rule= instead of fixing each one by hand, or when you need a variant that Termeh does not provide. A resolver is a function that receives `$scheme`, `$palette`, `$is-light`, `$base`, `$color`, and `$variant`, and returns a color or `null`. The [default resolvers](#default-resolvers) below are complete examples.

Use `fallback-resolver` to =add= a resolver as a last resort. It is called only if the other resolvers cannot create the requested variant.

```scss
@include termeh.fallback-resolver($resolver, $component: null);
```

Use `define-resolver` to =add= a resolver that is tried before all existing ones, so it can replace a color that a default resolver creates. The most recently defined resolver has priority.

```scss
@include termeh.define-resolver($resolver, $component: null);
```

Pass the `$component` name to apply a resolver to that component only; without it, the resolver applies to the general variants of every palette.

::: note
Resolvers run only for variants that have =no explicitly defined color=. A variant defined with `define-variant` is always returned directly. See [Resolvers](/guide/reference/resolver) for more details.
:::

## Default Resolvers

Termeh provides =built-in resolvers= for the general variants of palettes and for the _overlay_, _box_, _table_, _input_, and _component_ components. Each section below shows the resolver code and lists the variants it creates.

All of them are registered with `fallback-resolver`, so a resolver you add with `define-resolver` is always tried first and can replace any of these colors.

### Base Resolver

This is a =general resolver=. It only processes the `base` palette and ignores all others.

```scss
@function base-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette != "base" {
        @return null;
    }

    @if $variant == "foreground" {
        @return #0d1b2a;
    } @else if $variant == "background" {
        @return termeh.color("base");
    } @else if $variant == "separator" {
        @return #e0e4eb;
    } @else if $variant == "surface" {
        @return #f8f9fa;
    } @else if $variant == "surface-hover" {
        @return #eef0f3;
    } @else if $variant == "disabled-border" {
        @return termeh.variant("base", "separator");
    } @else if $variant == "disabled-foreground" {
        @return termeh.variant("shade", "muted");
    } @else if $variant == "disabled-background" {
        @return termeh.variant("base", "surface");
    }

    @return null;
}
```

- __foreground__ ~color~ - Text and icon color on the base background.
- __background__ ~color~ - Background of the theme (usually the page background ).
- __separator__ ~color~ - Borders and dividers.
- __surface__ ~color~ - Background of raised areas, such as cards, `<code>`, ... .
- __surface-hover__ ~color~ - Hover state of the surface.
- __disabled-border__ ~color~ - Border of disabled elements.
- __disabled-foreground__ ~color~ - Text of disabled elements.
- __disabled-background__ ~color~ - Background of disabled elements.

### Palette Resolver

This is a =general resolver=. It only processes the =non-base= palettes and ignores the `base` palette. Light and dark themes use different color weights, from `50` to `900`.

```scss
@function palette-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette == "base" {
        @return null;
    }

    $shade: termeh.color-value("shade");
    @if $scheme {
        $override: termeh.scheme-color($scheme, "shade");
        @if $override {
            $shade: $override;
        }
    }

    @if $variant == "text" {
        $weight: termeh.iif($is-light, "700", "200");
        $variation: termeh.palette($color, $weight);
        @return termeh.mix($variation, $base, 90%);
    } @else if $variant == "foreground" {
        $weight: termeh.iif($is-light, "900", "100");
        $variation: termeh.palette($color, $weight);
        @return termeh.mix($variation, $base, 5%);
    } @else if $variant == "decorator" {
        $weight: termeh.iif($is-light, "800", "200");
        $variation: termeh.palette($color, $weight);
        @return termeh.mix($variation, $base, 60%);
    } @else if $variant == "hover" {
        $weight: termeh.iif($is-light, "700", "300");
        @return termeh.palette($color, $weight);
    } @else if $variant == "light" {
        $weight: termeh.iif($is-light, "800", "200");
        $variation: termeh.palette($color, $weight);
        @return termeh.mix($variation, $base, 10%);
    } @else if $variant == "light-hover" {
        $weight: termeh.iif($is-light, "800", "200");
        $variation: termeh.palette($color, $weight);
        @return termeh.mix($variation, $base, 15%);
    } @else if $variant == "muted" {
        $weight: termeh.iif($is-light, "900", "100");
        $variation: termeh.palette($color, $weight);
        $grayscale: termeh.mix($variation, $shade, 65%);
        @return termeh.mix($grayscale, $base, 65%);
    } @else if $variant == "muted-hover" {
        $weight: termeh.iif($is-light, "900", "100");
        $variation: termeh.palette($color, $weight);
        $grayscale: termeh.mix($variation, $shade, 65%);
        @return termeh.mix($grayscale, $base, 85%);
    }

    @return null;
}
```

- __text__ ~color~ - Text color of the palette on a plain background.
- __foreground__ ~color~ - Text and icon color on top of the palette color.
- __decorator__ ~color~ - Decorative accent, such as borders and small details.
- __hover__ ~color~ - Hover state of the palette color.
- __light__ ~color~ - Soft tinted background of the palette color.
- __light-hover__ ~color~ - Hover state of the light variant.
- __muted__ ~color~ - Subdued, less saturated version of the palette color.
- __muted-hover__ ~color~ - Hover state of the muted variant.

### Overlay Resolver

This resolver is registered for the `"overlay"` component.

```scss
@function overlay-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette != "base" {
        @if $variant == "accent" {
            @return termeh.variant($palette, "text");
        }
    }

    @if $variant == "accent" {
        @return termeh.variant("base", "foreground");
    } @else if $variant == "foreground" {
        @return termeh.variant("base", "foreground");
    } @else if $variant == "background" {
        @return termeh.color("base");
    }

    @return null;
}
```

- __accent__ ~color~ - Accent of the overlay, which is the text variant of the palette or the base foreground for the `base` palette.
- __foreground__ ~color~ - Text and icon color on the overlay.
- __background__ ~color~ - Background of the overlay.

### Box Resolver

This resolver is registered for the `"box"` component.

```scss
@function box-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $variant == "background" {
        @return termeh.color("base");
    } @else if $variant == "surface" {
        @return termeh.variant("base", "surface");
    } @else if $variant == "separator" {
        @return termeh.variant("base", "separator");
    } @else if $variant == "overlay-accent" {
        @return termeh.variant-for("overlay", $palette, "accent");
    } @else if $variant == "overlay-foreground" {
        @return termeh.variant-for("overlay", $palette, "foreground");
    } @else if $variant == "overlay-background" {
        @return termeh.variant-for("overlay", $palette, "background");
    }

    @return null;
}
```

- __background__ ~color~ - Background of the box.
- __surface__ ~color~ - Background of raised areas inside the box.
- __separator__ ~color~ - Borders and dividers of the box.
- __overlay-accent__ ~color~ - Accent of the overlay inside the box.
- __overlay-foreground__ ~color~ - Text and icon color of the overlay inside the box.
- __overlay-background__ ~color~ - Background of the overlay inside the box.

### Table Resolver

This resolver is registered for the `"table"` component. The `base` palette uses the `primary` palette for the decorator and the sorted column.

```scss
@function table-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette != "base" {
        @if $variant == "decorator" {
            @return $color;
        } @else if $variant == "sorted-text" {
            @return termeh.variant($palette, "text");
        } @else if $variant == "sorted-background" {
            @return termeh.alpha($color, 0.05);
        }
    }

    @if $variant == "decorator" {
        @return termeh.color("primary");
    } @else if $variant == "sorted-text" {
        @return termeh.variant("primary", "text");
    } @else if $variant == "sorted-background" {
        @return termeh.alpha(termeh.color("primary"), 0.05);
    } @else if $variant == "striped-background" {
        @return termeh.variant("base", "surface");
    } @else if $variant == "hover-background" {
        @return termeh.variant("base", "surface-hover");
    } @else if $variant == "row-separator" {
        @return termeh.variant("base", "separator");
    } @else if $variant == "column-separator" {
        @return transparent;
    } @else if $variant == "section-separator" {
        @return termeh.alpha(termeh.color("shade"), 0.35);
    }

    @return null;
}
```

- __decorator__ ~color~ - Decorative lines of the table.
- __sorted-text__ ~color~ - Text color of the sorted column.
- __sorted-background__ ~color~ - Background of the sorted column.
- __striped-background__ ~color~ - Background of striped rows.
- __hover-background__ ~color~ - Background of the hovered row.
- __row-separator__ ~color~ - Separator between rows.
- __column-separator__ ~color~ - Separator between columns.
- __section-separator__ ~color~ - Separator between table sections.

### Input Resolver

This resolver is registered for the `"input"` component. The `base` palette uses the `primary` palette for the accent variants.

```scss
@function input-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette != "base" {
        @if $variant == "accent" {
            @return $color;
        } @else if $variant == "accent-text" {
            @return termeh.variant($palette, "text");
        } @else if $variant == "accent-foreground" {
            @return termeh.variant($palette, "foreground");
        }
    }

    @if $variant == "meta" {
        @return termeh.variant("shade", "text");
    } @else if $variant == "placeholder" {
        @return termeh.variant("shade", "light");
    } @else if $variant == "border" {
        @return termeh.variant("base", "separator");
    } @else if $variant == "background" {
        @return termeh.iif($is-light, white, $base);
    } @else if $variant == "hover-background" {
        @return termeh.variant("base", "surface");
    }

    @if $variant == "accent" {
        @return termeh.color("primary");
    } @else if $variant == "accent-text" {
        @return termeh.variant("primary", "text");
    } @else if $variant == "accent-foreground" {
        @return termeh.variant("primary", "foreground");
    }

    @if $variant == "disabled-border" {
        @return termeh.variant("base", "disabled-border");
    } @else if $variant == "disabled-foreground" {
        @return termeh.variant("base", "disabled-foreground");
    } @else if $variant == "disabled-background" {
        @return transparent;
    }

    @return null;
}
```

- __accent__ ~color~ - Accent of the focused input.
- __accent-text__ ~color~ - Text color on the accent.
- __accent-foreground__ ~color~ - Text and icon color on top of the accent.
- __meta__ ~color~ - Color of helper texts, such as hints and legends.
- __placeholder__ ~color~ - Color of placeholder text.
- __border__ ~color~ - Border of the input.
- __background__ ~color~ - Background of the input, which is white in light themes and the base color in dark themes.
- __hover-background__ ~color~ - Background of the hovered input.
- __disabled-border__ ~color~ - Border of the disabled input.
- __disabled-foreground__ ~color~ - Text color of the disabled input.
- __disabled-background__ ~color~ - Background of the disabled input.

### Component Resolver

This resolver is registered for the `"component"` component. The `base` palette uses the `shade` palette for the simple and light styles, and the `primary` palette for the accent style.

```scss
@function component-resolver(
    $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette != "base" {
        // Defaults
        @if $variant == "muted" {
            @return termeh.variant($palette, "muted");
        }

        // Simple
        @if $variant == "simple-accent" {
            @return $color;
        } @else if $variant == "simple-text" {
            @return termeh.variant($palette, "text");
        } @else if $variant == "simple-hover" {
            @return termeh.variant($palette, "light");
        }

        // Light
        @if $variant == "light-accent" {
            @return $color;
        } @else if $variant == "light-foreground" {
            @return termeh.variant($palette, "text");
        } @else if $variant == "light-background" {
            @return termeh.variant($palette, "light");
        } @else if $variant == "light-hover" {
            @return termeh.variant($palette, "light-hover");
        }

        // Accent
        @if $variant == "accent" {
            @return $color;
        } @else if $variant == "accent-text" {
            @return termeh.variant($palette, "text");
        } @else if $variant == "accent-foreground" {
            @return termeh.variant($palette, "foreground");
        } @else if $variant == "accent-background" {
            @return $color;
        } @else if $variant == "accent-hover" {
            @return termeh.variant($palette, "hover");
        }
    }

    // Defaults
    @if $variant == "text" {
        @return termeh.variant("shade", "text");
    } @else if $variant == "separator" {
        @return termeh.variant("base", "separator");
    } @else if $variant == "muted" {
        @return termeh.variant("shade", "muted");
    }

    // Simple
    @if $variant == "simple-accent" {
        @return termeh.color("shade");
    } @else if $variant == "simple-text" {
        @return termeh.variant("shade", "text");
    } @else if $variant == "simple-hover" {
        @return termeh.variant("shade", "light");
    }

    // Light
    @if $variant == "light-accent" {
        @return termeh.color("shade");
    } @else if $variant == "light-foreground" {
        @return termeh.variant("shade", "text");
    } @else if $variant == "light-background" {
        @return termeh.variant("shade", "light");
    } @else if $variant == "light-hover" {
        @return termeh.variant("shade", "light-hover");
    }

    // Accent
    @if $variant == "accent" {
        @return termeh.color("primary");
    } @else if $variant == "accent-text" {
        @return termeh.variant("primary", "text");
    } @else if $variant == "accent-foreground" {
        @return termeh.variant("primary", "foreground");
    } @else if $variant == "accent-background" {
        @return termeh.color("primary");
    } @else if $variant == "accent-hover" {
        @return termeh.variant("primary", "hover");
    }

    // Disabled states
    @if $variant == "disabled-text" {
        @return termeh.variant("shade", "muted");
    } @else if $variant == "disabled-border" {
        @return termeh.variant("base", "disabled-border");
    } @else if $variant == "disabled-foreground" {
        @return termeh.variant("base", "disabled-foreground");
    } @else if $variant == "disabled-background" {
        @return termeh.variant("base", "disabled-background");
    }

    @return null;
}
```

- __text__ ~color~ - Text color of the component.
- __separator__ ~color~ - Borders and dividers of the component.
- __muted__ ~color~ - Subdued color of the component.
- __simple-accent__ ~color~ - Accent of the simple style.
- __simple-text__ ~color~ - Text color of the simple style.
- __simple-hover__ ~color~ - Hover background of the simple style.
- __light-accent__ ~color~ - Accent of the light style.
- __light-foreground__ ~color~ - Text and icon color of the light style.
- __light-background__ ~color~ - Background of the light style.
- __light-hover__ ~color~ - Hover background of the light style.
- __accent__ ~color~ - Accent of the solid style.
- __accent-text__ ~color~ - Text color on the accent.
- __accent-foreground__ ~color~ - Text and icon color on top of the accent background.
- __accent-background__ ~color~ - Background of the solid style.
- __accent-hover__ ~color~ - Hover background of the solid style.
- __disabled-text__ ~color~ - Text color of the disabled component.
- __disabled-border__ ~color~ - Border of the disabled component.
- __disabled-foreground__ ~color~ - Text and icon color of the disabled component.
- __disabled-background__ ~color~ - Background of the disabled component.
