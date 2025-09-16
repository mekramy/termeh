# Breadcrumb Module

The **Breadcrumb** module provides navigation breadcrumbs with customizable colors.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="breadcrumb">
      <span>Home</span>
      <span class="divider">/</span>
      <span>Library</span>
      <span class="divider">/</span>
      <span class="active">Active Item</span>
    </div>
  </div>
  <div class="demo">
    <div class="breadcrumb is-green">
      <span>Home</span>
      <span class="divider">/</span>
      <span>Library</span>
      <span class="divider">/</span>
      <span class="active">Active (Green)</span>
    </div>
  </div>
  <div class="demo">
    <div class="breadcrumb is-maroon">
      <span>Home</span>
      <span class="divider">/</span>
      <span>Library</span>
      <span class="divider">/</span>
      <span class="active">Active (Maroon)</span>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="breadcrumb">
  <span>Home</span>
  <span class="divider">/</span>
  <span>Library</span>
  <span class="divider">/</span>
  <span class="active">Data</span>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-breadcrumb($colors: ());
```

**Example:**

```scss
@include termeh.use-breadcrumb(("primary", "danger"));
```

**Module:**

This module is registered as `breadcrumb` in the _presented modules_.

:::

::: dependencies

Breadcrumb module uses the following Termeh global `var()`:

| Component            | Type     | Usage                             | Default |
| -------------------- | -------- | --------------------------------- | ------- |
| `base` → `separator` | _Color_  | Divider color                     | `null`  |
| `gap` → `micro`      | _Number_ | Horizontal spacing around divider | `8px`   |
| `control` → `height` | _Number_ | Breadcrumb height                 | `2.2em` |
| `control` → `weight` | _Number_ | Breadcrumb font weight            | `null`  |
| `control` → `strong` | _Number_ | Active item font weight           | `null`  |

---

Breadcrumb module uses the following Termeh `color()` and `variant()`:

| Color / Variant        | Usage                     | Default |
| ---------------------- | ------------------------- | ------- |
| `primary` → `readable` | Default active item color | `null`  |

:::

## Modifiers

- `.is-<color>` → applies a registered color as accent color

### Child Elements

- `.divider` → separator element
- `.active` → active item
