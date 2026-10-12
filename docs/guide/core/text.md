# Text

Use Termeh's text utilities to define and retrieve text sizes and styles for your UI components.

::: scheme
Text sizes can vary by color scheme, so you can tailor them to the active scheme.
:::

## Define Text Size

Add a named text size for use throughout your styles.

::: definition

**Signature:**

```scss
@mixin define-size($name: String, $size: Length);
```

**Example:**

```scss
@include termeh.define-size("small", 12px);
@include termeh.define-size("medium", 16px);
@include termeh.define-size("large", 24px);
```

:::

::: error
**throw** If the name is not a string or the size is not numeric.
:::

## Override Size

Set a different value for an existing size in a specific scheme.

::: definition

**Signature:**

```scss
@mixin override-size($scheme: String, $name: String, $size: Length);
```

**Example:**

```scss
@include termeh.override-size("dark", "small", 14px);
```

:::

::: error
**throw** If the scheme or name is not a string, the size is not numeric, or the size is not defined in the main scheme.
:::

## Size Value

Get the value registered for a size name.

::: definition

**Signature:**

```scss
@function size-value($name: String): Length;
```

**Example:**

```scss
$small-size: termeh.size-value("small"); // 12px
$large-size: termeh.size-value("large"); // 24px
```

:::

::: error
**throw** If the name is not a string or no matching size is found.
:::

## Scheme Size

Get a size value for a specific scheme. If that scheme has no override, the main scheme value is returned.

::: definition

**Signature:**

```scss
@function scheme-size($scheme: String, $name: String): Length;
```

**Example:**

```scss
$small-dark: termeh.scheme-size("dark", "small"); // 14px
```

:::

::: error
**throw** If the scheme or name is not a string, or the size is not defined in the main scheme.
:::

## Text Size

Get the CSS variable reference for a named size.

::: definition

**Signature:**

```scss
@function size($name: String): Variable;
```

**Example:**

```scss
$small-text: termeh.size("small"); // var(--termeh-size-small, 12px)
$large-text: termeh.size("large"); // var(--termeh-size-large, 24px)
```

:::

::: error
**throw** If the name is not a string or no matching size is found.
:::

## Text Sizes

Get a filtered map of text sizes, with each name paired with its CSS variable reference, ready to iterate over.

::: definition

**Signature:**

```scss
@function sizes($includes: List = null, $excludes: List = null): MAP<String, Variable>;
```

**Example:**

```scss
.badge {
  @each $name, $size in termeh.sizes(("small", "medium")) {
    &.is-#{$name} {
      font-size: $size;
    }
  }
}
```

:::

## Text Aligns

Get a filtered map of text alignments, with each name paired with its value, ready to iterate over.

::: definition

**Signature:**

```scss
@function text-aligns($includes: String = null, $excludes: String = null):
    MAP<String, TextAlign>;
```

**Example:**

```scss
span {
  @each $name, $align in termeh.text-aligns(null, ("bolder")) {
    &.is-#{$name} {
      text-align: $align;
    }
  }
}
```

:::

::: block Available Text Aligns

| Key         | Description      |
|-------------|------------------|
| **left**    | _left aligned_   |
| **right**   | _right aligned_  |
| **center**  | _center aligned_ |
| **justify** | _justified_      |

:::

## FontWeight

Get the numeric font-weight value for a name. An _error_ is raised if the name is not a supported weight.

::: definition

**Signature:**

```scss
@function weight($name: String): FontWeight;
```

**Example:**

```scss
$bold: termeh.weight("bold"); // 700
$light: termeh.weight("light"); // 300
```

:::

::: block Available Weights

| Key          | Value |
|--------------|-------|
| **lighter**  | `100` |
| **light**    | `300` |
| **normal**   | `400` |
| **medium**   | `500` |
| **semibold** | `600` |
| **bold**     | `700` |
| **bolder**   | `900` |

:::

::: error
**throw** If the name is not a string or no matching font weight is found.
:::

## Font Weights

Get a filtered map of font weights, with each name paired with its numeric value, ready to iterate over.

::: definition

**Signature:**

```scss
@function weights($includes: List = null, $excludes: List = null): MAP<String, FontWeight>;
```

**Example:**

```scss
span {
  @each $name, $weight in termeh.weights(null, ("bolder")) {
    &.is-#{$name} {
      font-weight: $weight;
    }
  }
}
```

:::
