# Layout Helper Module

The **Layout Helper** module delivers a set of utility classes designed to simplify common layout operations. These helpers cover text direction, content clipping, border radius and shadow adjustments, user interaction states, and scrollable containers.

::: definition

**Signature:**

```scss
@mixin use-layout-helper();
```

**Example:**

```scss
@include termeh.use-layout-helper();
```

**Module:**

This module is registered as `layout-helper` in the _presented modules_.

:::

::: dependencies

Layout Helper module uses the following Termeh `color()`:

| Color / Variant | Usage                       | Default |
| --------------- | --------------------------- | ------- |
| `primary`       | Accent color for scrollbars | _error_ |

:::

## Available Classes

- `.is-clearfix` → clears floated child elements.
- `.is-ltr` → forces left-to-right direction.
- `.is-rtl` → forces right-to-left direction.
- `.is-clipped` → hides overflowing content.
- `.is-radiusless` → removes border radius.
- `.is-shadowless` → removes box shadow.
- `.is-clickable` → applies pointer cursor and enables events.
- `.is-unselectable` → disables text selection.
- `.is-selectable` → enables text selection.
- `.is-locked` → applies locked/disabled state to element.
- `.is-scrollable` → enables vertical scrolling with a themed scrollbar.
