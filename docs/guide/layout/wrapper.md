# Wrapper Module

The **Wrapper** module provides a flexible row container that evenly distributes its children.
It supports wrapping, responsive alignment, and configurable spacing using the Termeh gap system.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="4rem">
  <div class="demo">
    <div class="wrapper">
      <div class="placeholder is-light is-1x">Child</div>
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-4x">Long Child</div>
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-light is-3x">Child</div>
      <div class="placeholder is-light is-2x">Child</div>
      <div class="placeholder is-light">Child</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="wrapper">
  <div>Child</div>
  <div>Child</div>
  <div>Child</div>
  <div>Long Child</div>
  <div>Child</div>
  <div>Child</div>
  <div>Child</div>
  <div>Child</div>
  <div>Child</div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-wrapper($gaps: ());
```

**Example:**

```scss
@include termeh.use-wrapper(("small", "medium"));
```

**Module:**

This module is registered as `wrapper` in the _presented modules_.

:::

::: dependencies

Wrapper module uses the following Termeh global `var()`:

| Component       | Type     | Usage                                 | Default |
| --------------- | -------- | ------------------------------------- | ------- |
| `gap` → `micro` | _Number_ | Default spacing between wrapper items | `8px`   |

:::

## Modifiers

- `.is-gapless` → removes spacing between children
- `.is-<gap>-gap` → applies a registered gap as spacing
