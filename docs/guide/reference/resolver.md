---
outline: deep
description: API reference for Termeh resolvers, including how variants are created from palette colors, how general and component resolvers work, and how to register your own.
---

# Resolvers

Termeh does not store every color your UI needs. Instead of asking you to define a `hover`, `light`, or `muted` shade for every palette, it creates them on demand with __*resolvers*__. A resolver is a small Sass function that receives a *palette color* and returns the color of a requested variant, so one rule can produce the same variant for *__every palette__* and *__every scheme__*.

This is what keeps a theme short. You define a few palettes, and Termeh creates the rest. When you need a different look, you do not edit Termeh. You *register your own resolver*, and it takes part in the same process.

::: info
See [Default Resolvers](/guide/config/colors#default-resolvers) for the resolvers that Termeh registers by default.
:::

::: info
See [Palette](/guide/reference/palette) for palettes and fixed variants.
:::

::: warn
Resolvers create a variant for a scheme only when that scheme overrides the __base palette__. Otherwise Termeh cannot tell whether the scheme is light or dark, and the fallback is used.
:::

## How Resolvers Work

When you read a variant, for example `termeh.variant("primary", "hover")`{scss}, Termeh finds its color in this order:

1. The __explicitly defined__ color, if you defined one with `define-variant` or one of its scheme and component versions. It is returned directly and no resolver runs.
2. A color created by a __resolver__.
3. The __fallback__ value passed to the getter, if there is one.

Resolvers are only asked about variants that have no defined color. This means a fixed color always wins over a rule, and a resolver is the right tool when you want a __rule__ instead of a list of colors.

### Resolver Function

A resolver is a function with exactly six parameters. It returns a `color`, or `null` when it does not know the variant, so the next resolver can try.

| Parameter | Type | Description |
| -- | -- | -- |
| `$scheme` | *string*, *null* | The name of the scheme, or `null` for the default scheme |
| `$palette` | *string* | The name of the palette |
| `$is-light` | *boolean* | Whether the base color is light |
| `$base` | *color* | The base color of the scheme |
| `$color` | *color* | The palette color to create the variant from |
| `$variant` | *string* | The name of the variant |

```scss
@use "sass:meta";
@use "termeh";

@function brand-resolver(
  $scheme, $palette, $is-light, $base, $color, $variant
) {
  @if $variant == "soft" {
    @return termeh.mix($color, $base, 12%);
  }

  @return null;
}

@include termeh.fallback-resolver(meta.get-function("brand-resolver"));
```

::: warn
Always end a resolver with `@return null;`. A resolver should only answer for the variants it knows and leave everything else to the others.
:::

::: tip
The `$is-light`{scss} and `$base`{scss} arguments let one resolver work in both *light* and *dark* themes. Because `$base`{scss} is the base color of the *requested scheme*, the same resolver can return a different color for each scheme without any extra code.
:::

### General and Component Resolvers

A resolver is registered either for the *__general__* scope or for a *__specific component__*.

- A __general resolver__ is registered without a component name. It is used by the getters that do not take a component: `variant`, `variant-value`, and `scheme-variant`.
- A __component resolver__ is registered with a component name, such as `"button"` or `"table"`. It is used only by the `*-for` getters of that component: `variant-for`, `variant-value-for`, and `scheme-variant-for`.

The two scopes are __separate__. A component never falls back to the general resolvers, and the general getters never see component resolvers. This is why a component resolver can safely use short, local variant names such as `column-separator` without clashing with other components.

### Resolution Order

Resolvers of a scope are tried one by one until one of them returns a color. The __first color returned wins__, and the rest are not called.

Resolvers are tried in two groups:

1. Resolvers added with `define-resolver`, starting from the __*latest*__ one.
2. Resolvers added with `fallback-resolver`, in the order they were added.

Call `fallback-resolver` once to register a default resolver, such as one supplied by Termeh or a custom component. The registered resolver can then run whenever a variant needs resolving. Use `define-resolver` for your own resolvers: they run first, so you can override those defaults.

## Define Resolver

__Registers__ a resolver that is called *before all existing resolvers* of its scope, so it can replace a color that a built-in resolver creates. When you define several, the *latest one gets the first chance*.

::: signature

```scss
@mixin define-resolver($resolver, $component: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$resolver` | *function* | The function that resolves a variant |
| `$component` | *string*, *null* | The component name, or `null` for the general scope |

```scss
@use "sass:meta";
@use "termeh";

@function table-resolver(
  $scheme, $palette, $is-light, $base, $color, $variant
) {
  @if $variant == "column-separator" {
    @return termeh.alpha(termeh.variant("base", "separator"), 0.5);
  }

  @return null;
}

@include termeh.define-resolver(
  meta.get-function("table-resolver"),
  "table"
);
```

:::

::: warn
If your function arguments do not match the expected signature, __sass compiler__ will throw an error on compilation.
:::

::: error
Throw error if `$resolver` is not a *function*, or `$component` is neither a *string* nor *null*.
:::

## Fallback Resolver

Call this mixin once to __register__ a default resolver for its scope. The resolver can then run whenever a variant needs resolving, after resolvers added with `define-resolver`.

::: signature

```scss
@mixin fallback-resolver($resolver, $component: null) {}
```

| Parameter | Type | Description |
| -- | -- | -- |
| `$resolver` | *function* | The function that resolves a variant |
| `$component` | *string*, *null* | The component name, or `null` for the general scope |

```scss
@use "sass:meta";
@use "termeh";

@function pill-resolver(
  $scheme, $palette, $is-light, $base, $color, $variant
) {
  @if $variant == "background" {
    @return transparent;
  }

  @return null;
}

@include termeh.fallback-resolver(
  meta.get-function("pill-resolver"),
  "pill"
);
```

:::

::: warn
If your function arguments do not match the expected signature, sass compiler will throw an error on compilation.
:::

::: error
Throw error if `$resolver` is not a *function*, or `$component` is neither a *string* nor *null*.
:::
