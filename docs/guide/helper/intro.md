---
aside: false
---

# Introduction to the Helper Module

The **Helper** module provides a collection of utility classes that simplify common UI patterns. It includes helpers for controlling visibility, fine-tuning typography, managing attachments, and applying general-purpose styles to interface elements. By using these helpers, you can keep your styles consistent and reduce repetitive CSS.

::: definition

**Signature:**

```scss
@include termeh.use-layout-helper();
@include termeh.use-text-helper();
@include termeh.use-text-colors($colors: ());
@include termeh.use-text-sizes($sizes: ());
@include termeh.use-text-weights($weights: ());
@include termeh.use-text-aligns($aligns: ());
@include termeh.use-visibility-helper();
@include termeh.use-attachment-helper();
```

**Example:**

```scss
@include termeh.use-layout-helpers();
@include termeh.use-visibilities();
```

:::
