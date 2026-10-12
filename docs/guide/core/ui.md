# UI Utility Mixin And Functions

A collection of utility mixins and functions for layout, spacing, controls, and state management.

## Marged

Applies margin styles to children, excluding the last child and elements with `.is-marginless`

::: definition

**Signature:**

```scss
@mixin marged($exclude...);
```

**Example:**

```scss
.list-item {
  @include termeh.marged(".is-fit") {
    margin-bottom: 1rem;
  }
}
```

:::

## Padded

Applies padding styles unless the element has `.is-paddingless`.

::: definition

**Signature:**

```scss
@mixin padded($exclude...);
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

## Gapped

Applies gap styles unless the element has `.is-gapless`.

::: definition

**Signature:**

```scss
@mixin gapped($exclude...);
```

**Example:**

```scss
.grid {
  @include termeh.gapped {
    gap: 1rem;
  };
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

## UnSelectable

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
  $width: Length,
  $track: Color = null,
  $thumb: Color = null,
  $thumb-hover: Color = null
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
@mixin scroll-color($color: Color);
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
@mixin spinner($size: Length, $color: Color, $thickness: Length);
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
@mixin spinner-color($color: Color);
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
@mixin loader($size: Length, $color: Color, $thickness: Length);
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
@mixin loader-color($color: Color);
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

Creates a full-cover overlay via `::before` and applies a backdrop filter.

::: definition

**Signature:**

```scss
@mixin overlay($background: Color, $opacity: Number, $filter: Filter);
```

**Example:**

```scss
.dialog[aria-modal="true"] {
  @include termeh.overlay(#222, 0.5, blur(6px));
}
```

:::

## Is-Ltr

LTR-only styles. Applies styles when the global direction is _left-to-right_, or the element has the `.is-ltr` class.

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

::: block Dependencies

Global direction detected from the following Termeh global `var()`:

| Component | Variable      | Type         |
|-----------|---------------|--------------|
| **base**  | **direction** | _ltr \| rtl_ |

:::

## Is-Rtl

RTL-only styles. Applies styles when the global direction is _right-to-left_, or the element has the `.is-rtl` class.

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

::: block Dependencies

Global direction detected from the following Termeh global `var()`:

| Component | Variable      | Type         |
|-----------|---------------|--------------|
| **base**  | **direction** | _ltr \| rtl_ |

:::

## Is-Invalid

Styles for the `:invalid` state or `.is-failed` class, on the element itself or within a parent.

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

Styles for `:disabled` state or `is-disabled` class, for both the element itself or within a disabled parent.

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

## Is-Focused

Styles for focused state (element itself or within not disabled parent).

::: definition

**Signature:**

```scss
@mixin is-focused($exclude...);
```

**Example:**

```scss
.input {
  @include termeh.is-focused(".is-loading") {
    border-color: #3498db;
  }
}
```

:::

## Control-Padding

Returns the standard control padding as a shorthand list.

::: definition

**Signature:**

```scss
@function control-padding(): Padding;
```

**Example:**

```scss
.input {
  padding: termeh.control-padding();
}
```

:::

::: block Dependencies

Control padding is calculated from the following Termeh global `var()`:

| Component   | Variable      | Type     |
|-------------|---------------|----------|
| **control** | **v-padding** | _Length_ |
| **control** | **h-padding** | _Length_ |

:::

## Inline-Padding

Returns the standard inline element padding as a shorthand list.

::: definition

**Signature:**

```scss
@function inline-padding(): Padding;
```

**Example:**

```scss
.input {
  padding: termeh.inline-padding();
}
```

:::

::: block Dependencies

Inline padding is calculated from the following Termeh global `var()`:

| Component | Variable  | Type     |
|-----------|-----------|----------|
| **gap**   | **micro** | _Length_ |

:::

## Transition

Applies a standard transition using theme duration and easing.

::: definition

**Signature:**

```scss
@mixin transition($fields...);
```

**Example:**

```scss
.button {
  @include termeh.transition(all);
}
```

:::

::: block Dependencies

UI transitions are calculated from the following Termeh global `var()`:

| Component      | Variable     | Type              |
|----------------|--------------|-------------------|
| **transition** | **ease**     | _Easing Function_ |
| **transition** | **duration** | _Duration_        |

:::

## Delayed Transition

Applies a standard transition with a delay using theme duration, easing, and delay.

::: definition

**Signature:**

```scss
@mixin delayed-transition($fields...);
```

**Example:**

```scss
.button {
  @include termeh.delayed-transition(color, background-color);
}
```

:::

::: block Dependencies

UI delayed transitions are calculated from the following Termeh global `var()`:

| Component      | Variable     | Type              |
|----------------|--------------|-------------------|
| **transition** | **ease**     | _Easing Function_ |
| **transition** | **duration** | _Duration_        |
| **transition** | **delay**    | _Duration_        |

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

::: block Dependencies

The disabled style is derived from the following Termeh global `var()`:

| Component | Variable                | Type    |
|-----------|-------------------------|---------|
| **input** | **disabled**            | _Color_ |
| **input** | **disabled-foreground** | _Color_ |
| **input** | **disabled-border**     | _Color_ |

:::

## Selection

Styles selection color pair based on a palette name (foreground & background).

::: definition

**Signature:**

```scss
@mixin selection($name: String);
```

**Example:**

```scss
p,
.prose {
  @include termeh.selection("primary");
}
```

:::

::: error
**throw**  If the specified color palette name does not exist.
:::

## Scrollable

Adds a themed scrollbar to a scrollable area. The thumb color changes on hover.

::: definition

**Signature:**

```scss
@mixin scrollable($color: Color);
```

**Example:**

```scss
.sidebar {
  @include termeh.scrollable(#7f8c8d);
}
```

:::

::: block Dependencies

The scrollbar uses the following Termeh global `var()` values:

| Component                     | Variable  | Type     |
|-------------------------------|-----------|----------|
| **scroll**                    | **size**  | _Length_ |
| **scroll**                    | **track** | _Color_  |
| ++ `var("base", "section")`   |           |          |
| **scroll**                    | **thumb** | _Color_  |
| ++ `var("base", "separator")` |           |          |

:::
