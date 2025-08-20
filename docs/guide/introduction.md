---
outline: deep
---

# What Is Termeh

Termeh is a **Modern, responsive, and modular CSS framework** for scalable UIs. It has no external dependencies and is written entirely in **Sass**. Termeh provides advanced tools for managing **contrast, colors, palettes, and responsive design**, making it a powerful choice for building flexible and accessible interfaces.

This library includes a wide range of components and predefined styles for various parts of the UI, enabling faster and more consistent development.

::: info External Usage
With its **centralized configuration** and high **extensibility**, this library allows you to define a **consistent theme** across all your external libraries by leveraging the application’s predefined theme settings.
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

To use it in your project, simply import the termeh package in your **Sass** file and use the termeh functions and components.

::: code-group

```scss [app.scss]
@use "termeh";

// Define variables
@include termeh.define-palette("primary", #2196f3);

// use components
@include termeh.use-base();
@include termeh.use-container();
@include termeh.use-grid($gaps: ("mini" "normal" "large"));
@include termeh.use-button($colors: ("primary" "secondary" "blue"));
```

:::
