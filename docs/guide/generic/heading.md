# Heading Styles

Applies consistent heading styles for `h1`–`h6` elements. This includes font sizes, line heights, bottom margins, and bold weight to create a clear typographic hierarchy for headings in your UI.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview>
  <div class="demo">
    <h1>Heading 1 – Has Massive Size</h1>
    <h2>Heading 2 – Has Huge Size</h2>
    <h3>Heading 3 – Has Big Size</h3>
    <h4>Heading 4 – Has Large Size</h4>
    <h5>Heading 5 – Has Medium Size</h5>
    <h6>Heading 6 – Has Normal Size</h6>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

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

::: dependencies

Heading module uses the following Termeh global `var()`:

| Component                | Type     | Usage                             | Default |
| ------------------------ | -------- | --------------------------------- | ------- |
| `line-height` → `large`  | _Number_ | Line height for `<h1>` and `<h2>` | `1.2em` |
| `line-height` → `medium` | _Number_ | Line height for `<h3>` and `<h4>` | `1.4em` |
| `line-height` → `normal` | _Number_ | Line height for `<h5>` and `<h6>` | `1.6em` |
| `gap` → `macro`          | _Number_ | Bottom margin for headings        | `1.6em` |

---

Heading module uses the following Termeh `size()`:

| Size      | Usage                | Default |
| --------- | -------------------- | ------- |
| `massive` | Font size for `<h1>` | _error_ |
| `huge`    | Font size for `<h2>` | _error_ |
| `big`     | Font size for `<h3>` | _error_ |
| `large`   | Font size for `<h4>` | _error_ |
| `medium`  | Font size for `<h5>` | _error_ |
| `normal`  | Font size for `<h6>` | _error_ |

:::
