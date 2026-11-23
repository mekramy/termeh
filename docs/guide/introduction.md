---
outline: deep
description: Introduction to Termeh, a modern, responsive, and modular CSS framework. This page includes installation and usage guide.
---

# What Is Termeh?

Termeh is a __modern__, __responsive__, and __modular__ CSS framework for building scalable user interfaces. Written entirely in @Sass@ with =no external dependencies=, it offers ready-to-use =components=, =palette generation= and =color functions=, =responsive design utilities=, =theming=, and =modifier generator helpers=, so teams can build consistent interfaces without writing the same styles again and again.

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

To get started, import Termeh into a __Sass__ file, define your design tokens, include the components you need, and output the CSS variables.

```scss
@use "termeh";

// 1. Define values
@include termeh.define("text", "font-family", ("Ubuntu", "Verdana"));
@include termeh.define-palette("base", white);
@include termeh.define-palette("primary", #2196f3);
@include termeh.define-palette("success", #4caf50);

// Override values for the dark scheme
@include termeh.override-palette("dark", "base", #0d1b2a);
@include termeh.override-palette("dark", "primary", #5db1f7);

// 2. Include components
@include termeh.use-generic();
@include termeh.use-container();
@include termeh.use-button($colors: "all");
@include termeh.use-grid($gaps: ("mini", "normal", "large"));

// 3. Output variables for each scheme
:root {
  @include termeh.variables();
}

[data-scheme="dark"] {
  @include termeh.variables("dark");
}
```

## How Termeh Works

Termeh works in three steps:

1. =Define= your values.
2. =Include= the components you need.
3. =Output= the CSS variables for each scheme.

Components never hard-code colors, spacing or sizes. They read them as __CSS variables__, so changing a value (or switching to another scheme) restyles every component without recompiling or touching your own styles.

### Define Values

Termeh stores your design system in four token groups: __variables__, __palettes__, __gaps__, and __sizes__. Each group has a `define-*` mixin to =set a value= and an `override-*` mixin to =replace it= for a specific @scheme@.

A @scheme@ is a named theme, such as `dark`. Values you define belong to the =default scheme=. A scheme only needs to override what is different, and everything else falls back to the default value.

__Variables__ store =component-specific values=, such as a _font family_ or a _border radius_. Each component has its own variables that control its appearance and behavior. See the documentation of each component for the variables it uses.

```scss
@mixin define($component, $property, $value);
@mixin override($scheme, $component, $property, $value);
```

__Palettes__ store the =colors= of your theme. Every theme needs a __base__ palette, which holds its main color and decides whether the theme is light or dark. Every other palette (`primary`, `success`, `error` and so on) is used to generate modifiers such as `is-primary`.

::: note
See [Palette Reference](/guide/reference/palette) for more details.
:::

```scss
@mixin define-palette($name, $color);
@mixin override-palette($scheme, $name, $color);
```

Each palette can have __variants__, such as a hover or a surface shade. Define a variant yourself, or leave it out and let @resolvers@ generate it from the palette color. A variant can also be limited to a single component:

```scss
@mixin define-variant($palette, $variant, $color);
@mixin override-variant($scheme, $palette, $variant, $color);

@mixin define-component-variant(
  $component, $palette, $variant, $color
);
@mixin override-component-variant(
  $scheme, $component, $palette, $variant, $color
);
```

__Gaps__ store =spacing values= shared by components, such as _padding_, _margin_, and _grid gaps_. Prefer the `em` unit, so spacing scales with the font size of each component.

```scss
@mixin define-gap($name, $value);
@mixin override-gap($scheme, $name, $value);
```

__Sizes__ store =dimension values= shared by elements, such as _text_, _buttons_, _avatars_, and _icons_.

```scss
@mixin define-size($name, $value);
@mixin override-size($scheme, $name, $value);
```

### Use Components

Each `use-*` mixin emits the styles of one component, such as `use-button` or `use-grid`. Many of them accept a list of __variations__, such as `$colors`, `$gaps`, or `$sizes`, and generate a =modifier class= for each value.

:::note
You can create your own components with `use-*` mixins that follow the same pattern as the built-in ones. See [Extending Section](./extending) for more details.
:::

### Output Variables

Termeh collects the values that your components use while they are included. Then `variables()` writes them as CSS custom properties. Include it in `:root` to output the default scheme, and pass a scheme name, such as `"dark"`, to output that scheme under its own selector.

::: tip
Call `variables()` after you include all your components, otherwise the values they use are not output.
:::
