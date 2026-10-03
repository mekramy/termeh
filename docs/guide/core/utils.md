# Utilities

Termeh provides helper functions for mathematical operations, map/list handling, type validation, and error handling.

## Negate

Returns the negated value of a number.

::: definition

**Signature:**

```scss
@function negate($value: NUMBER): CALC();
```

**Example:**

```scss
$negated: termeh.negate(10px); // calc(-1 * 10px)
```

:::

## Half

Returns half of a number.

::: definition

**Signature:**

```scss
@function half($value: NUMBER): CALC();
```

**Example:**

```scss
$negated: termeh.half(20px); // calc(20px / 2)
```

:::

## Double

Returns double of a number.

::: definition

**Signature:**

```scss
@function double($value: NUMBER): CALC();
```

**Example:**

```scss
$negated: termeh.double(20px); // calc(20px * 2)
```

:::

## Child Radius

Calculates the border radius for a child element based on the parent element's radius and the padding between them.

::: definition

**Signature:**

```scss
@function child-radius($parent-radius: NUMBER, $padding: NUMBER): CALC();
```

**Example:**

```scss
$child-radius: termeh.child-radius(10px, 2px); // calc(10px - 2px)
```

:::

## ternary

Ternary operator for Sass.

::: definition

**Signature:**

```scss
@function ternary($condition: BOOLEAN, $truly: ANY, $falsy: ANY): ANY;
```

**Example:**

```scss
$color: termeh.ternary($dark-theme, black, white);
```

:::

## Alter

Gets a value from a map with a _fallback_ if the key doesn't exist.

::: definition

**Signature:**

```scss
@function alter($map: MAP, $key: STRING, $alt: ANY): ANY;
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

Tokenizes a given name into a CSS custom property format.

::: error
**throws** If the input name is not a string.
:::

::: definition

**Signature:**

```scss
@function tokenize($name: STRING): STRING;
```

**Example:**

```scss
$token: termeh.tokenize("primaryColor"); // --termeh-primary-color
```

:::

## Fallback Vars

Generates a nested CSS `var()` fallback chain.

::: error
**throws** If the input is not a valid list.
:::

::: definition

**Signature:**

```scss
@function fallback-vars($vars: LIST): VAR();
```

**Example:**

```scss
color: fallback-vars((
  "--primary", 
  "--secondary", 
  "--tertiary",
  red
)); /// var("--primary", var("--secondary", var("--tertiary", red)))
```

:::

## Alpha

Generates a color from `VAR` or color with the specified alpha transparency.

::: error
**throws** If opacity not a valid number.
:::

::: definition

**Signature:**

```scss
@function alpha($value: ANY, $opacity: NUMBER): COLOR;
```

**Example:**

```scss
$transparent-black: termeh.alpha(black, 0.5); // rgb(from black r g b / 0.5)
$transparent-primary: termeh.alpha(var(--termeh-primary-color), 0.3); // rgb(from var(--termeh-primary-color) r g b / 0.3)
```

:::

## Shadow

Generates a standard translucent box shadow.

::: error
**throws** If the input x or y is not a number or if the input color is not a color.
:::

::: definition

**Signature:**

```scss
@function shadow($x: NUMBER, $y: NUMBER, $color: COLOR): LIST();
```

**Example:**

```scss
$box-shadow: termeh.shadow(0px, 2px, black); // 2px 2px 4px 0 rgba(0, 0, 0, 0.3)
```

:::

## Soft Shadow

Generates a soft, diffused box shadow.

::: error
**throws** If the input x or y is not a number or if the input color is not a color.
:::

::: definition

**Signature:**

```scss
@function soft-shadow($x: NUMBER, $y: NUMBER, $color: COLOR): LIST();
```

**Example:**

```scss
$box-shadow: termeh.soft-shadow(0px, 2px, black); // 0px 2px 6px -2px rgba(0, 0, 0, 0.15)
```

:::

## Flat Shadow

Generates a flat box shadow with transparency.

::: error
**throws** If the input size is not a number or if the input color is not a color.
:::

::: definition

**Signature:**

```scss
@function flat-shadow($size: NUMBER, $color: COLOR): LIST();
```

**Example:**

```scss
$box-shadow: termeh.flat-shadow(4px, black); // 0 0 0 4px rgba(0, 0, 0, 1)
```

:::

## Should Include

Determines whether a key passes the include and exclude filters.

::: error
**throws** If the input key is not a string or if the includes/excludes lists are not valid lists.
:::

::: definition

**Signature:**

```scss
@function should-include($key: STRING, $includes: LIST, $excludes: LIST) BOOLEAN;
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

## Type Validators

Functions to validate _number_, _string_, _color_, _list_, _map_, _bool_, and _function_. They generate an _error_ if validation fails, referencing the `function` and `parameter` names. Each also has a `-safe` variant that returns a _fallback_ value when the input is `null`.

::: error
**throws** If type mismatch.
:::

::: definition

**Signatures:**

```scss
@function number-of($value: ANY, $func: STRING, $param: STRING): NUMBER;
@function number-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: NUMBER = 0
  ): NUMBER;
@function string-of($value: ANY, $func: STRING, $param: STRING): STRING;
@function string-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: STRING = ""
  ): STRING;
@function color-of($value: ANY, $func: STRING, $param: STRING): COLOR;
@function color-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: COLOR = null
  ): COLOR;
@function list-of($value: ANY, $func: STRING, $param: STRING): LIST;
@function list-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: LIST = ()
  ): LIST;
@function map-of($value: ANY, $func: STRING, $param: STRING): MAP;
@function map-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: MAP = ()
  ): MAP;
@function bool-of($value: ANY, $func: STRING, $param: STRING): BOOLEAN;
@function bool-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: BOOLEAN = false
  ): BOOLEAN;
@function function-of($value: ANY, $func: STRING, $param: STRING): FUNCTION;
@function function-safe(
    $value: ANY,
    $func: STRING,
    $param: STRING,
    $fallback: FUNCTION = null
  ): FUNCTION;
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

Creates a detailed error message for type validation failures.

::: definition

**Signature:**

```scss
@function throw-error(
  $value: ANY,
  $func: STRING,
  $param: STRING,
  $expected: ANY
);
```

**Example:**

```scss
@error termeh.throw-error("abc", "negate", "value", "number");
// Output: negate: value must be a number, but got "string" ("abc")
```

:::
