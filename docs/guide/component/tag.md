# Tag Module

The **Tag** module provides label-like UI elements with support for colors, sizes, rounded/action states, and loading/disabled variants.
It extends the _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag">Default</div>
      <div class="tag is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-loading">Loading</div>
      <div class="tag is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-primary">Primary</div>
      <div class="tag is-primary is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-primary is-loading">Loading</div>
      <div class="tag is-primary is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-green is-rounded">Green</div>
      <div class="tag is-green is-rounded is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-green is-rounded is-loading">Loading</div>
      <div class="tag is-green is-rounded is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-indigo is-rounded">Indigo</div>
      <div class="tag is-indigo is-rounded is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-indigo is-rounded is-loading">Loading</div>
      <div class="tag is-indigo is-rounded is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-maroon is-rounded">Maroon</div>
      <div class="tag is-maroon is-rounded is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-maroon is-rounded is-loading">Loading</div>
      <div class="tag is-maroon is-rounded is-disabled">Disabled</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="tag">Default</div>
<div class="tag is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="tag is-loading">Loading</div>
<div class="tag is-disabled">Disabled</div>
<div class="tag is-primary">Primary</div>
<div class="tag is-primary is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="tag is-primary is-loading">Loading</div>
<div class="tag is-primary is-disabled">Disabled</div>
<div class="tag is-green is-rounded">Green</div>
<div class="tag is-green is-rounded is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="tag is-green is-rounded is-loading">Loading</div>
<div class="tag is-green is-rounded is-disabled">Disabled</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-tag($colors: (), $sizes: ());
```

**Example:**

```scss
@include termeh.use-tag(("primary", "success"), ("small", "medium"));
```

:::

::: dependencies

Tag module uses the following Termeh global `var()`:

| Component            | Type     | Usage                     | Default |
| -------------------- | -------- | ------------------------- | ------- |
| `radius` → `normal`  | _Number_ | Default tag border radius | `null`  |
| `radius` → `rounded` | _Number_ | Rounded tag border radius | `null`  |
| `decorator` → `size` | _Color_  | Loading spinner thickness | `null`  |
| `control` → `height` | _Number_ | Default tag height        | `2.2em` |

---

Tag module uses the following Termeh `color()` and `variant()`:

| Color / Variant      | Usage                              | Default |
| -------------------- | ---------------------------------- | ------- |
| `shade`              | Default focus/active outline color | _error_ |
| `shade` → `readable` | Default text/icon color            | `null`  |
| `shade` → `light`    | Default tag background color       | `null`  |

:::

## Modifiers

- `.is-action` → makes icon clickable
- `.is-rounded` → applies rounded border-radius
- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as font size
- `.is-<color>` → applies a registered color as accent color
