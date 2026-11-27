---
outline: deep
description: API reference for Termeh responsive styles, including screen breakpoints, device capabilities, user preferences, and printing.
---

# Responsive Design

> __Iteration__{data-type="iteration" title="This module provides iterator helper"}
> __Responsive__{data-type="media-query" title="This module provides Responsive utilities"}

Termeh provides a toolkit for *__responsive styling__*, covering __screen sizes__, __device capabilities__, __user preferences__, and __printing__. Every responsive mixin accepts a __content block__, so normal CSS can be written inside it and Termeh adds the appropriate __media query__.

```scss
.menu {
  @include termeh.mobile() {
    display: block;
  }

  @include termeh.tablet() {
    display: flex;
  }

  @include termeh.prefers-reduced-motion() {
    transition: none;
  }
}
```

## Screen Size Mixins

The screen size mixins make styles target __named breakpoints__ and the ranges around them.

### Mobile

Applies styles on __mobile__ screens.

```scss
@mixin mobile() {}
```

### Tablet

Applies styles on __tablet screens and wider__.

```scss
@mixin tablet() {}
```

### Tablet Only

Applies styles on __tablet screens only__.

```scss
@mixin tablet-only() {}
```

### Until Desktop

Applies styles on screens __narrower than desktop__.

```scss
@mixin until-desktop() {}
```

### Desktop

Applies styles on __desktop screens and wider__.

```scss
@mixin desktop() {}
```

### Desktop Only

Applies styles on __desktop screens only__.

```scss
@mixin desktop-only() {}
```

### Until Widescreen

Applies styles on screens __narrower than widescreen__.

```scss
@mixin until-widescreen() {}
```

### Widescreen

Applies styles on __widescreen screens and wider__.

```scss
@mixin widescreen() {}
```

### Widescreen Only

Applies styles on __widescreen screens only__.

```scss
@mixin widescreen-only() {}
```

### Until Ultrawide

Applies styles on screens __narrower than ultrawide__.

```scss
@mixin until-ultrawide() {}
```

### Ultrawide

Applies styles on __ultrawide screens and wider__.

```scss
@mixin ultrawide() {}
```

## Device Capability Mixins

Device capability mixins adapt styles to __hover support__, __pointer type__, __screen resolution__, and __orientation__.

### Touch

Applies styles on devices that __do not support hover__, such as *phones* and *tablets*.

```scss
@mixin touch() {}
```

### Non Touch

Applies styles on devices that __support hover__.

```scss
@mixin non-touch() {}
```

### Retina

Applies styles on __high-resolution__ screens with a resolution of at least `2dppx`.

```scss
@mixin retina() {}
```

### Portrait

Applies styles on screens in __portrait orientation__.

```scss
@mixin portrait() {}
```

### Landscape

Applies styles on screens in __landscape orientation__.

```scss
@mixin landscape() {}
```

### Pointer Fine

Applies styles on devices with a __fine pointer__, such as a *mouse* or *stylus*.

```scss
@mixin pointer-fine() {}
```

### Pointer Coarse

Applies styles on devices with a __coarse pointer__, such as *touch*, where larger targets are useful.

```scss
@mixin pointer-coarse() {}
```

## User Preference Mixins

User preference mixins respond to the options configured by the __visitor's operating system__ or __browser__.

### Prefers HDR

Applies styles on displays that support __high dynamic range__ (HDR).

```scss
@mixin prefers-hdr() {}
```

### Prefers Dark

Applies styles when the user prefers a __dark color scheme__.

```scss
@mixin prefers-dark() {}
```

### Prefers Light

Applies styles when the user prefers a __light color scheme__.

```scss
@mixin prefers-light() {}
```

### Prefers Reduced Motion

Applies styles when the user prefers __reduced motion__. Use it to disable animations and transitions.

```scss
@mixin prefers-reduced-motion() {}
```

### Prefers More Contrast

Applies styles when the user prefers __more contrast__.

```scss
@mixin prefers-more-contrast() {}
```

### Prefers Less Contrast

Applies styles when the user prefers __less contrast__.

```scss
@mixin prefers-less-contrast() {}
```

## Print Mixins

The print mixins allow you to apply styles specifically for printed documents or to hide elements when printing.

### Print

Applies styles when __printing__.

```scss
@mixin print() {}
```

### Not Print

Applies styles when __not printing__. Use it for screen-only elements.

```scss
@mixin not-print() {}
```

## Media Queries

Returns a map of *__media query names__* and their *__media query strings__*, *optionally filtered by name*. This is useful for generating responsive modifiers for many screen ranges.

::: alert
Available names are `until-ultrawide`, `until-widescreen`, `until-desktop`, `tablet`, `desktop`, `widescreen`, `ultrawide`, `mobile`, `tablet-only`, `desktop-only`, and `widescreen-only`.
:::

::: signature

```scss
@function media-queries($includes: null, $excludes: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$includes` | *list\<string\>*, *"all"*, *null* | Query names to include |
| `$excludes` | *list\<string\>*, *"all"*, *null* | Query names to exclude |

```scss
.grid {
  @each $name, $query in termeh.media-queries($includes: "all") {
    @media #{$query} {
      &.is-#{$name}-stacked {
        flex-direction: column;
      }
    }
  }
}
```

:::

::: error
Throw error if `$includes` or `$excludes` is not *null*, *all*, or a *list*.
:::

:::::: appendix

## Appendix

For custom breakpoint logic, the following functions and mixins work with __raw breakpoint values__ and __media query strings__.

### Breakpoint

Returns the width of a __defined breakpoint__.

::: alert
Available breakpoints are `tablet`, `desktop`, `widescreen`, and `ultrawide`.
:::

```scss
@function breakpoint($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined breakpoint |

::: error
Throw error if `$name` is not a *string* or is not a defined breakpoint.
:::

### From

Applies styles from a __defined breakpoint and up__. The content is wrapped in a `min-width` media query for the breakpoint, making this the natural tool for a __mobile-first workflow__.

```scss
@mixin from($device) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$device` | *string* | The name of a defined breakpoint |

::: error
Throw error if `$device` is not a *string* or is not a defined breakpoint.
:::

### Until

Applies styles __below__ a __defined breakpoint__. The content is wrapped in a `max-width` media query set `1px` below the breakpoint width, so it does not overlap with `from` for the same breakpoint.

```scss
@mixin until($device) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$device` | *string* | The name of a defined breakpoint |

::: error
Throw error if `$device` is not a *string* or is not a defined breakpoint.
:::

### Breakpoints

Returns a map of *__breakpoint names__* and their *__widths__*. Use it to loop over every defined screen size.

```scss
@function breakpoints() {}
```

### Media Query

Returns the __media query string__ for a [defined query name](#media-queries).

```scss
@function media-query($name) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$name` | *string* | The name of a defined media query |

::: error
Throw error if `$name` is not a *string* or is not a defined media query.
:::

::::::
