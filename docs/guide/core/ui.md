# UI Utility Mixin And Functions

A collection of utility mixins and functions for layout, spacing, controls, and state management.

## Marged

Applies margin styles to non-last children unless the element has `.is-marginless`.

::: code-group

```scss [usage.scss]
@mixin marged($except-last: true);
```

```scss [example.scss]
.list-item {
  @include marged {
    margin-bottom: 1rem;
  }
}
```

:::

## Marginless

Removes bottom margin from non-last, non-marginless elements.

::: code-group

```scss [usage.scss]
@mixin marginless();
```

```scss [example.scss]
.list-item {
  @include marginless;
}
```

:::

## Padded

Applies padding styles unless the element has `.is-paddingless`.

::: code-group

```scss [usage.scss]
@mixin padded();
```

```scss [example.scss]
.card {
  @include padded {
    padding: 1rem;
  }
}
```

:::

## Paddingless

Removes padding from elements with `.is-paddingless`.

::: code-group

```scss [usage.scss]
@mixin paddingless();
```

```scss [example.scss]
.card {
  @include paddingless;
}
```

:::

## Shadow

Generates a standard box-shadow with transparency based on offsets and base color.

::: code-group

```scss [usage.scss]
@function shadow($x, $y, $color);
```

```scss [example.scss]
.panel {
  box-shadow: shadow(2px, 4px, #000);
}
```

:::

## Soft-Shadow

Generates a softer, more diffused shadow.

::: code-group

```scss [usage.scss]
@function soft-shadow($x, $y, $color);
```

```scss [example.scss]
.panel {
  box-shadow: soft-shadow(2px, 6px, #000);
}
```

:::

## Flat-Shadow

Generates a flat, even drop shadow.

::: code-group

```scss [usage.scss]
@function flat-shadow($size, $color);
```

```scss [example.scss]
.box {
  box-shadow: flat-shadow(10px, rgba(0, 0, 0, 0.2));
}
```

:::

## Child-Radius

Computes child border-radius given parent radius and inner padding.

::: code-group

```scss [usage.scss]
@function child-radius($parent-radius, $padding);
```

```scss [example.scss]
.card__media {
  border-radius: child-radius(16px, 8px);
}
```

:::

## Clearfix

Classic clearfix using `::after`.

::: code-group

```scss [usage.scss]
@mixin clearfix();
```

```scss [example.scss]
.columns {
  @include clearfix;
}
```

:::

## Overflow-Touch

Enables momentum scrolling on iOS.

::: code-group

```scss [usage.scss]
@mixin overflow-touch();
```

```scss [example.scss]
.scroll-area {
  @include overflow-touch;
}
```

:::

## Locked

Disables pointer events and text selection.

::: code-group

```scss [usage.scss]
@mixin locked();
```

```scss [example.scss]
.modal.is-blocking {
  @include locked;
}
```

:::

## Unselectable

Disables text selection across browsers.

::: code-group

```scss [usage.scss]
@mixin unselectable();
```

```scss [example.scss]
.badge {
  @include unselectable;
}
```

:::

## Selectable

Re-enables text selection.

::: code-group

```scss [usage.scss]
@mixin selectable();
```

```scss [example.scss]
.code {
  @include selectable;
}
```

:::

## Placeholder

Cross-browser placeholder styling.

::: code-group

```scss [usage.scss]
@mixin placeholder() {
  /* styles */
}
```

```scss [example.scss]
input[type="text"] {
  @include placeholder {
    color: rgba(0, 0, 0, 0.45);
  }
}
```

:::

## Reset

Resets form-control styles to a clean baseline.

::: code-group

```scss [usage.scss]
@mixin reset();
```

```scss [example.scss]
input,
select,
textarea {
  @include reset;
}
```

:::

## Control

Base control styling (includes `reset` and focus/disabled normalization).

::: code-group

```scss [usage.scss]
@mixin control();
```

```scss [example.scss]
.input,
.select {
  @include control;
}
```

:::

## Scrollbar

Customizes scrollbar width, track, thumb, and hover thumb color (WebKit).

::: code-group

```scss [usage.scss]
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null);
```

```scss [example.scss]
.table-wrapper {
  @include scrollbar(8px, #f6f6f6, #bfbfbf, #8c8c8c);
}
```

:::

## Scroll-Color

Updates only the scrollbar thumb hover color.

::: code-group

```scss [usage.scss]
@mixin scroll-color($color);
```

```scss [example.scss]
.table-wrapper.dark {
  @include scroll-color(#666);
}
```

:::

## Spinner

Base spinner element (intended for pseudo-elements).

::: code-group

```scss [usage.scss]
@mixin spinner($size, $color, $width);
```

```scss [example.scss]
.button.is-loading::after {
  @include spinner(1.25rem, #3498db, 2px);
}
```

:::

## Spinner-Color

Updates the spinner’s visible stroke color.

::: code-group

```scss [usage.scss]
@mixin spinner-color($color);
```

```scss [example.scss]
.button.is-loading::after {
  @include spinner-color(#e74c3c);
}
```

:::

## Loader

Centered loading spinner via `::after`.

::: code-group

```scss [usage.scss]
@mixin loader($size, $color, $width);
```

```scss [example.scss]
.card.is-loading {
  @include loader(2rem, #555, 3px);
}
```

:::

## Loader-Color

Updates the loader’s spinner color.

::: code-group

```scss [usage.scss]
@mixin loader-color($color);
```

```scss [example.scss]
.card.is-loading.theme-danger {
  @include loader-color(#c0392b);
}
```

:::

## Overlay

Creates a full-cover overlay via `::before`, with optional backdrop-filter.

::: code-group

```scss [usage.scss]
@mixin overlay($color, $filter);
```

```scss [example.scss]
.dialog[aria-modal="true"] {
  @include overlay(rgba(0, 0, 0, 0.5), blur(6px));
}
```

:::

## Is-Ltr

LTR-only styles. Applies content when the reading direction is left-to-right and mirrors it with helper selectors.

::: code-group

```scss [usage.scss]
@mixin is-ltr() {
  /* styles */
}
```

```scss [example.scss]
.container {
  @include is-ltr {
    text-align: left;
    margin-left: auto;
  }
}
```

:::

::: details Requirements
Reads the base direction termeh global variable or applies style when element has `.is-ltr` or `dir(ltr)` selector.

```scss
$direction: termeh.var("base", "direction", "ltr");
```

:::

## Is-Rtl

RTL-only styles. Applies content when the reading direction is right-to-left and mirrors it with helper selectors.

::: code-group

```scss [usage.scss]
@mixin is-rtl() {
  /* styles */
}
```

```scss [example.scss]
.container {
  @include is-rtl {
    text-align: right;
    margin-right: auto;
  }
}
```

:::

::: details Requirements
Reads the base direction termeh global variable or applies style when element has `.is-rtl` or `dir(rtl)` selector.

```scss
$direction: termeh.var("base", "direction", "rtl");
```

:::

## Is-Invalid

Styles for invalid state (works for elements and within `.field` containers).

::: code-group

```scss [usage.scss]
@mixin is-invalid() {
  /* styles */
}
```

```scss [example.scss]
.input {
  @include is-invalid {
    border-color: #e74c3c;
  }
}
```

:::

## Is-Disabled

Styles for disabled state (element itself or within disabled fieldset/field).

::: code-group

```scss [usage.scss]
@mixin is-disabled() {
  /* styles */
}
```

```scss [example.scss]
.button {
  @include is-disabled {
    opacity: 0.6;
  }
}
```

:::

## Control-Padding

Returns the standard control padding as a shorthand list.

::: code-group

```scss [usage.scss]
@function control-padding();
```

```scss [example.scss]
.input {
  padding: control-padding();
}
```

:::

::: details Requirements
Uses the micro gap size for control rhythm.

```scss
$gap-micro: termeh.var("gap", "micro");
```

:::

## Transition

Applies a standard transition using theme duration and easing.

::: code-group

```scss [usage.scss]
@mixin transition($fields);
```

```scss [example.scss]
.button {
  @include transition(background-color, color);
}
```

:::

::: details Requirements
Reads transition timing termeh global variable.

```scss
$duration: termeh.var("transition", "duration");
$ease: termeh.var("transition", "ease");
```

:::

## Disabled

Applies disabled theming to form controls (colors and borders).

::: code-group

```scss [usage.scss]
@mixin disabled();
```

```scss [example.scss]
.input[disabled],
.input.is-disabled {
  @include disabled;
}
```

:::

::: details Requirements
Reads disabled palette termeh global variable.

```scss
$disabled-bg: termeh.var("input", "disabled");
$disabled-border: termeh.var("input", "disabled-border");
$disabled-color: termeh.var("input", "disabled-color");
```

:::

## Selection

Styles selection color pair based on a palette name (foreground & background).

::: code-group

```scss [usage.scss]
@mixin selection($name);
```

```scss [example.scss]
p,
.prose {
  @include selection("primary");
}
```

:::

## Scrollable

Scrollable container with themed scrollbar; only the hover thumb color is passed directly.

::: code-group

```scss [usage.scss]
@mixin scrollable($color);
```

```scss [example.scss]
.sidebar {
  @include scrollable(#7f8c8d);
}
```

:::

::: details Requirements
Uses scroll metrics and base colors termeh global variable.

```scss
$size: termeh.var("scroll", "size");
$track: termeh.var("scroll", "track");
$thumb: termeh.var("scroll", "thumb");
```

:::
