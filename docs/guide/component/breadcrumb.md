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

## Child Elements

- `.divider` → separator element
- `.active` → active item

## Modifiers

- ++is-{color}++ → applies a registered color as accent color

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Breadcrumb module uses the following Termeh global _var_:

| Component   | Variable        | Type          | Usage                   |
|-------------|-----------------|---------------|-------------------------|
| **base**    | **separator**   | _Color_       | Divider color           |
| **gap**     | **micro**       | _Number_      | Space around dividers   |
| **control** | **height**      | _Number_      | Item line height        |
| **control** | **meta-size**   | _Number_      | Breadcrumb text size    |
| **control** | **meta-weight** | _Font Weight_ | Breadcrumb text weight  |
| **strong**  | **weight**      | _Font Weight_ | Active item text weight |

---

Breadcrumb module uses the following Termeh _variant_:

| Color       | Variant      | Usage             |
|-------------|--------------|-------------------|
| **primary** | **readable** | Active item color |

:::
