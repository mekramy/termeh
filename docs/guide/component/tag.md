# Tag Module

The **Tag** module provides label-like UI elements with support for colors, sizes, rounded/action states, and loading/disabled variants.
It extends the _Element_ module.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="3rem">
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag">Default</div>
      <div class="tag is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-loading">Loading</div>
      <div class="tag is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-primary">Primary</div>
      <div class="tag is-primary is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-primary is-loading">Loading</div>
      <div class="tag is-primary is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-green is-rounded">Green</div>
      <div class="tag is-green is-rounded is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-green is-rounded is-loading">Loading</div>
      <div class="tag is-green is-rounded is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-indigo is-rounded">Indigo</div>
      <div class="tag is-indigo is-rounded is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-indigo is-rounded is-loading">Loading</div>
      <div class="tag is-indigo is-rounded is-disabled">Disabled</div>
    </div>
  </div>
  <div class="demo">
    <div class="gaper is-auto">
      <div class="tag is-maroon is-rounded">Maroon</div>
      <div class="tag is-maroon is-rounded is-action">
        <span class="icon">
          <!--@include: ../icon.svg-->
        </span>
        <span>Clickable</span>
      </div>
      <div class="tag is-maroon is-rounded is-loading">Loading</div>
      <div class="tag is-maroon is-rounded is-disabled">Disabled</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="tag">Default</div>
<div class="tag is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="tag is-loading">Loading</div>
<div class="tag is-disabled">Disabled</div>
<div class="tag is-primary">Primary</div>
<div class="tag is-primary is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="tag is-primary is-loading">Loading</div>
<div class="tag is-primary is-disabled">Disabled</div>
<div class="tag is-green is-rounded">Green</div>
<div class="tag is-green is-rounded is-action">
  <span class="icon">...</span>
  <span>Clickable</span>
</div>
<div class="tag is-green is-rounded is-loading">Loading</div>
<div class="tag is-green is-rounded is-disabled">Disabled</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-tag($colors: (), $sizes: ());
```

**Example:**

```scss
@include termeh.use-tag(("primary", "success"), ("small", "medium"));
```

**Module:**

This module is registered as `tag` in the _presented modules_.

:::

## Modifiers

- `.is-action` → makes icon clickable
- `.is-rounded` → applies rounded border-radius
- `.is-loading` → applies loading state
- `.is-disabled` → applies disabled state
- `.is-<size>` → applies a registered size as font size
- `.is-<color>` → applies a registered color as accent color

## Configuration

This component uses the following dependencies for styling:

::: dependencies

Tag module uses the following Termeh global _var_:

| Component     | Variable        | Type          | Usage                                       |
|---------------|-----------------|---------------|---------------------------------------------|
| **radius**    | **normal**      | _Number_      | Standard corner radius                      |
| **radius**    | **rounded**     | _Number_      | Rounded corner radius                       |
| **decorator** | **size**        | _Number_      | Focus-outline and loading spinner thickness |
| **control**   | **height**      | _Number_      | Tag height                                  |
| **control**   | **meta-size**   | _Number_      | Default text size                           |
| **control**   | **meta-weight** | _Font Weight_ | Default text weight                         |

---

Tag module uses the following Termeh _color_ and _variant_:

| Color     | Variant / Caution     | Usage                          |
|-----------|-----------------------|--------------------------------|
| **shade** | ==@throw on missing== | Focus-outline color            |
| **shade** | **light**             | Default background color       |
| **shade** | **readable**          | Default text and spinner color |

:::
