---
outline: deep
---

# Default Configuration

Termeh ships with a set of _default Sass variables_. You can override any of them in your project.

Any `null` value is ignored, and Termeh _falls back_ to the default value if available.

## Animation

Two keyframe animations are provided by default:

- **spin** → Used for loaders.
- **shake** → Used for invalid inputs.

## Layout

```scss
@include termeh.define("base", "direction", ltr); // ltr | rtl
@include termeh.define("base", "min-width", 300px); // number
```

- **direction** → Document direction (`ltr` or `rtl`).
- **min-width** → Minimum width of the document.

## Scheme

```scss
@include termeh.define("base", "color", white); // color
@include termeh.define("base", "foreground", #081e30); // color
@include termeh.define("base", "section", #f8f9fa); // color
@include termeh.define("base", "separator", #e0e4eb); // color
```

- **color** → Base theme color (light/dark mode aware).
- **foreground** → Default text color.
- **section** → Section background color.
- **separator** → Divider/line color.

## Layout Gaps

```scss
@include termeh.define("gap", "micro", 8px); // number
@include termeh.define("gap", "macro", 1.6rem); // number
```

- **micro** → Small spacing inside components.
- **macro** → Larger spacing for layout/grid.

## Border Radius

```scss
@include termeh.define("radius", "normal", 2px); // number
@include termeh.define("radius", "circle", 50%); // number
@include termeh.define("radius", "rounded", 290486px); // number
```

- **normal** → Default border-radius.
- **circle** → Perfect circle radius.
- **rounded** → Fully rounded corners (pills, tags, etc.).

## Transitions

```scss
@include termeh.define("transition", "ease", ease); // easing function
@include termeh.define("transition", "duration", 250ms); // time duration
```

- **ease** → Default transition timing function.
- **duration** → Default transition speed.

## Line Heights

```scss
@include termeh.define("line-height", "normal", 1.6em); // number
@include termeh.define("line-height", "medium", 1.4em); // number
@include termeh.define("line-height", "large", 1.2em); // number
```

- **normal** → Default text line height.
- **medium** → Tighter line height.
- **large** → More compact line height.

## Fonts

```scss
@include termeh.define("font", "family", ("Segoe UI", Verdana));
@include termeh.define("font", "size", 14px); // number
@include termeh.define("font", "weight", normal); // font weight
```

- **family** → Default font stack.
- **size** → Base font size.
- **weight** → Base font weight.

## Monospace Fonts

```scss
@include termeh.define("mono", "family", monospace);
@include termeh.define("mono", "size", 1rem); // number
@include termeh.define("mono", "weight", normal); // font weight
```

- **family** → Monospace font family.
- **size** → Monospace font size.
- **weight** → Monospace font weight.

## Strong Text

```scss
@include termeh.define("strong", "foreground", null); // color
@include termeh.define("strong", "weight", bold); // font weight
```

- **foreground** → Strong text color (inherits if `null`).
- **weight** → Strong text weight.

## Scrollbar

```scss
@include termeh.define("scroll", "size", 10px); // number
@include termeh.define("scroll", "track", null); // color
@include termeh.define("scroll", "thumb", null); // color
```

- **size** → Scrollbar thickness.
- **track** → Scrollbar track background.
- **thumb** → Scrollbar thumb color.

## Overlay

```scss
@include termeh.define("overlay", "background", white); // color
@include termeh.define("overlay", "foreground", null); // color
@include termeh.define("overlay", "opacity", 0.75); // number
@include termeh.define("overlay", "filter", none); // filter
```

- **background** → Overlay background.
- **foreground** → Overlay foreground color.
- **opacity** → Overlay transparency level.
- **filter** → Optional CSS filter (e.g., `blur(2px)`).

## Decorators

```scss
@include termeh.define("decorator", "size", 2px); // number
@include termeh.define("decorator", "spinner", 2em); // number
```

- **size** → Thickness for decorative elements (e.g., borders, spinner).
- **spinner** → Default spinner size.

## Tables

```scss
@include termeh.define("table", "background", null); // color
@include termeh.define("table", "foreground", null); // color
@include termeh.define("table", "even", null); // color
@include termeh.define("table", "hover", null); // color
@include termeh.define("table", "grid", null); // color
@include termeh.define("table", "separator", null); // color
@include termeh.define("table", "divider", null); // color
@include termeh.define("table", "sort-background", null); // color
@include termeh.define("table", "strong-weight", null); // color
```

- **background** → Table background.
- **foreground** → Table text color.
- **even** → Background for even rows.
- **hover** → Row hover background.
- **grid** → Column dividers.
- **separator** → Row dividers.
- **divider** → Section dividers (header, footer, body).
- **sort-background** → Highlighted sorted column background.
- **strong-weight** → Emphasis text weight.

## Inputs

```scss
@include termeh.define("input", "height", 2.8em); // number
@include termeh.define("input", "checkbox", 1.2em); // number
@include termeh.define("input", "background", white); // color
@include termeh.define("input", "border", #d1d6e0); // color
@include termeh.define("input", "placeholder", null); // color
@include termeh.define("input", "disabled", #f0f2f5); // color
@include termeh.define("input", "disabled-foreground", #bfc6d4); // color
@include termeh.define("input", "disabled-border", #d1d6e0); // color
```

- **height** → Default input height.
- **checkbox** → Checkbox and radio size.
- **background** → Input background.
- **border** → Input border color.
- **placeholder** → Placeholder color.
- **disabled** → Disabled background.
- **disabled-foreground** → Disabled text color.
- **disabled-border** → Disabled border color.

## Containers

```scss
@include termeh.define("container", "desktop", 960px); // number
@include termeh.define("container", "widescreen", 1200px); // number
@include termeh.define("container", "fullhd", 1500px); // number
```

- **desktop** → Max width for desktop.
- **widescreen** → Max width for widescreen.
- **fullhd** → Max width for full HD and larger.

## Gallery

```scss
@include termeh.define("gallery", "height", 300px); // number
@include termeh.define("gallery", "height-tablet", 200px); // number
@include termeh.define("gallery", "height-mobile", 100px); // number
```

- **height** → Default gallery item height.
- **height-tablet** → Tablet height.
- **height-mobile** → Mobile height.

## Control

```scss
@include termeh.define("control", "height", 2.2em); // number
@include termeh.define("control", "weight", 500); // font weight
@include termeh.define("control", "strong", 700); // font weight
@include termeh.define("control", "v-padding", 0); // number
@include termeh.define("control", "h-padding", 1.2em); // number
```

- **height** → Default control height (`button`, `link`, `badge`, …).
- **weight** → Base font weight.
- **strong** → Bold font weight for controls.
- **v-padding** → Vertical padding.
- **h-padding** → Horizontal padding.

## Box

```scss
@include module.define("box", "background", null); // color
@include module.define("box", "foreground", null); // color
@include module.define(
  "box",
  "shadow",
  (
    module.soft-shadow(0, 1px, module.color("shade")),
    module.soft-shadow(0, -1px, module.color("shade")),
    module.soft-shadow(0, 3px, module.color("shade"))
  )
); // list
@include module.define(
  "box",
  "sizes",
  ("small" 22em, "normal" 26em, "medium" 36em)
); // list
```

- **background** → box background
- **foreground** → box foreground
- **shadow** → box shadow
- **sizes** → list of box element sizes

## Color Palettes

Color tokens used across components.

```scss
@include termeh.define-palette("shade", #667085);
@include termeh.define-palette("error", #c00021);
@include termeh.define-palette("primary", #2196f3);
```

- **shade** → Neutral color.
- **error** → Error/danger color.
- **primary** → Primary accent color.

## Gaps

Spacing scale for margins and paddings.

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

Font sizing scale for text and headings.

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

Percentage-based widths for responsive grids (_2–12_ columns).

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
