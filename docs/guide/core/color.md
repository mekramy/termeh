# Color Management

The color system provides a consistent way to define, manage, and retrieve colors and their variants across the design system. It supports base palettes, custom variants, and automatically generated variants based on theme contrast.

::: tip
**theming** Termeh's colors are scheme-based, meaning they can have different values depending on the active color scheme.
:::

## Define Palette

Register a new base color in the palette.

::: error
**throws** If the input name is not a string or the input color is not a valid color.
:::

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

## Override Palette

Overrides a palette color for a specific scheme.

::: error
**throws** If the scheme or name is not a string, the color is invalid, or the color is not defined in the main scheme.
:::

::: definition

**Signature:**

```scss
@mixin override-palette($scheme: STRING, $name: STRING, $color: COLOR);
```

**Example:**
  
```scss
@include termeh.override-palette("dark", "primary", #6200ee);
@include termeh.override-palette("dark", "green", #03dac6);
```

:::

## Define Variant

Set a custom variant for an existing color or _override_ its default variant.

::: error
**throws** If the name or variant is not a string, the color is invalid, or color is not defined in the main scheme.
:::

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

## Override Variant

Overrides a specific variant of a palette color for a specific scheme.

::: error
**throws** If the scheme, name, or variant is not a string, the color is invalid, or the color is not defined in the main scheme.
:::

::: definition

**Signature:**

```scss
@mixin override-variant($scheme: STRING, $name: STRING, $variant: STRING, $color: COLOR);
```

**Example:**

```scss
@include termeh.override-variant("dark", "primary", "active", #3700b3);
@include termeh.override-variant("dark", "primary", "icons", #2700a0);
```

:::

## Color Value

Retrieves the value of a base color by its name.

::: error
**throws** If the name is not a string or the color is not defined.
:::

::: definition

**Signature:**

```scss
@function color-value($name: STRING): COLOR;
```

**Example:**

```scss
$primary:  termeh.color-value("primary");
$green: termeh.color-value("green");
```

:::

## Scheme Color

Retrieves the value of a color for a specific scheme.

::: error
**throws** If the scheme or name is not a string or color is not defined in the main scheme.
:::

::: definition

**Signature:**

```scss
@function scheme-color($scheme: STRING, $name: STRING): COLOR;
```

**Example:**

```scss
$primary-dark: termeh.scheme-color("dark", "primary");
$green-dark: termeh.scheme-color("dark", "green");
```

:::

## Variant Value

Retrieves the value of a color variant for a specific color name.

::: error
**throws** If the name or variant is not a string.
:::

::: definition

**Signature:**

```scss
@function variant-value($name: STRING, $variant: STRING, $fallback: COLOR = null): COLOR;
```

**Example:**

```scss
$primary-active: termeh.variant-value("primary", "active");
$green-light: termeh.variant-value("green", "light");
$unknown: termeh.variant-value("danger", "shadow", #a8220f); // fallback
```

:::

## Scheme Variant

Retrieves the value of a color variant for a specific color scheme and color name.

::: error
**throws** If the scheme, name, or variant is not a string.
:::

::: definition

**Signature:**

```scss
@function scheme-variant($scheme: STRING, $name: STRING, $variant: STRING, $fallback: COLOR = null): COLOR;
```

**Example:**

```scss
$primary-active-dark: termeh.scheme-variant("dark", "primary", "active");
$green-light-dark: termeh.scheme-variant("dark", "green", "light");
$unknown-dark: termeh.scheme-variant("dark", "danger", "shadow", #a8220f); // fallback
```

:::

## Color

Returns the CSS variable reference for a base color by its name.

::: error
**throws** If the name is not a string or the color is not defined.
:::

::: definition

**Signature:**

```scss
@function color($name: STRING): VAR();
```

**Example:**

```scss
$primary: termeh.color("primary"); // var(--termeh-color-primary, #6200ee)
```

:::

## Variant

Returns the CSS variable reference for a color variant by its name and variant.

::: error
**throws** If the name or variant is not a string.
:::

::: definition

**Signature:**

```scss
@function variant($name: STRING, $variant: STRING, $fallback: COLOR = null): VAR();
```

**Example:**

```scss
$primary-active: termeh.variant("primary", "active", #555); // var(--termeh-color-primary-active, #555)
```

:::

::: dependencies Available Variants

By default, Termeh resolves these variants through _auto-generation_:

| Key             | Description                         |
| --------------- | ----------------------------------- |
| `active`        | Active state                        |
| `light`         | Light version of color              |
| `light-active`  | Light version active state          |
| `mute`          | Muted text                          |
| `mute-active`   | Muted text active state             |
| `action`        | Action background                   |
| `action-active` | Action background active state      |
| `readable`      | Readable text color                 |
| `foreground`    | Foreground color                    |
| `decorator`     | Decorator color (separator, etc...) |
| `color`         | Registered color itself             |

:::

## Colors

Gets a filtered map of colors, returning both names and CSS variable reference, for iteration.

::: definition

**Signature:**

```scss
@function colors($includes: LIST = null, $excludes: LIST = null): MAP<STRING, VAR()>;
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
