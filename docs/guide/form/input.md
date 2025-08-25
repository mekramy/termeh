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
@include termeh.use-input(("small", "medium"), ("primary", "secondary"));
```

:::

::: termeh

Input module uses the following Termeh global `var()`:

| Component               | Type     | Usage                       | Fallback                   |
| ----------------------- | -------- | --------------------------- | -------------------------- |
| `radius` → `normal`     | _Number_ | Border radius for the input | `null`                     |
| `input` → `height`      | _Number_ | Height of input container   | `2.8rem`                   |
| `input` → `border`      | _Color_  | Border color                | `var("base", "separator")` |
| `input` → `background`  | _Color_  | Background color            | `white`                    |
| `input` → `placeholder` | _Color_  | Placeholder text color      | `variant("shade","mute")`  |

Input module uses the following Termeh registered `color()`:

| Palette   | Usage                | Fallback |
| --------- | -------------------- | -------- |
| `error`   | Error border color   | _error_  |
| `primary` | Focused border color | _error_  |

:::

## Available Classes

### Structural Elements

- `.divider` → vertical separator line inside input
- `.gutter` → spacing element inside input

### Modifiers

- `.is-focused` / `:focus-within` → focused border state
- `.is-invalid` → error state with shake animation
- `.is-disabled` → disabled state

### Gap Modifiers

- `.is-<gap>-gap` → adjusts divider margin and gutter width

### Color Modifiers

- `.is-<color>` → applies border color and selection styles for focus state
