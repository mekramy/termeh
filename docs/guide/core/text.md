# Text

Termeh provides utilities to define and retrieve text sizes and styles for UI components.

## Define Text Size

Register a new text size.

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

## Text Size

Retrieves a defined text size value by its name or generates an _error_ if the size is not defined.

::: definition

**Signature:**

```scss
@function size($name: STRING): NUMBER;
```

**Example:**

```scss
$small-text: termeh.size("small"); // 12px
$large-text: termeh.size("large"); // 24px
```

:::

## Text Sizes

Gets a filtered map of text sizes, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function sizes($includes: LIST = null, $excludes: LIST = null): MAP<STRING, NUMBER>;
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

| Key       | Value            |
| --------- | ---------------- |
| `left`    | _left aligned_   |
| `right`   | _right aligned_  |
| `center`  | _center aligned_ |
| `justify` | _justified_      |

:::

## Font Weight

Gets the numeric font-weight value by its name or generates an _error_ if the weight is invalid.

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

| Key        | Value |
| ---------- | ----- |
| `lighter`  | _100_ |
| `light`    | _300_ |
| `normal`   | _400_ |
| `medium`   | _500_ |
| `semibold` | _600_ |
| `bold`     | _700_ |
| `bolder`   | _900_ |

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
