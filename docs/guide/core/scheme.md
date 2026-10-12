# Color Schemes

Termeh provides a central way to export CSS variables for color schemes. Using a Termeh module automatically registers the variables and variants it needs. Only registered values are emitted, so unused module variables and variants are left out.

::: scheme
Termeh automatically registers the variables and colors used by its modules. Their getter functions return CSS variable references, so components use the generated custom properties and respond to scheme changes automatically. For values that need special processing or custom registration, use this module's helpers to define and resolve them explicitly.
:::

## Recommended Usage

Call `variables()` after using all Termeh modules. Make it the last module-related call so every registered value is resolved before CSS variables are emitted. Call it without an argument to export shared variables, or pass a scheme name inside a selector to export variables for that scheme.

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

The variable registration and resolution helpers are optional. Use them when you need to handle a special case explicitly.

```scss
$_: termeh.define-variable("bottom-nav-gap", 4rem);
$_: termeh.define-variable("bottom-nav-gap", 3rem, "compact");

.app {
    padding-bottom: termeh.variable("bottom-nav-gap", 4rem);
}
```

## Schemes

Returns the names of the registered schemes.

::: definition

**Signature:**

```scss
@function schemes(): List;
```

**Example:**

```scss
$available-schemes: termeh.schemes(); // schemes registered by component overrides
```

:::

## Define Variable

Registers a CSS variable and its value, optionally associating it with a color scheme. Variables without a scheme are exported by `variables()` with no argument. Scheme-specific variables are exported by `variables($scheme)` for the matching scheme.

::: definition

**Signature:**

```scss
@function define-variable($name: String, $value: Mixed, $scheme: String = null);
```

**Example:**

```scss
$_: termeh.define-variable("navbar-height", #3498db);
$_: termeh.define-variable("navbar-height", #8ec5ed, "dark");
```

:::

::: error
**throw** If the input name is not a string.
:::

## Variable

Returns a CSS `var()` reference to a variable. This optional helper is useful when a component needs a fallback value for a scheme variable.

::: definition

**Signature:**

```scss
@function variable($name: String, $fallback: Mixed): Mixed;
```

**Example:**

```scss
.button {
 color: termeh.variable("color-primary", #3498db);
}
```

:::

::: error
**throw** If the input name is not a string.
:::

## Variables

Exports registered variables as CSS custom properties in the current selector. With no argument, it exports variables that are not associated with a scheme. Pass a scheme name to export variables associated with that scheme.

::: definition

**Signature:**

```scss
@mixin variables($scheme: String = null);
```

**Example:**

```scss
:root {
 @include termeh.variables();
}
```

:::
