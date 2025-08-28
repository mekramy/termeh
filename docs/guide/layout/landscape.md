# Landscape Module

The **Landscape** module provides a horizontally scrollable container with optional snap points, vertical stacking, configurable gaps, and responsive alignment.
It’s suitable for carousels, horizontally scrolling lists, or vertical scrollers with snap alignment.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="5rem">
  <div class="demo">
    <div class="landscape is-mandatory">
      <div class="placeholder is-4x is-light">ITEM 1</div>
      <div class="placeholder is-4x">ITEM 2</div>
      <div class="placeholder is-4x is-light">ITEM 3</div>
      <div class="placeholder is-4x">ITEM 4</div>
      <div class="placeholder is-4x is-light">ITEM 5</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="landscape is-mandatory">
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

::: dependencies

Landscape module uses the following Termeh global `var()`:

| Component       | Type     | Usage                                   | Default |
| --------------- | -------- | --------------------------------------- | ------- |
| `gap` → `micro` | _Number_ | Default spacing between landscape items | `8px`   |

---

Landscape module uses the following Termeh `color()`:

| Color / Variant | Usage                      | Default |
| --------------- | -------------------------- | ------- |
| `primary`       | Accent color for scrollbar | _error_ |

:::

## Modifiers

- `.is-gapless` → removes spacing between children
- `.is-stacked` → vertical layout with optional snap behavior
- `.is-mandatory` → enables mandatory scroll snap points
- `.is-center-snapped` → aligns scroll snap to center
- `.is-end-snapped` → aligns scroll snap to end
- `.is-<align>-align` → sets vertical alignment of children
- `.is-<justify>-justify` → sets horizontal distribution of children
- `.is-<gap>-gap` → applies a registered gap as spacing
- `.is-<device>-stacked` → vertical stacking at a specific breakpoint
- `.is-<device>-<align>-align` → responsive vertical alignment
- `.is-<device>-<justify>-justify` → responsive horizontal distribution
