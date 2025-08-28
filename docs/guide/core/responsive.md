# Responsive Design

Termeh provides utilities for managing responsive breakpoints, allowing you to apply styles conditionally based on device width. You can retrieve specific breakpoint values, get all defined breakpoints, or wrap your CSS in media queries using the provided mixins. A collection of functions and mixins is also available to efficiently handle responsive design, targeting specific devices, ranges, or interaction types (touch vs non-touch) with predefined media queries.

## Device Size Mixins

Each mixin wraps content in a media query targeting specific device ranges.

::: definition

**Signatures:**

```scss
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

**Example:**

```scss
@include termeh.mobile() {
  .container {
    padding: 1rem;
  }
}

@include termeh.tablet-only() {
  .container {
    padding: 2rem;
  }
}

@include termeh.desktop() {
  .container {
    padding: 3rem;
  }
}
```

:::

## Non-Touch Device Interaction

Applies styles for devices that support hover (non-touch devices).

::: definition

**Signature:**

```scss
@mixin non-touch();
```

**Example:**

```scss
@include termeh.non-touch() {
  .button {
    border: 2px solid black;
  }
}
```

:::

## Touch Device Interaction

Applies styles for devices without hover (touch devices).

::: definition

**Signature:**

```scss
@mixin touch();
```

**Example:**

```scss
@include termeh.touch() {
  .button {
    border: none;
  }
}
```

:::

## From

Applies styles starting from a specific breakpoint (min-width) or generates an _error_ if the device is invalid.

::: definition

**Signature:**

```scss
@mixin from($device: "tablet" | "desktop" | "widescreen" | "fullhd");
```

**Example:**

```scss
@include termeh.from("tablet") {
  .container {
    padding: 2rem;
  }
}
```

:::

## Until

Applies styles up to a specific breakpoint (max-width) or generates an _error_ if the device is invalid.

::: definition

**Signature:**

```scss
@mixin until($device: "tablet" | "desktop" | "widescreen" | "fullhd");
```

**Example:**

```scss
@include termeh.until("desktop") {
  .container {
    padding: 1rem;
  }
}
```

:::

## Media Query

Gets a media query string by its name or generates an _error_ if the media query is invalid.

::: definition

**Signature:**

```scss
@function media-query($name: STRING): STRING;
```

**Example:**

```scss
$mobile-query: termeh.media-query("mobile"); // "screen and (max-width: 768px)"
$tablet-query: termeh.media-query("tablet"); // "screen and (min-width: 769px)"
```

:::

::: dependencies Available Queries

| Key                | Value                                                    |
| ------------------ | -------------------------------------------------------- |
| `until-fullhd`     | `screen and (max-width: 1407px)`                         |
| `until-widescreen` | `screen and (max-width: 1215px)`                         |
| `until-desktop`    | `screen and (max-width: 1023px)`                         |
| `tablet`           | `screen and (min-width: 769px)`                          |
| `desktop`          | `screen and (min-width: 1024px)`                         |
| `widescreen`       | `screen and (min-width: 1216px)`                         |
| `fullhd`           | `screen and (min-width: 1408px)`                         |
| `mobile`           | `screen and (max-width: 768px)`                          |
| `tablet-only`      | `screen and (min-width: 769px) and (max-width: 1023px)`  |
| `desktop-only`     | `screen and (min-width: 1024px) and (max-width: 1215px)` |
| `widescreen-only"` | `screen and (min-width: 1216px) and (max-width: 1407px)` |

:::

## Media Queries

Gets a filtered map of media queries, returning both names and values, for iteration.

::: definition

**Signature:**

```scss
@function media-queries($includes: LIST = null, $excludes: LIST = null):
    MAP<STRING, STRING>;
```

**Example:**

```scss
.container {
  @each $name, $mq in termeh.media-queries(("desktop", "tablet")) {
    &.is-#{$name} {
      @media $mq {
        // Use responsive mixins for better handling of breakpoints
      }
    }
  }
}
```

:::

## Breakpoint

Gets the numeric value of a specific breakpoint or generates an _error_ if the breakpoint is invalid.

::: definition

**Signature:**

```scss
@function breakpoint($devince: STRING): NUMBER;
```

**Example:**

```scss
$tablet: termeh.breakpoint("tablet"); // 769px
$desktop: termeh.breakpoint("desktop"); // 1024px
```

:::

::: dependencies Available Devices

| Key          | Value    |
| ------------ | -------- |
| `tablet`     | _769px_  |
| `desktop`    | _1024px_ |
| `widescreen` | _1216px_ |
| `fullhd`     | _1408px_ |

:::

## Breakpoints

Returns a map of all breakpoints with their names and values for iteration.

::: definition

**Signature:**

```scss
@function breakpoints(): MAP<STRING, NUMBER>;
```

**Example:**

```scss
.container {
  @each $name, $breakpoint in termeh.breakpoints() {
    // Use responsive mixins for better handling of breakpoints
  }
}
```

:::
