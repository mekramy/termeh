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
@include termeh.use-field(("primary", "green"));
```

:::

::: dependencies

Field module uses the following Termeh global `var()`:

| Component       | Type     | Usage                          | Default |
| --------------- | -------- | ------------------------------ | ------- |
| `gap` → `micro` | _Number_ | Spacing between blocks         | `8px`   |
| `gap` → `macro` | _Number_ | Bottom margin for input blocks | `1.6em` |

---

Field module uses the following Termeh `color()` and `variant()`:

| Color / Variant        | Usage                            | Default |
| ---------------------- | -------------------------------- | ------- |
| `shade` → `readable`   | Help block text color            | `null`  |
| `primary` → `readable` | Default required indicator color | `null`  |
| `error` → `readable`   | Error block text color           | `null`  |

:::

## Modifiers

- `.is-required` → adds a `*` to labels for required fields
- `.is-disabled` / `:disabled` → applies disabled state to the input
- `.is-failed` / `:invalid` → shows error message and applies error styling to children
- `.is-<color>` → applies a registered color as accent color

## Child Elements

- `.help` → helper text for guidance
- `.error` → error message displayed on validation failure
