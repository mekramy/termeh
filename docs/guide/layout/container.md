# Container Module

The **Container** module provides a flexible wrapper with configurable maximum widths and padding. It supports responsive breakpoints (`desktop`, `widescreen`, `fullhd`) and allows custom paddings via registered gap names.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="4rem">
  <div class="demo">
    <div class="container is-highlighted">
      <div class="placeholder">Container content</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="container">Container content</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-container($paddings: ());
```

**Example:**

```scss
@include termeh.use-container(("small", "medium", "large"));
```

:::

::: dependencies

Container module uses the following Termeh global `var()`:

| Component                  | Type     | Usage                                       | Default  |
| -------------------------- | -------- | ------------------------------------------- | -------- |
| `gap` → `macro`            | _Number_ | Default container padding and bottom margin | `1.6em`  |
| `container` → `desktop`    | _Number_ | Max-width for desktop and smaller screens   | `960px`  |
| `container` → `widescreen` | _Number_ | Max-width for widescreen devices            | `1200px` |
| `container` → `fullhd`     | _Number_ | Max-width for full-HD and larger screens    | `1500px` |

:::

## Modifiers

- `.is-fullwidth` → makes the container span 100% width
- `.is-<gap>-padded` → applies a registered gap as spacing
