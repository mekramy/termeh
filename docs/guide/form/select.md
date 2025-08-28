# Select Module

The **Select** module provides styled dropdown inputs with configurable colors, border, background, placeholder styling, focus/disabled/error states, and optional shake animation. It also supports custom icons and checked option styling.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <fieldset>
      <div class="field is-required">
        <label for="some">Primary Select:</label>
        <select>
          <option value="a">option a</option>
          <option value="b" disabled>option b</option>
          <option value="c">option c</option>
        </select>
        <div class="help">This is a help block</div>
      </div>
      <div class="field is-required">
        <label for="some">Shade Select:</label>
        <select class="is-shade">
          <option value="a">option a</option>
          <option value="b">option b</option>
          <option value="c">option c</option>
        </select>
        <div class="help">This is a help block</div>
      </div>
      <div class="field is-required is-failed">
        <label for="some">Invalid Select:</label>
        <select>
          <option value="a">option a</option>
          <option value="b">option b</option>
          <option value="c">option c</option>
        </select>
        <div class="error">This is a error block</div>
      </div>
      <div class="field is-required is-disabled">
        <label for="some">Disabled Select:</label>
        <select>
          <option value="a">option a</option>
          <option value="b">option b</option>
          <option value="c">option c</option>
        </select>
      </div>
    </fieldset>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<fieldset>
  <div class="field is-required">
    <label for="some">Primary Select:</label>
    <select>
      <option value="a">option a</option>
      <option value="b" disabled>option b</option>
      <option value="c">option c</option>
    </select>
    <div class="help">This is a help block</div>
  </div>
  <div class="field is-required">
    <label for="some">Shade Select:</label>
    <select class="is-shade">
      <option value="a">option a</option>
      <option value="b">option b</option>
      <option value="c">option c</option>
    </select>
    <div class="help">This is a help block</div>
  </div>
  <div class="field is-required is-failed">
    <label for="some">Invalid Select:</label>
    <select>
      <option value="a">option a</option>
      <option value="b">option b</option>
      <option value="c">option c</option>
    </select>
    <div class="error">This is a error block</div>
  </div>
  <div class="field is-required is-disabled">
    <label for="some">Disabled Select:</label>
    <select>
      <option value="a">option a</option>
      <option value="b">option b</option>
      <option value="c">option c</option>
    </select>
  </div>
</fieldset>
```

:::

::: definition

**Signature:**

```scss
@mixin use-select($colors: ());
```

**Example:**

```scss
@include termeh.use-select(("primary", "error"));
```

:::

::: dependencies

Select module uses the following Termeh global `var()`:

| Component                       | Type     | Usage                           | Default    |
| ------------------------------- | -------- | ------------------------------- | ---------- |
| `base` → `separator`            | _Color_  | _Fallback_ border color         | `null`     |
| `radius` → `normal`             | _Number_ | Default input border radius     | `null`     |
| `gap` → `micro`                 | _Number_ | Spacing between select items    | `8px`      |
| `input` → `height`              | _Number_ | Input height                    | `2.8em`    |
| `input` → `border`              | _Color_  | Default input border color      | _FALLBACK_ |
| `input` → `placeholder`         | _Color_  | Default input placeholder color | _FALLBACK_ |
| `input` → `background`          | _Color_  | Default input background color  | `white`    |
| `input` → `disabled-foreground` | _Color_  | Disabled option text color      | `null`     |

---

Select module uses the following Termeh `color()` and `variant()`:

| Color / Variant          | Usage                          | Default |
| ------------------------ | ------------------------------ | ------- |
| `error`                  | Accent color for invalid state | _error_ |
| `primary`                | Default accent color           | _error_ |
| `primary` → `foreground` | Default accent color           | `null`  |
| `primary` → `readable`   | Default accent color           | `null`  |
| `shade` → `mute`         | _Fallback_ placeholder color   | `null`  |
| `base` → `section`       | Item hover background color    | `null`  |

:::

## Modifiers

- `.is-focused` / `:focus` → applies focus styling
- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color
