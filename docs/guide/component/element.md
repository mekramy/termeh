# Element Module

The **Element** module provides a flexible base wrapper for inline elements with configurable font size, gaps, height, weight, and strong emphasis handling.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="element">
      <div class="icon is-shade">
        <!--@include: ../icon.svg-->
      </div>
      <span>Normal</span><b>Bold</b><i>Italic</i><u>Underline</u><s>Strike</s
      ><sup>Sup</sup><sub>Sub</sub><small>Small</small>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="element">
  <div class="icon is-shade">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
  </div>
  <span>Normal</span><b>Bold</b><i>Italic</i><u>Underline</u><s>Strike</s
  ><sup>Sup</sup><sub>Sub</sub><small>Small</small>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-element();
```

**Example:**

```scss
@include termeh.use-element();
```

**Module:**

This module is registered as `element` in the _presented modules_.

:::

## Child Elements

- `b`, `strong` → applies strong inline style
- `i`, `em` → applies italic inline style
- `u`, `ins` → applies underline style
- `s`, `del` → applies strikethrough style with smaller font
- `sup` → applies superscript style with smaller top-aligned text
- `sub` → applies subscript style with smaller bottom-aligned text
- `small` → applies smaller text style
- `.icon` → applies inline icon style, inherits text color

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Element module uses the following Termeh global _var_:

| Component   | Variable   | Type          | Usage                                            |
|-------------|------------|---------------|--------------------------------------------------|
| **gap**     | **micro**  | _Number_      | Spacing between items and after non-final icons  |
| **small**   | **size**   | _Number_      | Text size for s, del, sub, sup, and small        |
| **small**   | **weight** | _Font Weight_ | Text weight for s, del, sub, sup, and small      |
| **strong**  | **weight** | _Font Weight_ | Text weight for b and strong                     |
| **control** | **weight** | _Font Weight_ | Base text weight; small and strong use their own |
| **control** | **height** | _Number_      | Line height for the element and its text         |

---

:::
