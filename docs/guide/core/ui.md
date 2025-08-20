# UI Utility Mixin And Functions

## Marged

Applies margin styles to non-last children unless marginless.

::: code-group

```scss [usage.scss]
@mixin marged($except-last: true) { … }
```

```scss [example.scss]
.items {
  @include marged {
    margin-bottom: 1rem;
  }
}
```

:::

---

## Marginless

Removes bottom margin from non-last, non-marginless elements.

::: code-group

```scss [usage.scss]
@mixin marginless() { … }
```

```scss [example.scss]
.list {
  @include marginless;
}
```

:::

---

## Padded

Applies padding styles unless element has `.is-paddingless`.

::: code-group

```scss [usage.scss]
@mixin padded() { … }
```

```scss [example.scss]
.card {
  @include padded {
    padding: 1rem;
  }
}
```

:::

---

## Paddingless

Removes padding from elements with `.is-paddingless`.

::: code-group

```scss [usage.scss]
@mixin paddingless() { … }
```

```scss [example.scss]
.box {
  @include paddingless;
}
```

:::

---

## Shadow

Generates standard box shadow with transparency.

::: code-group

```scss [usage.scss]
@function shadow($x, $y, $color);
```

```scss [example.scss]
.card {
  box-shadow: shadow(2px, 4px, #000);
}
```

:::

---

## Soft Shadow

Generates soft diffused shadow effect.

::: code-group

```scss [usage.scss]
@function soft-shadow($x, $y, $color);
```

```scss [example.scss]
.panel {
  box-shadow: soft-shadow(0, 6px, #000);
}
```

:::

---

## Flat Shadow

Generates flat box shadow with transparency.

::: code-group

```scss [usage.scss]
@function flat-shadow($size, $color);
```

```scss [example.scss]
.badge {
  box-shadow: flat-shadow(4px, rgba(0, 0, 0, 0.2));
}
```

:::

---

## Child Radius

Calculates the border radius for a child element.

::: code-group

```scss [usage.scss]
@function child-radius($parent-radius, $padding);
```

```scss [example.scss]
.avatar {
  border-radius: child-radius(2rem, 4px);
}
```

:::

---

## Clearfix

Clearfix implementation using `::after`.

::: code-group

```scss [usage.scss]
@mixin clearfix() { … }
```

```scss [example.scss]
.container {
  @include clearfix;
}
```

:::

---

## Overflow Touch

Enables smooth scrolling on iOS.

::: code-group

```scss [usage.scss]
@mixin overflow-touch() { … }
```

```scss [example.scss]
.scroll-area {
  @include overflow-touch;
}
```

:::

---

## Locked

Disables pointer events and text selection.

::: code-group

```scss [usage.scss]
@mixin locked() { … }
```

```scss [example.scss]
.modal {
  @include locked;
}
```

:::

---

## Unselectable

Disables text selection across browsers.

::: code-group

```scss [usage.scss]
@mixin unselectable() { … }
```

```scss [example.scss]
.button {
  @include unselectable;
}
```

:::

---

## Selectable

Enables text selection.

::: code-group

```scss [usage.scss]
@mixin selectable() { … }
```

```scss [example.scss]
.input {
  @include selectable;
}
```

:::

---

## Placeholder

Styles placeholder text across browsers.

::: code-group

```scss [usage.scss]
@mixin placeholder() { … }
```

```scss [example.scss]
input {
  @include placeholder {
    color: gray;
  }
}
```

:::

---

## Reset

Resets form element styles to baseline.

::: code-group

```scss [usage.scss]
@mixin reset() { … }
```

```scss [example.scss]
input {
  @include reset;
}
```

:::

---

## Control

Base control styles for form elements.

::: code-group

```scss [usage.scss]
@mixin control() { … }
```

```scss [example.scss]
button {
  @include control;
}
```

:::

---

## Scrollbar

Custom scrollbar styling.

::: code-group

```scss [usage.scss]
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null) { … }
```

```scss [example.scss]
.content {
  @include scrollbar(8px, #f5f5f5, #ccc, #999);
}
```

:::

---

## Scroll Color

Updates scrollbar thumb hover color.

::: code-group

```scss [usage.scss]
@mixin scroll-color($color) { … }
```

```scss [example.scss]
.content {
  @include scroll-color(red);
}
```

:::

---

## Spinner

Spinner base styles.

::: code-group

```scss [usage.scss]
@mixin spinner($size, $color, $width) { … }
```

```scss [example.scss]
.loader::before {
  @include spinner(24px, blue, 2px);
}
```

:::

---

## Spinner Color

Updates spinner color.

::: code-group

```scss [usage.scss]
@mixin spinner-color($color) { … }
```

```scss [example.scss]
.loader::before {
  @include spinner-color(green);
}
```

:::

---

## Loader

Centered loading spinner.

::: code-group

```scss [usage.scss]
@mixin loader($size, $color, $width) { … }
```

```scss [example.scss]
.button {
  @include loader(20px, red, 2px);
}
```

:::

---

## Loader Color

Updates loader spinner color.

::: code-group

```scss [usage.scss]
@mixin loader-color($color) { … }
```

```scss [example.scss]
.button {
  @include loader-color(orange);
}
```

:::

---

## Overlay

Overlay layer with optional backdrop filter.

::: code-group

```scss [usage.scss]
@mixin overlay($color, $filter) { … }
```

```scss [example.scss]
.dialog {
  @include overlay(rgba(0, 0, 0, 0.6), blur(4px));
}
```

:::

---

## Is LTR

LTR direction specific styles.

::: code-group

```scss [usage.scss]
@mixin is-ltr() { … }
```

```scss [example.scss]
.container {
  @include is-ltr {
    text-align: left;
  }
}
```

:::

---

## Is RTL

RTL direction specific styles.

::: code-group

```scss [usage.scss]
@mixin is-rtl() { … }
```

```scss [example.scss]
.container {
  @include is-rtl {
    text-align: right;
  }
}
```

:::

---

## Is Invalid

Applies styles for invalid state.

::: code-group

```scss [usage.scss]
@mixin is-invalid() { … }
```

```scss [example.scss]
input {
  @include is-invalid {
    border-color: red;
  }
}
```

:::

---

## Is Disabled

Applies styles for disabled state.

::: code-group

```scss [usage.scss]
@mixin is-disabled() { … }
```

```scss [example.scss]
input {
  @include is-disabled {
    opacity: 0.5;
  }
}
```

:::

---

## Control Padding

Returns standard control padding values.

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

---

## Transition

Standard transition effect.

::: code-group

```scss [usage.scss]
@mixin transition($fields) { … }
```

```scss [example.scss]
.button {
  @include transition(all);
}
```

:::

---

## Disabled

Disabled state styling.

::: code-group

```scss [usage.scss]
@mixin disabled() { … }
```

```scss [example.scss]
.input {
  @include disabled;
}
```

:::

---

## Selection

Text selection styling.

::: code-group

```scss [usage.scss]
@mixin selection($name) { … }
```

```scss [example.scss]
p {
  @include selection(primary);
}
```

:::

---

## Scrollable

Scrollable container with themed scrollbar.

::: code-group

```scss [usage.scss]
@mixin scrollable($color) { … }
```

```scss [example.scss]
.sidebar {
  @include scrollable(blue);
}
```

:::
