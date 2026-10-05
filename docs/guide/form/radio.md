# Radio Module

The **Radio** module provides customizable radio button inputs with configurable colors, border, radius, checked state, focus state, disabled state, and RTL/LTR support.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="2.5rem">
  <div class="demo">
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
  </div>
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

**Module:**

This module is registered as `form-radio` in the _presented modules_.

:::

::: dependencies

Radio module uses the following Termeh global `var()`:

| Component  | Variable                | Type     | Usage                                              | Default    |
|------------|-------------------------|----------|----------------------------------------------------|------------|
| **base**   | **separator**           | _Color_  | Fallback radio border color                        | `null`     |
| **radius** | **circle**              | _Number_ | Radio control and selected dot border radius       | `50%`      |
| **gap**    | **micro**               | _Number_ | Space between radio control and label              | `8px`      |
| **input**  | **height**              | _Number_ | Radio label row height                             | `2.8em`    |
| **input**  | **checkbox**            | _Number_ | Radio control width and height                     | `1.2em`    |
| **input**  | **border**              | _Color_  | Radio border color; falls back to `base.separator` | _FALLBACK_ |
| **input**  | **disabled-foreground** | _Color_  | Label and selected dot color when disabled         | `null`     |
| **input**  | **disabled-border**     | _Color_  | Radio border color when disabled                   | `null`     |

---

Radio module uses the following Termeh `color()`:

| Color       | Usage                               | Default |
|-------------|-------------------------------------|---------|
| **error**   | Invalid border/selected-dot color   | _error_ |
| **primary** | Focus border and selected-dot color | _error_ |

:::

## Modifiers

- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color

## Child Elements

- `input[type="radio"]` → the radio input element
