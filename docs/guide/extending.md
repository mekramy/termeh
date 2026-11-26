---
description: Extending Termeh with custom modules and components.
---


# Extending

You can *__extend__* Termeh by adding your own __*modules*__ and using its __styles and definitions__, such as *variables*, *palettes*, and *core functions*. Custom components are registered alongside the built-in ones, so *they follow the same theming and color schemes*.

::: info
For details on the __Termeh API__, see the [API Reference](/guide/reference/overview).
:::

```scss [pill.scss]
@use "sass:meta";
@use "termeh";

@mixin use-pill($colors: null) {
  // Define module with the "pill" name and "reset" module requirement
  @include termeh.define-module("pill", "reset") {
    // Default resolver for the pill component
    @include termeh.fallback-resolver(
      meta.get-function("resolver"),
      "pill"
    );

    // Fallback values
    $default: termeh.color("primary");

    // Variables for the pill component
    $accent: termeh.variant-for("pill", "base", "accent", $default);
    $background: termeh.variant-for("pill", "base", "background");
    $font-weight: termeh.var("pill", "font-weight", normal);
    $radius-rounded: termeh.var("radius", "rounded");

    .pill {
      @include termeh.control();
      color: $accent;
      background: $background;
      font-weight: $font-weight;
      border-radius: $radius-rounded;

      // Generate color modifier classes for each color in the palette
      @each $name, $_ in core.colors($includes: $colors) {
        $fallback-color: termeh.variant($name, "text");
        $fallback-background: termeh.variant($name, "light");

        &.is-#{$name} {
          color: termeh.variant-for(
            "pill", $name, "accent", $fallback-color
          );
          background: termeh.variant-for(
            "pill", $name, "background", $fallback-background
          );
        }
      }
    }
  }
}

@function resolver(
  $scheme, $palette, $is-light, $base, $color, $variant
) {
  @if $variant == "accent"{
    @return termeh.color("primary");
  } @else if $variant == "background"{
    @return transparent;
  }

  @return null;
}
```

You can now use and customize the component in your application styles, as shown below:

```scss [app.scss]
@use "sass:meta";
@use "termeh";
@use "./styles/pill";


// Custom resolver for pill component
@function pill-resolver(
  $scheme, $palette, $is-light, $base, $color, $variant
) {
    @if $palette != "base" and $variant == "background" {
      @if $is-light {
        @return termeh.palette($color, "100");
      } @else {
        @return termeh.palette($color, "800");
      }
    }

    @return null;
}

@include termeh.define-resolver(
  meta.get-function("pill-resolver"),
  "pill"
);

// use custom component
@include termeh.use-reset();
@include pill.use-pill();


```
