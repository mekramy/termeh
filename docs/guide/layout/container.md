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

::: termeh

Container module uses the following Termeh global `var()`

| Component                  | Type     | Usage                                        | Fallback |
| -------------------------- | -------- | -------------------------------------------- | -------- |
| `gap` → `macro`            | _Number_ | Default bottom margin and container padding  | `1.6rem` |
| `container` → `desktop`    | _Number_ | Maximum width for `.container` on desktop    | `960px`  |
| `container` → `widescreen` | _Number_ | Maximum width for `.container` on widescreen | `1200px` |
| `container` → `fullhd`     | _Number_ | Maximum width for `.container` on fullhd     | `1500px` |

:::

## Available Classes

- `.is-fullwidth` → disables max-width constraints.
- `.is-<gap>-padded` → applies specific padding based on registered gap names.
