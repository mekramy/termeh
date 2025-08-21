# Image Styles

Applies image styles and size classes. This mixin provides utility classes for centering images, applying rounded or circular borders, and setting widths based on registered sizes.

::: code-group

```scss [usage.scss]
@mixin use-image($sizes: ());
```

```scss [example.scss]
@include use-image(); // Apply all registered sizes
@include use-image(("small", "medium", "large")); // Apply specific sizes only
```

:::

::: extra Termeh Variables

```scss
$radius-normal: termeh.var("radius", "normal", 0.2rem);
$radius-circle: termeh.var("radius", "circle", 50%);
```

- _`$radius-normal`_ → used for `.is-rounded` images
- _`$radius-circle`_ → used for `.is-circular` images

:::

## Available classes

- _`.is-centered`_ → centers the image
- _`.is-rounded`_ → applies normal radius to image
- _`.is-circular`_ → applies circular radius to image
- _`.is-<size>`_ → sets the image width to a registered size (e.g., `.is-small`, `.is-medium`, `.is-large`)

## Sizes

You can pass a list of registered size names to the constructor to generate only those size classes. If no list is provided, all registered sizes are included by default.

## Example

```html
<div class="image-examples">
  <img src="example1.jpg" alt="Centered image" class="is-centered" />
  <img src="example2.jpg" alt="Rounded image" class="is-rounded" />
  <img src="example3.jpg" alt="Circular image" class="is-circular" />
  <img src="example4.jpg" alt="Small image" class="is-small" />
  <img src="example5.jpg" alt="Medium image" class="is-medium" />
  <img src="example6.jpg" alt="Large image" class="is-large" />
</div>
```
