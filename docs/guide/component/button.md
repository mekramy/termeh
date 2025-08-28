# Button Module

The **Button** module provides customizable action elements with support for color variants, sizes, shapes, loading, and disabled states. It extends the _Element_ module. It can be grouped using the `. buttons` container for consistent spacing.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="2rem">
  <div class="demo">
    <div class="buttons">
      <div class="button is-light">Default</div>
      <div class="button">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Icon</span>
      </div>
      <div class="button is-loading">Loading</div>
      <div class="button is-simple is-cta">Simple CTA</div>
      <div class="button is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="buttons">
      <div class="button is-light is-primary">Primary</div>
      <div class="button is-primary">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Icon</span>
      </div>
      <div class="button is-primary is-loading">Loading</div>
      <div class="button is-simple is-primary is-cta">Simple CTA</div>
      <div class="button is-primary is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="buttons">
      <div class="button is-light is-indigo">Indigo</div>
      <div class="button is-indigo">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Icon</span>
      </div>
      <div class="button is-indigo is-loading">Loading</div>
      <div class="button is-simple is-indigo is-cta">Simple CTA</div>
      <div class="button is-indigo is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="buttons">
      <div class="button is-light is-maroon is-rounded">Cherry</div>
      <div class="button is-maroon is-rounded">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Icon</span>
      </div>
      <div class="button is-maroon is-rounded is-loading">Loading</div>
      <div class="button is-simple is-maroon is-rounded is-cta">Simple CTA</div>
      <div class="button is-maroon is-rounded is-disabled">Disabled</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="buttons">
  <div class="button is-light">Default</div>
  <div class="button">
    <span class="icon">...</span>
    <span>Clickable</span>
  </div>
  <div class="button is-loading">Loading</div>
  <div class="button is-simple is-cta">Simple CTA</div>
  <div class="button is-disabled">Disabled</div>
</div>
<div class="buttons">
  <div class="button is-light is-primary">Primary</div>
  <div class="button is-primary">
    <span class="icon">...</span>
    <span>Clickable</span>
  </div>
  <div class="button is-primary is-loading">Loading</div>
  <div class="button is-simple is-primary is-cta">Simple CTA</div>
  <div class="button is-primary is-disabled">Disabled</div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-button($colors: (), $sizes: ());
```

**Example:**

```scss
@include termeh.use-button(("primary", "green"), ("small", "large"));
```

:::

::: dependencies

Button module uses the following Termeh global `var()`:

| Component            | Type     | Usage                                  | Default |
| -------------------- | -------- | -------------------------------------- | ------- |
| `gap` → `micro`      | _Number_ | Spacing between button container items | `8px`   |
| `radius` → `normal`  | _Number_ | Default border radius                  | `null`  |
| `radius` → `rounded` | _Number_ | Rounded button border radius           | `null`  |
| `decorator` → `size` | _Color_  | Loading spinner thickness              | `null`  |
| `control` → `height` | _Number_ | Default button height                  | `2.2em` |

---

Button module uses the following Termeh `color()` and `variant()`:

| Color / Variant          | Usage                              | Default |
| ------------------------ | ---------------------------------- | ------- |
| `shade`                  | Default focus/active outline color | _error_ |
| `shade` → `readable`     | Default text/icon color            | `null`  |
| `shade` → `light`        | Default button background          | `null`  |
| `shade` → `light-active` | Default hover background           | `null`  |

:::

## Button Container

Container for buttons: `.buttons`

## Modifiers

- `.is-cta` → fills remaining space in `.buttons` container
- `.is-simple` → applies minimal style, inherits text color
- `.is-light` → applies light background variant
- `.is-rounded` → applies rounded border-radius
- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as button size
- `.is-<color>` → applies a registered color as accent color
