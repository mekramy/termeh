# Color Palettes

Termeh provides a comprehensive set of functions to generate and manipulate color palettes. These functions allow you to create consistent, accessible, and visually appealing color variations based on HSL color ranges.

## Palette

Generates a color variant based on a base color and a variant string. Variants typically range from `"50"` (brightest) to `"900"` (darkest).

::: code-group

```scss [usage.scss]
@function palette($color, $variant);
```

```scss [example.scss]
$primary200: palette(#3498db, "200");
$primary700: palette(#3498db, "700");
```

:::

::: details Available Variants

```scss
$available: "50" "100" "200" "300" "400" "600" "700" "800" "900";
```

:::
