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
- Use "defined" / "not defined" when describing whether framework values exist. Never use "configured".
- Use only `///` comments.
- Only description lines (the first section) end with a period. Never end `@param`, `@return`, `@output`, `@throw`, or `@require` lines with a period.

## Comment Structure

The comment has up to three sections, separated by a blank `///` line. Omit any section that does not apply, and never leave extra blank lines.

1. **Description:** a concise summary line, then optional short paragraphs (each separated by a blank `///` line) that explain what the declaration does. Component mixins add their variations and variants paragraphs here (see Components).
2. **Annotations:** `@param`, then `@return` (functions) or `@output` (mixins), then `@throw`.
3. **Requirements:** all `@require` lines.

Keep parameters in declaration order and requirements in source order.

## Types

Base types:

- `Number`: a truly unitless number (e.g. opacity).
- `Length`: any numeric value that has or is meant for a unit (rem, px, em, %, etc.). Always use `Length` for sizes, never `Number`.
- `String`, `Color`, `Boolean`
- `Arglist`: for every variadic parameter (`$args...`).
- Any CSS-specific value uses its own PascalCase name: `BoxShadow`, `FontWeight`, `TextAlign`, `FlexJustify`, etc.

Collections must always include their item types:

- `List<Type>`: e.g. `List<String>`, `List<Length>`
- `Map<KeyType, ValueType>`: e.g. `Map<String, FlexJustify>`, `Map<String, Length>`
- Never write a bare `List` or `Map`.
- Take the item types from how the values are used or from the values defined in the body. If they cannot be determined, write `TODO:` in place of the type.

CSS variables:

- Many framework getters return a CSS custom property instead of the real value. Wrap the type: `Variable<Color>`, `Variable<Length>`, `Variable<FontWeight>`.
- Combine with generics when needed: `Map<String, Variable<Color>>`, `List<Variable<Length> | Length>`.
- A parameter that is not validated in the body (no `assert-*` call for it) may also receive a CSS variable, so document it as a union: `Variable<Length> | Length`.
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
- Anything starting with `assert-` is a validator (see `@throw`). Every other framework function is a getter (`var`, `color`, `variant`, `variant-for`, `size`, etc.).
- Document every getter value the declaration uses, including values stored in local variables first.
- Keep the getter name and arguments exactly as written, without the module prefix.
- Include `[fallback]` only when the getter call explicitly has one. Write it as the original expression, either another getter or a constant, never as a local variable name.
- Document each distinct getter expression once, in the order it first appears.
- Do not document ordinary local variables, calculations, or Sass built-ins.
- Choose the type from how the value is used. If it cannot be determined from the declaration, use `TODO:`.

## Components

Component mixins (`use-*`) can have two extra features. Document each as its own short paragraph in the description section, after the summary line. Write the variations paragraph first, then the variants paragraph. Both paragraphs end with a period.

### Variations

A variation is a set of generated classes (`.is-<name>`), created by looping with `@each` over a framework collection such as `sizes`, `colors`, `gaps`, or `units`.

- Detect them only from `@each` loops over those framework functions in the mixin body. Never guess from parameter names alone.
- Write one paragraph: ``Supports `size` and `color` variations.``
- Use the singular name (`size`, `color`, `gap`, `unit`) in backticks, in the order the loops appear in the source.
- The matching parameters (`$sizes`, `$colors`, ...) are still documented with `@param` as usual.

### Variants

A variant is a component value read with `variant-for("<component>", "<palette>", "<variant>")`. Variants can be overridden by defining them explicitly or by registering a custom resolver for the component.

- Detect them from `variant-for` calls in the mixin body, including calls assigned to local variables first.
- Document each call as a normal `@require` line, following the `@require` rules (source order, one line per distinct call, no fallback, no module prefix).
- Format: `@require {Variable<Type>} variant-for("<component>", "<palette>", "<variant>") - Description`
- Variant values are CSS variables, so always wrap the type in `Variable<...>`. Choose the inner type from the variant name and how the body uses it (`color`, `background`, `*-separator`, `decorator` give `Color`). If it cannot be determined, write `TODO:`.
- Description: say what the variant is used for, based on how the body uses it.
- Write one paragraph: ``Variants can be overridden by defining them explicitly or by registering a custom resolver for `table`.`` Use the component name from the first argument of `variant-for`.
- Write that paragraph only when the body has `variant-for` calls. A `define-component-resolver` call alone does not count, and it is never documented as a `@require`.
- Never read or document the resolver function. It is private (starts with `-`).
- The global `variant("<palette>", "<variant>")` getter is documented as a normal `@require` only. It does not add the override paragraph.

## Examples

```scss
/// Applies table styles.
///
/// Supports `color` variations.
///
/// Variants can be overridden by defining them explicitly or by registering a custom resolver for `table`.
///
/// @param {List<String>} $colors [()] - Registered color names to include; `null` includes all registered colors
///
/// @require {Variable<Color>} color("primary") - Scrollbar accent color
/// @require {Variable<FontWeight>} var("table", "strong-weight") [var("strong", "weight")] - Header emphasis weight
/// @require {Variable<Color>} variant-for("table", "base", "color") - Text color
/// @require {Variable<Color>} variant-for("table", "base", "background") - Background color
/// @require {Variable<Color>} variant-for("table", "base", "row-separator") - Row separator color
@mixin use-table($colors: ());

/// Applies button styles.
///
/// Supports `size` and `color` variations.
///
/// @param {List<String>} $colors [()] - Registered color names to include
/// @param {List<String>} $sizes [()] - Registered size names to include
@mixin use-button($colors: (), $sizes: ());

/// Creates a translucent box shadow with blur based on its offset.
///
/// @param {Length} $x - Horizontal offset
/// @param {Length} $y - Vertical offset
/// @param {Color} $color - Shadow color
/// @return {BoxShadow} The shadow value
/// @throw If an offset is not a number or the color is not a color
@function shadow($x, $y, $color);

/// Creates a custom scrollbar with optional track and thumb colors.
///
/// @param {Variable<Length> | Length} $width - Scrollbar width
/// @param {Variable<Color> | Color} $track [null] - Track color
/// @param {Variable<Color> | Color} $thumb [null] - Thumb color
/// @param {Variable<Color> | Color} $thumb-hover [null] - Thumb hover color
@mixin scrollbar($width, $track: null, $thumb: null, $thumb-hover: null);
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
- No bare `List` or `Map`: item types are always included.
- Variadic parameters use `Arglist`.
- `Variable<...>` is used correctly (unvalidated params as a union, validated params as plain types).
- `@output` has no type.
- The word "configured" is not used.
- Variations are listed only when an `@each` loop over a framework collection exists.
- Every `variant-for(...)` call appears once as `@require {Variable<Type>} variant-for(...)`, with no fallback.
- The override paragraph is present only when the body has `variant-for` calls, and it comes after the variations paragraph.
- Private (`-`) declarations were skipped, and no resolver function was read or documented.
- Unclear parts are marked with `TODO:`.
- Only the doc comment changed.
