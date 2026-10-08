# Action Module

The **Action** module provides grouped interactive controls inside an `.actions` container.
It supports **secondary**, **loading**, **rounded**, **disabled**, and **color** variants, and extends the _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="actions">
      <button class="action">Default</button>
      <button class="action is-secondary">Secondary</button>
      <button class="action is-loading">Loading</button>
      <button class="action is-disabled">Disabled</button>
    </div>
  </div>
  <div class="demo is-primary">
    <div class="actions">
      <button class="action">Inherited Primary</button>
      <button class="action is-secondary">Secondary</button>
      <button class="action is-loading">Loading</button>
      <button class="action is-rounded">Rounded</button>
    </div>
  </div>
  <div class="demo">
    <div class="actions is-indigo">
      <button class="action">Indigo</button>
      <button class="action is-loading">Loading</button>
      <button class="action is-rounded">Rounded</button>
      <button class="action is-disabled">Disabled</button>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="actions">
  <button class="action">Default</button>
  <button class="action is-secondary">Secondary</button>
  <button class="action is-loading">Loading</button>
  <button class="action is-disabled">Disabled</button>
</div>

<div class="is-primary">
  <div class="actions">
    <button class="action">Inherited Primary</button>
    <button class="action is-secondary">Secondary</button>
    <button class="action is-loading">Loading</button>
    <button class="action is-rounded">Rounded</button>
  </div>
</div>

<div class="actions is-indigo">
  <button class="action">Indigo</button>
  <button class="action is-loading">Loading</button>
  <button class="action is-rounded">Rounded</button>
  <button class="action is-disabled">Disabled</button>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-action($colors: ());
```

**Example:**

```scss
@include termeh.use-action(("primary", "indigo", "maroon"));
```

**Module:**

This module is registered as `action` in the _presented modules_.

:::

## Action Container

Container for action items: `.actions`

- Uses a horizontal flex layout with item gaps
- On mobile, horizontal overflow is scrollable

## Modifiers

- `.is-secondary` → transparent background with readable text color
- `.is-loading` → locks the action and replaces text with a loader
- `.is-rounded` → applies rounded border radius
- `.is-disabled` → applies disabled style and disables interaction
- ++is-{color}++ → applies a registered color variant to an `.actions` container

## Color Scope

Apply a color to the `.actions` container or any parent element. Individual `.action` elements do not support color classes.

- `.actions.is-primary`
- `.is-primary .actions`

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Action module uses the following Termeh global _var_:

| Component     | Variable        | Type          | Usage                                                 |
|---------------|-----------------|---------------|-------------------------------------------------------|
| **gap**       | **micro**       | _Number_      | Spacing between actions                               |
| **radius**    | **normal**      | _Number_      | Standard border radius                                |
| **radius**    | **rounded**     | _Number_      | Rounded border radius                                 |
| **decorator** | **size**        | _Number_      | Padding, focus-outline, and loading spinner thickness |
| **control**   | **height**      | _Number_      | Action height                                         |
| **control**   | **meta-size**   | _Number_      | Action text size                                      |
| **control**   | **meta-weight** | _Font Weight_ | Action text weight                                    |

---

Action module uses the following Termeh _color_ and _variant_:

| Color       | Variant / Caution     | Usage                                             |
|-------------|-----------------------|---------------------------------------------------|
| **shade**   | ==@throw on missing== | Secondary hover and focus-outline color           |
| **primary** | ==@throw on missing== | Primary action background and focus-outline color |
| **primary** | **foreground**        | Primary text and loading spinner color            |
| **shade**   | **readable**          | Secondary text and loading spinner color          |

:::
