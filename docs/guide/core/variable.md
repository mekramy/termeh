# Global Variables

Termeh provides a centralized system for defining and retrieving component-specific variables. This allows for scoped, reusable, and easily maintainable styling across your project.

## Define

Defines a scoped variable for a component.

::: code-group

```scss [usage.scss]
@mixin define($Component, $Property, $Value);
```

```scss [example.scss]
@include define("button", "border-radius", 8px);
@include define("card", "padding", 16px);
```

:::

## Var

Retrieves the value of a previously defined component variable. Returns a fallback value if the variable is not set or `null`.

::: code-group

```scss [usage.scss]
@function var($Component, $Property, $Fallback: null);
```

```scss [example.scss]
$radius: var("button", "border-radius", 4px);
$padding: var("card", "padding", 8px);
```

:::
