# Header Module

The **Header** module provides flexible heading layouts with optional thumbnails, sub-headers, decorators, and color or gap variants. Heading item (`h1`-`h6`) extends the _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="4rem">
  <div class="demo">
    <div class="header">
      <div class="icon is-massive thumbnail">
        <img src="/assets/image.png" class="is-circular" alt="">
      </div>
      <div class="headers">
        <h1>Main Title</h1>
        <h3>
          <span>Muted Subtitle</span>
          <span class="filler"></span>
          <strong>Strong Item</strong>
        </h3>
      </div>
    </div>
  </div>
  <div class="demo">
    <div class="header is-centered is-primary">
      <div class="headers">
        <h2>Centered Header</h2>
        <h6>Muted Subtitle</h6>
      </div>
    </div>
  </div>
  <div class="demo">
    <div class="header is-decorated">
      <div class="headers">
        <h2>Main Title</h2>
        <h5>Decorated Header</h5>
      </div>
    </div>
  </div>
  <div class="demo">
    <div class="header is-maroon is-decorated">
      <div class="icon is-massive thumbnail">
        <img src="/assets/image.png" alt="">
      </div>
      <div class="headers">
        <h2>Colorized Header</h2>
        <h5>Decorated Header</h5>
      </div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="header">
  <div class="thumbnail">[img]</div>
  <div class="headers">
    <h2>Main Title</h2>
    <h4>Sub Title</h4>
  </div>
</div>
<div class="header is-decorated">
  <div class="headers">
    <h2>Main Title</h2>
    <h5>Decorated Header</h5>
  </div>
</div>
<div class="header is-centered is-primary">
  <div class="headers">
    <h2>Centered Header</h2>
    <h6>Muted Subtitle</h6>
  </div>
</div>
<div class="header is-indigo is-decorated">
  <div class="thumbnail">[icon]</div>
  <div class="headers">
    <h2>Colorized Header</h2>
    <h4>Adjustable Spacing</h4>
  </div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-header($colors: (), $gaps: ());
```

**Example:**

```scss
@include termeh.use-header(("primary", "indigo"), ("normal", "large"));
```

:::

::: dependencies

Header module uses the following Termeh global `var()`:

| Component                | Type     | Usage                                    | Default  |
| ------------------------ | -------- | ---------------------------------------- | -------- |
| `font` → `weight`        | _String_ | Sub-header font weight                   | `normal` |
| `strong` → `weight`      | _String_ | Top-header font weight                   | `bold`   |
| `gap` → `macro`          | _Number_ | Spacing between blocks and bottom margin | `1.6em`  |
| `line-height` → `normal` | _Number_ | Default line height                      | `1.6em`  |
| `decorator` → `size`     | _Number_ | Decorator line thickness                 | `2px`    |

---

Header module uses the following Termeh `color()` and `variant()`:

| Color / Variant  | Usage                   | Default |
| ---------------- | ----------------------- | ------- |
| `shade`          | Default decorator color | _error_ |
| `shade` → `mute` | Sub-header text color   | `null`  |

:::

## Child Elements

- `.thumbnail` → heading icon or avatar
- `.headers` → heading items container

## Modifiers

- `.is-decorated` → adds a side border decoration
- `.is-centered` → centers all text within the header
- `.is-<gap>-gap` → applies a predefined spacing value
- `.is-<color>` → applies a predefined accent color
