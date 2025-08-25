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

::: termeh

Textarea module uses the following Termeh global `var()`:

| Component                | Type     | Usage                           | Fallback                   |
| ------------------------ | -------- | ------------------------------- | -------------------------- |
| `radius` → `normal`      | _Number_ | Border radius for the textarea  | `null`                     |
| `gap` → `micro`          | _Number_ | Padding inside the textarea     | `8px`                      |
| `line-height` → `normal` | _Number_ | Line height of textarea content | `1.6rem`                   |
| `input` → `border`       | _Color_  | Border color                    | `var("base", "separator")` |
| `input` → `background`   | _Color_  | Background color                | `white`                    |
| `input` → `placeholder`  | _Color_  | Placeholder text color          | `color("shade")`           |

Textarea module uses the following Termeh registered `color()`:

| Palette   | Usage                | Fallback |
| --------- | -------------------- | -------- |
| `error`   | Error border color   | _error_  |
| `primary` | Focused border color | _error_  |

:::

## Available Classes

### Modifiers

- `.is-focused` / `:focus` → focused border state
- `.is-invalid` → error state with shake animation
- `.is-disabled` → disabled state

### Color Modifiers

- `.is-<color>` → applies border color and selection styles for focus state
