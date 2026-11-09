---
name: docs
description: Generate ONE VitePress markdown documentation page from one or more SCSS files of the Termeh framework, using their `///` doc comments and the mixin/function bodies. Handles regular pages (utilities, validators, setters, getters, ...) and Styles pages (mixins that register a module with define-module or define-module-silent). The only output is markdown text. Use whenever the user gives or references one or more .scss files and asks for docs, a markdown page, an API reference, or "generate documentation", even if VitePress isn't mentioned.
---

# SCSS → Markdown documentation

Your only job is to write documentation text: read the SCSS file(s) the user gives and produce exactly ONE markdown page in English, in a friendly and readable tone.

The framework is called Termeh and its Sass namespace is `termeh`. Always use "Termeh" as the project name and `termeh.` in examples.

The page documents what the user gave you, as a whole. A page may cover a single file or several related files (for example a group of utility files). Never assume one file equals one page, and never mention file names inside the page.

Never run any command (no npm, git, shell, build or test). Only read the files and write the markdown.

## Termeh concepts

Read this once so you understand what you are documenting. Use these ideas to write accurate introductions and explanations; never copy this section into the page.

- Utility functions: small helper functions with a self-explanatory purpose.
- Validation functions: functions that start with `assert-` (for example `assert-string`). They validate input values and throw an error when the value is wrong. They are used everywhere in the framework, so their errors feed the `::: error` line of the functions that call them.
- Module: everything that emits CSS is registered as a module with `define-module` or `define-module-silent`. A module is emitted only once in the final CSS, and it can declare the modules it depends on (for example a `button` module can require the `element` module). The body of a module is placed inside `@at-root`, so it is safe to include it anywhere.
- Scheme system: the core support for multiple themes (for example `null` as the default, `dark`, `dracula`). Setters define the schemes, and getters register their values for every scheme. Then `@include termeh.variables` or `termeh.variable("dark")` writes the CSS variables into `:root` or a specific selector. A getter such as `termeh.color("primary")` registers all variables defined for the different schemes.
- Setters: mixins that define variables, colors, sizes, gaps and units: `define`, `define-palette`, `define-variant`, `define-gap`, `define-size`, and so on.
- Scheme setters: mixins that override a value for a scheme, usually named `override-*` (`override`, `override-palette`, `override-gap`, `override-variant`).
- Getters: functions that read values registered by setters and scheme setters. They come in two kinds:
  - Raw-value getters return the plain value and usually have `value` or `scheme` in the name (`value`, `color-value`, `scheme-color`, `size-value`, `scheme-size`). Use them when you need the raw value to compute something.
  - CSS-variable getters are the general rule: they return a CSS variable (`var(--...)`) and register that variable in the scheme system.
- Iterator getters: getters that return a map of registered values, such as `colors` (which gives `$name` and `$color`). They are mostly used to generate variations like `.is-primary`, `.is-secondary` and `.is-shade`.
- Styles: mixins that register a module (inside `define-module` or `define-module-silent`) and emit the styles of a component. They accept parameters, usually which variations to generate (for example which of the registered colors a button should generate). They use everything above. Most of them start with `use-`, but the real rule is: a mixin whose body is wrapped in `define-module` or `define-module-silent` is a style.

## Page types

Decide the page type from the content:

- Styles page: the given content is a style (see the rule above). Follow "Styles page format".
- Regular page: everything else. Follow "Regular page format".

A style usually has its own file and its own page. If several styles are given together, each one gets its own `# <Name> Styles` block, in the order given.

## Process

1. Read every given file completely: every `///` block and the body of each mixin/function. The doc comment is a short summary; the body is the source of truth for behavior, defaults, emitted CSS and errors. For styles, the doc comment and its `@require` tags are also the source of truth for dependency tables.
2. Decide the page type.
3. Work out the overall capability of the whole content: what it does together and what problem it solves. This becomes the introduction.
4. Write the markdown in the matching format below. Never invent behavior; if something is unclear, write `TODO:` in that spot.
5. Run the final checklist (end of this document) before outputting.
6. Save it as `<page-name>.md` in the docs folder the user names. For a single file, use its name without the leading `_` and the `.scss` extension. For several files, use the name the user gives, otherwise a short kebab-case name of the shared topic. If no folder is given, show it in chat.

## Regular page format

````markdown
# <Page Title In Title Case>

Termeh provides <what the content offers, in plain words>. <What it is designed for and when a developer would reach for it.> <Optionally one sentence on how the pieces work together.>

## <Mixin Or Function Name In Title Case>

<What it is for and when to use it: general purpose and behavior, expanded from the brief doc comment using the body. Parameters are NOT described here. For functions, end with a short paragraph about the return value.>

::: signature

```scss
@mixin define-gap($name: String, $gap: Length);
```

| Parameter | Type     | Description                             |
| --------- | -------- | --------------------------------------- |
| `$name`   | ~string~ | The =unique= name of the gap            |
| `$gap`    | ~length~ | The size of the gap, _must have a unit_ |

```scss
@include termeh.define-gap("small", 8px);
@include termeh.define-gap("medium", 16px);
@include termeh.define-gap("large", 32px);
```

:::

::: error
If `$name` is not a ~string~ or `$gap` is not a ~length~.
:::
````

Example of a good explanation paragraph (note the highlights):

> Registers a named =spacing token= so it can be reused across the project. The gap is stored once and @duplicate names are ignored@, which keeps the generated CSS clean.

Example of a well-formatted, practical example block for a mixin with a content block (this is a guide for you, never output this label):

```scss
@include termeh.define-module("tokens") {
  :root {
    --space: 1rem;
  }
}

@include termeh.define-module("buttons", "tokens") {
  .button {
    gap: var(--space);
  }
}
```

## Styles page format

````markdown
# <Name> Styles

Termeh's <name> style provides <what it renders>. <What variations it can generate and what the module emits.>

::: signature

```scss
@mixin use-button($colors: List<String>, $sizes: List<String>);
```

| Parameter | Type             | Description                                |
| --------- | ---------------- | ------------------------------------------ |
| `$colors` | ~list\<string\>~ | The list of _color_ variations to generate |
| `$sizes`  | ~list\<string\>~ | The list of _size_ variations to generate  |

```scss
@include termeh.use-button(
  ("primary", "secondary"),
  ("small", "medium", "large")
);
```

:::

::: module
This module is registered as `button` and requires the `element` module.
:::

## Elements

- `.buttons` - Groups buttons together. It acts as the parent of the buttons inside it.
- `em` - Styled as the button's icon wrapper.

## Modifiers

- `.is-light` - Switches the button to its light background variant.

## Size Variants

Buttons can have different size variants using the `is-{size}` modifier. Size modifiers correspond to the sizes registered in the `$sizes` argument of `use-button`.

## Color Variants

Buttons can have different color variants using the `is-{color}` modifier. Color modifiers correspond to the colors registered in the `$colors` argument of `use-button`.

::: block dependencies

Button module uses the following variants of each color to generate color modifiers.

| Variant        | Description               |
| -------------- | ------------------------- |
| **foreground** | Default button text color |
| **text**       | Simple button text color  |

:::

## Customization

This style uses the following dependencies. Change them to change how the button looks.

::: block dependencies

Button module uses the following Termeh global _vars_:

| Component   | Variable   | Type     | Usage                                          |
| ----------- | ---------- | -------- | ---------------------------------------------- |
| **gap**     | **micro**  | ~length~ | Gap between grouped buttons @throw on missing@ |
| **radius**  | **normal** | ~length~ | Standard button radius                         |
| **control** | **height** | ~length~ | Button height @throw on missing@               |

Button module uses the following Termeh _colors_ and _variants_:

| Color     | Variant / Caution  | Usage                              |
| --------- | ------------------ | ---------------------------------- |
| **shade** | @throw on missing@ | Default focus/active outline color |
| **shade** | **text**           | Default text/icon color            |
| **shade** | **light**          | Default button background          |

:::
````

### Styles rules

- Page title: `# <Name> Styles`, for example `# Button Styles`. Write the title once per style; never repeat it.
- Introduction: starts with "Termeh's <name> style provides ..." or "Termeh provides ...", then what the style renders and which variations it can generate. Same rules as the regular introduction (2–4 sentences, 1–3 highlights, never "This file").
- Signature block: same as in regular pages (signature, parameter list, 1 to 3 realistic examples), but there is no explanation paragraph between the title and the block, because the introduction already explains the style. Parameters usually say which variations to generate; describe them that way. If an example call is longer than about 80 characters, break the arguments over multiple lines.
- `::: module`: always right after the signature block, with one or two sentences: "This module is registered as `<name>`." The name is the first argument of `define-module` / `define-module-silent`. If the module declares dependencies (further arguments), add "and requires the `<dep>` module" (list them all). Never omit this block.
- `::: error`: optional, right after `::: module`, with the same single-line `If ...` rule as regular pages. Include it only if the body or doc comment can throw.
- Elements (`## Elements`): list only the non-obvious elements and selectors the module styles or uses, including children and ancestors (for example a `.buttons` wrapper or `em` inside a button). Skip ordinary and expected ones (for example the usual children of a table). One bullet per element: ``- `selector` - what it is for and what is applied to it``. Read selectors from the body. Omit the section if there are none.
- Modifiers (`## Modifiers`): list the static modifiers found in the body (for example `.is-light`, `.is-loading`), one bullet each: ``- `.is-light` - what it changes``. Do NOT list modifiers that come from an `@each` over sizes, colors, gaps or units; those belong only in the variation sections. Omit the section if there are none.
- Variation sections: for every `@each` (or similar loop) that generates modifiers, write one `##` section named after the dimension: `## Size Variants`, `## Color Variants`, `## Gap Variants`, and so on. Each starts with a short verbal explanation in the shape "<Plural> can have different <dimension> variants using the `is-{<dimension>}` modifier. <Dimension> modifiers correspond to the <dimension>s registered in the `$<param>` argument of `<mixin-name>`." Add what else the loop affects when the body shows it.
- Variant tables: if the loop reads variants of a palette color (the doc comment lists them with `@require`), add a `::: block dependencies` container to that variation section with one sentence and a `| Variant | Description |` table. Take the variant names and descriptions from the doc comment, with the variant name in bold. Do not add this container when there are no variants.
- Customization (`## Customization`): the last section. One sentence saying the style uses the following dependencies, then one `::: block dependencies` container with:
  - A global vars table, `| Component | Variable | Type | Usage |`, with one row per global var (gap, size, radius, unit, control, decorator, ...). Component and Variable are in bold, Type is lowercase wrapped in `~` (`~length~`, `~number~`), Usage is a short phrase with no period.
  - A colors table, `| Color | Variant / Caution | Usage |`, with one row per color/variant pair. When only the color itself is used, put `@throw on missing@` in the Variant / Caution column.
  - Omit a table if it has no rows, and the whole section if the style has no dependencies.
- Where the data comes from: types, descriptions, usages and variants in the dependency tables come from the doc comment and its `@require` tags. Do not guess them from the body. If the doc comment lacks something, write `TODO:` in that cell.
- Throwing getters: these getters throw an error when the value is not registered: `gap-value`, `scheme-gap`, `gap`, `color-value`, `scheme-color`, `color`, `size-value`, `scheme-size`, `size`, `unit`. Whenever a dependency row comes from one of them, add `@throw on missing@`: at the end of the Usage cell in the global vars table, and in the Variant / Caution cell in the colors table when no variant is used. Any other getter does not get this mark.
- Order: title, introduction, signature block, module block, error block (optional), Elements, Modifiers, variation sections, Customization.
- Containers allowed in a Styles page: `signature`, `module`, `error`, `block dependencies`. No others.

## Regular page rules

### Introduction

- It starts with Termeh as the subject, followed by a verb: "Termeh provides ...", "Termeh includes ...", "Termeh offers ...".
- NEVER start with "This file", "This module", "This SCSS", "These files" or any phrase that talks about files or modules as containers. Talk about what the code does, not where it lives.
- 2–4 sentences, plain and simple, no jargon walls. Describe the overall capability of all the given content together, then what it was designed for. Do not list every mixin/function and do not describe implementation details like "emitted at the root level only when first registered"; that belongs in the specific section.
- Highlight 1–3 key concepts in the paragraph.
- The page title (`#`) names the topic or capability of the content (for several files, the shared topic), not a file name.

### Sections

- One `##` section per public mixin/function, in the order the files were given, then in file order inside each file. Skip private ones (name starts with `-`) unless asked.
- Each section has this fixed order: explanation, `::: signature` (signature, parameter list, examples), `::: error`. No other containers.
- Explanation: only general purpose and usage. Never describe or mention individual parameters; the parameter list does that.
- Signature: a plain `scss` block, `@mixin name($param: Type = default);` or `@function name($param: Type): ReturnType;`. Long signatures are broken over multiple lines, one parameter per line.
- Parameter list: right after the signature, exactly ``| `$name` | ~type~ | description |``. The type is lowercase wrapped in `~` (see "Types" below), for example `~string~`, `~length~`, `~number~`, `~arglist~`, `~list\<string\>~`, `~map\<string, flexjustify\>~`. Mention the default value in the description when there is one. Omit the list if there are no parameters.
- Examples: after the parameter list, inside `::: signature`, add exactly one `scss` code block with 1 to 3 realistic calls with varied arguments, using the namespace `termeh.`. Do NOT add any title or label line before it, such as "Example of usage:". Use fewer examples when the API is simple and more only when the calls really differ (e.g. with and without optional parameters).
- Example formatting: the code in examples must always be formatted and multiline, as if run through a formatter:
  - Every declaration goes on its own line, with one level of indentation (2 spaces) per nesting level.
  - Never put a rule and its declarations on the same line: no `.button { gap: 1rem; }` and no `:root { --space: 1rem; }`. Open the block, put each declaration on its own line, then close the block on its own line.
  - Mixins that take a content block (`@content`) are written with their block expanded over multiple lines.
  - Separate multiple calls with one blank line.
  - Simple calls without a content block stay on a single line (`@include termeh.define-gap("small", 8px);`).
  - No trailing whitespace anywhere.
- Arglist: a variadic parameter (`$args...`) is always typed `Arglist`, never `List`. In signatures write `$args: Arglist...`, in the parameter list and prose write `~arglist~` and call it an "arglist" (e.g. "an ~arglist~ of colors"), never "list". Use `List` only for real list parameters.
- Error: `::: error` holds exactly ONE line starting with `If`, never several lines or paragraphs. Collect every `@throw` in the doc comment and every `@error` or assert-style call in the body (including `assert-*` validation functions), and merge all conditions into that single sentence. When the error line names an input, write it with its `$` prefix as inline code (`$name`, `$gap`), never as plain "name" or "the gap value". If nothing can throw, omit the block.
- Doc tags are input: `@param` → parameter list, `@output` and `@content` → explanation, `@throw` → error line, `@require` → dependency tables (Styles pages).

## Rules for all pages

### Types

- Types outside code are always lowercase and wrapped in `~`: `~string~`, `~number~`, `~length~`, `~color~`, `~boolean~`, `~map~`, `~list~`, `~arglist~`, `~variable~`, `~flexjustify~`. This applies to prose, parameter lists, dependency tables and error lines.
- Types are mandatory everywhere: generics for collections, `~length~` for unit values, `~number~` only for unitless, `~variable\<length\>~` for CSS-var getters.
- Generic types outside code are escaped. Write the angle brackets with a backslash in front of each one: `~list\<string\>~`, `~map\<string, flexjustify\>~`, `~variable\<length\>~`. Always escape both the opening `\<` and the closing `\>`. A bare `<` or `>` outside code is wrong, because markdown/Vue parse it as an HTML tag and break the page.
- Inside code, types stay Capitalized and are never escaped. In fenced code blocks and in inline code (backticks), write types exactly as in the source (`List<String>`), because a backslash would be shown literally there.
- In prose, write types as ~x~ inline, not in backticks, so the escape works (for example: "a ~list\<string\>~ of color names").

### Tables

- Every table must be compact and unformatted, never aligned like a formatter would do.
- Write exactly one space between a pipe and the cell content, and nothing else. Never pad cells with extra spaces to line the columns up.
- The separator row is always `| -- | -- |`, with exactly two dashes per column and no alignment colons.
- Cell content is a short, meaningful phrase with no trailing period, for example "Gap between grouped buttons" instead of a full sentence.
- This applies to every table: parameter lists, variant tables and both dependency tables.

### Other rules

- Prose sentences end with a period; code, types and table cells don't.
- Never mention file names in the page.

### Example quality

Examples are the part developers read first, so make them realistic and useful, not placeholder code.

- Show the real use case the mixin/function was designed for. Ask yourself: "where would a developer actually write this in a project?" and write that.
- Use meaningful, real-world names for values, selectors and tokens: `"primary"`, `"card"`, `.button`, `.alert`, `--space`, `16px`, `1.5rem`. Never use `foo`, `bar`, `test`, `example`, `x`, `a`, `b`, `my-thing`.
- Make the calls differ in a meaningful way: for instance one minimal call, one with optional parameters, and one with a content block. Never repeat the same call with only a number changed.
- For mixins that emit CSS, put realistic content inside the block (real properties like `display: flex`, `gap`, `padding`, `color`), not empty or one-property stubs.
- For functions, show the function used in context, assigned to a variable or used as a property value, for example `padding: termeh.rem(24px);`. Do not show a bare call with no usage.
- When the pieces of the page work together, let the examples build on each other (the same tokens, names or components appearing across sections) so the page feels like one coherent system.
- Keep each example short and focused on the thing being documented: no more than about 12 lines per example block, and no unrelated code.
- Only use behavior that exists in the source. Never invent parameters, values or output. If you are unsure a call is valid, simplify it or write `TODO:`.

### Highlighting (mandatory)

Highlighting is required, not optional. Every prose paragraph, list and table must contain highlights, using one of four markers:

Use the markers shown in the templates: bold for key concepts, the important-term marker for requirements and actions, the warning marker sparingly for the most important rules, and the name marker for names worth pointing at.

Amount: at least 1 highlight per prose paragraph, usually 2 to 3, 1–3 words each, never whole sentences. A paragraph with zero highlights is wrong. The return-value paragraph of a function gets at least 1 as well. Never highlight inside code blocks, signatures, or the error line. The `@throw on missing@` mark is a fixed marker and is used exactly as written.

## Final checklist

Before outputting, verify:

1. The page type is right: a mixin wrapped in `define-module` / `define-module-silent` gets the Styles format, everything else gets the regular format.
2. The introduction starts with "Termeh", not "This file".
3. The introduction describes everything given, not only the first file.
4. No file names appear anywhere in the page.
5. Every prose paragraph (introduction, explanation, return value, variation text) has at least 1 highlight.
6. Every parameter description with a constraint or default has a highlight.
7. Every regular section has the fixed order and exactly one error line (or none). No bare `<` or `>` appears outside code; every generic outside code is escaped inside `~`, like `~list\<string\>~`.
8. Every signature block has between 1 and 3 examples, in a single `scss` block.
9. No example has a rule and its declarations on the same line; all nested code is expanded over multiple lines with 2-space indentation and no trailing whitespace.
10. Examples use realistic names and real use cases (no `foo`/`bar`), differ meaningfully from each other, and functions are shown in context.
11. Styles page only: the title is written once, there is a `::: module` block with the registered name and its dependencies, and the section order is signature, module, error, Elements, Modifiers, variation sections, Customization.
12. Styles page only: modifiers generated by `@each` appear only in their variation section, not in Modifiers.
13. Styles page only: every dependency row built from `gap-value`, `scheme-gap`, `gap`, `color-value`, `scheme-color`, `color`, `size-value`, `scheme-size`, `size` or `unit` carries `@throw on missing@`, and no other row does.
14. Styles page only: dependency types and descriptions come from the doc comment and `@require` tags, with `TODO:` where missing.
15. Every type outside code is lowercase and wrapped in `~` (`~string~`, `~length~`, `~arglist~`, `~list\<string\>~`) in parameter lists, dependency tables, error lines and prose. Types inside code stay Capitalized. No square-bracket generics like `list[string]` anywhere.
16. Every table is compact: separator `| -- | -- |`, one space around each cell's content, no padding, and no trailing period in cells.
