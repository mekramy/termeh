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

::: dependencies

Card module uses the following Termeh global `var()`:

| Component                 | Type     | Usage                                                | Default    |
| ------------------------- | -------- | ---------------------------------------------------- | ---------- |
| `base` → `color`          | _Color_  | _Fallback_ background and overlay                    | `white`    |
| `base` → `foreground`     | _Color_  | _Fallback_ foreground and overlay spinner color      | `black`    |
| `base` → `section`        | _Color_  | Secondary section background                         | `null`     |
| `base` → `separator`      | _Color_  | Separator background                                 | `null`     |
| `box` → `background`      | _Color_  | Card background and overlay _fallback_ background    | _FALLBACK_ |
| `box` → `foreground`      | _Color_  | Card foreground and overlay _fallback_ spinner color | _FALLBACK_ |
| `box` → `shadow`          | _List_   | Default box shadow                                   | `null`     |
| `box` → `sizes`           | _List_   | Default box sizes                                    | `()`       |
| `gap` → `macro`           | _Number_ | Default card padding and bottom margin               | `1.6em`    |
| `radius` → `normal`       | _Number_ | Default border-radius                                | `null`     |
| `decorator` → `size`      | _Number_ | Loading spinner thickness                            | `2px`      |
| `decorator` → `spinner`   | _Number_ | Loading spinner size                                 | `2em`      |
| `overlay` → `background`  | _Color_  | Overlay background color                             | _FALLBACK_ |
| `overlay` → `foureground` | _Color_  | Overlay foreground                                   | _FALLBACK_ |
| `overlay` → `opacity`     | _Number_ | Overlay background opacity                           | `0.85`     |
| `overlay` → `filter`      | _String_ | Overlay backdrop filter                              | `null`     |

---

Card module uses the following Termeh `color()` and `variant()`:

| Color / Variant | Usage                          | Default |
| --------------- | ------------------------------ | ------- |
| `shade`         | Default decorator color        | _error_ |
| `primary`       | Default scrollbar accent color | _error_ |

:::

## Modifiers Classes

- `.is-loading` → adds a loading state
- `.is-overlaid` → displays an overlay element
- `.is-top-decorated` → adds a top border decoration
- `.is-bottom-decorated` → adds a bottom border decoration
- `.is-<gap>-gap` → applies a predefined spacing value
- `.is-<color>` → applies a predefined accent color
- `.is-<size>` → applies a predefined `box` size (default card width)

## Child Elements

- `.separator` → horizontal divider line
- `.section` → content block inside a card
- `.overlay` → overlay container, shown when the card has `.is-overlaid`; must be placed as the last child of the card

## Section Modifiers

- `.is-header` → header section, fixed to the top with adjusted margin
- `.is-footer` → footer section, fixed to the bottom with adjusted margin
- `.is-secondary` → applies section background styling
- `.top-sticky` → sticks the section to the top of the card
- `.bottom-sticky` → sticks the section to the bottom of the card

## Separator Modifiers

- `.is-attached` → full-width divider with no margin
