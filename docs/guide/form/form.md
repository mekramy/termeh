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

**Module:**

This module is registered as `form` in the _presented modules_.

:::

::: dependencies

Form module uses the following Termeh global `var()`:

| Component     | Variable        | Type     | Usage                            | Default    |
|---------------|-----------------|----------|----------------------------------|------------|
| **base**      | **background**  | _Color_  | Fallback form/overlay background | `white`    |
| **base**      | **foreground**  | _Color_  | Fallback text/spinner color      | `black`    |
| **box**       | **background**  | _Color_  | Form background                  | _FALLBACK_ |
| **box**       | **foreground**  | _Color_  | Form text/spinner color          | _FALLBACK_ |
| **gap**       | **macro**       | _Number_ | Form bottom margin               | `1.6em`    |
| **decorator** | **size**        | _Number_ | Spinner stroke width             | `2px`      |
| **decorator** | **spinner**     | _Number_ | Spinner diameter                 | `2em`      |
| **overlay**   | **background**  | _Color_  | Overlay background               | _FALLBACK_ |
| **overlay**   | **foureground** | _Color_  | Spinner color                    | _FALLBACK_ |
| **overlay**   | **opacity**     | _Number_ | Overlay opacity                  | `0.85`     |
| **overlay**   | **filter**      | _String_ | Backdrop-filter value            | `null`     |

:::

## Modifiers

- `.is-loading` → marks the component as loading and disables interactions
