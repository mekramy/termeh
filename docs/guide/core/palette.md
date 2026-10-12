# Color Palettes

Termeh's palette functions make it easy to create coordinated color variations from a base color. Use them to build consistent, accessible, and appealing color palettes with HSL-based adjustments.

## Palette

Creates a color variation from a base color. Choose a variant from _50_ (lightest) to _900_ (darkest) to get the shade you need.

::: definition

**Signature:**

```scss
@function palette($color: Color, $variant: String): Color;
```

**Example:**

```scss
$primary200: termeh.palette(#3498db, "200");
$primary700: termeh.palette(#3498db, "700");
```

:::

::: error
**throw** If the color is invalid or the variant is not supported.
:::

::: block Available Variants

| Key     | Description              |
|---------|--------------------------|
| **50**  | Lightest variant         |
| **100** | Very light variant       |
| **200** | Light variant            |
| **300** | Moderately light variant |
| **400** | Slightly lighter variant |
| **500** | Base color               |
| **600** | Slightly darker variant  |
| **700** | Moderately dark variant  |
| **800** | Dark variant             |
| **900** | Darkest variant          |

:::
