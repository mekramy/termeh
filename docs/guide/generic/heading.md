# Heading Styles

Applies consistent heading styles for `h1`–`h6` elements. This includes font sizes, line heights, bottom margins, and bold weight to create a clear typographic hierarchy for headings in your UI.

::: code-group

```scss [usage.scss]
@mixin use-heading();
```

```scss [example.scss]
@include use-heading();
```

:::

::: extra Termeh Variables

This mixin uses several Termeh variables to define sizes, line heights, and spacing for different heading levels:

```scss
$size-massive: termeh.size("massive");
$size-huge: termeh.size("huge");
$size-big: termeh.size("big");
$size-large: termeh.size("large");
$size-medium: termeh.size("medium");
$size-normal: termeh.size("normal");

$line-large: termeh.var("line-height", "large", 1.2em);
$line-medium: termeh.var("line-height", "medium", 1.4em);
$line-normal: termeh.var("line-height", "normal", 1.6em);

$gap-macro: termeh.var("gap", "macro", 1.6rem);
```

Each variable ensures consistent spacing and sizing for headings:

- _`$size-massive`_ → used for `h1` text size
- _`$size-huge`_ → used for `h2` text size
- _`$size-big`_ → used for `h3` text size
- _`$size-large`_ → used for `h4` text size
- _`$size-medium`_ → used for `h5` text size
- _`$size-normal`_ → used for `h6` text size
- _`line-large`_ → used for `h1` and `h2` line height
- _`line-medium`_ → used for `h3` and `h4` line height
- _`line-normal`_ → used for `h5` and `h6` line height
- _`$gap-macro`_ → adds consistent bottom margin for all heading levels for clear separation from following content.

:::

## Example

```html
<div class="heading-examples">
  <h1>Heading 1 – Has Massive Size</h1>
  <h2>Heading 2 – Has Huge Size</h2>
  <h3>Heading 3 – Has Big Size</h3>
  <h4>Heading 4 – Has Large Size</h4>
  <h5>Heading 5 – Has Medium Size</h5>
  <h6>Heading 6 – Has Normal Size</h6>
</div>
```
