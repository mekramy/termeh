---
description: How to define gaps that Termeh uses for margin, padding and spacing modifiers.
---

# Gaps

*__Gaps__* are the __spacing values__ shared by all components and layouts. They control the *margin*, *padding*, and *grid spacing* of elements, and Termeh generates modifiers such as `is-large-gap` from them. Using one shared scale keeps spacing consistent across your whole interface. Because components never hard-code spacing values, changing the __*scheme*__ restyles every component that uses it.

Termeh __does not define any gaps__ by default, so you need to *add* the gaps you want to use to match your design.

::: tip
Define your gaps __before__ you include any component module, so that components pick up your custom values.
:::

::: info
See [Gap Reference](/guide/reference/gap) for advanced usage and complete reference.
:::

## Customize

Use `define-gap` to __add__ a gap.

```scss
@include termeh.define-gap("small", 0.8em);
@include termeh.define-gap("normal", 1em);
@include termeh.define-gap("giant", 4em);
```

Use `override-gap` to __change__ the value of a gap only for a __specific scheme__.

```scss
@include termeh.override-gap("compact", "normal", 0.8em);
```
