# Contrast Utilities

Use Termeh's color helpers to compare luminance, check contrast, and find harmonious colors. They make it easier to create accessible, balanced interfaces.

## Luminance

Returns a color's relative luminance using the _WCAG_ standard.

::: definition

**Signature:**

```scss
@function luminance($color: Color): Number;
```

**Example:**

```scss
$luminance: termeh.luminance(#3498db);
```

:::

::: error
**throw** If the input is not a valid color.
:::

## Darkest

Compares two colors and returns the one with lower luminance.

::: definition

**Signature:**

```scss
@function darkest($color1: Color, $color2: Color): Color;
```

**Example:**

```scss
$dark: termeh.darkest(#ff0000, #00ff00);
```

:::

:::error
**throw** If either input is not a valid color.
:::

## Lightest

Compares two colors and returns the one with higher luminance.

::: definition

**Signature:**

```scss
@function lightest($color1: Color, $color2: Color): Color;
```

**Example:**

```scss
$light: termeh.lightest(#ff0000, #00ff00);
```

:::

:::error
**throw** If either input is not a valid color.
:::

## Contrast Ratio

Returns the _WCAG_ contrast ratio between a background color and a foreground color.

::: definition

**Signature:**

```scss
@function contrast-ratio($back: Color, $color: Color): Number;
```

**Example:**

```scss
$ratio: termeh.contrast-ratio(#ffffff, #333333);
```

:::

:::error
**throw** If either input is not a valid color.
:::

## Tone

Classifies a color as _light_ or _dark_ based on its luminance.

::: definition

**Signature:**

```scss
@function tone($color: Color): "light" | "dark";
```

**Example:**

```scss
$tone: termeh.tone(#f1c40f);
```

:::

:::error
**throw** If the input is not a valid color.
:::

## Contrast

Compares two colors against a base color and returns the one with higher contrast.

::: definition

**Signature:**

```scss
@function contrast($base: Color, $color1: Color, $color2: Color): Color;
```

**Example:**

```scss
$best-contrast: termeh.contrast(#ffffff, #3498db, #e74c3c);
```

:::

:::error
**throw** If any input is not a valid color.
:::

## Harmony

Compares two colors against a base color and returns the one that is more harmonious.

::: definition

**Signature:**

```scss
@function harmony($base: Color, $color1: Color, $color2: Color): Color;
```

**Example:**

```scss
$best-harmony: termeh.harmony(#ffffff, #3498db, #e74c3c);
```

:::

:::error
**throw** If any input is not a valid color.
:::
