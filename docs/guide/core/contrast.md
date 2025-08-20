# Contrast Helpers

Termeh provides a set of color helper functions for luminance, contrast, and color harmonization. These functions help you make accessible and visually harmonious UI designs.

## Luminance

Calculates the luminance of a color (WCAG standard).

::: code-group

```scss [usage.scss]
@function luminance($color);
```

```scss [example.scss]
$luminance: luminance(#3498db);
```

:::

---

## Darkest

Returns the darker color based on luminance.

::: code-group

```scss [usage.scss]
@function darkest($color1, $color2);
```

```scss [example.scss]
$dark: darkest(#ff0000, #00ff00);
```

:::

---

## Lightest

Returns the lighter color based on luminance.

::: code-group

```scss [usage.scss]
@function lightest($color1, $color2);
```

```scss [example.scss]
$light: lightest(#ff0000, #00ff00);
```

:::

---

## Contrast Ratio

Calculates the WCAG contrast ratio between background and foreground colors.

::: code-group

```scss [usage.scss]
@function contrast-ratio($back, $color);
```

```scss [example.scss]
$ratio: contrast-ratio(#ffffff, #333333);
```

:::

---

## Tone

Determines whether a color is **light** or **dark**.

::: code-group

```scss [usage.scss]
@function tone($color);
```

```scss [example.scss]
$tone: tone(#f1c40f);
```

:::

---

## Contrast

Selects the color with higher contrast relative to a base color.

::: code-group

```scss [usage.scss]
@function contrast($base, $color1, $color2);
```

```scss [example.scss]
$best-contrast: contrast(#ffffff, #3498db, #e74c3c);
```

:::

---

## Harmony

Selects the more harmonious color relative to a base color.

::: code-group

```scss [usage.scss]
@function harmony($base, $color1, $color2);
```

```scss [example.scss]
$best-harmony: harmony(#ffffff, #3498db, #e74c3c);
```

:::
