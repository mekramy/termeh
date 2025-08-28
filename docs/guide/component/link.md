# Link Module

The **Link** module provides a styled link-like element with underline animation, configurable sizes and colors, and proper disabled state. It extends the base _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="gaper is-auto">
      <a class="link">Default Link</a>
      <a class="link is-primary">Primary Link</a>
      <a class="link is-green">Green Link</a>
      <a class="link is-maroon is-loading">Cherry</a>
      <a class="link is-disabled">Disabled Link</a>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<a class="link">Default Link</a>
<a class="link is-primary">Primary Link</a>
<a class="link is-green">Green Link</a>
<a class="link is-maroon is-loading">Cherry</a>
<a class="link is-disabled">Disabled Link</a>
```

:::

::: definition

**Signature:**

```scss
@mixin use-link($colors: (), $sizes: ());
```

**Example:**

```scss
@include termeh.use-link(("primary", "danger"), ("small", "large"));
```

:::

::: dependencies

Link module uses the following Termeh global `var()`:

| Component             | Type     | Usage                     | Default |
| --------------------- | -------- | ------------------------- | ------- |
| `base` → `foreground` | _Color_  | Default link color        | `black` |
| `control` → `height`  | _Number_ | Link height               | `2.2em` |
| `decorator` → `size`  | _Color_  | Loading spinner thickness | `null`  |

:::

## Modifiers

- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as font size
- `.is-<color>` → applies a registered color as accent color
