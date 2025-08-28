# Gallery Module

The **Gallery** module provides a flexible grid for displaying images or content items with configurable gaps and responsive heights. It supports stackable layouts on mobile devices and allows custom spacing via registered gap names.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="2rem">
  <div class="demo">
    <div class="gallery">
      <div class="item"><img src="http://static.photos/800x360" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x800" alt="" /></div>
      <div class="item"><img src="http://static.photos/720x400" alt="" /></div>
      <div class="item"><img src="http://static.photos/380x640" alt="" /></div>
      <div class="item"><img src="http://static.photos/790x360" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x750" alt="" /></div>
      <div class="item"><img src="http://static.photos/640x480" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x600" alt="" /></div>
      <div class="item"><img src="http://static.photos/800x500" alt="" /></div>
      <div class="item"><img src="http://static.photos/480x360" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x820" alt="" /></div>
      <div class="item"><img src="http://static.photos/600x360" alt="" /></div>
      <div class="item"><img src="http://static.photos/370x900" alt="" /></div>
      <div class="item"><img src="http://static.photos/640x360" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x800" alt="" /></div>
      <div class="item"><img src="http://static.photos/780x370" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x470" alt="" /></div>
      <div class="item"><img src="http://static.photos/750x360" alt="" /></div>
      <div class="item"><img src="http://static.photos/400x640" alt="" /></div>
      <div class="item"><img src="http://static.photos/360x750" alt="" /></div>
      <div class="item"><img src="http://static.photos/361x750" alt="" /></div>
      <div class="item"><img src="http://static.photos/362x750" alt="" /></div>
      <div class="item"><img src="http://static.photos/363x750" alt="" /></div>
      <div class="item"><img src="http://static.photos/364x750" alt="" /></div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="gallery">
  <div class="item">
    <img src="http://static.photos/800x360" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x800" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/720x400" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/380x640" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/790x360" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x750" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/640x480" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x600" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/800x500" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/480x360" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x820" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/600x360" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/370x900" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/640x360" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x800" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/780x370" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x470" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/750x360" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/400x640" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/360x750" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/361x750" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/362x750" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/363x750" alt="" />
  </div>
  <div class="item">
    <img src="http://static.photos/364x750" alt="" />
  </div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-gallery($gaps: ());
```

**Example:**

```scss
@include termeh.use-gallery();
```

:::

::: dependencies

Gallery module uses the following Termeh global `var()`:

| Component                   | Type     | Usage                             | Default |
| --------------------------- | -------- | --------------------------------- | ------- |
| `gap` → `micro`             | _Number_ | Default gap between gallery items | `8px`   |
| `gallery` → `height`        | _Number_ | Default item height in gallery    | `300px` |
| `gallery` → `height-tablet` | _Number_ | Item height for tablet screens    | `200px` |
| `gallery` → `height-mobile` | _Number_ | Item height for mobile screens    | `100px` |

:::

## Modifiers

- `.is-gapless` → removes all spacing between items
- `.is-<gap>-gap` → applies a registered gap as spacing
- `.is-stackable` → stacks items vertically on mobile

## Child Elements

- `.item` → individual gallery item
  - `.thumbnail` → applied to nested or custom elements representing an image

## Child Modifiers

- `.is-block` → makes item full width with automatic height
