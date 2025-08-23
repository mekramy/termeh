# Utilities

Termeh provides helper functions for mathematical operations, map/list handling, type validation, and error handling.

## Negate

Returns the negated value of a number.

::: definition

**Signature:**

```scss
@function negate($value: NUMBER): NUMBER;
```

**Example:**

```scss
$negated: termeh.negate(10px); // -10px
```

:::

## Half

Returns half of a number.

::: definition

**Signature:**

```scss
@function half($value: NUMBER): NUMBER;
```

**Example:**

```scss
$negated: termeh.half(20px); // 10px
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
$secondary: termeh.alter($colors, "secondary", #000); // #000
```

:::

## Should Include

Determines if a key should be included based on includes/excludes lists.

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
