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

:::

::: termeh

Fieldset module uses the following Termeh global `var()`:

| Component           | Type     | Usage                         | Fallback                   |
| ------------------- | -------- | ----------------------------- | -------------------------- |
| `gap` → `macro`     | _Number_ | Padding inside fieldset       | `1.6rem`                   |
| `radius` → `normal` | _Number_ | Border radius of the fieldset | `null`                     |
| `input` → `legend`  | _String_ | Font weight of legend         | `normal`                   |
| `input` → `border`  | _Color_  | Border color of fieldset      | `var("base", "separator")` |

:::

## Available Classes

- `.is-disabled` → disabled state
