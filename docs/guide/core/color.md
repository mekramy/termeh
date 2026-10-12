# Color Management

Use the color system to define and retrieve colors consistently across your design system. It supports base palettes, custom variants, and variants generated automatically to suit the active theme’s contrast.

::: scheme
Colors can have different values in each scheme, so they adapt to the active color scheme.
:::

## Define Palette

Add a base color to the palette.

::: definition

**Signature:**

```scss
@mixin define-palette($name: String, $color: Color);
```

**Example:**

```scss
@include termeh.define-palette("primary", #6200ee);
@include termeh.define-palette("green", #03dac6);
```

:::

::: error
**throw** If the name is not a string or the color is invalid.
:::

## Override Palette

Set a palette color to a different value in a specific scheme.

::: definition

**Signature:**

```scss
@mixin override-palette($scheme: String, $name: String, $color: Color);
```

**Example:**
  
```scss
@include termeh.override-palette("dark", "primary", #6200ee);
@include termeh.override-palette("dark", "green", #03dac6);
```

:::

::: error
**throw** If the scheme or name is not a string, the color is invalid, or the color has not been defined in the main scheme.
:::

## Define Resolver

Register a resolver to generate color variants.

::: definition

**Signature:**

```scss
@mixin define-resolver($resolver: Function<($is-light, $base, $color, $variant)>);
```

**Example:**

```scss
@function -badge-resolver($is-light, $base, $color, $variant) {
  @if $variant == "badge" {
    @if $is-light {
      @return rgb($color / 35%);
    } @else {
      @return rgb($color / 15%);
    }
  } @else if $variant == "badge-active" {
    @if $is-light {
      @return rgb($color / 50%);
    } @else {
      @return rgb($color / 25%);
    }
  }

  @return null; // Skip this resolver
}

@include termeh.define-resolver(meta.get-function("-badge-resolver"));
```

:::

::: error
**throw** If the resolver is not a valid function.
:::

::: block Resolver Function parameters

The resolver function must accept four parameters: `$is-light`, `$base`, `$color`, and `$variant`.

| Parameter     | Type      | Description                                 |
|---------------|-----------|---------------------------------------------|
| **$is-light** | _Boolean_ | Whether the `$base` color is light          |
| **$base**     | _Color_   | The background color for the current scheme |
| **$color**    | _Color_   | The original color value                    |
| **$variant**  | _String_  | The name of the variant to resolve          |

:::

## Define Variant

Add a custom variant to an existing color, or _override_ one of its default variants.

::: definition

**Signature:**

```scss
@mixin define-variant($name: String, $variant: String, $color: Color);
```

**Example:**

```scss
@include termeh.define-variant("primary", "active", #3700b3);
@include termeh.define-variant("primary", "icons", #2700a0);
```

:::

::: error
**throw** If the name or variant is not a string, the color is invalid, or the color has not been defined in the main scheme.
:::

## Override Variant

Set a palette color’s variant to a different value in a specific scheme.

::: definition

**Signature:**

```scss
@mixin override-variant($scheme: String, $name: String, $variant: String, $color: Color);
```

**Example:**

```scss
@include termeh.override-variant("dark", "primary", "active", #3700b3);
@include termeh.override-variant("dark", "primary", "icons", #2700a0);
```

:::

::: error
**throw** If the scheme, name, or variant is not a string, the color is invalid, or the color has not been defined in the main scheme.
:::

## Color Value

Get a base color’s value by name.

::: definition

**Signature:**

```scss
@function color-value($name: String): Color;
```

**Example:**

```scss
$primary:  termeh.color-value("primary");
$green: termeh.color-value("green");
```

:::

::: error
**throw** If the name is not a string or the color has not been defined.
:::

## Scheme Color

Get a color’s value for a specific scheme.

::: definition

**Signature:**

```scss
@function scheme-color($scheme: String, $name: String): Color;
```

**Example:**

```scss
$primary-dark: termeh.scheme-color("dark", "primary");
$green-dark: termeh.scheme-color("dark", "green");
```

:::

::: error
**throw** If the scheme or name is not a string, or the color has not been defined in the main scheme.
:::

## Variant Value

Get a color variant’s value by color name and variant. If the variant is unavailable, the optional fallback is returned.

::: definition

**Signature:**

```scss
@function variant-value($name: String, $variant: String, $fallback: Color = null): Color;
```

**Example:**

```scss
$primary-active: termeh.variant-value("primary", "active");
$green-light: termeh.variant-value("green", "light");
$unknown: termeh.variant-value("danger", "shadow", #a8220f); // fallback
```

:::

::: error
**throw** If the name or variant is not a string.
:::

## Scheme Variant

Get a color variant’s value for a specific scheme and color. If the variant is unavailable, the optional fallback is returned.

::: definition

**Signature:**

```scss
@function scheme-variant($scheme: String, $name: String, $variant: String, $fallback: Color = null): Color;
```

**Example:**

```scss
$primary-active-dark: termeh.scheme-variant("dark", "primary", "active");
$green-light-dark: termeh.scheme-variant("dark", "green", "light");
$unknown-dark: termeh.scheme-variant("dark", "danger", "shadow", #a8220f); // fallback
```

:::

::: error
**throw** If the scheme, name, or variant is not a string.
:::

## Color

Get the CSS variable reference for a base color by name.

::: definition

**Signature:**

```scss
@function color($name: String): Variable;
```

**Example:**

```scss
$primary: termeh.color("primary"); // var(--termeh-color-primary, #6200ee)
```

:::

::: error
**throw** If the name is not a string or the color has not been defined.
:::

## Variant

Get the CSS variable reference for a color variant by color name and variant. An optional fallback is used if the variant is unavailable.

::: definition

**Signature:**

```scss
@function variant(
  $name: String,
  $variant: String,
  $fallback: Variable<Color> | Color = null
): Variable<Color>;
```

**Example:**

```scss
$primary-active: termeh.variant("primary", "active", #555); // var(--termeh-color-primary-active, #555)
```

:::

::: error
**throw** If the name or variant is not a string.
:::

::: block Available Variants

Termeh automatically generates these variants by default:

| Key               | Description                         |
|-------------------|-------------------------------------|
| **active**        | Active state                        |
| **light**         | Light version of color              |
| **light-active**  | Light version active state          |
| **mute**          | Muted text                          |
| **mute-active**   | Muted text active state             |
| **readable**      | Readable text color                 |
| **foreground**    | Foreground color                    |
| **decorator**     | Decorator color (separator, etc...) |
| **color**         | Registered color itself             |

:::

## Colors

Get a filtered map of colors and their CSS variable references. Use it to iterate over colors in your styles.

::: definition

**Signature:**

```scss
@function colors(
  $includes: List = null,
  $excludes: List = null
): Map<String, Variable<Color>>;
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
