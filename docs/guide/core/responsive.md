# Responsive Design

Termeh makes responsive design easy. Use its helpers to apply styles based on device width, look up breakpoint values, or wrap your CSS in ready-made media queries. You can target specific devices, size ranges, or interaction types (such as touch vs. non-touch) without writing media queries by hand.

## Device Size Mixins

Each mixin wraps your styles in a media query for a device size or size range.

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

## Device capabilities

### Touch Device Interaction

Applies styles on devices that can't hover, such as touch screens.

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

### Non-Touch Device Interaction

Applies styles on devices that support hover, such as desktops with a mouse.

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

### Fine Pointer Device Interaction

Applies styles on devices with a precise pointer, such as a mouse or stylus.

::: definition

**Signature:**

```scss
@mixin pointer-fine();
```

**Example:**

```scss
@include termeh.pointer-fine() {
  .button {
    outline: 1px dashed;
  }
}
```

:::

### Coarse Pointer Device Interaction

Applies styles on devices with an imprecise pointer, such as a finger on a touch screen.

::: definition

**Signature:**

```scss
@mixin pointer-coarse();
```

**Example:**

```scss
@include termeh.pointer-coarse() {
  .button {
    outline: none;
  }
}
```

:::

## Orientation & Resolution

### Retina Display

Applies styles on high-resolution (retina) displays.

::: definition

**Signature:**

```scss
@mixin retina();
```

**Example:**

```scss
@include termeh.retina() {
  .icon {
    background-image: url("icon@2x.png");
  }
}
```

:::

### Portrait Orientation

Applies styles when the device is in portrait orientation.

::: definition

**Signature:**

```scss
@mixin portrait();
```

**Example:**

```scss
@include termeh.portrait() {
  .container {
    flex-direction: column;
  }
}
```

:::

### Landscape Orientation

Applies styles when the device is in landscape orientation.

::: definition

**Signature:**

```scss
@mixin landscape();
```

**Example:**

```scss
@include termeh.landscape() {
  .container {
    flex-direction: row;
  }
}
```

:::

## User preferences

### Prefers HDR

Applies styles when the device supports high dynamic range (HDR).

::: definition

**Signature:**

```scss
@mixin prefers-hdr();
```

**Example:**

```scss
.heading-hero {
  @include termeh.prefers-hdr() {
    background-image: url("/media/image@hdr.png");
  }
}
```

:::

### Prefers Dark Scheme

Applies styles when the user prefers a dark color scheme.

::: definition

**Signature:**

```scss
@mixin prefers-dark();
```

**Example:**

```scss
@include termeh.prefers-dark() {
  body {
    background: #222;
    color: #eee;
  }
}
```

:::

### Prefers Light Scheme

Applies styles when the user prefers a light color scheme.

::: definition

**Signature:**

```scss
@mixin prefers-light();
```

**Example:**

```scss
@include termeh.prefers-light() {
  body {
    background: #fff;
    color: #222;
  }
}
```

:::

### Prefers Reduced Motion

Applies styles when the user prefers reduced motion.

::: definition

**Signature:**

```scss
@mixin prefers-reduced-motion();
```

**Example:**

```scss
@include termeh.prefers-reduced-motion() {
  .animation {
    animation: none;
  }
}
```

:::

### Prefers More Contrast

Applies styles when the user asks for higher contrast.

::: definition

**Signature:**

```scss
@mixin prefers-more-contrast();
```

**Example:**

```scss
@include termeh.prefers-more-contrast() {
  body {
    filter: contrast(1.2);
  }
}
```

:::

### Prefers Less Contrast

Applies styles when the user asks for lower contrast.

::: definition

**Signature:**

```scss
@mixin prefers-less-contrast();
```

**Example:**

```scss
@include termeh.prefers-less-contrast() {
  body {
    filter: contrast(0.8);
  }
}
```

:::

## Print

### Print Media

Applies styles when the page is printed.

::: definition

**Signature:**

```scss
@mixin print();
```

**Example:**

```scss
@include termeh.print() {
  .header {
    display: none;
  }
}
```

:::

### Non-Print Media

Applies styles everywhere except print, such as on screen.

::: definition

**Signature:**

```scss
@mixin not-print();
```

**Example:**

```scss
@include termeh.not-print() {
  .print-tip {
    display: none;
  }
}
```

:::

## From

Applies styles from the given breakpoint and up.

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

::: error
**throw** If the input is not a string or if the breakpoint is not found.
:::

## Until

Applies styles only below the given breakpoint.

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

::: error
**throw** If the input is not a string or if the breakpoint is not found.
:::

## Media Query

Returns the media query string for a given name.

::: definition

**Signature:**

```scss
@function media-query($name: String): String;
```

**Example:**

```scss
$mobile-query: termeh.media-query("mobile"); // "screen and (max-width: 768px)"
$tablet-query: termeh.media-query("tablet"); // "screen and (min-width: 769px)"
```

:::

::: error
**throw** If the input is not a string or if the query is not found.
:::

::: block Available Queries

| Key                  | Value                                                    |
|----------------------|----------------------------------------------------------|
| **until-fullhd**     | `screen and (max-width: 1407px)`                         |
| **until-widescreen** | `screen and (max-width: 1215px)`                         |
| **until-desktop**    | `screen and (max-width: 1023px)`                         |
| **tablet**           | `screen and (min-width: 769px)`                          |
| **desktop**          | `screen and (min-width: 1024px)`                         |
| **widescreen**       | `screen and (min-width: 1216px)`                         |
| **fullhd**           | `screen and (min-width: 1408px)`                         |
| **mobile**           | `screen and (max-width: 768px)`                          |
| **tablet-only**      | `screen and (min-width: 769px) and (max-width: 1023px)`  |
| **desktop-only**     | `screen and (min-width: 1024px) and (max-width: 1215px)` |
| **widescreen-only**  | `screen and (min-width: 1216px) and (max-width: 1407px)` |

:::

## Media Queries

Returns a map of media queries (names and values) that you can loop over. Use `$includes` and `$excludes` to filter the result.

::: definition

**Signature:**

```scss
@function media-queries($includes: List = null, $excludes: List = null): Map<String, String>;
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

Returns the numeric value of a single breakpoint.

::: definition

**Signature:**

```scss
@function breakpoint($name: String): Number;
```

**Example:**

```scss
$tablet: termeh.breakpoint("tablet"); // 769px
$desktop: termeh.breakpoint("desktop"); // 1024px
```

:::

::: error
**throw** If the input is not a string or if the breakpoint is not found.
:::

::: block Available Devices

| Key            | Value    |
|----------------|----------|
| **tablet**     | `769px`  |
| **desktop**    | `1024px` |
| **widescreen** | `1216px` |
| **fullhd**     | `1408px` |

:::

## Breakpoints

Returns a map of all breakpoint names and values, handy for looping.

::: definition

**Signature:**

```scss
@function breakpoints(): Map<String, Number>;
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
