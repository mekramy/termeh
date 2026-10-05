# Checkbox Module

The **Checkbox** module provides customizable checkbox inputs with configurable colors, border, radius, checked state, focus state, disabled state, and RTL/LTR support.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="2.5rem">
  <div class="demo">
    <fieldset>
      <label class="checkbox">
        <input type="checkbox" />
        Primary Checkbox
      </label>
      <label class="checkbox is-shade">
        <input type="checkbox" />
        Shade Checkbox
      </label>
      <label class="checkbox is-failed">
        <input type="checkbox" checked />
        Invalid Checkbox
      </label>
      <label class="checkbox is-disabled">
        <input type="checkbox" checked />
        Disabled Checkbox
      </label>
    </fieldset>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<fieldset>
  <label class="checkbox">
    <input type="checkbox" />
    Primary Checkbox
  </label>
  <label class="checkbox is-shade">
    <input type="checkbox" />
    Shade Checkbox
  </label>
  <label class="checkbox is-failed">
    <input type="checkbox" checked />
    Invalid Checkbox
  </label>
  <label class="checkbox is-disabled">
    <input type="checkbox" checked />
    Disabled Checkbox
  </label>
</fieldset>
```

:::

::: definition

**Signature:**

```scss
@mixin use-checkbox($colors: ());
```

**Example:**

```scss
@include termeh.use-checkbox(("primary", "error"));
```

**Module:**

This module is registered as `form-checkbox` in the _presented modules_.

:::

::: dependencies

Checkbox module uses the following Termeh global `var()`:

| Component     | Variable                | Type     | Usage                                                 | Default    |
|---------------|-------------------------|----------|-------------------------------------------------------|------------|
| **base**      | **separator**           | _Color_  | Fallback checkbox border color                        | `null`     |
| **radius**    | **normal**              | _Number_ | Checkbox control border radius                        | `null`     |
| **gap**       | **micro**               | _Number_ | Space between the checkbox and its label              | `8px`      |
| **decorator** | **size**                | _Number_ | Checkmark stroke thickness                            | `2px`      |
| **input**     | **height**              | _Number_ | Checkbox label row height                             | `2.8em`    |
| **input**     | **checkbox**            | _Number_ | Checkbox control width and height                     | `1.2em`    |
| **input**     | **border**              | _Color_  | Checkbox border color; falls back to `base.separator` | _FALLBACK_ |
| **input**     | **disabled-foreground** | _Color_  | Label and checkmark color in the disabled state       | `null`     |
| **input**     | **disabled-border**     | _Color_  | Checkbox border color in the disabled state           | `null`     |

---

Checkbox module uses the following Termeh `color()` and `variant()`:

| Color       | Variant        | Usage                           | Default |
|-------------|----------------|---------------------------------|---------|
| **error**   |                | Invalid border and checked fill | _error_ |
| **primary** |                | Focus border and checked fill   | _error_ |
| **error**   | **foreground** | Invalid-state checkmark color   | `null`  |
| **primary** | **foreground** | Checked-state checkmark color   | `null`  |

:::

## Modifiers

- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color

## Child Elements

- `input[type="checkbox"]` → the checkbox input element
