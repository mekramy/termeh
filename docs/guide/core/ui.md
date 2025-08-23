# UI Utility Mixin And Functions

A collection of utility mixins and functions for layout, spacing, controls, and state management.

## Marged

Applies margin styles to non-last children unless the element has `.is-marginless`.

::: definition

**Signature:**

```scss
@mixin marged($except-last: BOOLEAN = true);
```

**Example:**

```scss
.list-item {
  @include termeh.marged {
    margin-bottom: 1rem;
  }
}
```

:::

## Marginless

Removes bottom margin from non-last, non-marginless elements.

::: definition

**Signature:**

```scss
@mixin marginless();
```

**Example:**

```scss
.list-item {
  @include termeh.marginless;
}
```

:::

## Padded

Applies padding styles unless the element has `.is-paddingless`.

::: definition

**Signature:**

```scss
@mixin padded();
```

**Example:**

```scss
.card {
  @include termeh.padded {
    padding: 1rem;
  }
}
```

:::

## Paddingless

Removes padding from elements with `.is-paddingless`.

::: definition

**Signature:**

```scss
@mixin paddingless();
```

**Example:**

```scss
.card {
  @include termeh.paddingless;
}
```

:::

## Shadow

Generates a standard box-shadow with transparency based on offsets and base color.

::: definition

**Signature:**

```scss
@function shadow($x: NUMBER, $y: NUMBER, $color: COLOR): LIST;
```

**Example:**

```scss
.panel {
  box-shadow: termeh.shadow(2px, 4px, #000);
}
```

:::

## Soft-Shadow

Generates a softer, more diffused shadow.

::: definition

**Signature:**

```scss
@function soft-shadow($x: NUMBER, $y: NUMBER, $color: COLOR): LIST;
```

**Example:**

```scss
.panel {
  box-shadow: termeh.soft-shadow(2px, 6px, #000);
}
```

:::

## Flat-Shadow

Generates a flat, even drop shadow.

::: definition

**Signature:**

```scss
@function flat-shadow($size: NUMBER, $color: COLOR): LIST;
```

**Example:**

```scss
.box {
  box-shadow: termeh.flat-shadow(10px, rgba(0, 0, 0, 0.2));
}
```

:::

## Child-Radius

Computes child border-radius given parent radius and inner padding.

::: definition

**Signature:**

```scss
@function child-radius($parent-radius: NUMBER, $padding: NUMBER): NUMBER;
```

**Example:**

```scss
.card .media {
  border-radius: termeh.child-radius(16px, 8px);
}
```

:::

## Clearfix

Classic clearfix using `::after`.

::: definition

**Signature:**

```scss
@mixin clearfix();
```

**Example:**

```scss
.columns {
  @include termeh.clearfix;
}
```

:::

## Overflow-Touch

Enables momentum scrolling on iOS.

::: definition

**Signature:**

```scss
@mixin overflow-touch();
```

**Example:**

```scss
.scroll-area {
  @include termeh.overflow-touch;
}
```

:::

## Locked

Disables pointer events and text selection.

::: definition

**Signature:**

```scss
@mixin locked();
```

**Example:**

```scss
button {
  &.is-disabled,
  &.is-loading {
    @include termeh.locked;
  }
}
```

:::

## Unselectable

Disables text selection across browsers.

::: definition

**Signature:**

```scss
@mixin unselectable();
```

**Example:**

```scss
.badge {
  @include termeh.unselectable;
}
```

:::

## Selectable

Re-enables text selection.

::: definition

**Signature:**

```scss
@mixin selectable();
```

**Example:**

```scss
.non-disabled {
  @include termeh.selectable;
}
```

:::

## Placeholder

Cross-browser placeholder styling.

::: definition

**Signature:**

```scss
@mixin placeholder();
```

**Example:**

```scss
input[type="text"] {
  @include termeh.placeholder {
    color: rgba(0, 0, 0, 0.45);
  }
}
```

:::

## Reset

Resets form-control styles to a clean baseline.

::: definition

**Signature:**

```scss
@mixin reset();
```

**Example:**

```scss
input,
select,
textarea {
  @include termeh.reset;
}
```

:::

## Control

Base control styling (includes `reset` and focus/disabled normalization).

::: definition

**Signature:**

```scss
@mixin control();
```

**Example:**

```scss
.input,
.select,
button {
  @include termeh.control;
}
```

:::

## Scrollbar

Customizes scrollbar width, track, thumb, and hover thumb color (WebKit).

::: definition

**Signature:**

```scss
@mixin scrollbar(
  $width: NUMBER,
  $track: COLOR = null,
  $thumb: COLOR = null,
  $thumb-hover: COLOR = null
);
```

**Example:**

```scss
.table-wrapper {
  @include termeh.scrollbar(8px, #f6f6f6, #bfbfbf, #8c8c8c);
}
```

:::

## Scroll-Color

Updates only the scrollbar thumb hover color.

::: definition

**Signature:**

```scss
@mixin scroll-color($color: COLOR);
```

**Example:**

```scss
.table-wrapper {
  &.is-dark {
    @include termeh.scroll-color(#666);
  }
}
```

:::

## Spinner

Base spinner element (intended for pseudo-elements).

::: definition

**Signature:**

```scss
@mixin spinner($size: NUMBER, $color: COLOR, $width: NUMBER);
```

**Example:**

```scss
.button {
  &.is-loading::after {
    @include termeh.spinner(1.25rem, #3498db, 2px);
  }
}
```

:::

## Spinner-Color

Updates the spinner’s visible stroke color.

::: definition

**Signature:**

```scss
@mixin spinner-color($color: COLOR);
```

**Example:**

```scss
.button {
  &.is-red {
    &.is-loading::after {
      @include termeh.spinner-color(#e74c3c);
    }
  }
}
```

:::

## Loader

Centered loading spinner via `::after`.

::: definition

**Signature:**

```scss
@mixin loader($size: NUMBER, $color: COLOR, $width: NUMBER);
```

**Example:**

```scss
.card {
  &.is-loading {
    @include termeh.loader(2rem, #555, 3px);
  }
}
```

:::

## Loader-Color

Updates the loader’s spinner color.

::: definition

**Signature:**

```scss
@mixin loader-color($color: COLOR);
```

**Example:**

```scss
.card {
  &.is-red {
    &.is-loading {
      @include termeh.loader-color(#c0392b);
    }
  }
}
```

:::

## Overlay

Creates a full-cover overlay via `::before`, with optional backdrop-filter.

::: definition

**Signature:**

```scss
@mixin overlay($color: COLOR, $filter: CSS-FILTER);
```

**Example:**

```scss
.dialog[aria-modal="true"] {
  @include termeh.overlay(rgba(0, 0, 0, 0.5), blur(6px));
}
```

:::

## Is-Ltr

LTR-only styles. Applies styles when the global direction is _left-to-right_, or the element has the `.is-ltr` class, or matches the `:dir(ltr)` selector.

::: definition

**Signature:**

```scss
@mixin is-ltr();
```

**Example:**

```scss
.container {
  @include termeh.is-ltr {
    text-align: left;
    margin-left: auto;
  }
}
```

:::

::: termeh

Global direction detected from the following Termeh global `var()`:

| Component | Variable    | Type         | Default |
| --------- | ----------- | ------------ | ------- |
| `base`    | `direction` | _ltr \| rtl_ | `ltr`   |

:::

## Is-Rtl

RTL-only styles. Applies styles when the global direction is _right-to-left_, or the element has the `.is-rtl` class, or matches the `:dir(rtl)` selector.

::: definition

**Signature:**

```scss
@mixin is-rtl();
```

**Example:**

```scss
.container {
  @include termeh.is-rtl {
    text-align: right;
    margin-right: auto;
  }
}
```

:::

::: termeh

Global direction detected from the following Termeh global `var()`:

| Component | Variable    | Type         | Default |
| --------- | ----------- | ------------ | ------- |
| `base`    | `direction` | _ltr \| rtl_ | `ltr`   |

:::

## Is-Invalid

Styles for invalid state (works for elements and within `.field` containers).

::: definition

**Signature:**

```scss
@mixin is-invalid();
```

**Example:**

```scss
.input {
  @include termeh.is-invalid {
    border-color: #e74c3c;
  }
}
```

:::

## Is-Disabled

Styles for disabled state (element itself or within disabled fieldset/field).

::: definition

**Signature:**

```scss
@mixin is-disabled();
```

**Example:**

```scss
.button {
  @include termeh.is-disabled {
    opacity: 0.6;
  }
}
```

:::

## Control-Padding

Returns the standard control padding as a shorthand list.

::: definition

**Signature:**

```scss
@function control-padding(): LIST;
```

**Example:**

```scss
.input {
  padding: termeh.control-padding();
}
```

:::

::: termeh

Control padding is calculated from the following Termeh global `var()`:

| Component | Variable | Type     | Default |
| --------- | -------- | -------- | ------- |
| `gap`     | `micro`  | _NUMBER_ | `8px`   |

:::

## Transition

Applies a standard transition using theme duration and easing.

::: definition

**Signature:**

```scss
@mixin transition($fields: LIST);
```

**Example:**

```scss
.button {
  @include termeh.transition(background-color, color);
}
```

:::

::: termeh

UI transitions are calculated from the following Termeh global `var()`:

| Component    | Variable   | Type       | Default |
| ------------ | ---------- | ---------- | ------- |
| `transition` | `ease`     | _easing_   | `ease`  |
| `transition` | `duration` | _duration_ | `250ms` |

:::

## Disabled

Applies disabled theming to form controls (colors and borders).

::: definition

**Signature:**

```scss
@mixin disabled();
```

**Example:**

```scss
.input[disabled],
.input.is-disabled {
  @include termeh.disabled;
}
```

:::

::: termeh

The disabled style is derived from the following Termeh global `var()`. Styles will be ignored if the disable variables are not defined or are `null`:

| Component | Variable          | Type    | Default |
| --------- | ----------------- | ------- | ------- |
| `input`   | `disabled`        | _color_ | `null`  |
| `input`   | `disabled-color`  | _color_ | `null`  |
| `input`   | `disabled-border` | _color_ | `null`  |

:::

## Selection

Styles selection color pair based on a palette name (foreground & background).

::: definition

**Signature:**

```scss
@mixin selection($name: STRING);
```

**Example:**

```scss
p,
.prose {
  @include termeh.selection("primary");
}
```

:::

## Scrollable

Provides a scrollable style with a themed scrollbar, where only the hover thumb color is applied directly.

::: definition

**Signature:**

```scss
@mixin scrollable($color: COLOR);
```

**Example:**

```scss
.sidebar {
  @include termeh.scrollable(#7f8c8d);
}
```

:::

::: termeh

The scrollbar style is derived from the following Termeh global `var()`:

| Component | Variable | Type    | Default |
| --------- | -------- | ------- | ------- |
| `scroll`  | `size`   | _color_ | `1rem`  |
| `scroll`  | `track`  | _color_ | `null`  |
| `scroll`  | `thumb`  | _color_ | `null`  |

:::
