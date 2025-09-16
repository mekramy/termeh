# Fieldset Module

The **Fieldset** module provides consistent styling for `<fieldset>` and `<legend>` elements, including padding, border, radius, and legend font weight.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="6rem">
  <div class="demo">
    <fieldset>
      <legend>Example Fieldset</legend>
      <div class="field is-required">
        <label>Username</label>
        <div class="input">
          <input type="text" placeholder="Enter your name" />
        </div>
      </div>
    </fieldset>
    <fieldset class="is-disabled">
      <legend>Disabled Fieldset</legend>
      <div class="field is-required">
        <label>Username</label>
        <div class="input">
          <input type="text" placeholder="Enter your name" />
        </div>
      </div>
    </fieldset>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<fieldset>
  <legend>Example Fieldset</legend>
  <div class="field is-required">
    <label>Username</label>
    <div class="input">
      <input type="text" placeholder="Enter your name" />
    </div>
  </div>
</fieldset>
<fieldset class="is-disabled">
  <legend>Disabled Fieldset</legend>
  <div class="field is-required">
    <label>Username</label>
    <div class="input">
      <input type="text" placeholder="Enter your name" />
    </div>
  </div>
</fieldset>
```

:::

::: definition

**Signature:**

```scss
@mixin use-fieldset();
```

**Example:**

```scss
@include termeh.use-fieldset();
```

**Module:**

This module is registered as `form-fieldset` in the _presented modules_.

:::

::: dependencies

Fieldset module uses the following Termeh global `var()`:

| Component            | Type     | Usage                                                | Default    |
| -------------------- | -------- | ---------------------------------------------------- | ---------- |
| `base` → `separator` | _Color_  | _Fallback_ border color                              | `null`     |
| `radius` → `normal`  | _Number_ | Default fieldset border radius                       | `null`     |
| `gap` → `macro`      | _Number_ | Default inner padding and bottom margin for fieldset | `1.6em`    |
| `input` → `legend`   | _String_ | Legend element font weight                           | `normal`   |
| `input` → `border`   | _Color_  | Fieldset border color                                | _FALLBACK_ |

:::

## Modifiers

- `.is-disabled` / `:disabled` → disables all controls within the fieldset
