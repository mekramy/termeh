# Color Palettes

Termeh provides a comprehensive set of functions to generate and manipulate color palettes. These functions allow you to create consistent, accessible, and visually appealing color variations based on HSL color ranges.

## Palette

Generates a color variant based on a base color and a variant string. Variants typically range from _50_ (brightest) to _900_ (darkest).

::: definition

**Signature:**

```scss
@function palette($color: COLOR, $variant: STRING): COLOR;
```

**Example:**

```scss
$primary200: termeh.palette(#3498db, "200");
$primary700: termeh.palette(#3498db, "700");
```

:::

::: dependencies Available Variants

| Key   | Description                    |
| ----- | ------------------------------ |
| `50`  | Brightest variant              |
| `100` | Very light variant             |
| `200` | Light variant                  |
| `300` | Moderately light variant       |
| `400` | Slightly light / base-adjacent |
| `500` | Base / Original color          |
| `600` | Slightly dark / base-adjacent  |
| `700` | Moderately dark variant        |
| `800` | Dark variant                   |
| `900` | Darkest variant                |

:::
