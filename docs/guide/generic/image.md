# Image Styles

Applies image styles with utility classes for centering, rounded or circular borders, and responsive widths based on registered sizes.

::: tabs

== Preview

<Preview>
  <div style="display: flex; gap: 1rem; align-items: flex-end; justify-content: center;">
    <img src="/assets/image.png" style="height: 10rem" class="is-circular" />
    <img src="/assets/image.png" style="height: 10rem" class="is-rounded" />
    <img src="/assets/image.png" class="is-massive" />
    <img src="/assets/image.png" class="is-large" />
    <img src="/assets/image.png" class=" is-medium" />
    <img src="/assets/image.png" class="is-small" />
  </div>
</Preview>

== Source

```html
<div>
  <img src="/assets/image.png" style="height: 10rem" class="is-circular" />
  <img src="/assets/image.png" style="height: 10rem" class="is-rounded" />
  <img src="/assets/image.png" class="is-massive" />
  <img src="/assets/image.png" class="is-large" />
  <img src="/assets/image.png" class=" is-medium" />
  <img src="/assets/image.png" class="is-small" />
</div>
```

:::

## Usage

::: definition

**Signature:**

```scss
@mixin use-image($sizes: ());
```

**Example:**

```scss
@include termeh.use-image(); // Apply all registered sizes
@include termeh.use-image(("small", "medium", "large")); // Apply specific sizes only
```

:::

::: termeh

Image module uses the following Termeh global `var()`

| Component           | Type     | Usage                                   |
| ------------------- | -------- | --------------------------------------- |
| `radius` → `normal` | _Number_ | Border-radius for `.is-rounded` images  |
| `radius` → `circle` | _Number_ | Border-radius for `.is-circular` images |

Image module uses the following Termeh registered `size()`

| Size                | Usage                                |
| ------------------- | ------------------------------------ |
| any registered size | Width for `.is-{size}` image classes |

:::

## Available classes

- `.is-centered` → centers the image
- `.is-rounded` → applies normal radius to image
- `.is-circular` → applies circular radius to image
- `.is-<size>` → sets the image width to a registered size (e.g., `.is-small`, `.is-medium`, `.is-large`)
