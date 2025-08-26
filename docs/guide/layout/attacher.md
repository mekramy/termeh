# Attacher Module

The **Attacher** module provides utility classes for arranging child elements in a flexible container. It handles alignment, justification, and optional dividers between elements, with full support for both LTR and RTL directions.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="attacher">
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-item filler">Filler</div>
      <div class="placeholder is-light">Child</div>
      <div class="placeholder is-light">Child</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="attacher">
  <div>Child</div>
  <div class="filler">Filler</div>
  <div>Child</div>
  <div>Child</div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-attacher();
```

**Example:**

```scss
@include termeh.use-attacher();
```

:::

::: termeh

Attacher module uses the following Termeh global `var()`

| Component            | Type    | Usage                                 |
| -------------------- | ------- | ------------------------------------- |
| `base` → `separator` | _Color_ | Divider color for `.divider` elements |

:::

## Available Classes

- `.is-<align>-align` → sets vertical alignment for children.
- `.is-<justify>-justify` → sets horizontal distribution of children.

## Available Child Classes

- `.filler` → stretches to occupy remaining space.
- `.divider` → vertical separator line between child elements.
