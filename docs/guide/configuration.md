---
outline: deep
---

# Default Configuration

Termeh provides a set of _default variables_ defined in Sass. You can override them in your project.

## Layout

```scss
@include termeh.define("base", "direction", ltr);
@include termeh.define("base", "min-width", 300px);
```

- **direction** → Defines the text and layout flow (default: `ltr`).
- **min-width** → Minimum width for the entire document (default: `300px`).

## Scheme

```scss
@include termeh.define("base", "color", white);
@include termeh.define("base", "foreground", #081e30);
@include termeh.define("base", "section", #f8f9fa);
@include termeh.define("base", "separator", #e0e4eb);
```

- **color** → Theme base color (detect light/dark mode).
- **foreground** → Default text color.
- **section** → Section background.
- **separator** → Divider background.

## Layout Gaps

```scss
@include termeh.define("gap", "micro", 8px);
@include termeh.define("gap", "macro", 1.6rem);
```

- **micro** → Small gaps within components/text.
- **macro** → Large gaps for layout structure.

## Border Radius

```scss
@include termeh.define("radius", "normal", 2px);
@include termeh.define("radius", "circle", 50%);
@include termeh.define("radius", "rounded", 290486px);
```

- **normal** → Base border-radius.
- **circle** → Circular border-radius.
- **rounded** → Fully rounded border-radius.

## Transitions

```scss
@include termeh.define("transition", "ease", ease);
@include termeh.define("transition", "duration", 250ms);
```

- **ease** → Default transition timing.
- **duration** → Default transition duration.

## Inputs

```scss
@include termeh.define("input", "height", 2.8rem);
@include termeh.define("input", "background", white);
@include termeh.define("input", "border", #d1d6e0);
@include termeh.define("input", "placeholder", null);
@include termeh.define("input", "disabled", #f0f2f5);
@include termeh.define("input", "disabled-color", #bfc6d4);
@include termeh.define("input", "disabled-border", #d1d6e0);
```

- **height** → Input height.
- **background** → Input background color.
- **border** → Input border color.
- **placeholder** → Placeholder text color.
- **disabled** → Disabled input background.
- **disabled-color** → Disabled input text color.
- **disabled-border** → Disabled input border color.

## Line Heights

```scss
@include termeh.define("line-height", "normal", 1.6em);
@include termeh.define("line-height", "medium", 1.4em);
@include termeh.define("line-height", "large", 1.2em);
@include termeh.define("line-height", "inline", 1.8em);
```

- **normal** → Default line height.
- **medium** → Medium text line height.
- **large** → Large text line height.
- **inline** → Inline element line height.

## Fonts

```scss
@include termeh.define("font", "family", ("Segoe UI", Tahoma, Geneva, Verdana));
@include termeh.define("font", "size", 14px);
@include termeh.define("font", "weight", normal);
@include termeh.define("font", "code-family", monospace);
@include termeh.define("font", "code-size", 1rem);
```

- **family** → Font family.
- **size** → Font size.
- **weight** → Font weight.
- **code-family** → Code font family.
- **code-size** → Code font size.

## Strong Text

```scss
@include termeh.define("strong", "color", null);
@include termeh.define("strong", "weight", bold);
```

- **color** → Strong text color.
- **weight** → Strong text font-weight.

## Scrollbar

```scss
@include termeh.define("scroll", "size", 8px);
@include termeh.define("scroll", "track", null);
@include termeh.define("scroll", "thumb", null);
```

- **size** → Scrollbar width.
- **track** → Track background.
- **thumb** → Thumb background.

## Tables

```scss
@include termeh.define("table", "background", null);
@include termeh.define("table", "foreground", null);
@include termeh.define("table", "even", null);
@include termeh.define("table", "hover", null);
@include termeh.define("table", "grid", null);
@include termeh.define("table", "separator", null);
@include termeh.define("table", "divider", null);
@include termeh.define("table", "sort-background", null);
@include termeh.define("table", "sort-foreground", null);
@include termeh.define("table", "strong-weight", null);
```

- **background** → Table background color.
- **foreground** → Table text color.
- **even** → Background for even rows.
- **hover** → Background when row is hovered.
- **grid** → Column divider color.
- **separator** → Row divider color.
- **divider** → Section divider color (header, body, footer).
- **sort-background** → Background of sorted column.
- **sort-foreground** → Text color of sorted column.
- **strong-weight** → Font weight for emphasized table text.

## Containers

```scss
@include termeh.define("container", "desktop", 960px);
@include termeh.define("container", "widescreen", 1200px);
@include termeh.define("container", "fullhd", 1500px);
```

- **desktop** → Width for desktop layout.
- **widescreen** → Width for widescreen layout.
- **fullhd** → Width for very large screens.

## Gallery

```scss
@include termeh.define("gallery", "height", 300px);
@include termeh.define("gallery", "height-tablet", 200px);
@include termeh.define("gallery", "height-mobile", 100px);
```

- **height** → Default gallery height (desktop).
- **height-tablet** → Gallery height for tablet devices.
- **height-mobile** → Gallery height for mobile devices.

## Overlay

```scss
@include termeh.define("overlay", "background", rgba(white, 0.75));
@include termeh.define("overlay", "color", null);
@include termeh.define("overlay", "filter", none);
```

- **background** → Overlay background color.
- **color** → Overlay text color.
- **filter** → CSS filter for overlay backdrop filter (e.g., blur).

## Decorators

```scss
@include termeh.define("decorator", "size", 2px);
@include termeh.define("decorator", "spinner", 2rem);
```

- **size** → Default size for decorator elements (borders, underlines, etc.).
- **spinner** → Default size for loading spinners.

## Color Palettes

Theme color definitions used across components (e.g. _primary_, _error_, _shade_).

```scss
@include termeh.define-palette("shade", #667085);
@include termeh.define-palette("primary", #2196f3);
@include termeh.define-palette("error", #c00021);
```

- **shade** → Neutral shade color.
- **primary** → Primary theme color.
- **error** → Error or danger color.

## Gaps

Standard spacing scale for margins, paddings, and layout spacing.

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

Consistent font sizing scale for text and headings.

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

Percentage-based units for building responsive multi-column layouts (_2–12_ columns).

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
