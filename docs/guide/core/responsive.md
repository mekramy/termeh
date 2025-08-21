# Responsive Design

Termeh provides utilities for managing responsive breakpoints, allowing you to apply styles conditionally based on device width. You can retrieve specific breakpoint values, get all defined breakpoints, or wrap your CSS in media queries using the provided mixins. Termeh also provides a collection of mixins and functions to handle responsive design efficiently. You can target specific devices, ranges, or interaction types (touch vs non-touch) with predefined media queries.

## Breakpoint

Gets the numeric value of a specific breakpoint.

::: code-group

```scss [usage.scss]
@function breakpoint($name);
```

```scss [example.scss]
$tablet: breakpoint("tablet"); // 769px
$desktop: breakpoint("desktop"); // 1024px
```

:::

::: details Available Breakpoints

```scss
$available: "tablet" "desktop" "widescreen" "fullhd";
```

:::

## Breakpoints

Returns a map of all defined breakpoints.

::: code-group

```scss [usage.scss]
@function breakpoints();
```

```scss [example.scss]
$all-breakpoints: breakpoints();
```

:::

## From

Applies styles starting from a specific breakpoint (min-width).

::: code-group

```scss [usage.scss]
@mixin from($device);
```

```scss [example.scss]
@include from("tablet") {
  .container {
    padding: 2rem;
  }
}
```

:::

::: details Available Devices

```scss
$available: "tablet" "desktop" "widescreen" "fullhd";
```

:::

## Until

Applies styles up to a specific breakpoint (max-width).

::: code-group

```scss [usage.scss]
@mixin until($device);
```

```scss [example.scss]
@include until("desktop") {
  .container {
    padding: 1rem;
  }
}
```

:::

::: details Available Devices

```scss
$available: "tablet" "desktop" "widescreen" "fullhd";
```

:::

## Media Query

Gets a media query string by its name.

::: code-group

```scss [usage.scss]
@function media-query($name);
```

```scss [example.scss]
$mobile-query: media-query("mobile"); // "screen and (max-width: 768px)"
$tablet-query: media-query("tablet"); // "screen and (min-width: 769px)"
```

:::

::: details Available Queries

```scss
$available: "until-fullhd" "until-widescreen" "until-desktop" "tablet" "desktop"
  "widescreen" "fullhd" "mobile" "tablet-only" "desktop-only" "widescreen-only";
```

:::

## Media Queries

Gets a map of filtered media queries.

::: code-group

```scss [usage.scss]
@function media-queries($includes: null, $excludes: null);
```

```scss [example.scss]
$desktop-tablet: media-queries(("desktop", "tablet"));
$without-mobile: media-queries(null, ("mobile"));
```

:::

## Device Interaction Mixins

### Non-Touch

Applies styles for devices that support hover (non-touch devices).

::: code-group

```scss [usage.scss]
@mixin non-touch();
```

```scss [example.scss]
@include non-touch() {
  .button {
    border: 2px solid black;
  }
}
```

:::

### Touch

Applies styles for devices without hover (touch devices).

::: code-group

```scss [usage.scss]
@mixin touch();
```

```scss [example.scss]
@include touch() {
  .button {
    border: none;
  }
}
```

:::

## Device Size Mixins

Each mixin wraps content in a media query targeting specific device ranges.

::: code-group

```scss [usage.scss]
@mixin mobile();
@mixin tablet();
@mixin tablet-only();
@mixin until-desktop();
@mixin desktop();
@mixin desktop-only();
@mixin until-widescreen();
@mixin widescreen();
@mixin widescreen-only();
@mixin until-fullhd();
@mixin fullhd();
```

```scss [example.scss]
@include mobile() {
  .container {
    padding: 1rem;
  }
}

@include tablet-only() {
  .container {
    padding: 2rem;
  }
}

@include desktop() {
  .container {
    padding: 3rem;
  }
}
```

:::
