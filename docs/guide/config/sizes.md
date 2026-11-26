---
description: Default text size scale that Termeh registers for headings, text helpers and component size modifiers, and how to change it.
---

# Default Text Sizes

*__Sizes__* are the __dimension values__ shared by elements and components. They control the __font size__ of *headings* and *text helpers*, and the __dimensions__ of components such as *buttons*, *tags*, *icons*, and *avatars*. Termeh generates modifiers like `is-small` from them. Using one shared scale keeps element sizes consistent across your whole interface. Because components never hard-code size values, changing the __*scheme*__ restyles every component that uses it.

Termeh already defines a default size scale from *small* to *massive*, so you can start without any setup. You can __change__ any of these values or __add__ your own sizes to match your design.

::: tip
Define your sizes __before__ you include any component module, so that components pick up your custom values.
:::

::: info
See [Size Reference](/guide/reference/size) for advanced usage and complete reference.
:::

## Default Values

The following sizes are defined by default. All of them use the `em` unit, so they scale with the font size around them.

| Name | Value |
| -- | -- |
| `small` | `0.8em`{scss} |
| `normal` | `1em`{scss} |
| `medium` | `1.25em`{scss} |
| `large` | `1.5em`{scss} |
| `big` | `2em`{scss} |
| `huge` | `2.5em`{scss} |
| `massive` | `3em`{scss} |

## Customize

Use `define-size` to __change__ the value of a default size or __add__ a new one.

```scss
@include termeh.define-size("normal", 1.0625em);
@include termeh.define-size("giant", 4em);
```

Use `override-size` to __change__ a value only for a __specific scheme__.

```scss
@include termeh.override-size("compact", "normal", 0.9em);
```
