---
outline: deep
description: Introduction to Termeh, a modern, responsive, and modular CSS framework. This page includes installation and usage guide.
---

# What Is Termeh?

Termeh provides a __modern__, __responsive__, and __modular__ CSS framework for building scalable user interfaces. Written entirely in @Sass@ with =no external dependencies=, it offers ready-to-use =components=, =palette generation= and =color functions=, =responsive design utilities=, =theming support=, and =size helpers= to help teams build interfaces consistently.

## Installation

::: code-group

```bash [npm]
npm install -D termeh
```

```bash [yarn]
yarn add termeh -D
```

```bash [pnpm]
pnpm add -D termeh
```

:::

## Usage

To get started, import Termeh into a __Sass__ file, then configure your design system and include the components you need.

```scss
@use "termeh";

// Define and customize variables and palettes
@include termeh.define("text", "font-family", ("Ubuntu", "Verdana"));
@include termeh.define-palette("primary", #2196f3);
@include termeh.override-palette("dark", "primary", #5db1f7);

// Use components
@include termeh.use-generic();
@include termeh.use-container();
@include termeh.use-grid(
  $gaps: ("mini" "normal" "large")
);
@include termeh.use-button(
  $colors: ("primary" "green" "blue")
);

// Output variables for each color scheme
:root {
  @include termeh.variables();
}

[data-scheme="dark"] {
  @include termeh.variables("dark");
}
```

## Extending

You can __extend__ Termeh by adding your own @modules@ and using its =styles and definitions=, such as =variables=, =palettes=, and =core functions=. Custom components are registered alongside the built-in ones, so they follow the same theming and color schemes.

::: code-group

```scss [pill.scss]
@use "sass:meta";
@use "termeh";

@mixin use-pill() {
  $default: termeh.color("primary");

  @include termeh.define-module("pill", "reset") {
    @include termeh.define-resolver(meta.get-function("resolver"), "pill");

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

```scss [app.scss]
@use "sass:meta";
@use "termeh";
@use "pill";


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

@include termeh.override-resolver(
  meta.get-function("pill-resolver"),
  "pill"
);

// use custom component
@include termeh.use-reset();
@include pill.use-pill();


```

:::
