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

:::

::: termeh

Checkbox module uses the following Termeh global `var()`:

| Component                   | Type     | Usage                           | Fallback                   |
| --------------------------- | -------- | ------------------------------- | -------------------------- |
| `radius` → `normal`         | _Number_ | Border radius for checkbox      | `normal`                   |
| `gap` → `micro`             | _Number_ | Spacing between input and label | `8px`                      |
| `input` → `height`          | _Number_ | Label height                    | `1.8rem`                   |
| `input` → `checkbox`        | _Number_ | Checkbox input size             | `1.2em`                    |
| `input` → `border`          | _Color_  | Default border color            | `var("base", "separator")` |
| `input` → `disabled-color`  | _Color_  | Disabled input color            | `null`                     |
| `input` → `disabled-border` | _Color_  | Disabled input border color     | `null`                     |

Checkbox module uses the following Termeh registered `color()`:

| Palette   | Usage           | Fallback |
| --------- | --------------- | -------- |
| `primary` | Checked / focus | _error_  |
| `error`   | Error / invalid | _error_  |

:::

## Available Classes

### Structural Elements

- `input[type="checkbox"]` → the checkbox input element
- `label.checkbox` → wrapper label that handles layout, spacing, and states

### Modifiers

- `.is-<color>` → sets the color for checked, focus, and box-shadow states
- `.is-invalid` → applies error border color
- `.is-disabled` → disables input and changes colors
