# Card Module

The **Card** module provides a flexible container with sections, overlays, and decorators.
It supports **colors**, **gaps**, **sizes**, and **state modifiers** such as loading and overlay.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="12rem">
  <div class="demo">
    <div class="card">
      <div class="section is-header">Header</div>
      <div class="section">Default Card</div>
      <div class="separator is-attached"></div>
      <div class="section is-secondary is-footer">Footer</div>
    </div>
  </div>
  <div class="demo">
    <div class="card is-indigo is-loading is-top-decorated">
      <div class="section">lorem...</div>
    </div>
  </div>
  <div class="demo">
    <div class="card is-overlaid is-bottom-decorated">
      <div class="section">lorem...</div>
      <div class="overlay">
        <p>This is an overlay</p>
      </div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="card">
  <div class="section is-header">Header</div>
  <div class="section">Default Card</div>
  <div class="separator is-attached"></div>
  <div class="section is-secondary is-footer">Footer</div>
</div>

<div class="card is-indigo is-loading is-top-decorated">
  <div class="section">lorem...</div>
</div>

<div class="card is-overlaid is-bottom-decorated">
  <div class="section">lorem...</div>
  <div class="overlay">
    <p>This is an overlay</p>
  </div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-card($colors: (), $gaps: ());
```

**Example:**

```scss
@include termeh.use-card(("primary", "danger"), ("macro", "small"));
```

**Module:**

This module is registered as `card` in the _presented modules_.

:::

## Child Elements

- `.separator` → horizontal divider line
- `.section` → content block inside a card
- `.overlay` → overlay container, shown when the card has `.is-overlaid`. must be placed as the last child of the card

## Modifiers Classes

- `.is-loading` → adds a loading state
- `.is-overlaid` → displays an overlay element
- `.is-top-decorated` → adds a top border decoration
- `.is-bottom-decorated` → adds a bottom border decoration
- `.is-<gap>-gap` → applies a predefined spacing value
- `.is-<color>` → applies a predefined accent color
- `.is-<size>` → applies a predefined `box` size (default card width)

## Section Modifiers

- `.is-header` → header section, fixed to the top with adjusted margin
- `.is-footer` → footer section, fixed to the bottom with adjusted margin
- `.is-secondary` → applies section background styling
- `.top-sticky` → sticks the section to the top of the card
- `.bottom-sticky` → sticks the section to the bottom of the card

## Separator Modifiers

- `.is-attached` → full-width divider with no margin

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Card module uses the following Termeh global _var_:

| Component | Variable | Type | Usage |
| - | - | - | - |
| **gap** | **macro** | _Number_ | Spacing between card sections |
| **radius** | **normal** | _Number_ | Card corner radius |
| **decorator** | **size** | _Number_ | Decorator and loader thickness |
| **decorator** | **spinner** | _Number_ | Loading spinner size |
| **card** | **background** | _Color_ | Card background color |
| ++ `var("box", "background")` `var("base", "background")` |
| **card** | **foreground** | _Color_ | Card text color |
| ++ `var("box", "foreground")` `var("base", "foreground")` |
| **card** | **section** | _Color_ | Secondary section background |
| ++ `var("box", "section")` `var("base", "section")` |
| **card** | **separator** | _Color_ | Section separator color |
| ++ `var("box", "separator")` `var("base", "separator")` |
| **card** | **shadow** | _Box Shadow_ | Card shadow values |
| ++ `var("box", "shadow")` |
| **card** | **sizes** | _List_ | Card size variants |
| ++ `var("box", "sizes")` |
| **card** | **overlay-background** | _Color_ | Overlay background color |
| ++ `var("box", "overlay-background")` `var("overlay", "background")` |
| **card** | **overlay-foreground** | _Color_ | Overlay text color |
| ++ `var("box", "overlay-foreground")` `var("overlay", "foreground")` |
| **card** | **overlay-opacity** | _Number_ | Overlay opacity |
| ++ `var("box", "overlay-opacity")` `var("overlay", "opacity")` |
| **card** | **overlay-filter** | _Filter_ | Overlay backdrop filter |
| ++ `var("box", "overlay-filter")` `var("overlay", "filter")` |

Card module uses the following Termeh _color_:

| Color       | Variant / Caution     | Usage                   |
|-------------|-----------------------|-------------------------|
| **shade**   | ==@throw on missing== | Decorator border color  |
| **primary** | ==@throw on missing== | Overlay scrollbar color |

:::
