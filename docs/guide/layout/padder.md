# Padder Module

The **Padder** module provides a simple utility container that applies uniform padding using Termeh’s registered gap scale. Use it to wrap content and quickly switch padding density via semantic class names.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="8rem">
  <div class="demo">
    <div class="padder is-small is-highlighted">
      <div class="placeholder">Small padding</div>
    </div>
    <div class="padder is-large is-highlighted" style="margin-top: .5rem">
      <div class="placeholder">Large Padding</div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="padder is-small">Small padding</div>
<div class="padder is-large">Large Padding</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-padder($gaps: ());
```

**Example:**

```scss
@include termeh.use-padder();
```

:::

## Available Classes

- `.is-<gap>` → sets uniform padding from the registered gap
