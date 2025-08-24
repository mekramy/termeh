# Wrapper Module

The **Wrapper** module provides a flexible row container that evenly distributes its children.
It supports wrapping, responsive alignment, and configurable spacing using the Termeh gap system.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="4rem">
  <div class="wrapper">
    <div class="placeholder is-light is-1x">CHILD</div>
    <div class="placeholder is-light">CHILD</div>
    <div class="placeholder is-light">CHILD</div>
    <div class="placeholder is-4x">LONG CHILD</div>
    <div class="placeholder is-light">CHILD</div>
    <div class="placeholder is-light">CHILD</div>
    <div class="placeholder is-light is-3x">CHILD</div>
    <div class="placeholder is-light is-2x">CHILD</div>
    <div class="placeholder is-light">CHILD</div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="wrapper">
  <div>CHILD</div>
  <div>CHILD</div>
  <div>CHILD</div>
  <div>LONG CHILD</div>
  <div>CHILD</div>
  <div>CHILD</div>
  <div>CHILD</div>
  <div>CHILD</div>
  <div>CHILD</div>
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

:::

::: termeh

Wrapper module uses the following Termeh global `var()`

| Component       | Type     | Usage                                 | Fallback |
| --------------- | -------- | ------------------------------------- | -------- |
| `gap` → `micro` | _Number_ | Default spacing between wrapped items | `8px`    |

:::

## Available Classes

- `.is-gapless` → removes spacing between children
- `.is-<gap>-gap` → applies spacing from registered gap scale
