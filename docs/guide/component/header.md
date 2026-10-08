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

**Module:**

This module is registered as `header` in the _presented modules_.

:::

## Child Elements

- `.thumbnail` → heading icon or avatar
- `.headers` → heading items container

## Modifiers

- `.is-decorated` → adds a side border decoration
- `.is-centered` → centers all text within the header
- `.is-<gap>-gap` → applies a predefined spacing value
- `.is-<color>` → applies a predefined accent color

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Header module uses the following Termeh global _var_:

| Component       | Variable        | Type          | Usage                        |
|-----------------|-----------------|---------------|------------------------------|
| **control**     | **weight**      | _Font Weight_ | Secondary header text weight |
| **strong**      | **weight**      | _Font Weight_ | Primary header text weight   |
| **control**     | **meta-size**   | _Number_      | Secondary header text size   |
| **control**     | **meta-weight** | _Font Weight_ | Secondary header text weight |
| **decorator**   | **size**        | _Number_      | Decorator thickness          |
| **gap**         | **macro**       | _Number_      | Header gap and bottom margin |
| **line-height** | **normal**      | _Number_      | Header line height           |

---

Header module uses the following Termeh _color_ and _variant_:

| Color     | Variant / Caution     | Usage                  |
|-----------|-----------------------|------------------------|
| **shade** | ==@throw on missing== | Decorator color        |
| **shade** | **mute**              | Secondary header color |

:::
