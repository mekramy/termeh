# Field Module

The **Field** module provides a wrapper for form controls, helping manage spacing, label styling, required indicators, help text, error states, and color variations.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="6rem">
  <div class="demo">
    <div class="field is-required">
      <label>Username</label>
      <div class="input">
        <input type="text" placeholder="Enter your email" />
      </div>
      <p class="help">This field is required</p>
    </div>
    <div class="field is-required is-disabled">
      <label>Username</label>
      <div class="input">
        <input type="text" placeholder="Enter your email" />
      </div>
      <p class="help">This field is disabled</p>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="field is-required">
  <label>Username</label>
  <div class="input">
    <input type="text" placeholder="Enter your email" />
  </div>
  <p class="help">This field is required</p>
</div>
<div class="field is-required is-disabled">
  <label>Username</label>
  <div class="input">
    <input type="text" placeholder="Enter your email" />
  </div>
  <p class="help">This field is disabled</p>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-field($colors: ());
```

**Example:**

```scss
@include termeh.use-field(("primary", "secondary"));
```

:::

::: termeh

Field module uses the following Termeh global `var()`

| Component       | Type     | Usage                               | Fallback |
| --------------- | -------- | ----------------------------------- | -------- |
| `gap` → `micro` | _Number_ | Vertical spacing between elements   | `8px`    |
| `gap` → `macro` | _Number_ | Bottom margin for the field wrapper | `1.6rem` |

Field module uses the following Termeh registered `color()` and `variant()`

| Palette                | Usage                          | Fallback |
| ---------------------- | ------------------------------ | -------- |
| `shade` → `readable`   | Help text color                | _error_  |
| `error` → `readable`   | Error message color            | _error_  |
| `primary` → `readable` | Required field indicator color | _error_  |

:::

## Available Classes

### Structural Elements

- `.help` → small helper text
- `.error` → error message, shown on validation failure

### Modifiers

- `.is-required` → appends a `*` to labels for required fields
- `.is-disabled` → disabled state
- `.is-failed` / `:invalid` → displays error message

### Color Modifiers

- `.is-<color>` → applies a registered Termeh color variant to selection and required indicator
