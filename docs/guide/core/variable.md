# Global Variables

Termeh provides a centralized system for defining and retrieving component-specific variables. This allows for scoped, reusable, and easily maintainable styling across your project.

::: tip
**theming** Termeh's variables are scheme-based, meaning they can have different values depending on the active color scheme.
:::

## Define

Defines a component-scoped variable.

::: error
**throws** If the component name or property name is not a string.
:::

::: definition

**Signature:**

```scss
@mixin define($Component: STRING, $Property: STRING, $Value: ANY);
```

**Example:**

```scss
@include termeh.define("button", "border-radius", 8px);
@include termeh.define("card", "padding", 16px);
```

:::

## Override

Overrides a component variable for a specific color scheme.

::: error
**throws** If the scheme name, component name, or property name is not a string.
:::

::: definition

**Signature:**

```scss
@mixin override($Scheme: STRING, $Com: STRING, $Prop: STRING, $Value: ANY);
```

**Example:**

```scss
@include termeh.override("dark", "base", "background", #222);
@include termeh.override("dark", "base", "foreground", white);
```

:::

## Value

Returns the value of a component-scoped variable. Returns a _fallback_ value if the variable is _not set_ or _null_.

::: error
**throws** If the component name or property name is not a string.
:::

::: definition

**Signature:**

```scss
@function value($Component: STRING, $Property: STRING, $Fallback: ANY = null);
```

**Example:**

```scss
$radius: termeh.value("radius", "normal", null);
$padding: termeh.value("card", "padding", 8px);
```

:::

## Scheme Value

Returns the value of a component variable for a specific color scheme. Returns a _fallback_ value if the variable is _not set_ or _null_.

::: error
**throws** If the scheme name, component name, or property name is not a string.
:::

::: definition

**Signature:**

```scss
@function scheme-value($Scheme: STRING, $Com: STRING, $Prop: STRING, $Fallback: ANY = null);
```

**Example:**

```scss
$radius: termeh.scheme-value("dark", "radius", "normal", 0);
$background: termeh.scheme-value("dark", "base", "background", #222);
```

:::

## Var

Returns the CSS variable reference for a component property.

::: error
**throws** If the component name or property name is not a string.
:::

::: definition

**Signature:**

```scss
@function var($Component: STRING, $Property: STRING, $Fallback: ANY = null): ANY;
```

**Example:**

```scss
$radius: termeh.var("radius", "normal", 4px);
$padding: termeh.var("card", "padding", 8px);
```

:::
