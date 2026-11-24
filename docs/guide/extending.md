---
description: Extending Termeh with custom modules and components.
---


# Extending

You can __extend__ Termeh by adding your own @modules@ and using its =styles and definitions=, such as =variables=, =palettes=, and =core functions=. Custom components are registered alongside the built-in ones, so they follow the same theming and color schemes.

::: note
For details on the =Termeh API=, see the [API Reference](/guide/reference/overview).
:::

```scss [pill.scss]
@use "sass:meta";
@use "termeh";

@mixin use-pill($colors: null) {
  $default: termeh.color("primary");

  @include termeh.define-module("pill", "reset") {
    @include termeh.fallback-resolver(meta.get-function("resolver"), "pill");

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

@function resolver($scheme, $palette, $is-light, $base, $color, $variant) {
  @if $variant == "accent"{
    @return termeh.color("primary");
  } @else if $variant == "background"{
    @return transparent;
  }

  @return null;
}
```

And use your component in your application styles as shown below:

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
