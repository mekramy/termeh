---
outline: 1
---

# Base Styles

Applies common base styles for HTML elements. This includes root font settings, colors, line heights, spacing, default display rules for semantic elements, form input styles, code blocks, tables, lists, and interactive elements like links. It ensures a consistent foundation across your UI.

::: definition

**Signature:**

```scss
@mixin use-base();
```

**Example:**

```scss
@include termeh.use-base();
```

**Module:**

This module is registered as `base` in the _presented modules_.

:::

::: dependencies

Base module uses the following Termeh global `var()`:

| Component       | Variable       | Type          | Usage                                                      | Default    |
|-----------------|----------------|---------------|------------------------------------------------------------|------------|
| **base**        | **direction**  | _Direction_   | Document text direction                                    | `ltr`      |
| **base**        | **min-width**  | _Number_      | Document minimum width                                     | `300px`    |
| **radius**      | **normal**     | _Number_      | `<blockquote>` border radius                               | `null`     |
| **line-height** | **normal**     | _Number_      | Default line height                                        | `1.6em`    |
| **gap**         | **micro**      | _Number_      | Spacing between list items                                 | `8px`      |
| **gap**         | **macro**      | _Number_      | Spacing between blocks                                     | `1.6em`    |
| **font**        | **family**     | _Font Family_ | Default font family                                        | `null`     |
| **font**        | **size**       | _Number_      | Default font size                                          | `12px`     |
| **font**        | **weight**     | _Font Weight_ | Default font weight                                        | `normal`   |
| **mono**        | **family**     | _Font Family_ | `<code>` and `<pre>` font family                           | `null`     |
| **mono**        | **size**       | _Number_      | `<code>` and `<pre>` font size                             | `null`     |
| **mono**        | **weight**     | _Font Weight_ | `<code>` and `<pre>` font weight                           | `null`     |
| **small**       | **size**       | _Number_      | `<small>`, `<sub>` and `<sup>` font size                   | `0.875rem` |
| **small**       | **weight**     | _Font Weight_ | `<small>`, `<sub>` and `<sup>` font weight                 | `normal`   |
| **small**       | **foreground** | _Color_       | `<small>`, `<sub>` and `<sup>` text color                  | `null`     |
| **strong**      | **foreground** | _Color_       | `<strong>`, `<b>` and `<th>` text color                    | `null`     |
| **strong**      | **weight**     | _Font Weight_ | `<strong>`, `<b>` and `<th>` font weight                   | `bold`     |
| **decorated**   | **foreground** | _Color_       | `<u>`, `<ins>`, `<s>` and `<del>` text color               | `null`     |
| **decorated**   | **weight**     | _Font Weight_ | `<u>`, `<ins>`, `<s>` and `<del>` font weight              | `normal`   |
| **base**        | **background** | _Color_       | Document background color                                  | `white`    |
| **base**        | **foreground** | _Color_       | Default text color                                         | `black`    |
| **base**        | **section**    | _Color_       | Background color for `<blockquote>`, `<code>`, and `<pre>` | `null`     |
| **base**        | **separator**  | _Color_       | Color for `<hr>` and list decorators                       | `null`     |

---

Base module uses the following Termeh `color()` and `variant()`:

| Color       | Variant        | Usage                                                   | Default |
|-------------|----------------|---------------------------------------------------------|---------|
| **primary** |                | Selection background, scrollbar, and input accent color | _error_ |
| **primary** | **readable**   | Link color                                              | `null`  |
| **primary** | **foreground** | Selection text color                                    | `null`  |

:::
