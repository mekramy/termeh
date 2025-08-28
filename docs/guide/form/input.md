# Input Module

The **Input** module provides styled input wrappers with configurable gaps, colors, border, background, placeholder styling, focus/disabled/error states, and optional shake animation.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <fieldset>
      <div class="field is-required">
        <label for="some">Primary Input:</label>
        <div class="input">
          <span>A</span>
          <div class="gutter"></div>
          <input type="text" />
          <div class="divider"></div>
          <span>B</span>
        </div>
        <div class="help">This is a help block</div>
      </div>
      <div class="field is-required is-failed">
        <label for="some">Invalid Input:</label>
        <div class="input">
          <span>A</span>
          <div class="gutter"></div>
          <input type="text" />
          <div class="divider"></div>
          <span>B</span>
        </div>
        <div class="error">This is a error block</div>
      </div>
      <div class="field is-required is-disabled">
        <label for="some">Disabled Input:</label>
        <div class="input">
          <span>A</span>
          <div class="gutter"></div>
          <input type="text" />
          <div class="divider"></div>
          <span>B</span>
        </div>
      </div>
    </fieldset>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<fieldset>
  <div class="field is-required">
    <label for="some">Primary Input:</label>
    <div class="input">
      <span>A</span>
      <div class="gutter"></div>
      <input type="text" />
      <div class="divider"></div>
      <span>B</span>
    </div>
    <div class="help">This is a help block</div>
  </div>
  <div class="field is-required is-failed">
    <label for="some">Invalid Input:</label>
    <div class="input">
      <span>A</span>
      <div class="gutter"></div>
      <input type="text" />
      <div class="divider"></div>
      <span>B</span>
    </div>
    <div class="error">This is a error block</div>
  </div>
  <div class="field is-required is-disabled">
    <label for="some">Disabled Input:</label>
    <div class="input">
      <span>A</span>
      <div class="gutter"></div>
      <input type="text" />
      <div class="divider"></div>
      <span>B</span>
    </div>
  </div>
</fieldset>
```

:::

::: definition

**Signature:**

```scss
@mixin use-input($gaps: (), $colors: ());
```

**Example:**

```scss
@include termeh.use-input(("small", "medium"), ("primary", "green"));
```

:::

::: dependencies

Input module uses the following Termeh global `var()`:

| Component               | Type     | Usage                           | Default    |
| ----------------------- | -------- | ------------------------------- | ---------- |
| `base` → `separator`    | _Color_  | Fallback border color           | `null`     |
| `radius` → `normal`     | _Number_ | Default input border radius     | `null`     |
| `input` → `height`      | _Number_ | Input height                    | `2.8em`    |
| `input` → `border`      | _Color_  | Default input border color      | _FALLBACK_ |
| `input` → `placeholder` | _Color_  | Default input placeholder color | _FALLBACK_ |
| `input` → `background`  | _Color_  | Default input background color  | `white`    |

---

Input module uses the following Termeh `color()` and `variant()`:

| Color / Variant  | Usage                          | Default |
| ---------------- | ------------------------------ | ------- |
| `error`          | Accent color for invalid state | _error_ |
| `primary`        | Default accent color           | _error_ |
| `shade` → `mute` | Fallback placeholder color     | `null`  |

:::

## Modifiers

- `.is-focused` / `:focus-within` → applies focus styling
- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<gap>-gap` → applies a registered gap as spacing
- `.is-<color>` → applies a registered color as accent color

## Child Elements

- `<input>` → the main input field, fills available space by default
- `.divider` → vertical line separating input sections
- `.gutter` → spacing element inside the input container
