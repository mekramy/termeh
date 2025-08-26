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

:::

::: termeh

Base module uses the following Termeh global `var()`

| Component                | Type     | Usage                                                        |
| ------------------------ | -------- | ------------------------------------------------------------ |
| `font` → `family`        | _String_ | Base font-family for text elements (`html`, `body`)          |
| `font` → `size`          | _Number_ | Base font-size for `html`, default 12px                      |
| `font` → `weight`        | _String_ | Base font-weight for text, default `normal`                  |
| `mono` → `family`        | _String_ | Font-family for `<code>` and `<pre>`                         |
| `mono` → `size`          | _Number_ | Font-size for `<code>` and `<pre>`                           |
| `mono` → `weight`        | _String_ | Font-weight for `<code>` and `<pre>`                         |
| `base` → `color`         | _Color_  | Background color for root `<html>` element                   |
| `base` → `foreground`    | _Color_  | Default text color for `<body>` and common elements          |
| `base` → `section`       | _Color_  | Background for sections, `blockquote`, `code`, etc.          |
| `base` → `separator`     | _Color_  | Color for separators like `<hr>` and list markers            |
| `base` → `direction`     | _String_ | Text direction (`ltr` / `rtl`)                               |
| `base` → `min-width`     | _Number_ | Minimum width of the layout (`<html>`)                       |
| `line-height` → `normal` | _Number_ | Line-height for body text                                    |
| `radius` → `normal`      | _Number_ | Border-radius for blocks like `<blockquote>`                 |
| `strong` → `forground`   | _Color_  | Foreground for `<strong>`                                    |
| `strong` → `weight`      | _String_ | Font-weight for `<strong>`                                   |
| `gap` → `micro`          | _Number_ | Small spacing for margins and list items                     |
| `gap` → `macro`          | _Number_ | Large spacing for section separation, paragraphs, and blocks |

Base module uses the following Termeh registered `color()` and `variant()`

| Palette                  | Usage                                                           |
| ------------------------ | --------------------------------------------------------------- |
| `primary` → `color`      | Main interactive color (used for focus, accent, and scrollbars) |
| `primary` → `readable`   | Readable color for links and interactive text                   |
| `primary` → `active`     | Background for selected text (`::selection`)                    |
| `primary` → `foreground` | Foreground for selected text (`::selection`)                    |

Base module uses the following Termeh registered `size()`

| size  | Usage                            |
| ----- | -------------------------------- |
| small | Font-size for `<small>` elements |

:::
