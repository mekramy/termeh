# Select Module

The **Select** module provides styled dropdown inputs with configurable colors, border, background, placeholder styling, focus/disabled/error states, and optional shake animation. It also supports custom icons and checked option styling.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
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

::: termeh

Select module uses the following Termeh global `var()`:

| Component                  | Type     | Usage                        | Fallback                   |
| -------------------------- | -------- | ---------------------------- | -------------------------- |
| `radius` → `normal`        | _Number_ | Border radius for the select | `null`                     |
| `gap` → `micro`            | _Number_ | Gap between option elements  | `8px`                      |
| `input` → `height`         | _Number_ | Select height                | `1.8rem`                   |
| `input` → `border`         | _Color_  | Border color                 | `var("base", "separator")` |
| `input` → `background`     | _Color_  | Background color             | `white`                    |
| `input` → `placeholder`    | _Color_  | Placeholder color            | `color("shade")`           |
| `input` → `disabled-color` | _Color_  | Disabled option color        | `null`                     |

Select module uses the following Termeh registered `color()` and `variant()`:

| Palette   | Usage                | Fallback |
| --------- | -------------------- | -------- |
| `error`   | Error border color   | _error_  |
| `primary` | Focused border color | _error_  |

:::

## Available Classes

### Modifiers

- `.is-focused` / `:focus` → focused border and icon color
- `.is-invalid` → error state with shake animation
- `.is-disabled` → disabled state

### Color Modifiers

- `.is-<color>` → applies color variants for border, background, and option selection state
