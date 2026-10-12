# Global Variables

Termeh gives you one place to define and retrieve component-specific variables. This keeps styles scoped, reusable, and easy to maintain across your project.

::: scheme
Variables can have different values for each color scheme, so your components can adapt to the active scheme.
:::

## Define

Defines a variable scoped to a component.

::: definition

**Signature:**

```scss
@mixin define($com: String, $prop: String, $value: Mixed);
```

**Example:**

```scss
@include termeh.define("button", "border-radius", 8px);
@include termeh.define("card", "padding", 16px);
```

:::

::: error
**throw** If the component name or property name is not a string.
:::

## Override

Sets a component variable to a different value for a specific color scheme.

::: definition

**Signature:**

```scss
@mixin override($scheme: String, $com: String, $prop: String, $value: Mixed);
```

**Example:**

```scss
@include termeh.override("dark", "base", "background", #222);
@include termeh.override("dark", "base", "foreground", white);
@include termeh.override("dark", "button", "border-radius", 10px);
```

:::

::: error
**throw** If the scheme name, component name, or property name is not a string.
:::

## Value

Returns the value of a component variable. If the variable is not set or its value is `null` or `false`, returns the _fallback_ instead.

::: definition

**Signature:**

```scss
@function value($com: String, $prop: String, $fallback: Mixed = null): Mixed;
```

**Example:**

```scss
$radius: termeh.value("button", "border-radius");
$padding: termeh.value("card", "padding", 8px);
```

:::

::: error
**throw** If the component name or property name is not a string.
:::

## Scheme Value

Returns the value of a component variable for a specific color scheme. If the override is not set or its value is `null` or `false`, returns the _fallback_ instead; it does not fall back to the main value.

::: definition

**Signature:**

```scss
@function scheme-value($scheme: String, $com: String, $prop: String, $fallback: Mixed = null): Mixed;
```

**Example:**

```scss
$radius: termeh.scheme-value("dark", "button", "border-radius", 0);
$background: termeh.scheme-value("dark", "base", "background", #222);
```

:::

::: error
**throw** If the scheme name, component name, or property name is not a string.
:::

## Var

Returns a CSS custom property reference for a component property.

::: definition

**Signature:**

```scss
@function var($com: String, $prop: String, $fallback: Mixed = null): Variable;
```

**Example:**

```scss
$radius: termeh.var("button", "border-radius", 4px);
$padding: termeh.var("card", "padding", 8px);
```

:::

::: error
**throw** If the component name or property name is not a string.
:::
