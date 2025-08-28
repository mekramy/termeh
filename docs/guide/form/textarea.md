# Textarea Module

The **Textarea** module provides styled multi-line text inputs with configurable colors, border, background, placeholder styling, focus/disabled/error states, and optional shake animation.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="6rem">
  <div class="demo">
    <fieldset>
      <div class="field is-required">
        <label for="some">Primary Textarea:</label>
        <textarea></textarea>
        <div class="help">This is a help block</div>
      </div>
      <div class="field is-required is-failed">
        <label for="some">Invalid Textarea:</label>
        <textarea></textarea>
        <div class="error">This is a error block</div>
      </div>
      <div class="field is-required is-disabled">
        <label for="some">Disabled Textarea:</label>
        <textarea></textarea>
      </div>
    </fieldset>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<fieldset>
  <div class="field is-required">
    <label for="some">Primary Textarea:</label>
    <textarea></textarea>
    <div class="help">This is a help block</div>
  </div>
  <div class="field is-required is-failed">
    <label for="some">Invalid Textarea:</label>
    <textarea></textarea>
    <div class="error">This is a error block</div>
  </div>
  <div class="field is-required is-disabled">
    <label for="some">Disabled Textarea:</label>
    <textarea></textarea>
  </div>
</fieldset>
```

:::

::: definition

**Signature:**

```scss
@mixin use-textarea($colors: ());
```

**Example:**

```scss
@include termeh.use-textarea(("primary", "error"));
```

:::

::: dependencies

Textarea module uses the following Termeh global `var()`:

| Component                | Type     | Usage                              | Default    |
| ------------------------ | -------- | ---------------------------------- | ---------- |
| `base` → `separator`     | _Color_  | _Fallback_ border color            | `null`     |
| `radius` → `normal`      | _Number_ | Default textarea border radius     | `null`     |
| `gap` → `micro`          | _Number_ | Default textarea padding           | `8px`      |
| `line-height` → `normal` | _Number_ | Textarea line height               | `1.6em`    |
| `input` → `border`       | _Color_  | Default textarea border color      | _FALLBACK_ |
| `input` → `placeholder`  | _Color_  | Default textarea placeholder color | _FALLBACK_ |
| `input` → `background`   | _Color_  | Default textarea background color  | `white`    |

---

Textarea module uses the following Termeh `color()` and `variant()`:

| Color / Variant  | Usage                          | Default |
| ---------------- | ------------------------------ | ------- |
| `error`          | Accent color for invalid state | _error_ |
| `primary`        | Default accent color           | _error_ |
| `shade` → `mute` | _Fallback_ placeholder color   | `null`  |

:::

## Modifiers

- `.is-focused` / `:focus` → applies focus styling
- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color
