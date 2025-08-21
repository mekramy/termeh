# Text

Termeh provides utilities to define and retrieve text sizes for your UI components.

## Define Text Size

Defines a new text size.

::: code-group

```scss [usage.scss]
@mixin define-size($name, $size);
```

```scss [example.scss]
@include define-size("small", 12px);
@include define-size("medium", 16px);
@include define-size("large", 24px);
```

:::

## Text Size

Gets a text size value by its name.

::: code-group

```scss [usage.scss]
@function size($name);
```

```scss [example.scss]
$small-text: size("small"); // 12px
$large-text: size("large"); // 24px
```

:::

## Text Sizes

Gets a filtered map of text sizes.

::: code-group

```scss [usage.scss]
@function sizes($includes: null, $excludes: null);
```

```scss [example.scss]
$some-sizes: sizes(("small", "medium"));
$all-but-large: sizes(null, ("large"));
```

:::

## Font Weight

Gets the numeric font-weight value by its name.

::: code-group

```scss [usage.scss]
@function weight($name);
```

```scss [example.scss]
$bold: weight("bold"); // 700
$light: weight("light"); // 300
```

:::

::: details Available

```scss
- $lighter → 100
- $light → 300
- $normal → 400
- $medium → 500
- $semibold → 600
- $bold → 700
- $bolder → 900
```

:::

## Font Weights

Gets a filtered map of font weights.

::: code-group

```scss [usage.scss]
@function weights($includes: null, $excludes: null);
```

```scss [example.scss]
$only-bold: weights(("bold"));
$no-light: weights(null, ("light"));
```

:::
