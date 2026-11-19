---
name: docs
description: Generate one concise VitePress Markdown documentation page from one or more Termeh SCSS files, using their doc comments and source code.
---

# SCSS → Markdown documentation

Your only job is to write documentation text: read the SCSS file(s) the
user provides and produce exactly ONE Markdown page in English.

The page is read by **Termeh users** (developers), not by a machine and
not by people studying the implementation. Say what an API does and what
it is used for, briefly. Leave out behind-the-scenes mechanics unless
they are needed to use the API correctly.

Always use "Termeh" as the project name and `termeh.` in examples.

A page may cover one file or several related files. Never mention source
file names in the page.

Never run build, test or version-control commands. Only read the
supplied files and write Markdown.

## Termeh concepts

Use these concepts to understand the source. Do not copy this section
into the page.

- Utility functions are small helpers with a self-explanatory purpose.
- Validation functions start with `assert-`. They throw an error when
  the input is invalid.
- A module is registered with `define-module`. It emits its styles once
  and may depend on other modules.
- The scheme system supports multiple themes, such as the default scheme
  and `dark`. Setters define values; scheme setters override them for a
  specific scheme; getters read them.
- Some getters return raw values; others return CSS variables.
- Iterator getters return collections of registered values, commonly
  used to generate variations.
- Style mixins (`use-*`) register a module and emit component styles.
  They often accept lists of variations to generate.

## Page types

- **Styles page:** a mixin whose body registers a module with
  `define-module`.
- **Regular page:** everything else.

If several styles are supplied together, give each one its own
`# <Name> Styles` block, in the order provided.

## Process

1. Read every supplied file completely, including every `///` doc
   comment and the body of each public mixin or function.
2. Treat the source code as the truth for behavior, defaults and errors.
   Use doc comments and `@require` tags for descriptions and dependency
   tables.
3. Decide whether it is a Regular page or a Styles page.
4. Write the page in the matching format below. Never invent behavior.
   If an essential detail cannot be established, write `TODO:` there.
5. Check the result against the final checklist.
6. Save the page as `<page-name>.md` in the documentation folder the
   user names. For one source file, use its name without the leading `_`
   and the `.scss` extension. For multiple files, use the name the user
   supplied or a short kebab-case name for the shared topic. If no folder
   is given, show the Markdown in chat.

## Frontmatter

Every page starts with YAML frontmatter containing `description:`.

```yaml
---
description: Short description of what this page covers.
---
```

The description is for LLMs. In one short sentence, say what the page
covers and what it is used for. Do not repeat the page title and do not
include implementation details. Keep any other frontmatter fields the
user explicitly asks for.

## Regular page format

````markdown
---
description: Define and use spacing gaps in a Termeh project.
---

# Gaps

Termeh provides =spacing tokens= for consistent layouts. It helps developers define gap sizes once and reuse them everywhere.

## Define Gap

=Registers= a named gap size.

::: signature

```scss
@mixin define-gap($name: String, $gap: Length);
```

| Parameter | Type     | Description    |
| --------- | -------- | -------------- |
| `$name`   | ~string~ | The =gap= name |
| `$gap`    | ~length~ | The gap =size= |

```scss
@include termeh.define-gap("small", 8px);
```

:::

::: error
If `$name` is not a ~string~ or `$gap` is not a ~length~.
:::
````

### Introduction

- Start with "Termeh" as the subject and a verb: "Termeh provides...",
  "Termeh includes...", "Termeh offers...". Never start with "This
  file", "This module" or similar.
- 1–3 short sentences: the overall capability and when a developer would
  use it. Do not list every API.

### API sections

- One `##` section per public mixin or function, in the order of the
  supplied files, then in source order. Skip private APIs (names start
  with `-`).
- Heading: the API name in Title Case (`define-gap` → `Define Gap`).
- Section order: explanation, `::: signature`, optional `::: error`.
- The explanation says what the API does and when to use it, in one or
  two short sentences. It often opens with the main action verb
  highlighted with `=`, such as "=Registers= a named gap size.".
- Do not describe parameters in the explanation. For functions, end with
  a short statement about the returned value.

### Signature and parameters

- Put the signature in a plain `scss` block, using
  `@mixin name($param: Type = default);` or
  `@function name($param: Type): ReturnType;`.
- Break long signatures over several lines, one parameter per line.
- Add a parameter table right after the signature when parameters exist.
  Omit it when there are none.
- Use exactly this table shape:

  ```markdown
  | Parameter | Type | Description |
  | --------- | ---- | ----------- |
  ```

- Parameter descriptions are **short, readable phrases**, not sentences:
  - No trailing period.
  - Prefer the form "The =key word= name/value", for example
    "The =component= name" or "The =fallback value= when none is set".
  - Do not repeat the parameter name as a sentence ("The name of the
    name").
  - Mention a default only when it helps, written as inline code:
    "The =scheme name=, or `null` for the =default scheme=".
  - Optional extra detail goes after a comma, never as a second sentence.

### Examples

- At most ONE `scss` example per API. One is enough.
- Place it after the parameter table, inside `::: signature`.
- Use the `termeh.` namespace and realistic names and values.
- For functions, show the result used in context (a variable or a CSS
  property).
- Keep it short and well formatted: one declaration per line, two-space
  indentation, content blocks expanded over several lines, no rule and
  declarations on one line, no trailing whitespace.
- If no useful example can be written confidently, omit it.

### Errors

- `::: error` contains exactly one sentence starting with `If`.
- Combine all relevant `@throw` tags, `@error` statements and
  assert-style checks into that one sentence.
- Name parameters in inline code with the `$` prefix, and use `~type~`
  markers for types.
- Omit the block if the API cannot throw.

### Doc tags

- `@param` informs the parameter table.
- `@output` and `@content` inform the explanation.
- `@throw` informs the error line.
- `@require` informs Styles page dependency tables.

## Styles page format

````markdown
---
description: Button component styles with color and size variations.
---

# Button Styles

Termeh's button style provides =buttons= in several shapes. It supports color and size variations.

::: signature

```scss
@mixin use-button($colors: List<String>, $sizes: List<String>);
```

| Parameter | Type             | Description                        |
| --------- | ---------------- | ---------------------------------- |
| `$colors` | ~list\<string\>~ | The =color= variations to generate |
| `$sizes`  | ~list\<string\>~ | The =size= variations to generate  |

```scss
@include termeh.use-button(
  $colors: (
    "primary",
    "secondary",
  ),
  $sizes: (
    "small",
    "medium",
    "large",
  )
);
```

:::

::: module
This module is registered as `button` and requires the `element` module.
:::

## Elements

- `.buttons` - Groups related buttons

## Modifiers

- `.is-light` - Uses a light background

## Size Variants

Size variants use the `is-{size}` modifier. Available sizes are the ones
passed to `$sizes`.

## Color Variants

Color variants use the `is-{color}` modifier. Available colors are the
ones passed to `$colors`.

::: block dependencies

The style uses these color variants:

| Variant        | Description               |
| -------------- | ------------------------- |
| **foreground** | Default button text color |
| **text**       | Simple button text color  |

:::

## Customization

The style uses the following Termeh dependencies.

::: block dependencies

| Component  | Variable   | Type     | Usage                       |
| ---------- | ---------- | -------- | --------------------------- |
| **gap**    | **micro**  | ~length~ | Gap between grouped buttons |
| **radius** | **normal** | ~length~ | Standard button radius      |

| Color     | Variant / Caution  | Usage                 |
| --------- | ------------------ | --------------------- |
| **shade** | @throw on missing@ | Default focus outline |
| **shade** | **text**           | Default text color    |

:::
````

### Styles page rules

- Title: `# <Name> Styles`, written once per style.
- Introduction: "Termeh's <name> style provides..." (or "Termeh
  provides..."), 1–2 short sentences about what the style renders and
  its main variations.
- No paragraph between the introduction and the signature block.
- The signature block follows the Regular page rules (signature,
  parameter table, at most one example).
- `::: module` comes right after the signature block. State the module
  name (the first `define-module` argument) and list its dependencies if
  any.
- `::: error` comes after the module block, only when the style can
  throw, following the Regular page error rules.
- `## Elements`: only non-obvious elements and selectors the module
  styles or relies on, including relevant children and ancestors. One
  short bullet per selector. Omit the section when there are none.
- `## Modifiers`: static modifiers found in the source, one short bullet
  each. Skip modifiers generated by loops over sizes, colors, gaps or
  other variation collections.
- Variation sections: one `##` section per looped dimension (`Size
Variants`, `Color Variants`, `Gap Variants`). Say which modifier is
  used and where the available values come from. Mention other effects
  only when they matter to users.
- Variant tables: when the doc comment lists required palette variants
  with `@require`, add a `::: block dependencies` container to that
  section with a `| Variant | Description |` table, using the names and
  descriptions from the doc comment.
- `## Customization` is the last section and exists only when the style
  has documented dependencies. It holds one `::: block dependencies`
  container with:
  - a global variables table: `Component`, `Variable`, `Type`, `Usage`;
  - a colors table: `Color`, `Variant / Caution`, `Usage`.
- Identifier cells (component, variable, color and variant names) use
  the `__` marker. Do not use Markdown bold.
- Omit an empty table, and the whole Customization section when there
  are no dependencies.
- Dependency data comes only from doc comments and `@require` tags. Do
  not infer it from the implementation. Write `TODO:` in a cell when
  information is missing.
- For dependencies read through getters that throw when a value is
  missing, put `@throw on missing@` in the caution cell, or at the end of
  the Usage cell. Do not add it to non-throwing dependencies.

## Markers

The documentation uses five custom markers. Do not replace them with
Markdown `**bold**` or `*italic*`.

| Marker     | Purpose        | Use                                              |
| ---------- | -------------- | ------------------------------------------------ |
| `=text=`   | Emphasis       | Key words that should stand out more             |
| `__text__` | Important term | Important concepts and API terms (shown in blue) |
| `_text_`   | Value          | Values a thing accepts, such as options          |
| `~text~`   | Type           | Types and type expressions                       |
| `@text@`   | Warning        | Rare, critical cautions (shown in orange)        |

- `=`: for emphasis, not ordinary words. Keep each highlight short.
- `__`: for important terms readers should recognize. Not a general bold.
- `_`: for the values or options something accepts, for example `_dark_`
  or `_start_`. Literal code tokens such as `null`, `var()` or `$name`
  use inline code instead.
- `~`: only for types.
- `@`: only for exceptional warnings or critical constraints. Do not use
  it to decorate ordinary terms.
- Usually one or two short highlights per prose paragraph are enough. Do
  not put markers inside code, signatures or error lines where they
  would hurt clarity.
- `@throw on missing@` is a fixed marker, reserved for dependencies that
  throw when a required value is missing.

## Type formatting

- Outside code, types are lowercase and wrapped in `~`: `~string~`,
  `~number~`, `~length~`, `~color~`, `~boolean~`, `~map~`, `~list~`,
  `~arglist~`, `~variable~`.
- Include generic details when useful: `~list\<string\>~`,
  `~map\<string, flexjustify\>~`, `~variable\<length\>~`.
- Outside code, always escape angle brackets: `\<` and `\>`. Never leave
  raw `<` or `>` in prose or table cells.
- Inside fenced code and inline code, keep source-style capitalization
  and do not escape: `List<String>`.
- Multiple accepted types in a table cell: wrap each type in its own
  `~` and separate them with an escaped pipe, for example
  `~string~ \| ~null~`. In prose, use "or" instead.
- Use `~*~` when any Sass value is accepted.
- Use `~arglist~` for variadic parameters (`$args...`), never `~list~`.

## Tables

- Keep tables compact: no column padding, exactly one space between each
  pipe and the cell content.
- Separator row is `| -- | -- |`: two dashes per column, no alignment
  colons.
- Escape every literal `|` inside a cell as `\|`, even inside inline
  code. Do not escape the pipes that separate columns.
- Escape `<` and `>` in cell text outside inline code (see Type
  formatting).
- Descriptions are short phrases without a trailing period. No full
  paragraphs in cells.

## Writing style

- Write for developers using Termeh: clear, natural, friendly English.
- Be short and to the point. Say what the API does and what it is used
  for. Skip internal mechanics, registration details and use cases that
  happen behind the scenes.
- Use short, direct sentences and familiar words. No filler, marketing
  language or long background.
- Include only details that help someone choose, configure or use the
  API. Do not repeat the same information in the introduction,
  explanation, table and example.
- Prose sentences end with a period. Code and table cells do not.
- Do not add sections, examples or details the source does not support.

## Final checklist

1. The page starts with frontmatter containing `description:`.
2. The page type matches the source (`define-module` mixins use the
   Styles format).
3. The introduction starts with "Termeh" and states the user-facing
   purpose.
4. No source file names and no unnecessary implementation details.
5. Every public API is documented in source order; private APIs are
   skipped.
6. Explanations are short, say what and when, and do not repeat
   parameter details.
7. Parameter descriptions are short phrases, with no trailing period.
8. At most one example per API, valid, realistic and formatted.
9. Each error block has exactly one `If` sentence, or is omitted.
10. The five markers match their meanings; no Markdown bold or italics
    in their place.
11. Types outside code are lowercase, wrapped in `~`, with `\<` and `\>`
    escaped.
12. Multiple types in a cell are individually wrapped and separated with
    `\|`; literal pipes are escaped; tables use the compact `| -- |`
    separator.
13. Styles pages include the module block and only the applicable
    Elements, Modifiers, Variants and Customization sections, with
    `TODO:` where data is missing.
14. The output is only the requested Markdown page, with no commentary
    or alternative version.
