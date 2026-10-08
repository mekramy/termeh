# Meta Module

The **Meta** module provides inline meta information elements with configurable colors, sizes, action/hover states, loading spinners, and disabled handling.
It extends the base _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="meta">Default</div>
    <button class="meta is-action">
      <span class="icon">
        <!--@include: ../icon.svg-->
      </span>
      <span>Clickable</span>
    </button>
    <div class="meta is-loading">Loading</div>
    <div class="meta is-disabled">Disabled</div>
  </div>
  <div class="demo">
    <div class="meta is-primary">Primary</div>
    <div class="meta is-primary is-action">
      <span class="icon">
        <!--@include: ../icon.svg-->
      </span>
      <span>Clickable</span>
    </div>
    <div class="meta is-primary is-loading">Loading</div>
    <div class="meta is-primary is-disabled">Disabled</div>
  </div>
  <div class="demo">
    <div class="meta is-indigo">Indigo</div>
    <div class="meta is-indigo is-action">
      <span class="icon">
        <!--@include: ../icon.svg-->
      </span>
      <span>Clickable</span>
    </div>
    <div class="meta is-indigo is-loading">Loading</div>
    <div class="meta is-indigo is-disabled">Disabled</div>
  </div>
  <div class="demo">
    <div class="meta is-maroon">Maroon</div>
    <div class="meta is-maroon is-action">
      <span class="icon">
        <!--@include: ../icon.svg-->
      </span>
      <span>Clickable</span>
    </div>
    <div class="meta is-maroon is-loading">Loading</div>
    <div class="meta is-maroon is-disabled">Disabled</div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="meta">Default</div>
<button class="meta is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</button>
<div class="meta is-loading">Loading</div>
<div class="meta is-disabled">Disabled</div>
<div class="meta is-primary">Primary</div>
<div class="meta is-primary is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="meta is-primary is-loading">Loading</div>
<div class="meta is-primary is-disabled">Disabled</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-meta($colors: (), $sizes: ());
```

**Example:**

```scss
@include termeh.use-meta(("primary", "green"), ("small", "medium"));
```

**Module:**

This module is registered as `meta` in the _presented modules_.

:::

## Modifiers

- `.is-action` → makes icon clickable
- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as font size
- `.is-<color>` → applies a registered color as accent color

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Meta module uses the following Termeh global _var_:

| Component     | Variable        | Type          | Usage                     |
|---------------|-----------------|---------------|---------------------------|
| **decorator** | **size**        | _Number_      | Loading spinner thickness |
| **control**   | **height**      | _Number_      | Meta element height       |
| **control**   | **meta-size**   | _Number_      | Default text size         |
| **control**   | **meta-weight** | _Font Weight_ | Default text weight       |

---

Meta module uses the following Termeh _variant_:

| Color     | Variant         | Usage                          |
|-----------|-----------------|--------------------------------|
| **shade** | **mute**        | Default text color             |
| **shade** | **mute-active** | Action hover and spinner color |

:::
