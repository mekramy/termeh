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

**Module:**

This module is registered as `form-select` in the _presented modules_.

:::

::: dependencies

Select module uses the following Termeh global `var()`:

| Component  | Variable                | Type          | Usage                                                   | Default    |
|------------|-------------------------|---------------|---------------------------------------------------------|------------|
| **base**   | **separator**           | _Color_       | Fallback select border color                            | `#eee`     |
| **base**   | **section**             | _Color_       | Hover background for enabled options                    | `null`     |
| **radius** | **normal**              | _Number_      | Select border radius                                    | `null`     |
| **gap**    | **micro**               | _Number_      | Gap between contents in an option                       | `8px`      |
| **strong** | **weight**              | _Font Weight_ | Font weight of the selected option                      | `bold`     |
| **input**  | **height**              | _Number_      | Select control height                                   | `2.8em`    |
| **input**  | **border**              | _Color_       | Select border color; falls back to `base.separator`     | _FALLBACK_ |
| **input**  | **background**          | _Color_       | Select background                                       | `white`    |
| **input**  | **placeholder**         | _Color_       | Placeholder and picker icon; falls back to `shade.mute` | _FALLBACK_ |
| **input**  | **disabled-foreground** | _Color_       | Text color for disabled options                         | `null`     |

---

Select module uses the following Termeh `color()` and `variant()`:

| Color       | Variant        | Usage                                             | Default   |
|-------------|----------------|---------------------------------------------------|-----------|
| **error**   |                | Border color when invalid and not focused or open | _error_   |
| **primary** |                | Focus/open accent color                           | _primary_ |
| **primary** | **foreground** | Text and picker-icon color when focused or open   | `null`    |
| **primary** | **readable**   | Selected-option text and checkmark color          | `null`    |
| **shade**   | **mute**       | Fallback placeholder and picker-icon color        | `null`    |

:::

## Modifiers

- `.is-focused` / `:focus` → applies focus styling
- `.is-invalid` / `:invalid` → applies error styling with shake animation
- `.is-disabled` / `:disabled` → applies disabled styling
- `.is-<color>` → applies a registered color as accent color
