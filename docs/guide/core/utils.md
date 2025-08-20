# Utilities

Termeh provides helper functions for mathematical operations, map/list handling, type validation, and error handling.

---

## Negate

Returns the negated value of a number.

::: code-group

```scss [usage.scss]
@function negate($value);
```

```scss [example.scss]
$value: 10px;
$negated: negate($value); // -10px
```

:::

---

## Half

Returns half of a number.

::: code-group

```scss [usage.scss]
@function half($value);
```

```scss [example.scss]
$value: 20px;
$half-value: half($value); // 10px
```

:::

---

## Alter

Gets a value from a map with a fallback if the key doesn't exist.

::: code-group

```scss [usage.scss]
@function alter($map, $key, $alt);
```

```scss [example.scss]
$colors: (
  "primary": #ff0000,
);
$primary: alter($colors, "primary", #000); // #ff0000
$secondary: alter($colors, "secondary", #000); // #000
```

:::

---

## Should Include

Determines if a key should be included based on includes/excludes lists.

::: code-group

```scss [usage.scss]
@function should-include($key, $includes, $excludes);
```

```scss [example.scss]
$keys: ("small", "medium", "large");
$included: should-include("small", ("small", "medium"), ("large")); // true
$excluded: should-include("large", ("small", "medium"), ("large")); // false
```

:::

---

## Type Validators

Functions to validate various types: `number-of`, `string-of`, `color-of`, `list-of`, `map-of`, `bool-of`, `function-of`.
Each also has a `-safe` variant that allows a fallback value.

::: code-group

```scss [usage.scss]
@function number-of($value, $func, $param);
@function number-safe($value, $func, $param, $fallback: 0);
@function string-of($value, $func, $param);
@function string-safe($value, $func, $param, $fallback: "");
@function color-of($value, $func, $param);
@function color-safe($value, $func, $param, $fallback: null);
@function list-of($value, $func, $param);
@function list-safe($value, $func, $param, $fallback: ());
@function map-of($value, $func, $param);
@function map-safe($value, $func, $param, $fallback: ());
@function bool-of($value, $func, $param);
@function bool-safe($value, $func, $param, $fallback: false);
@function function-of($value, $func, $param);
@function function-safe($value, $func, $param, $fallback: null);
```

```scss [example.scss]
// Number validation
$num: number-of(10px, "example", "num"); // 10px
$safe-num: number-safe(null, "example", "num", 5); // 5

// String validation
$str: string-of("hello", "example", "str"); // "hello"
$safe-str: string-safe(null, "example", "str", "default"); // "default"

// Color validation
$color: color-of(#ff0000, "example", "color"); // #ff0000
$safe-color: color-safe(null, "example", "color", #000); // #000

// List validation
$list: list-of(("a", "b"), "example", "list"); // ("a", "b")
$safe-list: list-safe(null, "example", "list", ("x")); // ("x")

// Map validation
$map: map-of(
  (
    "key": "value",
  ),
  "example",
  "map"
); // ("key": "value")
$safe-map: map-safe(
  null,
  "example",
  "map",
  (
    "default": 1,
  )
); // ("default": 1)

// Boolean validation
$bool: bool-of(true, "example", "bool"); // true
$safe-bool: bool-safe(null, "example", "bool", true); // true

// Function validation
$fn: function-of(my-func, "example", "fn");
$safe-fn: function-safe(null, "example", "fn", my-func);
```

:::

---

## Throw Error

Creates a detailed error message for type validation failures.

::: code-group

```scss [usage.scss]
@function throw-error($value, $func, $param, $expected);
```

```scss [example.scss]
@error throw-error("abc", "negate", "value", "number");
// Output: negate: value must be a number, but got "string" ("abc")
```

:::
