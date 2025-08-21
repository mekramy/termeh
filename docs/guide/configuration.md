# Default Configuration

Termeh provides a set of **default variables** defined in Sass. You can override them in your theme file.

## Layout

```scss
@include module.define("base", "direction", ltr);
@include module.define("base", "min-width", 300px);
```

- **direction** → Defines the text and layout flow (default: `ltr`).
- **min-width** → Minimum width for the entire document (default: `300px`).

## Scheme

```scss
@include module.define("base", "color", white);
@include module.define("base", "foreground", #081e30);
@include module.define("base", "section", #f8f9fa);
@include module.define("base", "separator", #e0e4eb);
```

- **color** → Theme base color (detect light/dark mode).
- **foreground** → Default text color.
- **section** → Section background.
- **separator** → Divider background.

## Layout Gaps

```scss
@include module.define("gap", "micro", 8px);
@include module.define("gap", "macro", 1.6rem);
```

- **micro** → Small gaps within components/text.
- **macro** → Large gaps for layout structure.

## Border Radius

```scss
@include module.define("radius", "normal", 2px);
@include module.define("radius", "circle", 50%);
@include module.define("radius", "rounded", 290486px);
```

- **normal** → Base border-radius.
- **circle** → Circular border-radius.
- **rounded** → Fully rounded border-radius.

## Transitions

```scss
@include module.define("transition", "ease", ease);
@include module.define("transition", "duration", 250ms);
```

- **ease** → Default transition timing.
- **duration** → Default transition duration.

## Inputs

```scss
@include module.define("input", "height", 2.8rem);
@include module.define("input", "background", white);
@include module.define("input", "border", #d1d6e0);
@include module.define("input", "placeholder", null);
@include module.define("input", "disabled", #f0f2f5);
@include module.define("input", "disabled-color", #bfc6d4);
@include module.define("input", "disabled-border", #d1d6e0);
```

- **height** → Input height.
- **background** → Input background color.
- **border** → Input border color.
- **placeholder** → Placeholder text color.
- **disabled** → Disabled input background.
- **disabled-color** → Disabled input text color.
- **disabled-border** → Disabled input border.

## Line Heights

```scss
@include module.define("line-height", "normal", 1.6em);
@include module.define("line-height", "medium", 1.4em);
@include module.define("line-height", "large", 1.2em);
@include module.define("line-height", "inline", 1.8em);
```

- **normal** → Default line height.
- **medium** → Medium text line height.
- **large** → Large text line height.
- **inline** → Inline element line height.

## Fonts

```scss
@include module.define("font", "family", ("Segoe UI", Tahoma, Geneva, Verdana));
@include module.define("font", "size", 14px);
@include module.define("font", "weight", normal);
@include module.define("font", "code-family", monospace);
@include module.define("font", "code-size", 1rem);
```

- **family** → Font family.
- **size** → Font size.
- **weight** → Font weight.
- **code-family** → Code font family.
- **code-size** → Code font size.

## Strong Text

```scss
@include module.define("strong", "color", null);
@include module.define("strong", "weight", bold);
```

- **color** → Strong text color.
- **weight** → Strong text font-weight.

## Scrollbar

```scss
@include module.define("scroll", "size", 8px);
@include module.define("scroll", "track", null);
@include module.define("scroll", "thumb", null);
```

- **size** → Scrollbar width.
- **track** → Track background.
- **thumb** → Thumb background.

## Tables

```scss
@include module.define("table", "background", null);
@include module.define("table", "foreground", null);
@include module.define("table", "even", null);
@include module.define("table", "hover", null);
@include module.define("table", "grid", null);
@include module.define("table", "divider", null);
@include module.define("table", "separator", null);
@include module.define("table", "sort-background", null);
@include module.define("table", "sort-foreground", null);
@include module.define("table", "strong-weight", null);
```

## Containers

```scss
@include module.define("container", "desktop", 960px);
@include module.define("container", "widescreen", 1200px);
@include module.define("container", "fullhd", 1500px);
```

## Gallery

```scss
@include module.define("gallery", "height", 300px);
@include module.define("gallery", "height-tablet", 200px);
@include module.define("gallery", "height-mobile", 100px);
```

## Overlay

```scss
@include module.define("overlay", "background", rgba(white, 0.75));
@include module.define("overlay", "color", null);
@include module.define("overlay", "filter", none);
```

## Decorators

```scss
@include module.define("decorator", "size", 2px);
@include module.define("decorator", "spinner", 2rem);
```

## Color Palettes

```scss
@include module.define-palette("shade", #667085);
@include module.define-palette("primary", #2196f3);
@include module.define-palette("error", #c00021);
```

## Gaps

```scss
@include module.define-gap("mini", 0.5em);
@include module.define-gap("small", 0.85em);
@include module.define-gap("normal", 1em);
@include module.define-gap("medium", 1.5em);
@include module.define-gap("large", 2em);
@include module.define-gap("huge", 2.5em);
@include module.define-gap("massive", 3em);
```

## Text Sizes

```scss
@include module.define-size("small", 0.8em);
@include module.define-size("normal", 1em);
@include module.define-size("medium", 1.25em);
@include module.define-size("large", 1.5em);
@include module.define-size("big", 2em);
@include module.define-size("huge", 2.5em);
@include module.define-size("massive", 3em);
```

## Grid Units

```scss
@include module.define-unit("full", 100%);
@include module.define-unit("half", 50%);
@include module.define-unit("1-of-3", 33.3333%);
@include module.define-unit("2-of-3", 66.6667%);
@include module.define-unit("1-of-4", 25%);
@include module.define-unit("2-of-4", 50%);
@include module.define-unit("3-of-4", 75%);
@include module.define-unit("1-of-5", 20%);
@include module.define-unit("2-of-5", 40%);
@include module.define-unit("3-of-5", 60%);
@include module.define-unit("4-of-5", 80%);
@include module.define-unit("1-of-6", 16.6667%);
@include module.define-unit("2-of-6", 33.3333%);
@include module.define-unit("3-of-6", 50%);
@include module.define-unit("4-of-6", 66.6667%);
@include module.define-unit("5-of-6", 83.3333%);
@include module.define-unit("1-of-7", 14.2857%);
@include module.define-unit("2-of-7", 28.5714%);
@include module.define-unit("3-of-7", 42.8571%);
@include module.define-unit("4-of-7", 57.1428%);
@include module.define-unit("5-of-7", 71.4285%);
@include module.define-unit("6-of-7", 85.7142%);
@include module.define-unit("1-of-8", 12.5%);
@include module.define-unit("2-of-8", 25%);
@include module.define-unit("3-of-8", 37.5%);
@include module.define-unit("4-of-8", 50%);
@include module.define-unit("5-of-8", 62.5%);
@include module.define-unit("6-of-8", 75%);
@include module.define-unit("7-of-8", 87.5%);
@include module.define-unit("1-of-9", 11.1111%);
@include module.define-unit("2-of-9", 22.2222%);
@include module.define-unit("3-of-9", 33.3333%);
@include module.define-unit("4-of-9", 44.4444%);
@include module.define-unit("5-of-9", 55.5555%);
@include module.define-unit("6-of-9", 66.6667%);
@include module.define-unit("7-of-9", 77.7778%);
@include module.define-unit("
```
