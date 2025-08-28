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

::: dependencies

Gaper module uses the following Termeh global `var()`:

| Component            | Type     | Usage                                           | Default |
| -------------------- | -------- | ----------------------------------------------- | ------- |
| `base` → `separator` | _Color_  | Default background color for separator elements | `null`  |
| `gap` → `micro`      | _Number_ | Default gap between gaper items                 | `8px`   |

:::

## Modifiers

- `.is-gapless` → removes spacing between children
- `.is-auto` → applies auto margins instead of gutters/dividers
- `.is-stacked` → sets vertical layout
- `.is-stacked-reverse` → sets reversed vertical layout
- `.is-<align>-align` → sets vertical alignment
- `.is-<justify>-justify` → sets horizontal distribution
- `.is-<gap>-gap` → applies a registered gap as spacing
- `.is-<device>-stacked` → stacks layout at a specific breakpoint
- `.is-<device>-stacked-reverse` → reversed vertical layout at a breakpoint
- `.is-<device>-<align>-align` → responsive vertical alignment
- `.is-<device>-<justify>-justify` → responsive horizontal distribution

## Child Elements

- `.gutter` → empty spacing element
- `.divider` → thin line separator

## Child Modifiers

- `.filler` → flexible spacer that grows to fill remaining space
