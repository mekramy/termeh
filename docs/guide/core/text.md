# Text

Termeh provides utilities to define and retrieve text sizes and styles for UI components.

::: scheme
Text sizes are scheme-based, meaning they can have different values depending on the active color scheme.
:::

## Define Text Size

Register a new text size.

::: error
**throws** If the input name is not a string or if the input size is not a number.
:::

::: definition

**Signature:**

```scss
@mixin define-size($name: STRING, $size: NUMBER);
```

**Example:**

```scss
@include termeh.define-size("small", 12px);
@include termeh.define-size("medium", 16px);
@include termeh.define-size("large", 24px);
```

:::

## Override Size

Overrides an existing size for a specific scheme.

::: error
**throws** If the input scheme or name is not a string, if the input size is not a number, or if the size is not defined in main scheme.
:::

::: definition

**Signature:**

```scss
@mixin override-size($scheme: STRING, $name: STRING, $size: NUMBER);
```

**Example:**

```scss
@include termeh.override-size("dark", "small", 14px);
```

:::

## Size Value

Gets the value of a size by name.

::: error
**throws** If the input name is not a string or if the size is not found.
:::

::: definition

**Signature:**

```scss
@function size-value($name: STRING): NUMBER;
```

**Example:**

```scss
$small-size: termeh.size-value("small"); // 12px
$large-size: termeh.size-value("large"); // 24px
```

:::

## Scheme Size

Gets the value of a size for a specific scheme. This function will return main scheme size as fallback.

::: error
**throws** If the input scheme or name is not a string, or if the size is not defined in the main scheme.
:::

::: definition

**Signature:**

```scss
@function scheme-size($scheme: STRING, $name: STRING): NUMBER;
```

**Example:**

```scss
$small-dark: termeh.scheme-size("dark", "small"); // 14px
```

:::

## Text Size

Returns the CSS variable reference for a size by its name.

::: error
**throws** If the input name is not a string or if the size is not found.
:::

::: definition

**Signature:**

```scss
@function size($name: STRING): VAR();
```

**Example:**

```scss
$small-text: termeh.size("small"); // var(--termeh-size-small, 12px)
$large-text: termeh.size("large"); // var(--termeh-size-large, 24px)
```

:::

## Text Sizes

Gets a filtered map of text sizes, returning both names and CSS variable reference, for iteration.

::: definition

**Signature:**

```scss
@function sizes($includes: LIST = null, $excludes: LIST = null): MAP<STRING, VAR()>;
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

Gets a filtered map of text aligns, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function text-aligns($includes: LIST = null, $excludes: LIST = null):
    MAP<STRING, STRING>;
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

::: dependencies Available Text Aligns

| Key         | Value            |
|-------------|------------------|
| **left**    | _left aligned_   |
| **right**   | _right aligned_  |
| **center**  | _center aligned_ |
| **justify** | _justified_      |

:::

## Font Weight

Gets the numeric font-weight value by its name or generates an _error_ if the weight is invalid.

::: error
**throws** If the input name is not a string or if the font weight is not found.
:::

::: definition

**Signature:**

```scss
@function weight($name: STRING): NUMBER;
```

**Example:**

```scss
$bold: termeh.weight("bold"); // 700
$light: termeh.weight("light"); // 300
```

:::

::: dependencies Available Weights

| Key          | Value |
|--------------|-------|
| **lighter**  | _100_ |
| **light**    | _300_ |
| **normal**   | _400_ |
| **medium**   | _500_ |
| **semibold** | _600_ |
| **bold**     | _700_ |
| **bolder**   | _900_ |

:::

## Font Weights

Gets a filtered map of font weights, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function weights($includes: LIST = null, $excludes: LIST = null): MAP<STRING, NUMBER>;
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
