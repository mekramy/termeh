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

| Component  | Variable          | Type          | Usage                                      | Default    |
|------------|-------------------|---------------|--------------------------------------------|------------|
| **base**   | **separator**     | _Color_       | Fallback fieldset border color             | `null`     |
| **radius** | **normal**        | _Number_      | Fieldset border radius                     | `null`     |
| **gap**    | **macro**         | _Number_      | Fieldset padding and bottom margin         | `1.6em`    |
| **input**  | **border**        | _Color_       | Border color; falls back to base separator | _FALLBACK_ |
| **input**  | **legend-size**   | _Number_      | Legend font size                           | `null`     |
| **input**  | **legend-weight** | _Font Weight_ | Legend font weight                         | `normal`   |

:::

## Modifiers

- `.is-disabled` / `:disabled` → disables all controls within the fieldset
