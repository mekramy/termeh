---
outline: deep
---

# What Is Termeh?

Termeh is a _modern_, _responsive_, _modular_, and _scheme-based_ CSS framework for building scalable user interfaces. Written entirely in _Sass_ and free of external dependencies, it gives you tools to manage colors, palettes, contrast, and responsive layouts—making it easier to create flexible, accessible interfaces.

Termeh also includes a wide range of components and ready-to-use styles, so you can build interfaces faster and more consistently.

::: tip
Termeh uses modern CSS, including _CSS logical properties and values_. These help layouts adapt to different writing directions and support internationalization.
:::

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

To get started, import Termeh into a _Sass_ file, then use its functions and components:

::: code-group

```scss [app.scss]
@use "termeh";

// Define and customize palettes
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
:root{
  @include termeh.variables();
}

[data-scheme="dark"]{
  @include termeh.variables("dark");
}
```

:::

## External Usage

You can also use Termeh in your own components. Import its core functionality, then include your component in your app:

::: code-group

```scss [component.scss]
@use "termeh";

@mixin use-my-component(){
  $fallback-background: termeh.var("base", "section");
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

// Define a palette and include global styles
@include termeh.define-palette("primary", #2196f3);
// ...

// use custom component
@include my-component.use-my-component();
```

:::
