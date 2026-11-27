---
outline: deep
description: API reference for Termeh UI mixins, including spacing, interaction states, loaders, overlays, direction helpers, transitions, and scrollbars.
---

# UI Mixins

> __Utility__{data-type="utils" title="This module provides interface mixins"}

Termeh provides *__UI mixins__* for the shared details of interface components, including __resetting controls__, __blocking interaction__, __showing loaders and overlays__, __handling focus and direction__, and __styling scrollbars__. Mixins are included inside component rules, so browser-specific declarations are written once and reused everywhere.

Many mixins read __theme variables__, allowing components to adapt automatically to the active scheme, direction, and transition settings.

## Reset

Removes the native appearance of an element and resets its *box styles*, *outline*, *margin*, *padding*, *shadow* and *background*. It also makes the element inherit its *font* and *text color*.

::: signature

```scss
@mixin reset() {}
```

```scss
.icon-button {
  @include termeh.reset();
  cursor: pointer;
}
```

:::

## Control

Creates a base style for interactive controls. It extends the __reset__, removes outlines and blocks interaction when the control is disabled.

::: signature

```scss
@mixin control() {}
```

```scss
.button {
  @include termeh.control();
  padding: termeh.control-padding();
}
```

:::

## Locked

Blocks pointer events and text selection, and sets the default cursor. Use it when content remains visible but cannot be interacted with.

::: signature

```scss
@mixin locked() {}
```

```scss
.panel {
  @include termeh.locked();
}
```

:::

## Unselectable

Prevents text selection in the element.

::: signature

```scss
@mixin unselectable() {}
```

```scss
.toolbar {
  @include termeh.unselectable();
}
```

:::

## Selectable

Allows text selection in the element.

::: signature

```scss
@mixin selectable() {}
```

```scss
.toolbar > .hint {
  @include termeh.selectable();
}
```

:::

## Overflow Touch

Turns on momentum scrolling on iOS devices for a scrollable element.

::: signature

```scss
@mixin overflow-touch() {}
```

```scss
.drawer_body {
  overflow: auto;
  @include termeh.overflow-touch();
}
```

:::

## Marged

Applies styles to every element except the `:last-child` and `.is-marginless`.

::: signature

```scss
@mixin marged($exclude...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$exclude` | *arglist\<string\>* | Extra selectors to exclude |

```scss
.card {
  @include termeh.marged(".is-attached") {
    margin-bottom: 1rem;
  }
}
```

:::

## Padded

Applies styles to every element that is not marked `.is-paddingless`.

::: signature

```scss
@mixin padded($exclude...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$exclude` | *arglist\<string\>* | Extra selectors to exclude |

```scss
.panel {
  @include termeh.padded() {
    padding: 1.5rem;
  }
}
```

:::

## Gapped

Applies styles to every element that is not marked `.is-gapless`.

::: signature

```scss
@mixin gapped($exclude...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$exclude` | *arglist\<string\>* | Extra selectors to exclude |

```scss
.toolbar {
  display: flex;

  @include termeh.gapped() {
    gap: 0.75rem;
  }
}
```

:::

## Scrollbar

Styles the WebKit scrollbar, including its track and thumb.

::: signature

```scss
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$width` | *var\<length\>*, *length* | Scrollbar width |
| `$track` | *var\<color\>*, *color*, *null* | Track color |
| `$thumb` | *var\<color\>*, *color*, *null* | Thumb color |
| `$thumb-hover` | *var\<color\>*, *color*, *null* | Thumb color on hover |

```scss
.sidebar {
  overflow: auto;
  @include termeh.scrollbar(6px, #f5f5f5, #b0b0b0, #808080);
}
```

:::

## Scroll Color

Sets the WebKit scrollbar thumb color on hover.

::: signature

```scss
@mixin scroll-color($color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *var\<color\>*, *color* | Thumb color on hover |

```scss
.sidebar.is-primary {
  @include termeh.scroll-color(#4a6fa5);
}
```

:::

## Spinner

Draws an absolutely positioned spinning circle using a border and the `spin` animation.

::: signature

```scss
@mixin spinner($size, $color, $thickness) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$size` | *var\<length\>*, *length* | Circle width and height |
| `$color` | *var\<color\>*, *color* | Border color |
| `$thickness` | *var\<length\>*, *length* | Border thickness |

```scss
.page-loader {
  @include termeh.spinner(2rem, #555555, 2px);
}
```

:::

## Spinner Color

Changes the visible border colors of a spinner created by `spinner`.

::: signature

```scss
@mixin spinner-color($color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *var\<color\>*, *color* | Spinner border color |

```scss
.page-loader.is-danger {
  @include termeh.spinner-color(#d32f2f);
}
```

:::

## Loader

Shows a centered spinner on the element's `::after` pseudo-element and establishes a relative positioning context.

::: signature

```scss
@mixin loader($size, $color, $thickness) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$size` | *var\<length\>*, *length* | Spinner width and height |
| `$color` | *var\<color\>*, *color* | Spinner border color |
| `$thickness` | *var\<length\>*, *length* | Spinner border thickness |

```scss
.button.is-loading {
  @include termeh.loader(1rem, #ffffff, 2px);
}
```

:::

## Loader Color

Changes the spinner color on the `::after` pseudo-element created by `loader`.

::: signature

```scss
@mixin loader-color($color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *var\<color\>*, *color* | Spinner border color |

```scss
.button.is-loading.is-warning {
  @include termeh.loader-color(#f9a825);
}
```

:::

## Overlay

Covers the element with a translucent layer through its `::before` pseudo-element and applies a backdrop filter.

::: signature

```scss
@mixin overlay($background, $opacity, $filter) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$background` | *var\<color\>*, *color* | Layer color |
| `$opacity` | *var\<number\>*, *number* | Opacity from `0` (transparent) to `1` (opaque) |
| `$filter` | *var\<filter\>*, *filter* | Backdrop filter |

```scss
.dimmer {
  @include termeh.overlay(#ffffff, 0.6, blur(4px));
}
```

:::

## Is Ltr

Applies styles when the document direction is `ltr`, and also inside elements marked `.is-ltr`.

::: signature

```scss
@mixin is-ltr() {}
```

```scss
.menu-item {
  @include termeh.is-ltr() {
    padding-left: 1rem;
  }
}
```

> This mixin uses the following Termeh global `value()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `document` | `direction` | The text direction of the document |

:::

## Is Rtl

Applies styles when the document direction is `rtl`, and also inside elements marked `.is-rtl`.

::: signature

```scss
@mixin is-rtl() {}
```

```scss
.menu-item {
  @include termeh.is-rtl() {
    padding-right: 1rem;
  }
}
```

> This mixin uses the following Termeh global `value()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `document` | `direction` | The text direction of the document |

:::

## Is Invalid

Applies styles when the element matches `:invalid` or `.is-failed`, or when it is inside an invalid *ancestor*.

::: signature

```scss
@mixin is-invalid() {}
```

```scss
.field {
  @include termeh.is-invalid() {
    border-color: #d32f2f;
  }
}
```

:::

## Is Disabled

Applies styles when the element or one of its ancestors matches `:disabled` or `.is-disabled`.

::: signature

```scss
@mixin is-disabled() {}
```

```scss
.button {
  @include termeh.is-disabled() {
    opacity: 0.5;
  }
}
```

:::

## Is Focused

Applies styles for visible keyboard focus while the element and its ancestors are not __disabled__, __loading__ or __inert__.

::: signature

```scss
@mixin is-focused($exclude...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$exclude` | *arglist\<string\>* | Extra selectors that must not match the element itself |

```scss
.button {
  @include termeh.is-focused() {
    box-shadow: 0 0 0 2px #1976d2;
  }
}
```

:::

## Is Field Focused

Applies styles when a composite field or one of its descendants has *visible focus*, *focus-within*, or an *open picker*. It also excludes __disabled__, __loading__ and __inert__ states.

::: signature

```scss
@mixin is-field-focused($exclude...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$exclude` | *arglist\<string\>* | Extra selectors that must not match the element itself |

```scss
.input,
select {
  @include termeh.is-field-focused() {
    border-color: #1976d2;
  }
}
```

:::

## Control Padding

Returns the component control padding as a __padding value__, with *vertical padding first* and *horizontal padding second*.

::: signature

```scss
@function control-padding() {}
```

```scss
.button {
  padding: termeh.control-padding();
}
```

> This function uses the following Termeh global `var()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `component` | `v-padding` | vertical padding |
> | `component` | `h-padding` | horizontal padding |

:::

## Inline Padding

Returns padding for inline elements: *half of the control's vertical padding* and the *full control's horizontal padding*.

::: signature

```scss
@function inline-padding() {}
```

```scss
.pill {
  padding: termeh.inline-padding();
  border-radius: 999px;
}
```

> This function uses the following Termeh global `var()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `padding` | `control` | padding value |

:::

## Transition

Sets a transition for the given properties using the theme easing and duration.

::: signature

```scss
@mixin transition($fields...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$fields` | *arglist\<string\>* | Properties to transition |

```scss
.button {
  @include termeh.transition(background-color, color, box-shadow);
}
```

> This mixin uses the following Termeh global `var()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `transition` | `ease` | easing function |
> | `transition` | `duration` | transition duration |

:::

## Delayed Transition

Sets a transition using the theme easing, duration and delay.

::: signature

```scss
@mixin delayed-transition($fields...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$fields` | *arglist\<string\>* | Properties to transition |

```scss
.tooltip {
  @include termeh.delayed-transition(opacity, visibility);
}
```

> This mixin uses the following Termeh global `var()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `transition` | `ease` | easing function |
> | `transition` | `duration` | transition duration |
> | `transition` | `delay` | transition delay |

:::

## Disabled

Styles an element as disabled. It blocks user selection and pointer events, and sets opacity, text, background and border colors.

::: signature

```scss
@mixin disabled($color, $background, $border, $opacity) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *var\<color\>*, *color*, *null* | Disabled text color |
| `$background` | *var\<color\>*, *color*, *null* | Disabled background color |
| `$border` | *var\<color\>*, *color*, *null* | Disabled border color |
| `$opacity` | *var\<number\>*, *number*, *null* | Disabled opacity |

```scss
.button:disabled {
  @include termeh.disabled(#9e9e9e, #eeeeee, #d6d6d6, 0.7);
}
```

:::

## Selection

Styles selected text with the text and background colors of a __palette color__.

::: signature

```scss
@mixin selection($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | Palette color name |

```scss
.article {
  @include termeh.selection("primary");
}
```

> This mixin uses the following Termeh `variant()`:
>
> | Variant | Usage |
> | -- | -- |
> | `foreground` | Foreground color of selection area |

:::

::: error
Throw error if `$name` is not a *string* or not a defined palette.
:::

## Scrollable

Styles the WebKit scrollbar using theme values for width, track and thumb. The caller supplies the thumb hover color.

::: signature

```scss
@mixin scrollable($color) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$color` | *var\<color\>*, *color* | Thumb color on hover |

```scss
.sidebar {
  overflow: auto;
  @include termeh.scrollable(#4a6fa5);
}
```

> This mixin uses the following Termeh global `var()`:
>
> | Component | Property | Usage |
> | -- | -- | -- |
> | `document` | `scroll-width` | width of scroll |
>
> This mixin uses the following Termeh `variant-for()`:
>
> | Component | Palette | Variant | Usage |
> | -- | -- | -- | -- |
> | `scroll` | `base` | `track` | track background |
> | ++ `variant("base", "surface")`{scss} | | | |
> | `scroll` | `base` | `thumb` | thumb background |
> | ++ `variant("base", "separator")`{scss} | | | |

:::
