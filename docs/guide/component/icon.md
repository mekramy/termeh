# Icon Module

The **Icon** module provides a flexible container for SVG or image-based icons, with support for sizes, colors, outline/fill, interactive (action) states, and loading/disabled variants.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="gaper is-auto">
      <div class="icon">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-shade is-large is-action">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-primary">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-green">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-maroon">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-primary is-large is-action">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-loading">
          <!--@include: ../icon.svg-->
      </div>
      <div class="icon is-primary is-large is-loading">
          <!--@include: ../icon.svg-->
      </div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="icon">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>
<div class="icon is-shade is-large is-action">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>
<div class="icon is-primary">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>
<div class="icon is-primary is-large is-action">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>
<div class="icon is-loading">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>
<div class="icon is-primary is-large is-loading">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-icon($colors: (), $sizes: ());
```

**Example:**

```scss
@include termeh.use-icon(("primary", "green"), ("small", "large"));
```

:::

::: dependencies

Icon module uses the following Termeh global `var()`:

| Component            | Type    | Usage                     | Default |
| -------------------- | ------- | ------------------------- | ------- |
| `decorator` → `size` | _Color_ | Loading spinner thickness | `null`  |

---

Icon module uses the following Termeh `color()` and `variant()`:

| Color / Variant      | Usage                                | Default |
| -------------------- | ------------------------------------ | ------- |
| `shade`              | Default loading spinner color        | _error_ |
| `shade` → `mute`     | Default action icon color            | `null`  |
| `shade` → `readable` | Default hover color for action icons | `null`  |

:::

## Modifiers

- `.is-outline` → applies color to stroke instead of fill
- `.is-action` → makes icon clickable
- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as icon size
- `.is-<color>` → applies a registered color as accent color
