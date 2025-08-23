# Global Variables

Termeh provides a centralized system for defining and retrieving component-specific variables. This allows for scoped, reusable, and easily maintainable styling across your project.

## Define

Defines a scoped variable for a component.

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

## Var

Retrieves the value of a previously defined component variable. Returns a _fallback_ value if the variable is _not set_ or _null_.

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
