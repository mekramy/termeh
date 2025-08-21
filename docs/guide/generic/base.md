# Base Styles

Applies common base styles for HTML elements. This includes root font settings, colors, line heights, spacing, default display rules for semantic elements, form input styles, code blocks, tables, lists, and interactive elements like links. It ensures a consistent foundation across your UI.

::: code-group

```scss [usage.scss]
@mixin use-base();
```

```scss [example.scss]
@include use-base();
```

:::

::: extra Termeh Variables

This mixin uses many Termeh variables to define colors, typography, spacing, and other base styles:

```scss
$base-color: termeh.var("base", "color", white);
$base-foreground: termeh.var("base", "foreground", black);
$base-section: termeh.var("base", "section");
$base-separator: termeh.var("base", "separator");

$primary-color: termeh.color("primary");
$primary-readable: termeh.variant("primary", "readable");
$primary-background: termeh.variant("primary", "active");
$primary-foreground: termeh.variant("primary", "foreground");

$size-small: termeh.size("small");
$font-family: termeh.var("font", "family");
$font-size: termeh.var("font", "size", 12px);
$font-weight: termeh.var("font", "weight", normal);
$code-family: termeh.var("font", "code-family");
$code-size: termeh.var("font", "code-size");

$strong-color: termeh.var("strong", "color");
$strong-weight: termeh.var("strong", "weight", bold);

$gap-micro: termeh.var("gap", "micro", 8px);
$gap-macro: termeh.var("gap", "macro", 1.6rem);
$direction: termeh.var("base", "direction", ltr);
$min-width: termeh.var("base", "min-width", 300px);
$line-normal: termeh.var("line-height", "normal", 1.6em);
$radius-normal: termeh.var("radius", "normal");
```

Each variable ensures consistent styling across all base elements:

- _`$base-color`_ → background color for root `<html>` element
- _`$base-foreground`_ → default text color for `<body>` and common elements
- _`$base-section`_ → background color for sections, `blockquote`, `code`, etc.
- _`$base-separator`_ → color for separators like `<hr>` and list markers
- _`$primary-color`_ → main interactive color (used for focus, accent, and scrollbars)
- _`$primary-readable`_ → readable color for links and interactive text
- _`$primary-background`_ → background for selected text (`::selection`)
- _`$primary-foreground`_ → foreground for selected text (`::selection`)
- _`$size-small`_ → font size for `<small>` elements
- _`$font-family`_ → base font-family for text elements
- _`$font-size`_ → base font-size for `<html>` and `<body>`
- _`$font-weight`_ → base font-weight for text
- _`$code-family`_ → font-family for `<code>` and `<pre>`
- _`$code-size`_ → font-size for `<code>` and `<pre>`
- _`$strong-color`_ → color for `<strong>` elements
- _`$strong-weight`_ → font-weight for `<strong>` elements
- _`$gap-micro`_ → small spacing for margins and list items
- _`$gap-macro`_ → larger spacing for section separation, paragraphs, and blocks
- _`$direction`_ → text direction (`ltr`/`rtl`)
- _`$min-width`_ → minimum width of the layout (`<html>`)
- _`$line-normal`_ → line-height for body text
- _`$radius-normal`_ → border-radius for blocks like `<blockquote>`

:::
