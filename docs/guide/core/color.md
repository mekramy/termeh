# Color Management

The color system provides a consistent way to define, manage, and retrieve colors and their variants across the design system. It supports base palettes, custom variants, and automatically generated variants based on theme contrast.

## Define Palette

Register a new base color in the palette.

::: definition

**Signature:**

```scss
@mixin define-palette($name: STRING, $color: COLOR);
```

**Example:**

```scss
@include termeh.define-palette("primary", #6200ee);
@include termeh.define-palette("green", #03dac6);
```

:::

## Define Variant

Set a custom variant for an existing color or _override_ its default variant.

::: definition

**Signature:**

```scss
@mixin define-variant($name: STRING, $variant: STRING, $color: COLOR);
```

**Example:**

```scss
@include termeh.define-variant("primary", "active", #3700b3);
@include termeh.define-variant("primary", "icons", #2700a0);
```

:::

## Color

Gets the base color value by name or generates an _error_ if the color is not defined.

::: definition

**Signature:**

```scss
@function color($name: STRING): COLOR;
```

**Example:**

```scss
$primary: termeh.color("primary"); // #6200ee
```

:::

## Variant

Gets a color variant. If not explicitly defined, the variant is _auto-generated_ based on the base color and theme tone or generates an _error_ if the color is not defined.

If the base color is not provided, the globally defined Termeh base color is used.

::: definition

**Signature:**

```scss
@function variant(
    $name: STRING,
    $variant: STRING,
    $fallback: COLOR = null,
    $base: COLOR = null
  ): COLOR;
```

**Example:**

```scss
$primary-active: termeh.variant("primary", "active");
$green-light: termeh.variant("green", "light");
$unknown: termeh.variant("danger", "shadow", #a8220f); // fallback
```

:::

::: dependencies Available Variants

By default, Termeh resolves these variants through _auto-generation_:

| Key            | Description                         |
| -------------- | ----------------------------------- |
| `active`       | Active state                        |
| `light`        | Light version of color              |
| `light-active` | Light version active state          |
| `mute`         | Muted text                          |
| `mute-active`  | Muted text active state             |
| `readable`     | Readable text color                 |
| `foreground`   | Foreground color                    |
| `decorator`    | Decorator color (separator, etc...) |
| `color`        | Registered color itself             |

:::

## Colors

Gets a filtered map of colors, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function colors($includes: LIST = null, $excludes: LIST = null): MAP<STRING, COLOR>;
```

**Example:**

```scss
.button {
  @each $name, $color in termeh.colors(null, ("shade")) {
    &.is-#{$name} {
      background: $color;
      color: termeh.variant($name, "foreground");

      &:hover {
        background: termeh.variant($name, "active");
      }
    }
  }
}
```

:::
