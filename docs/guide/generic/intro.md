---
aside: false
---

# Introduction to the Generic Module

The **Generic** module provides foundational styles for building consistent and visually coherent web applications. It includes a reset to normalize browser styles, base styles for all elements according to the `termeh` theme, and default heading styles for `h1` through `h6`.

Additionally, it offers standardized templates for images and tables, ensuring proper alignment, spacing, and visual consistency. Tables include clear borders, alternating row colors, and hover effects, making data easy to read and visually integrated with the rest of the theme.

By using the **Generic** module, developers can focus on content and functionality while relying on a polished, theme-consistent foundation.

::: definition

**Signature:**

```scss
@mixin use-generic($image-sizes: LIST = null, $table-colors: LIST = null);
```

**Example:**

```scss
@include termeh.use-generic();
@include termeh.use-generic(("small" "large"), ("primary"));
```

:::

::: info

The generic module can also be used independently, as explained in the following sections.

:::
