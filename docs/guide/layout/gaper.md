# Gaper Module

The **Gaper** module provides a flexible container for aligning and spacing elements.
It supports both horizontal and vertical layouts, configurable gaps, dividers, and responsive stacking.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="gaper is-auto">
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-item filler">Filler</div>
      <div class="divider"></div>
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-light">Child</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="gaper is-auto">
  <div>Child</div>
  <div class="filler">Filler</div>
  <div class="divider"></div>
  <div>Child</div>
  <div>Child</div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-gaper($gaps: ());
```

**Example:**

```scss
@include termeh.use-gaper(("small", "medium", "large"));
```

:::

::: termeh

Gaper module uses the following Termeh global `var()`

| Component            | Type     | Usage                                 | Fallback |
| -------------------- | -------- | ------------------------------------- | -------- |
| `base` → `separator` | _Color_  | Divider line color                    | `null`   |
| `gap` → `micro`      | _Number_ | Default spacing unit between elements | `8px`    |

:::

## Available Classes

- `.gutter` → empty spacing element
- `.divider` → thin line separator
- `.filler` → flexible spacer that grows to fill remaining space

### Layout Modifiers

- `.is-gapless` → removes spacing between children
- `.is-auto` → applies auto margins for children instead of gutters/dividers
- `.is-stacked` → vertical layout
- `.is-stacked-reverse` → reversed vertical layout

### Alignment Modifiers

- `.is-<align>-align` → vertical alignment
- `.is-<justify>-justify` → horizontal distribution

### Gap Modifiers

- `.is-<gap>-gap` → applies registered gap sizes

### Responsive Modifiers

- `.is-<device>-stacked` → stack layout at a specific breakpoint
- `.is-<device>-stacked-reverse` → reversed vertical layout at a specific breakpoint
- `.is-<device>-<align>-align` → responsive alignment
- `.is-<device>-<justify>-justify` → responsive justification
