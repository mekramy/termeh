# Utilities

Termeh includes handy helpers for math, maps and lists, type validation, and clear error messages.

## Negate

Flip a number's sign.

::: definition

**Signature:**

```scss
@function negate($value: Variable<Length> | Length): Calculation;
```

**Example:**

```scss
$negated: termeh.negate(10px); // calc(-1 * 10px)
```

:::

## Half

Divide a number by two.

::: definition

**Signature:**

```scss
@function half($value: Variable<Length> | Length): Calculation;
```

**Example:**

```scss
$half: termeh.half(20px); // calc(20px / 2)
```

:::

## Double

Multiply a number by two.

::: definition

**Signature:**

```scss
@function double($value: Variable<Length> | Length): Calculation;
```

**Example:**

```scss
$doubled: termeh.double(20px); // calc(20px * 2)
```

:::

## Child Radius

Calculate a child's border radius from the parent's radius and the space between the two elements.

::: definition

**Signature:**

```scss
@function child-radius(
  $parent-radius: Variable<Length> | Length,
  $padding: Variable<Length> | Length
): Calculation;
```

**Example:**

```scss
$child-radius: termeh.child-radius(10px, 2px); // calc(10px - 2px)
```

:::

## ternary

Choose a value based on a condition, just like a ternary operator.

::: definition

**Signature:**

```scss
@function ternary($condition: Boolean, $truly: Mixed, $falsy: Mixed): Mixed;
```

**Example:**

```scss
$color: termeh.ternary($dark-theme, black, white);
```

:::

## Alter

Get a value from a map, or use the _fallback_ when the key is missing.

::: definition

**Signature:**

```scss
@function alter($map: Map, $key: String, $fallback: Mixed): Mixed;
```

**Example:**

```scss
$colors: (
  "primary": #ff0000,
);
$primary: termeh.alter($colors, "primary", #000); // #ff0000
$green: termeh.alter($colors, "green", #000); // #000
```

:::

## Tokenize

Convert a name into the format used for Termeh CSS custom properties.

::: definition

**Signature:**

```scss
@function tokenize($name: String): String;
```

**Example:**

```scss
$token: termeh.tokenize("primaryColor"); // --termeh-primary-color
```

:::

::: error
**throw** If the name isn't a string.
:::

## Fallback Vars

Build a nested CSS `var()` fallback chain from a list of variable names and a fallback value.

::: definition

**Signature:**

```scss
@function fallback-vars($vars...): Variable<Mixed>;
```

**Example:**

```scss
color: termeh.fallback-vars(
  --primary,
  --secondary,
  --tertiary,
  red
); // var(--primary, var(--secondary, var(--tertiary, red)))
```

:::

## Alpha

Returns a color with the requested alpha transparency, accepting a color or CSS variable and a numeric or variable opacity.

::: definition

**Signature:**

```scss
@function alpha(
  $value: Variable<Color> | Color,
  $opacity: Variable<Number> | Number
): Color;
```

**Example:**

```scss
$transparent-black: termeh.alpha(black, 0.5); // rgb(from black r g b / 0.5)
$transparent-primary: termeh.alpha(var(--termeh-primary-color), 0.3); // rgb(from var(--termeh-primary-color) r g b / 0.3)
```

:::

## Shadow

Create a standard, translucent box shadow.

::: definition

**Signature:**

```scss
@function shadow($x: Length, $y: Length, $color: Color): BoxShadow;
```

**Example:**

```scss
$box-shadow: termeh.shadow(0px, 2px, black); // 0px 2px 4px 0 rgba(0, 0, 0, 0.3)
```

:::

::: error
**throw** If either offset isn't a number or the color isn't a valid color.
:::

## Soft Shadow

Create a soft, diffused box shadow.

::: definition

**Signature:**

```scss
@function soft-shadow($x: Length, $y: Length, $color: Color): BoxShadow;
```

**Example:**

```scss
$box-shadow: termeh.soft-shadow(0px, 2px, black); // 0px 2px 6px -2px rgba(0, 0, 0, 0.15)
```

:::

::: error
**throw** If either offset isn't a number or the color isn't a valid color.
:::

## Flat Shadow

Create a flat box shadow using the supplied color as-is.

::: definition

**Signature:**

```scss
@function flat-shadow($size: Length, $color: Color): BoxShadow;
```

**Example:**

```scss
$box-shadow: termeh.flat-shadow(4px, black); // 0 0 0 4px rgba(0, 0, 0, 1)
```

:::

::: error
**throw** If the size isn't a number or the color isn't a valid color.
:::

## Should Include

Check whether a key is allowed by the include and exclude filters.

::: definition

**Signature:**

```scss
@function should-include($key: String, $includes: List, $excludes: List): Boolean;
```

**Example:**

```scss
$keys: ("small", "medium", "large");
$included: termeh.should-include(
  "small",
  ("small", "medium"),
  ("large")
); // true
$excluded: termeh.should-include(
  "large",
  ("small", "medium"),
  ("large")
); // false
```

:::

::: error
**throw** If the key isn't a string or either filter isn't a valid list.
:::

## Type Validators

Use these helpers to validate _numbers_, _strings_, _colors_, _lists_, _maps_, _booleans_, and _functions_. If validation fails, they report the `function` and `parameter` names. Each type also has a `-safe` variant, which returns a _fallback_ when the input is `null`.

::: error
**throw** If the value doesn't match the expected type.
:::

::: definition

**Signatures:**

```scss
@function number-of($value: Mixed, $func: String, $param: String): Number;
@function number-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: Number = 0
  ): Number;
@function string-of($value: Mixed, $func: String, $param: String): String;
@function string-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: String = ""
  ): String;
@function color-of($value: Mixed, $func: String, $param: String): Color;
@function color-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: Color = null
  ): Color;
@function list-of($value: Mixed, $func: String, $param: String): List;
@function list-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: List = ()
  ): List;
@function map-of($value: Mixed, $func: String, $param: String): Map;
@function map-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: Map = ()
  ): Map;
@function bool-of($value: Mixed, $func: String, $param: String): Boolean;
@function bool-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: Boolean = false
  ): Boolean;
@function function-of($value: Mixed, $func: String, $param: String): Function;
@function function-safe(
    $value: Mixed,
    $func: String,
    $param: String,
    $fallback: Function = null
  ): Function;
```

**Example:**

```scss
// Number validation
$num: termeh.number-of(10px, "example", "num"); // 10px
$safe-num: termeh.number-safe(null, "example", "num", 5); // 5

// String validation
$str: termeh.string-of("hello", "example", "str"); // "hello"
$safe-str: termeh.string-safe(null, "example", "str", "default"); // "default"

// Color validation
$color: termeh.color-of(#ff0000, "example", "color"); // #ff0000
$safe-color: termeh.color-safe(null, "example", "color", #000); // #000

// List validation
$list: termeh.list-of(("a", "b"), "example", "list"); // ("a", "b")
$safe-list: termeh.list-safe(null, "example", "list", ("x")); // ("x")

// Map validation
$map: termeh.map-of(
  (
    "key": "value",
  ),
  "example",
  "map"
); // ("key": "value")
$safe-map: termeh.map-safe(
  null,
  "example",
  "map",
  (
    "default": 1,
  )
); // ("default": 1)

// Boolean validation
$bool: termeh.bool-of(true, "example", "bool"); // true
$safe-bool: termeh.bool-safe(null, "example", "bool", true); // true

// Function validation
$fn: termeh.function-of(my-func, "example", "fn");
$safe-fn: termeh.function-safe(null, "example", "fn", my-func);
```

:::

## Throw Error

Create a detailed error message when a value fails type validation.

::: definition

**Signature:**

```scss
@function throw-error(
  $value: Mixed,
  $func: String,
  $param: String,
  $expected: Mixed
): String;
```

**Example:**

```scss
@error termeh.throw-error("abc", "negate", "value", "number");
// Output: negate: value must be a number, but got "string" ("abc")
```

:::
