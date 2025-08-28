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

:::

::: dependencies

Radio module uses the following Termeh global `var()`:

| Component                       | Type     | Usage                           | Default    |
| ------------------------------- | -------- | ------------------------------- | ---------- |
| `base` → `separator`            | _Color_  | _Fallback_ border color         | `null`     |
| `radius` → `normal`             | _Number_ | Default input border radius     | `null`     |
| `gap` → `micro`                 | _Number_ | Spacing between input and label | `8px`      |
| `input` → `height`              | _Number_ | Input height                    | `2.8em`    |
| `input` → `checkbox`            | _Number_ | Radio item height               | `1.2em`    |
| `input` → `border`              | _Color_  | Default input border color      | _FALLBACK_ |
| `input` → `disabled-foreground` | _Color_  | Disabled input accent color     | `null`     |
| `input` → `disabled-border`     | _Color_  | Disabled input border color     | `null`     |

---

Radio module uses the following Termeh `color()`:

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

- `input[type="radio"]` → the radio input element
