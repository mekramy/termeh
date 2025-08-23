# Heading Styles

Applies consistent heading styles for `h1`–`h6` elements. This includes font sizes, line heights, bottom margins, and bold weight to create a clear typographic hierarchy for headings in your UI.

::: tabs

== Preview

<Preview>
  <h1>Heading 1 – Has Massive Size</h1>
  <h2>Heading 2 – Has Huge Size</h2>
  <h3>Heading 3 – Has Big Size</h3>
  <h4>Heading 4 – Has Large Size</h4>
  <h5>Heading 5 – Has Medium Size</h5>
  <h6>Heading 6 – Has Normal Size</h6>
</Preview>

== Source

```html
<h1>Heading 1 – Has Massive Size</h1>
<h2>Heading 2 – Has Huge Size</h2>
<h3>Heading 3 – Has Big Size</h3>
<h4>Heading 4 – Has Large Size</h4>
<h5>Heading 5 – Has Medium Size</h5>
<h6>Heading 6 – Has Normal Size</h6>
```

:::

## Usage

::: definition

**Signature:**

```scss
@mixin use-heading();
```

**Example:**

```scss
@include termeh.use-heading();
```

:::

::: termeh

Heading module uses the following Termeh registered `size()`

| Size      | Usage              |
| --------- | ------------------ |
| `normal`  | Font-size for `h6` |
| `medium`  | Font-size for `h5` |
| `large`   | Font-size for `h4` |
| `big`     | Font-size for `h3` |
| `huge`    | Font-size for `h2` |
| `massive` | Font-size for `h1` |

Heading module uses the following Termeh global `var()`

| Component                | Type     | Usage                          |
| ------------------------ | -------- | ------------------------------ |
| `gap` → `macro`          | _Number_ | Margin-bottom between headings |
| `line-height` → `normal` | _Number_ | Line-height for `h5`-`h6`      |
| `line-height` → `medium` | _Number_ | Line-height for `h3`-`h4`      |
| `line-height` → `large`  | _Number_ | Line-height for `h1`-`h2`      |

:::
