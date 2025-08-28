# Contrast Utilities

Termeh provides a set of color helper functions for luminance, contrast, and color harmonization. These functions help you make accessible and visually harmonious UI designs.

## Luminance

Calculates the luminance of a color (_WCAG_ standard).

::: definition

**Signature:**

```scss
@function luminance($color: COLOR): NUMBER;
```

**Example:**

```scss
$luminance: termeh.luminance(#3498db);
```

:::

## Darkest

Returns the darker color based on luminance.

::: definition

**Signature:**

```scss
@function darkest($color1: COLOR, $color2: COLOR): COLOR;
```

**Example:**

```scss
$dark: termeh.darkest(#ff0000, #00ff00);
```

:::

## Lightest

Returns the lighter color based on luminance.

::: definition

**Signature:**

```scss
@function lightest($color1: COLOR, $color2: COLOR): COLOR;
```

**Example:**

```scss
$light: termeh.lightest(#ff0000, #00ff00);
```

:::

## Contrast Ratio

Calculates the WCAG contrast ratio between background and foreground colors.

::: definition

**Signature:**

```scss
@function contrast-ratio($back: COLOR, $color: COLOR): NUMBER;
```

**Example:**

```scss
$ratio: termeh.contrast-ratio(#ffffff, #333333);
```

:::

## Tone

Determines whether a color is _light_ or _dark_.

::: definition

**Signature:**

```scss
@function tone($color: COLOR): "light" | "dark";
```

**Example:**

```scss
$tone: termeh.tone(#f1c40f);
```

:::

## Contrast

Selects the color with higher contrast relative to a base color.

::: definition

**Signature:**

```scss
@function contrast($base: COLOR, $color1: COLOR, $color2: COLOR): COLOR;
```

**Example:**

```scss
$best-contrast: termeh.contrast(#ffffff, #3498db, #e74c3c);
```

:::

## Harmony

Selects the more harmonious color relative to a base color.

::: definition

**Signature:**

```scss
@function harmony($base: COLOR, $color1: COLOR, $color2: COLOR): COLOR;
```

**Example:**

```scss
$best-harmony: termeh.harmony(#ffffff, #3498db, #e74c3c);
```

:::
