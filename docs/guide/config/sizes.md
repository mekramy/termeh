---
description: Default text size scale that Termeh registers for headings, text helpers and component size modifiers, and how to change it.
---

# Default Text Sizes

__Sizes__ are the =dimension values= shared by elements and components. They control the =font size= of _headings_ and _text helpers_, and the =dimensions= of components such as _button_, _tag_, _icon_, and _avatar_. Termeh generates modifiers like `is-small`, `is-normal`, and `is-large` from them. Using one shared scale keeps element sizes consistent across your whole interface. Because components never hard-code size values, changing the @scheme@ restyles every component that uses it.

Termeh already defines a default size scale from _small_ to _massive_, so you can start without any setup. You can =change= any of these values or =add= your own sizes to match your design.

::: tip Note
Define your sizes =before= you include any component module, so that components pick up your custom values.
:::

::: note
See [Size Reference](/guide/reference/size) for advanced usage and complete reference.
:::

## Default Values

The following sizes are defined by default. All of them use the `em` unit, so they scale with the font size around them.

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

Use `define-size` to =change= the value of a default size or =add= a new one.

```scss
@include termeh.define-size("normal", 1.0625em);
@include termeh.define-size("giant", 4em);
```

Use `override-size` to change a value only for a specific scheme.

```scss
@include termeh.override-size("compact", "normal", 0.9em);
```
