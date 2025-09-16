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

| Component                | Type     | Usage                                                      | Default  |
| ------------------------ | -------- | ---------------------------------------------------------- | -------- |
| `base` → `color`         | _Color_  | Document background color                                  | `white`  |
| `base` → `foreground`    | _Color_  | Default text color                                         | `black`  |
| `base` → `section`       | _Color_  | Background color for `<blockquote>`, `<code>`, and `<pre>` | `null`   |
| `base` → `separator`     | _Color_  | Color for `<hr>` and list decorators                       | `null`   |
| `font` → `family`        | _List_   | Default font family                                        | `null`   |
| `font` → `size`          | _Number_ | Default font size                                          | `12px`   |
| `font` → `weight`        | _String_ | Default font weight                                        | `normal` |
| `mono` → `family`        | _List_   | `<code>` and `<pre>` font family                           | `null`   |
| `mono` → `size`          | _Number_ | `<code>` and `<pre>` font size                             | `null`   |
| `mono` → `weight`        | _String_ | `<code>` and `<pre>` font weight                           | `null`   |
| `strong` → `foreground`  | _Color_  | `<strong>` and `<th>` text color                           | `null`   |
| `strong` → `weight`      | _String_ | `<strong>` and `<th>` font weight                          | `bold`   |
| `gap` → `micro`          | _Number_ | Spacing between list items                                 | `8px`    |
| `gap` → `macro`          | _Number_ | Spacing between blocks                                     | `1.6em`  |
| `base` → `direction`     | _String_ | Document text direction                                    | `ltr`    |
| `base` → `min-width`     | _Number_ | Document minimum width                                     | `300px`  |
| `line-height` → `normal` | _Number_ | Default line height                                        | `1.6em`  |
| `radius` → `normal`      | _Number_ | `<blockquote>` border radius                               | `null`   |

---

Base module uses the following Termeh `color()` and `variant()`:

| Color / Variant          | Usage                                                   | Default |
| ------------------------ | ------------------------------------------------------- | ------- |
| `primary`                | Selection background, scrollbar, and input accent color | _error_ |
| `primary` → `readable`   | Link color                                              | `null`  |
| `primary` → `foreground` | Selection text color                                    | `null`  |

---

Base module uses the following Termeh `size()`:

| Size    | Usage               | Default |
| ------- | ------------------- | ------- |
| `small` | `<small>` font size | _error_ |

:::
