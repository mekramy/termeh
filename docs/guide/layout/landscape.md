# Landscape Module

The **Landscape** module provides a horizontally scrollable container with optional snap points, vertical stacking, configurable gaps, and responsive alignment.
It’s suitable for carousels, horizontally scrolling lists, or vertical scrollers with snap alignment.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="5rem">
  <div class="landscape is-medium-gap">
    <div class="placeholder is-4x is-light">ITEM 1</div>
    <div class="placeholder is-4x">ITEM 2</div>
    <div class="placeholder is-4x is-light">ITEM 3</div>
    <div class="placeholder is-4x">ITEM 4</div>
    <div class="placeholder is-4x is-light">ITEM 5</div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="landscape is-medium-gap">
  <div>ITEM 1</div>
  <div>ITEM 2</div>
  <div>ITEM 3</div>
  <div>ITEM 4</div>
  <div>ITEM 5</div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-landscape($gaps: ());
```

**Example:**

```scss
@include termeh.use-landscape(("small", "medium", "large"));
```

:::

::: termeh

Landscape module uses the following Termeh global `var()` and registered `color()`:

| Component           | Type     | Usage                               | Fallback |
| ------------------- | -------- | ----------------------------------- | -------- |
| `gap` → `micro`     | _Number_ | Default spacing between items       | `8px`    |
| `color` → `primary` | _Color_  | Scrollbar and scroll-thumb coloring | _error_  |

:::

## Available Classes

- `.filler` → flexible spacer (if needed)
- `.item` → direct children elements inside landscape container

### Layout Modifiers

- `.is-gapless` → removes spacing between children
- `.is-stacked` → vertical layout with optional vertical snapping
- `.is-mandatory` → enables mandatory snap points
- `.is-center-snapped` → scroll snap aligns items to center
- `.is-end-snapped` → scroll snap aligns items to end

### Alignment Modifiers

- `.is-<align>-align` → vertical alignment
- `.is-<justify>-justify` → horizontal distribution

### Gap Modifiers

- `.is-<gap>-gap` → applies registered gap sizes

### Responsive Modifiers

- `.is-<device>-stacked` → vertical stacking at a specific breakpoint
- `.is-<device>-<align>-align` → responsive alignment
- `.is-<device>-<justify>-justify` → responsive justification
