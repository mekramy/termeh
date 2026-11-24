---
description: Default gap scale that Termeh registers for margin, padding and spacing modifiers, and how to change it.
---

# Default Gaps

__Gaps__ are the =spacing values= shared by all components and layouts. They control the _margin_, _padding_, and _grid spacing_ of elements, and Termeh generates modifiers such as `is-large-gap` from them. Using one shared scale keeps spacing consistent across your whole interface. Because components never hard-code spacing values, changing the @scheme@ restyles every component that uses it.

Termeh already defines a default gap scale ranging from _small_ to _massive_, so you can start without any setup. You can =change= any of these values or =add= your own gaps to match your design.

::: tip Note
Define your gaps =before= you include any component module, so that components pick up your custom values.
:::

::: note
See [Gap Reference](/guide/reference/gap) for advanced usage and complete reference.
:::

## Default Values

The following gaps are defined by default. All of them use the `em` unit, so spacing scales with the font size around it.

| Name | Value |
| -- | -- |
| __small__ | `0.8em` |
| __normal__ | `1em` |
| __medium__ | `1.25em` |
| __large__ | `1.5em` |
| __big__ | `2em` |
| __huge__ | `2.5em` |
| __massive__ | `3em` |

## Customize

Use `define-gap` to =change= the value of a default gap or =add= a new one.

```scss
@include termeh.define-gap("normal", 1.1em);
@include termeh.define-gap("giant", 4em);
```

Use `override-gap` to change a value only for a specific scheme.

```scss
@include termeh.override-gap("compact", "normal", 0.8em);
```
