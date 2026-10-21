---
name: sass-docs
applyTo: "**/*.scss"
description: Write or rewrite SassDoc comments for Sass/SCSS functions and mixins. Use whenever documentation comments need to be created, replaced, or corrected.
---

# SassDoc Conventions

## Scope

- Work on one function or mixin declaration at a time.
- Treat each declaration as self-contained. Do not search for usages, callers, or dependencies elsewhere in the project.
- Document only what the declaration's own source code shows. Never invent behavior, types, defaults, errors, or dependencies.
- Never modify executable code, signatures, or formatting. Only the doc comment changes.
- Never run commands (npm, git, etc.), install packages, or edit configuration files.
- Private declarations are the ones whose names start with `-`. Do not document them, and do not touch any comment they already have.

## Rewriting Existing Comments

- Always replace the existing doc comment completely. Ignore its old content and write a new one in the style below.
- If something is unclear and cannot be resolved from the declaration itself, write `TODO:` with a short note in place of the unclear part (type or description) and move on. Do not investigate further.

## Style

- Use simple, short, friendly English. Anyone reading it should understand exactly what the declaration does, without long or vague wording.
- Use "defined" / "not defined" when describing whether framework values exist. Avoid "configured".
- Use only `///` comments.
- Only the description lines (the first section) end with a period. Never end `@param`, `@return`, `@output`, `@throw`, or `@require` lines with a period.

## Comment Structure

The comment has up to three sections, separated by a blank `///` line. Omit any section that does not apply, and do not leave extra blank lines.

1. **Description:** a short summary of what the function or mixin does. The first line is a concise summary.
2. **Annotations:** `@param`, then `@return` (functions) or `@output` (mixins), then `@throw`.
3. **Requirements:** all `@require` lines.

Keep parameters in declaration order and requirements in source order.

## Types

Use these base types:

- `Number`: a truly unitless number (e.g. opacity).
- `Length`: any numeric value with or for a unit (rem, px, em, %, etc.). Always use `Length` for sizes, never `Number`.
- `String`, `Color`, `Boolean`
- `Arglist`: for every variadic parameter (`$args...`).
- Any CSS-specific value uses its own PascalCase name: `BoxShadow`, `FontWeight`, `TextAlign`, `FlexJustify`, etc.

Collections must always include their item types:

- `List<Type>`: e.g. `List<String>`, `List<Length>`
- `Map<KeyType, ValueType>`: e.g. `Map<String, FlexJustify>`, `Map<String, Length>`
- Never write a bare `List` or `Map`.
- Take the item types from how the values are used or from the values defined in the body. If they cannot be determined, write `TODO:` in place of the type.

CSS variables:

- Wrap the type for CSS custom properties: `Variable<Color>`, `Variable<Length>`.
- Combine with generics when needed: `Map<String, Variable<Color>>`, `List<Variable<Length> | Length>`.
- A parameter that is not validated in the body (no `assert-*` call) may also receive a CSS variable, so document it as a union: `Variable<Length> | Length`.
- A parameter validated with an `assert-*` call accepts only the real type, with no `Variable<...>`.

## `@param`

Format: `@param {Type} $name [default] - Description`

- Document only real parameters of the declaration, never local variables.
- Include `[default]` only when the parameter has an explicit default, written as in the source (`[null]`, `[()]`, etc.).
- Start the description with a capital letter. Keep it short and describe the purpose.

## `@return` and `@output`

- Functions: `@return {Type} Description`
- Mixins: `@output Description` (no type)
- Describe the real returned value or the generated styles.

## `@throw`

Format: `@throw If <invalid condition>`

- Generated from `assert-*` calls (e.g. `assert-string`, `assert-number`) and other explicit errors in the body.
- Write one line that covers all validations and names the affected parameters.
- Assertions are not parameters. Never document them as `@param`.

## `@require`

Format: `@require {Type} getter("arg", ...) [fallback] - Description`

- Framework functions and mixins are the ones imported from the framework's own files, not built-in Sass functions (`map.get`, `math.div`, etc.).
- Anything starting with `assert-` is a validator (see `@throw`). Every other framework function is a getter (`var`, `color`, `variant`, `size`, etc.).
- Document every getter value the declaration uses, including values stored in local variables first.
- Keep the getter name and arguments exactly as written, without the module prefix.
- Include `[fallback]` only when the getter call explicitly has one. Write it as the original expression, either another getter or a constant, never as a local variable name.
- Document each distinct getter expression once, in the order it first appears.
- Do not document ordinary local variables, calculations, or Sass built-ins.
- Choose the type from how the value is used. If it cannot be determined from the declaration, use `TODO:`.

## Examples

```scss
/// Applies table styles with configurable color variants.
///
/// @param {List<String>} $colors [()] - Registered color names to include; `null` includes all registered colors
///
/// @require {Variable<Color>} color("shade") - Sort backgrounds and decorators color
/// @require {Variable<Color>} color("primary") - Scrollbar accent color
/// @require {Variable<FontWeight>} var("table", "strong-weight") [var("strong", "weight")] - Header emphasis weight
@mixin use-table($colors: ()) {
}

/// Creates a translucent box shadow with blur based on its offset.
///
/// @param {Length} $x - Horizontal offset
/// @param {Length} $y - Vertical offset
/// @param {Color} $color - Shadow color
/// @return {BoxShadow} The shadow value
/// @throw If an offset is not a number or the color is not a color
@function shadow($x, $y, $color) {
}

///
/// @param {Variable<Length> | Length} $width - Scrollbar width
/// @param {Variable<Color> | Color} $track [null] - Track color
/// @param {Variable<Color> | Color} $thumb [null] - Thumb color
/// @param {Variable<Color> | Color} $thumb-hover [null] - Thumb hover color
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null) {
}
```

## Common Mistakes

Do not do this:

```scss
/// Looks up the width of a configured breakpoint.
///
/// @param {String} $name - Name of the breakpoint to look up.
/// @return {Number} Width of the breakpoint in pixels.
/// @throw If `$name` is not a string or is not a configured breakpoint.
```

Do this instead:

```scss
/// Looks up the width of a defined breakpoint.
///
/// @param {String} $name - Name of the breakpoint to look up
/// @return {Length} Width of the breakpoint
/// @throw If `$name` is not a string or is not a defined breakpoint
```

Problems in the first version:

- `@param`, `@return`, and `@throw` lines end with a period. Only description lines do.
- "configured" is used instead of "defined".
- `Number` is used for a pixel width. Use `Length`.

## Final Check

- Only description lines end with a period.
- Sections are separated by blank `///` lines: description, annotations, requirements.
- Annotation order is `@param`, `@return`/`@output`, `@throw`, `@require`.
- `Length` is used for all unit-based numbers, and `Number` only for unitless ones.
- Variadic parameters use `Arglist`.
- `Variable<...>` is used correctly (unvalidated params as a union, validated params as plain types).
- `@output` has no type.
- Private (`-`) declarations were skipped.
- Unclear parts are marked with `TODO:`.
- Only the doc comment changed.
