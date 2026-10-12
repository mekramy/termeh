---
outline: deep
---

# Default Configuration

Termeh provides default Sass variables that its UI components use to build a consistent interface. Override these values in your project to customize the shared styles.

When a variable is set to `null`, Termeh ignores that value and uses the default when one is available.

## Animation

Termeh includes two keyframe animations for its UI:

- **spin** → Animates loading indicators.
- **shake** → Highlights invalid inputs.

## Variables

### Layout and UI

These variables provide shared layout and component styles used throughout Termeh's UI.

#### Base

```scss
@include termeh.define("base", "direction", ltr);
@include termeh.define("base", "min-width", 300px);
```

- **direction** ++direction++ → Sets the document's text direction.
- **min-width** ++length++ → Sets the document's minimum width.

#### Spacing

```scss
@include termeh.define("gap", "micro", 8px);
@include termeh.define("gap", "macro", 1.6rem);
```

- **micro** ++length++ → Small gaps within components.
- **macro** ++length++ → Larger gaps between layout or grid elements.

#### Border Radius

```scss
@include termeh.define("radius", "normal", 2px);
@include termeh.define("radius", "circle", 50%);
@include termeh.define("radius", "rounded", 290486px);
```

- **normal** ++length++ → Default corner radius.
- **circle** ++length++ → Radius for circular shapes.
- **rounded** ++length++ → Radius for fully rounded corners.

#### Decorators

```scss
@include termeh.define("decorator", "size", 2px);
@include termeh.define("decorator", "spinner", 2em);
```

- **size** ++length++ → Thickness of decorative elements.
- **spinner** ++length++ → Default size of spinners.

#### Transitions

```scss
@include termeh.define("transition", "ease", ease);
@include termeh.define("transition", "duration", 250ms);
@include termeh.define("transition", "delay", 100ms);
```

- **ease** ++easing function++ → Timing function used by default for transitions.
- **duration** ++duration++ → Default transition duration.
- **delay** ++duration++ → Default delay before transitions start.

#### Containers

```scss
@include termeh.define("container", "desktop", 960px);
@include termeh.define("container", "widescreen", 1200px);
@include termeh.define("container", "fullhd", 1500px);
```

- **desktop** ++length++ → Maximum container width at the desktop breakpoint.
- **widescreen** ++length++ → Maximum container width at the widescreen breakpoint.
- **fullhd** ++length++ → Maximum container width at the full HD breakpoint and above.

#### Gallery

```scss
@include termeh.define("gallery", "height", 300px);
@include termeh.define("gallery", "height-tablet", 200px);
@include termeh.define("gallery", "height-mobile", 100px);
```

- **height** ++length++ → Default gallery item height.
- **height-tablet** ++length++ → Gallery item height on tablets.
- **height-mobile** ++length++ → Gallery item height on mobile devices.

#### Control

```scss
@include termeh.define("control", "weight", 500);
@include termeh.define("control", "height", 2.2em);
@include termeh.define("control", "v-padding", 0);
@include termeh.define("control", "h-padding", 1.2em);
@include termeh.define("control", "meta-size", 0.9em);
@include termeh.define("control", "meta-weight", 600);
```

- **weight** ++font weight++ → Base font weight for controls.
- **height** ++length++ → Default control height.
- **v-padding** ++length++ → Vertical padding inside controls.
- **h-padding** ++length++ → Horizontal padding inside controls.
- **meta-size** ++length++ → Font size for meta-like controls.
- **meta-weight** ++font weight++ → Font weight for meta-like controls.

### Text

#### Fonts

Default font settings for Termeh's UI text.

```scss
@include termeh.define("font", "family", ("Segoe UI", Verdana));
@include termeh.define("font", "size", 14px);
@include termeh.define("font", "weight", normal);
```

- **family** ++font family++ → Default font-family stack.
- **size** ++length++ → Base text size.
- **weight** ++font weight++ → Base text weight.

#### Monospace Fonts

Font settings for monospace elements such as `<code>` and `<pre>`.

```scss
@include termeh.define("mono", "family", monospace);
@include termeh.define("mono", "size", 1rem);
@include termeh.define("mono", "weight", normal);
```

- **family** ++font family++ → Monospace font-family stack.
- **size** ++length++ → Monospace text size.
- **weight** ++font weight++ → Monospace text weight.

#### Small Text

Text settings for `<small>`, `<sub>`, `<sup>`, and other small-text elements.

```scss
@include termeh.define("small", "size", 0.8rem);
@include termeh.define("small", "weight", normal);
@include termeh.define("small", "foreground", null);
```

- **size** ++length++ → Font size for small text.
- **weight** ++font weight++ → Font weight for small text.
- **foreground** ++color++ → Text color for small text.

#### Strong Text

Text settings for `<strong>` and other emphasized text.

```scss
@include termeh.define("strong", "weight", bold);
@include termeh.define("strong", "foreground", null);
```

- **weight** ++font weight++ → Font weight for emphasized text.
- **foreground** ++color++ → Text color for emphasized text.

#### Decorated Text

Text settings for `<u>` and other decorated text.

```scss
@include termeh.define("decorated", "weight", normal);
@include termeh.define("decorated", "foreground", null);
```

- **weight** ++font weight++ → Font weight for decorated text.
- **foreground** ++color++ → Text color for decorated text.

#### Line Heights

```scss
@include termeh.define("line-height", "normal", 1.6em);
@include termeh.define("line-height", "medium", 1.4em);
@include termeh.define("line-height", "large", 1.2em);
```

- **normal** ++length++ → Default text line height.
- **medium** ++length++ → More compact line height.
- **large** ++length++ → Most compact line height.

### Theme

These color and appearance variables provide defaults for Termeh's themed UI components.

#### Scheme

```scss
@include termeh.define("base", "background", white);
@include termeh.define("base", "foreground", #081e30);
@include termeh.define("base", "section", #f8f9fa);
@include termeh.define("base", "separator", #e0e4eb);
```

- **background** ++color++ → Base page background color.
- **foreground** ++color++ → Default text color.
- **section** ++color++ → Background color for sections.
- **separator** ++color++ → Color for dividers and lines.

#### Scrollbar

```scss
@include termeh.define("scroll", "size", 10px);
@include termeh.define("scroll", "track", null);
@include termeh.define("scroll", "thumb", null);
```

- **size** ++length++ → Scrollbar width or thickness.
- **track** ++color++ → Scrollbar track color.
- **thumb** ++color++ → Scrollbar thumb color.

#### Overlay

```scss
@include termeh.define("overlay", "background", white);
@include termeh.define("overlay", "foreground", null);
@include termeh.define("overlay", "opacity", 0.75);
@include termeh.define("overlay", "filter", none);
```

- **background** ++color++ → Overlay background color.
- **foreground** ++color++ → Overlay content color.
- **opacity** ++number++ → Overlay background opacity.
- **filter** ++filter++ → Optional CSS filter applied to the overlay.

#### Tables

```scss
@include termeh.define("table", "background", null);
@include termeh.define("table", "foreground", null);
@include termeh.define("table", "decorator", null);
@include termeh.define("table", "hover-background", null);
@include termeh.define("table", "striped-background", null);
@include termeh.define("table", "sorted-background", null);
@include termeh.define("table", "column-separator", null);
@include termeh.define("table", "row-separator", null);
@include termeh.define("table", "section-separator", null);
@include termeh.define("table", "strong-weight", null);
```

- **background** ++color++ → Table background color.
- **foreground** ++color++ → Table text color.
- **decorator** ++color++ → Color for table decorations, such as sort indicators.
- **hover-background** ++color++ → Background color for hovered rows.
- **striped-background** ++color++ → Background color for alternating rows.
- **sorted-background** ++color++ → Background color for the sorted column.
- **column-separator** ++color++ → Color of column dividers.
- **row-separator** ++color++ → Color of row dividers.
- **section-separator** ++color++ → Color of dividers between table sections.
- **strong-weight** ++font weight++ → Font weight for emphasized table text.

#### Inputs

```scss
@include termeh.define("input", "height", 2.8em);
@include termeh.define("input", "border", #d1d6e0);
@include termeh.define("input", "background", white);
@include termeh.define("input", "disabled", #f0f2f5);
@include termeh.define("input", "disabled-foreground", #bfc6d4);
@include termeh.define("input", "disabled-border", #d1d6e0);
@include termeh.define("input", "checkbox", 1.3em);
@include termeh.define("input", "legend-size", null);
@include termeh.define("input", "legend-weight", null);
@include termeh.define("input", "placeholder", null);
@include termeh.define("input", "placeholder-size", 0.85em);
@include termeh.define("input", "placeholder-weight", 600); 
```

- **height** ++length++ → Default height of input controls.
- **border** ++color++ → Input border color.
- **background** ++color++ → Input background.
- **disabled** ++color++ → Background color for disabled controls.
- **disabled-foreground** ++color++ → Text color for disabled controls.
- **disabled-border** ++color++ → Border color for disabled controls.
- **checkbox** ++length++ → Size of checkboxes and radio buttons.
- **legend-size** ++length++ → Font size for fieldset legends.
- **legend-weight** ++font weight++ → Font weight for fieldset legends.
- **placeholder** ++color++ → Placeholder text color.
- **placeholder-size** ++length++ → Placeholder text size.
- **placeholder-weight** ++font weight++ → Placeholder text weight.

#### Box

Default styles for cards, modals, and other box-like components.

```scss
@include module.define("box", "background", null);
@include module.define("box", "foreground", null);
@include module.define("box", "section", null);
@include module.define("box", "separator", null);
@include module.define("box", "overlay-background", null);
@include module.define("box", "overlay-foreground", null);
@include module.define("box", "overlay-opacity", null);
@include module.define("box", "overlay-filter", null);
@include module.define(
  "box",
  "shadow",
  (
    module.soft-shadow(0, 1px, module.color-value("shade")),
    module.soft-shadow(0, -1px, module.color-value("shade")),
    module.soft-shadow(0, 3px, module.color-value("shade"))
  )
);
@include module.define(
  "box",
  "sizes",
  ("small" 22em, "normal" 26em, "medium" 36em)
);
```

- **background** ++color++ → Background color for boxes.
- **foreground** ++color++ → Text color for boxes.
- **section** ++color++ → Background color for box sections.
- **separator** ++color++ → Color of separators within boxes.
- **overlay-background** ++color++ → Background color for box overlays.
- **overlay-foreground** ++color++ → Content color for box overlays.
- **overlay-opacity** ++number++ → Opacity of box overlay backgrounds.
- **overlay-filter** ++filter++ → Backdrop filter for box overlays.
- **shadow** ++box shadow++ → Box shadow style.
- **sizes** ++list++ → Available sizes for box components.

## Color Palettes

Shared color tokens used by Termeh's components.

```scss
@include termeh.define-palette("shade", #667085);
@include termeh.define-palette("error", #c00021);
@include termeh.define-palette("primary", #2196f3);
```

- **shade** ++color++ → Neutral color palette.
- **error** ++color++ → Error and danger color palette.
- **primary** ++color++ → Primary accent color palette.

## Gaps

Shared spacing scale for component margins and padding.

```scss
@include termeh.define-gap("mini", 0.5em);
@include termeh.define-gap("small", 0.85em);
@include termeh.define-gap("normal", 1em);
@include termeh.define-gap("medium", 1.5em);
@include termeh.define-gap("large", 2em);
@include termeh.define-gap("huge", 2.5em);
@include termeh.define-gap("massive", 3em);
```

## Text Sizes

Shared font-size scale for text and headings.

```scss
@include termeh.define-size("small", 0.8em);
@include termeh.define-size("normal", 1em);
@include termeh.define-size("medium", 1.25em);
@include termeh.define-size("large", 1.5em);
@include termeh.define-size("big", 2em);
@include termeh.define-size("huge", 2.5em);
@include termeh.define-size("massive", 3em);
```

## Grid Units

Percentage-based width units for responsive grids with 2–12 columns.

```scss
@include termeh.define-unit("full", 100%);
@include termeh.define-unit("half", 50%);
@include termeh.define-unit("1-of-3", 33.3333%);
@include termeh.define-unit("2-of-3", 66.6667%);
@include termeh.define-unit("1-of-4", 25%);
@include termeh.define-unit("2-of-4", 50%);
@include termeh.define-unit("3-of-4", 75%);
@include termeh.define-unit("1-of-5", 20%);
@include termeh.define-unit("2-of-5", 40%);
@include termeh.define-unit("3-of-5", 60%);
@include termeh.define-unit("4-of-5", 80%);
@include termeh.define-unit("1-of-6", 16.6667%);
@include termeh.define-unit("2-of-6", 33.3333%);
@include termeh.define-unit("3-of-6", 50%);
@include termeh.define-unit("4-of-6", 66.6667%);
@include termeh.define-unit("5-of-6", 83.3333%);
@include termeh.define-unit("1-of-7", 14.2857%);
@include termeh.define-unit("2-of-7", 28.5714%);
@include termeh.define-unit("3-of-7", 42.8571%);
@include termeh.define-unit("4-of-7", 57.1428%);
@include termeh.define-unit("5-of-7", 71.4285%);
@include termeh.define-unit("6-of-7", 85.7142%);
@include termeh.define-unit("1-of-8", 12.5%);
@include termeh.define-unit("2-of-8", 25%);
@include termeh.define-unit("3-of-8", 37.5%);
@include termeh.define-unit("4-of-8", 50%);
@include termeh.define-unit("5-of-8", 62.5%);
@include termeh.define-unit("6-of-8", 75%);
@include termeh.define-unit("7-of-8", 87.5%);
@include termeh.define-unit("1-of-9", 11.1111%);
@include termeh.define-unit("2-of-9", 22.2222%);
@include termeh.define-unit("3-of-9", 33.3333%);
@include termeh.define-unit("4-of-9", 44.4444%);
@include termeh.define-unit("5-of-9", 55.5555%);
@include termeh.define-unit("6-of-9", 66.6667%);
@include termeh.define-unit("7-of-9", 77.7778%);
@include termeh.define-unit("8-of-9", 88.8889%);
@include termeh.define-unit("1-of-10", 10%);
@include termeh.define-unit("2-of-10", 20%);
@include termeh.define-unit("3-of-10", 30%);
@include termeh.define-unit("4-of-10", 40%);
@include termeh.define-unit("5-of-10", 50%);
@include termeh.define-unit("6-of-10", 60%);
@include termeh.define-unit("7-of-10", 70%);
@include termeh.define-unit("8-of-10", 80%);
@include termeh.define-unit("9-of-10", 90%);
@include termeh.define-unit("1-of-11", 9.0909%);
@include termeh.define-unit("2-of-11", 18.1818%);
@include termeh.define-unit("3-of-11", 27.2727%);
@include termeh.define-unit("4-of-11", 36.3636%);
@include termeh.define-unit("5-of-11", 45.4545%);
@include termeh.define-unit("6-of-11", 54.5454%);
@include termeh.define-unit("7-of-11", 63.6363%);
@include termeh.define-unit("8-of-11", 72.7272%);
@include termeh.define-unit("9-of-11", 81.8181%);
@include termeh.define-unit("10-of-11", 90.909%);
@include termeh.define-unit("1-of-12", 8.3333%);
@include termeh.define-unit("2-of-12", 16.6667%);
@include termeh.define-unit("3-of-12", 25%);
@include termeh.define-unit("4-of-12", 33.3333%);
@include termeh.define-unit("5-of-12", 41.6667%);
@include termeh.define-unit("6-of-12", 50%);
@include termeh.define-unit("7-of-12", 58.3333%);
@include termeh.define-unit("8-of-12", 66.6667%);
@include termeh.define-unit("9-of-12", 75%);
@include termeh.define-unit("10-of-12", 83.3333%);
@include termeh.define-unit("11-of-12", 91.6667%);
```
