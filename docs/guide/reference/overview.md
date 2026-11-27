---
description: API reference for Termeh core building blocks, including schemes and module registry.
---

# Overview

> __Scheme__{data-type="scheme" title="This module provides color scheme functions"}

Termeh provides the *__core building blocks__* that every style and component relies on: a __*scheme system*__ for theming and a __*module registry*__.

__*Schemes*__ export the same set of *__CSS variables__* for the __default theme__ or for any __named theme__, such as `"dark"`{scss}. Modules read their values through getters that return `var(--...)` references and register the matching variables automatically. Call `variables()`{scss} once, *after all Termeh modules are included*, so every registered value is written.

__*Modules*__ ensure each piece of CSS is emitted *__only once__* and that its *dependencies are included first*.

## Variables

Writes the *__CSS variables__* of a scheme as *custom properties* in the current selector. Without a scheme, it outputs the __default scheme__.

::: signature

```scss
@mixin variables($scheme: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string*, *null* | The scheme name. Defaults to `null` for the default scheme |

```scss
@include termeh.use-button();
@include termeh.use-card();

:root {
  @include termeh.variables();
}

[data-scheme="dark"] {
  @include termeh.variables("dark");
}
```

:::

::: error
Throw error if `$scheme` is not a *string* or *null*, or is not a defined scheme.
:::

## Define Module

Registers a CSS-producing module and emits its content once at the __*root level*__. A duplicate registration *warns and outputs nothing*, and *missing requirements* stop the compilation.

::: signature

```scss
@mixin define-module($module, $requirements...) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$module` | *string* | The unique name for the module |
| `$requirements` | *arglist\<string\>* | Names of modules that must be registered first |

```scss
@include termeh.define-module("element") {
  .element{
    display: flex;
  }
}

@include termeh.define-module("button", "element") {
  .button {
    @extend .element;
    border-width: 1px;
  }
}
```

:::

::: error
Throw error if `$module` is not a *string* or any of the required modules is not registered.
:::
