---
outline: deep
---

# What Is Termeh

Termeh is a _Modern_, _responsive_, and _modular_ CSS framework for scalable UIs. It has no external dependencies and is written entirely in _Sass_. Termeh provides advanced tools for managing _contrast_, _colors_, _palettes_, and _responsive design_, making it a powerful choice for building flexible and accessible interfaces.

This library includes a wide range of components and predefined styles for various parts of the UI, enabling faster and more consistent development.

## Installation

::: code-group

```npm
npm install -D termeh
```

```yarn
yarn add termeh -D
```

```pnpm
pnpm add -D termeh
```

:::

## Usage

To use it in your project, simply import the termeh in your _Sass_ file and use the termeh functions and components.

::: code-group

```scss [app.scss]
@use "termeh";

// Define variables
@include termeh.define-palette("primary", #2196f3);

// use components
@include termeh.use-generic();
@include termeh.use-container();
@include termeh.use-grid(
  $gaps: (
    "mini" "normal" "large",
  )
);
@include termeh.use-button(
  $colors: (
    "primary" "secondary" "blue",
  )
);
```

:::

## External Usage

To use Termeh in a custom component, import Termeh’s core functionality, then include your component in your app.

::: code-group

```scss [component.scss]
@use "termeh";

@mixin use-my-component(){
  $fallback-background: termeh.var("base", "section")
  $background: termeh.var("my-component", "background", $fallback-background);

  @at-root {
    .my-component{
      @include termeh.control();
      background-color: $background;
    }
  }
}
```

```scss [app.scss]
@use "termeh";
@use "my-component";

// Global termeh definitio and usages
@include termeh.define-palette("primary", #2196f3);
// ...

// use custom component
@include my-component.use-my-component();
```

:::
