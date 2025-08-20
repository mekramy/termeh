# Color Utilities

The color system provides a consistent way to define, manage, and retrieve colors and their variants across the design system.
It supports base palettes, custom variants, and auto-generated variants based on theme contrast.

---

## Define Palette

Defines a new base color in the palette.

::: code-group

```scss [usage.scss]
@mixin define-palette($name, $color);
```

```scss [example.scss]
@include define-palette("primary", #6200ee);
@include define-palette("secondary", #03dac6);
```

:::

---

## Define Variant

Defines a custom variant for an existing color.

::: code-group

```scss [usage.scss]
@mixin define-variant($name, $variant, $color);
```

```scss [example.scss]
@include define-variant("primary", "dark", #3700b3);
@include define-variant("secondary", "light", #a7ffeb);
```

:::

---

## Color

Gets the base color value by name.

::: code-group

```scss [usage.scss]
@function color($name);
```

```scss [example.scss]
$primary: color("primary"); // #6200ee
```

:::

---

## Variant

Gets a color variant. If not explicitly defined, the variant is auto-generated based on the base color and theme tone.

::: code-group

```scss [usage.scss]
@function variant($name, $variant, $fallback: null, $base: null);
```

```scss [example.scss]
$primary-active: variant("primary", "active");
$secondary-light: variant("secondary", "light");
$unknown: variant("danger", "shadow", #ff0000); // fallback
```

:::

::: details Available Variants

```scss
$active → active state
$light → light variant
$light-active → light active state
$mute → muted text variant
$mute-active → muted text active variant
$readable → readable text color
$foreground → foreground color
$decorator → decorator color (separator, etc...)
$color` → registered color
```

:::

---

## Colors

Returns a filtered map of all defined base colors.

::: code-group

```scss [usage.scss]
@function colors($includes: null, $excludes: null);
```

```scss [example.scss]
$all: colors();
$only-primary: colors(("primary"));
$without-secondary: colors(null, ("secondary"));
```

:::
