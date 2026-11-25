---
description: How to define gaps that Termeh uses for margin, padding and spacing modifiers.
---

# Gaps

__Gaps__ are the =spacing values= shared by all components and layouts. They control the _margin_, _padding_, and _grid spacing_ of elements, and Termeh generates modifiers such as `is-large-gap` from them. Using one shared scale keeps spacing consistent across your whole interface. Because components never hard-code spacing values, changing the @scheme@ restyles every component that uses it.

Termeh does not define any gaps by default, so you need to =add= the gaps you want to use to match your design.

::: tip Note
Define your gaps =before= you include any component module, so that components pick up your custom values.
:::

::: note
See [Gap Reference](/guide/reference/gap) for advanced usage and complete reference.
:::

## Customize

Use `define-gap` to =add= a gap.

```scss
@include termeh.define-gap("small", 0.8em);
@include termeh.define-gap("normal", 1em);
@include termeh.define-gap("giant", 4em);
```

Use `override-gap` to change the value of a gap only for a specific scheme.

```scss
@include termeh.override-gap("compact", "normal", 0.8em);
```
