# Color Schemes

Termeh provides a centralized system for exporting CSS variables associated with color schemes. When a Termeh module is used, its required variables and variants are registered automatically. Only registered values are emitted, so unused module variables and variants are not added as CSS variables.

::: scheme
By default, Termeh automatically registers the variables and colors used by its modules. Their getter functions return CSS variable references, so components use the generated custom properties and can respond to color scheme changes automatically. When a value needs special processing or custom registration, use the helper functions in this module to define and resolve it explicitly.
:::

## Recommended Usage

Call `variables()` after all Termeh modules have been used. It should be the last module-related call so every registered value is resolved before the CSS variables are emitted. Call it without an argument for shared variables and pass a scheme name inside a selector for scheme-specific variables.

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

The variable registration and resolution helpers are optional and are useful for special cases.

```scss
$_: termeh.define-variable("bottom-nav-gap", 4rem);
$_: termeh.define-variable("bottom-nav-gap", 3rem, "compact");

.app {
    padding-bottom: termeh.variable("bottom-nav-gap", 4rem);
}
```

## Schemes

Returns the list of registered schemes.

::: definition

**Signature:**

```scss
@function schemes(): LIST;
```

**Example:**

```scss
$available-schemes: termeh.schemes(); // schemes registered by component overrides
```

:::

## Define Variable

Registers a CSS variable with a value and optionally associates it with a color scheme. Variables without a scheme are exported by `variables()` without an argument. Variables associated with a scheme are exported by `variables($scheme)` for that scheme.

::: error
**throws** If the input name is not a string.
:::

::: definition

**Signature:**

```scss
@function define-variable($name: STRING, $value: ANY, $scheme: STRING = null);
```

**Example:**

```scss
$_: termeh.define-variable("navbar-height", #3498db);
$_: termeh.define-variable("navbar-height", #8ec5ed, "dark");
```

:::

## Variable

Returns a CSS `var()` reference for a variable. This optional helper is useful when a component needs to resolve a scheme variable with a fallback value.

::: error
**throws** If the input name is not a string.
:::

::: definition

**Signature:**

```scss
@function variable($name: STRING, $fallback: ANY): ANY;
```

**Example:**

```scss
.button {
 color: termeh.variable("color-primary", #3498db);
}
```

:::

## Variables

Exports registered variables for a color scheme as CSS custom properties in the current selector. With no argument, it exports variables that are not associated with a scheme. With a scheme name, it exports variables associated with that scheme.

::: definition

**Signature:**

```scss
@mixin variables($scheme: STRING = null);
```

**Example:**

```scss
:root {
 @include termeh.variables();
}
```

:::
