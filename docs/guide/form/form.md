# Form Module

The **Form** module provides consistent spacing, margin behavior, and a built-in **loading overlay** with spinner.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="8rem">
  <div class="demo">
    <form>
      <fieldset>
        <legend>Example Fieldset</legend>
        <div class="field is-required">
          <label>Username</label>
          <div class="input">
            <input type="text" placeholder="Enter your name" />
          </div>
        </div>
      </fieldset>
    </form>
    <form class="is-loading">
      <fieldset>
        <legend>Example Fieldset</legend>
        <div class="field is-required">
          <label>Username</label>
          <div class="input">
            <input type="text" placeholder="Enter your name" />
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<form>
  <fieldset>
    <legend>Example Fieldset</legend>
    <div class="field is-required">
      <label>Username</label>
      <div class="input">
        <input type="text" placeholder="Enter your name" />
      </div>
    </div>
  </fieldset>
</form>
<form class="is-loading">
  <fieldset>
    <legend>Example Fieldset</legend>
    <div class="field is-required">
      <label>Username</label>
      <div class="input">
        <input type="text" placeholder="Enter your name" />
      </div>
    </div>
  </fieldset>
</form>
```

:::

::: definition

**Signature:**

```scss
@mixin use-form();
```

**Example:**

```scss
@include termeh.use-form();
```

:::

::: termeh

Form module uses the following Termeh global `var()`:

| Component               | Type     | Usage                               | Fallback |
| ----------------------- | -------- | ----------------------------------- | -------- |
| `gap` → `macro`         | _Number_ | Form bottom margin                  | `1.6rem` |
| `base` → `background`   | _Color_  | Overlay background color            | `white`  |
| `base` → `foreground`   | _Color_  | Loader spinner color                | `black`  |
| `decorator` → `size`    | _Number_ | Border thickness / loader stroke    | `2px`    |
| `decorator` → `spinner` | _Number_ | Loader spinner size                 | `2rem`   |
| `overlay` → `opacity`   | _Number_ | Optional overlay background opacity | `0.85`   |
| `overlay` → `filter`    | _Color_  | Optional overlay filter             | `null`   |

:::

## Available Classes

- `.is-loading` → covers the form with an overlay and shows a centered spinner.
