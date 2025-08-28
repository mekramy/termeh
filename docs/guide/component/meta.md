# Meta Module

The **Meta** module provides inline meta information elements with configurable colors, sizes, action/hover states, loading indicators, and disabled handling.
It extends the base _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="meta">Default</div>
    <div class="meta is-action">
      <span class="icon">
        <!--@include: ../icon.svg-->
      </span>
      <span>Clickable</span>
    </div>
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
<div class="meta is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
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

:::

::: dependencies

Meta module uses the following Termeh global `var()`:

| Component            | Type    | Usage                     | Default |
| -------------------- | ------- | ------------------------- | ------- |
| `decorator` → `size` | _Color_ | Loading spinner thickness | `null`  |

---

Meta module uses the following Termeh `color()` and `variant()`:

| Color / Variant      | Usage                               | Default |
| -------------------- | ----------------------------------- | ------- |
| `shade` → `mute`     | Default meta color                  | `null`  |
| `shade` → `readable` | Default hover color for action meta | `null`  |

:::

## Modifiers

- `.is-action` → makes icon clickable
- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as font size
- `.is-<color>` → applies a registered color as accent color
