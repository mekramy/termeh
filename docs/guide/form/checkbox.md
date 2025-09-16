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

| Component                       | Type     | Usage                           | Default    |
| ------------------------------- | -------- | ------------------------------- | ---------- |
| `base` → `separator`            | _Color_  | _Fallback_ border color         | `null`     |
| `radius` → `normal`             | _Number_ | Default input border radius     | `null`     |
| `gap` → `micro`                 | _Number_ | Spacing between input and label | `8px`      |
| `input` → `height`              | _Number_ | Input height                    | `2.8em`    |
| `input` → `checkbox`            | _Number_ | Checkbox item height            | `1.2em`    |
| `input` → `border`              | _Color_  | Default input border color      | _FALLBACK_ |
| `input` → `disabled-foreground` | _Color_  | Disabled input accent color     | `null`     |
| `input` → `disabled-border`     | _Color_  | Disabled input border color     | `null`     |

---

Checkbox module uses the following Termeh `color()`:

| Color / Variant | Usage                          | Default |
| --------------- | ------------------------------ | ------- |
| `error`         | Accent color for invalid state | _error_ |
| `primary`       | Default accent color           | _error_ |

:::

## Modifiers

- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color

## Child Elements

- `input[type="checkbox"]` → the checkbox input element
