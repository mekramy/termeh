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

## Variables

### Layout

#### Base

```scss
@include termeh.define("base", "direction", ltr);
@include termeh.define("base", "min-width", 300px);
```

- **direction:** _[`ltr | rtl`]_ → Document direction.
- **min-width:** _[`number`]_ → Minimum width of the document.

#### Spacing

```scss
@include termeh.define("gap", "micro", 8px);
@include termeh.define("gap", "macro", 1.6rem);
```

- **micro:** _[`number`]_ → Small spacing inside components.
- **macro:** _[`number`]_ → Larger spacing between elements for layout/grid.

#### Border Radius

```scss
@include termeh.define("radius", "normal", 2px);
@include termeh.define("radius", "circle", 50%);
@include termeh.define("radius", "rounded", 290486px);
```

- **normal:** _[`number`]_ → Default border-radius.
- **circle:** _[`number`]_ → Perfect circle radius.
- **rounded:** _[`number`]_ → Fully rounded corners (pills, tags, etc.).

#### Decorators

```scss
@include termeh.define("decorator", "size", 2px);
@include termeh.define("decorator", "spinner", 2em);
```

- **size:** _[`number`]_ → Thickness for decorative elements (e.g., borders, spinner).
- **spinner:** _[`number`]_ → Default spinner size.

#### Containers

```scss
@include termeh.define("container", "desktop", 960px);
@include termeh.define("container", "widescreen", 1200px);
@include termeh.define("container", "fullhd", 1500px);
```

- **desktop:** _[`number`]_ → Max width for desktop.
- **widescreen:** _[`number`]_ → Max width for widescreen.
- **fullhd:** _[`number`]_ → Max width for full HD and larger.

#### Gallery

```scss
@include termeh.define("gallery", "height", 300px);
@include termeh.define("gallery", "height-tablet", 200px);
@include termeh.define("gallery", "height-mobile", 100px);
```

- **height:** _[`number`]_ → Default gallery item height.
- **height-tablet:** _[`number`]_ → Tablet height.
- **height-mobile:** _[`number`]_ → Mobile height.

#### Control

```scss
@include termeh.define("control", "height", 2.2em);
@include termeh.define("control", "weight", 500);
@include termeh.define("control", "strong", 700);
@include termeh.define("control", "v-padding", 0);
@include termeh.define("control", "h-padding", 1.2em);
```

- **height:** _[`number`]_ → Default control height (`button`, `link`, `badge`, …).
- **weight:** _[`font weight`]_ → Base font weight.
- **strong:** _[`font weight`]_ → Bold font weight for controls.
- **v-padding:** _[`number`]_ → Vertical padding.
- **h-padding:** _[`number`]_ → Horizontal padding.

### Text

#### Fonts

Default ui fonts.

```scss
@include termeh.define("font", "family", ("Segoe UI", Verdana));
@include termeh.define("font", "size", 14px);
@include termeh.define("font", "weight", normal);
```

- **family:** _[`font family`]_ → Default font stack.
- **size:** _[`number`]_ → Base font size.
- **weight:** _[`font weight`]_ → Base font weight.

#### Monospace Fonts

Monospace element (code, pre, ...) fonts.

```scss
@include termeh.define("mono", "family", monospace);
@include termeh.define("mono", "size", 1rem);
@include termeh.define("mono", "weight", normal);
```

- **family:** _[`font family`]_ → Monospace font family.
- **size:** _[`number`]_ → Monospace font size.
- **weight:** _[`font weight`]_ → Monospace font weight.

#### Small Text

`<small>`, `<sub>`, `<sup>` and other small text elements.

```scss
@include termeh.define("small", "size", 0.8rem);
@include termeh.define("small", "weight", normal);
@include termeh.define("small", "foreground", null);
```

- **size:** _[`number`]_ → Small text size.
- **weight:** _[`font weight`]_ → Small text weight.
- **foreground:** _[`color`]_ → Small text color (inherits if `null`).

#### Strong Text

`<strong>` and other strong text elements.

```scss
@include termeh.define("strong", "foreground", null);
@include termeh.define("strong", "weight", bold);
```

- **foreground:** _[`color`]_ → Strong text color (inherits if `null`).
- **weight:** _[`font weight`]_ → Strong text weight.

#### Decorated Text

`<u>` and other decorated text elements.

```scss
@include termeh.define("decorated", "weight", normal);
@include termeh.define("decorated", "foreground", null);
```

- **weight:** _[`font weight`]_ → Decorated text weight.
- **foreground:** _[`color`]_ → Decorated text color (inherits if `null`).

#### Line Heights

```scss
@include termeh.define("line-height", "normal", 1.6em);
@include termeh.define("line-height", "medium", 1.4em);
@include termeh.define("line-height", "large", 1.2em);
```

- **normal:** _[`number`]_ → Default text line height.
- **medium:** _[`number`]_ → Tighter line height.
- **large:** _[`number`]_ → More compact line height.

### UI

#### Transitions

```scss
@include termeh.define("transition", "ease", ease);
@include termeh.define("transition", "duration", 250ms);
```

- **ease:** _[`easing function`]_ → Default transition timing function.
- **duration:** _[`time duration`]_ → Default transition speed.

#### Scrollbar

```scss
@include termeh.define("scroll", "size", 10px);
@include termeh.define("scroll", "track", null);
@include termeh.define("scroll", "thumb", null);
```

- **size:** _[`number`]_ → Scrollbar thickness.
- **track:** _[`color`]_ → Scrollbar track background.
- **thumb:** _[`color`]_ → Scrollbar thumb color.

#### Overlay

```scss
@include termeh.define("overlay", "background", white);
@include termeh.define("overlay", "foreground", null);
@include termeh.define("overlay", "opacity", 0.75);
@include termeh.define("overlay", "filter", none);
```

- **background:** _[`color`]_ → Overlay background.
- **foreground:** _[`color`]_ → Overlay foreground color.
- **opacity:** _[`number`]_ → Overlay background opacity.
- **filter:** _[`filter`]_ → Optional CSS filter (e.g., `blur(2px)`).

### Theme

#### Scheme

```scss
@include termeh.define("base", "background", white);
@include termeh.define("base", "foreground", #081e30);
@include termeh.define("base", "section", #f8f9fa);
@include termeh.define("base", "separator", #e0e4eb);
```

- **background:** _[`color`]_ → Base theme color (detect light/dark mode).
- **foreground:** _[`color`]_ → Default text color.
- **section:** _[`color`]_ → Section background color.
- **separator:** _[`color`]_ → Divider/line color.

#### Tables

```scss
@include termeh.define("table", "background", null);
@include termeh.define("table", "foreground", null);
@include termeh.define("table", "hover-background", null);
@include termeh.define("table", "striped-background", null);
@include termeh.define("table", "column-separator", null);
@include termeh.define("table", "row-separator", null);
@include termeh.define("table", "section-separator", null);
@include termeh.define("table", "sorted-background", null);
@include termeh.define("table", "strong-weight", null);
```

- **background:** _[`color`]_ → Table background.
- **foreground:** _[`color`]_ → Table text color.
- **hover-background:** _[`color`]_ → Row hover background.
- **striped-background:** _[`color`]_ → Background for even rows.
- **column-separator:** _[`color`]_ → Column dividers.
- **row-separator:** _[`color`]_ → Row dividers.
- **section-separator:** _[`color`]_ → Section dividers (header, footer, body).
- **sorted-background:** _[`color`]_ → Highlighted sorted column background.
- **strong-weight:** _[`font weight`]_ → Emphasis text weight.

#### Inputs

```scss
@include termeh.define("input", "height", 2.8em);
@include termeh.define("input", "checkbox", 1.2em);
@include termeh.define("input", "background", white);
@include termeh.define("input", "border", #d1d6e0);
@include termeh.define("input", "placeholder", null);
@include termeh.define("input", "disabled", #f0f2f5);
@include termeh.define("input", "disabled-foreground", #bfc6d4);
@include termeh.define("input", "disabled-border", #d1d6e0);
```

- **height:** _[`number`]_ → Default input height.
- **checkbox:** _[`number`]_ → Checkbox and radio size.
- **background:** _[`color`]_ → Input background.
- **border:** _[`color`]_ → Input border color.
- **placeholder:** _[`color`]_ → Placeholder color.
- **disabled:** _[`color`]_ → Disabled background.
- **disabled-foreground:** _[`color`]_ → Disabled text color.
- **disabled-border:** _[`color`]_ → Disabled border color.

#### Box

Default styles for card, modal and other box-like components.

```scss
@include module.define("box", "background", null);
@include module.define("box", "foreground", null);
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

- **background:** _[`color`]_ → Box background.
- **foreground:** _[`color`]_ → Box foreground.
- **shadow:** _[`shadow`]_ → Box shadow.
- **sizes:** _[`list`]_ → List of box element sizes.

## Color Palettes

Color tokens used across components.

```scss
@include termeh.define-palette("shade", #667085);
@include termeh.define-palette("error", #c00021);
@include termeh.define-palette("primary", #2196f3);
```

- **shade:** _[`color`]_ → Neutral color.
- **error:** _[`color`]_ → Error/danger color.
- **primary:** _[`color`]_ → Primary accent color.

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
