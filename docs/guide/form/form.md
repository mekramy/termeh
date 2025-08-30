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

::: dependencies

Form module uses the following Termeh global `var()`:

| Component                 | Type     | Usage                                                | Default    |
| ------------------------- | -------- | ---------------------------------------------------- | ---------- |
| `base` → `color`          | _Color_  | _Fallback_ form background                           | `white`    |
| `base` → `foreground`     | _Color_  | _Fallback_ form foreground                           | `black`    |
| `box` → `background`      | _Color_  | form background and overlay background _fallback_    | _FALLBACK_ |
| `box` → `foreground`      | _Color_  | form foreground and overlay spinner color _fallback_ | _FALLBACK_ |
| `gap` → `macro`           | _Number_ | Bottom margin                                        | `1.6em`    |
| `decorator` → `size`      | _Number_ | Loading spinner thickness                            | `2px`      |
| `decorator` → `spinner`   | _Number_ | Loading spinner size                                 | `2em`      |
| `overlay` → `background`  | _Color_  | Overlay background color                             | _FALLBACK_ |
| `overlay` → `foureground` | _Color_  | Overlay foreground                                   | _FALLBACK_ |
| `overlay` → `opacity`     | _Number_ | Overlay background opacity                           | `0.85`     |
| `overlay` → `filter`      | _String_ | Overlay backdrop filter                              | `null`     |

:::

## Modifiers

- `.is-loading` → marks the component as loading and disables interactions
