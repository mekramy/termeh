# Radio Module

The **Radio** module provides customizable radio button inputs with configurable colors, border, radius, checked state, focus state, disabled state, and RTL/LTR support.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="2.5rem">
  <fieldset>
    <label class="radio">
      <input type="radio" />
      Primary Radio
    </label>
    <label class="radio is-shade">
      <input type="radio" />
      Shade Radio
    </label>
    <label class="radio is-failed">
      <input type="radio" checked />
      Invalid Radio
    </label>
    <label class="radio is-disabled">
      <input type="radio" checked />
      Disabled Radio
    </label>
  </fieldset>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<fieldset>
  <label class="radio">
    <input type="radio" />
    Primary Radio
  </label>
  <label class="radio is-shade">
    <input type="radio" />
    Shade Radio
  </label>
  <label class="radio is-failed">
    <input type="radio" checked />
    Invalid Radio
  </label>
  <label class="radio is-disabled">
    <input type="radio" checked />
    Disabled Radio
  </label>
</fieldset>
```

:::

::: definition

**Signature:**

```scss
@mixin use-radio($colors: ());
```

**Example:**

```scss
@include termeh.use-radio(("primary", "error"));
```

:::

::: termeh

Radio module uses the following Termeh global `var()`:

| Component                   | Type     | Usage                           | Fallback                   |
| --------------------------- | -------- | ------------------------------- | -------------------------- |
| `radius` → `circle`         | _Number_ | Border radius for radio         | `50%`                      |
| `gap` → `micro`             | _Number_ | Spacing between input and label | `8px`                      |
| `input` → `height`          | _Number_ | Label height                    | `1.8rem`                   |
| `input` → `checkbox`        | _Number_ | Radio input size                | `1.2em`                    |
| `input` → `border`          | _Color_  | Default border color            | `var("base", "separator")` |
| `input` → `disabled-color`  | _Color_  | Disabled input color            | `null`                     |
| `input` → `disabled-border` | _Color_  | Disabled input border color     | `null`                     |

Radio module uses the following Termeh registered `color()`:

| Palette   | Usage           | Fallback |
| --------- | --------------- | -------- |
| `primary` | Checked / focus | _error_  |
| `error`   | Error / invalid | _error_  |

:::

## Available Classes

### Structural Elements

- `input[type="radio"]` → the radio input element
- `label.radio` → wrapper label that handles layout, spacing, and states

### Modifiers

- `.is-<color>` → sets the color for checked, focus, and box-shadow states
- `.is-invalid` → applies error border color
- `.is-disabled` → disables input and changes colors
