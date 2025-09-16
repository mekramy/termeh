# Attachment Helper Module

The **Attachment Helper** module provides utility classes to remove specific border radius, allowing elements to visually attach and connect seamlessly. These helpers are especially useful when composing grouped controls, buttons, or form elements where adjacent edges should merge smoothly.

::: definition

**Signature:**

```scss
@mixin use-attachment-helper();
```

**Example:**

```scss
@include termeh.use-attachment-helper();
```

**Module:**

This module is registered as `attachment-helper` in the _presented modules_.

:::

## Available Classes

- `.is-attached` → removes all border radius.
- `.is-left-attached` → removes right-side radii, stretches vertically.
- `.is-left-top-attached` → removes top-right, bottom-right, and bottom-left radii.
- `.is-left-bottom-attached` → removes top-right, bottom-right, and top-left radii.
- `.is-right-attached` → removes left-side radii, stretches vertically.
- `.is-right-top-attached` → removes top-left, bottom-left, and bottom-right radii.
- `.is-right-bottom-attached` → removes top-left, bottom-left, and top-right radii.
- `.is-top-attached` → removes bottom radii, stretches horizontally.
- `.is-top-left-attached` → removes bottom radii + top-right.
- `.is-top-right-attached` → removes bottom radii + top-left.
- `.is-bottom-attached` → removes top radii, stretches horizontally.
- `.is-bottom-left-attached` → removes top radii + bottom-right.
- `.is-bottom-right-attached` → removes top radii + bottom-left.
