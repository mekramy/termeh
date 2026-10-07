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

**Module:**

This module is registered as `form-textarea` in the _presented modules_.

:::

::: dependencies

Textarea module uses the following Termeh global `var()`:

| Component       | Variable               | Type     | Usage                                                 | Default    |
|-----------------|------------------------|----------|-------------------------------------------------------|------------|
| **base**        | **separator**          | _Color_  | Fallback textarea border color                        | `#eee`     |
| **radius**      | **normal**             | _Number_ | Textarea border radius                                | `null`     |
| **gap**         | **micro**              | _Number_ | Base padding unit; padding on each side is twice this | `8px`      |
| **line-height** | **normal**             | _Number_ | Text line height                                      | `1.6em`    |
| **input**       | **border**             | _Color_  | Textarea border; falls back to `base.separator`       | _FALLBACK_ |
| **input**       | **background**         | _Color_  | Textarea background                                   | `white`    |
| **input**       | **placeholder**        | _Color_  | Placeholder color; falls back to `shade.mute`         | _FALLBACK_ |
| **input**       | **placeholder-size**   | _Number_ | Placeholder font size                                 | `0.85em`   |
| **input**       | **placeholder-weight** | _Number_ | Placeholder font weight                               | `600`      |

---

Textarea module uses the following Termeh `color()` and `variant()`:

| Color       | Variant  | Usage                                   | Default   |
|-------------|----------|-----------------------------------------|-----------|
| **error**   |          | Border color in the invalid state       | _error_   |
| **primary** |          | Focus border and scrollbar accent color | _primary_ |
| **shade**   | **mute** | Fallback placeholder text color         | `null`    |

:::

## Modifiers

- `.is-focused` / `:focus` → applies focus styling
- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color
