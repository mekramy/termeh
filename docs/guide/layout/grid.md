# Grid Module

The **Grid** module provides a flexible column-based layout system.
It supports configurable gaps, responsive column sizing via registered units, alignment, and justification.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview height="5rem">
  <div class="demo">
    <div class="grid">
      <div class="column">
        <div class="placeholder">Auto</div>
      </div>
      <div class="column">
        <div class="placeholder">Auto</div>
      </div>
      <div class="break"></div>
      <div class="column">
        <div class="placeholder">Auto</div>
      </div>
      <div class="column is-fit">
        <div class="placeholder is-light">FIT</div>
      </div>
      <div class="break"></div>
      <div class="column is-1-of-4">
        <div class="placeholder is-light">1-of-4</div>
      </div>
      <div class="column">
        <div class="placeholder">Auto</div>
      </div>
      <div class="break"></div>
      <div class="column is-half">
        <div class="placeholder is-light">Half</div>
      </div>
      <div class="column">
        <div class="placeholder">Auto</div>
      </div>
      <div class="break"></div>
      <div class="column is-1-of-5">
        <div class="placeholder is-light">1-of-5</div>
      </div>
      <div class="column is-1-of-5">
        <div class="placeholder is-light">1-of-5</div>
      </div>
      <div class="column is-1-of-5">
        <div class="placeholder is-light">1-of-5</div>
      </div>
      <div class="column">
        <div class="placeholder">Auto</div>
      </div>
    </div>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<div class="grid">
  <div class="column">Auto</div>
  <div class="column">Auto</div>
  <div class="break"></div>
  <div class="column">Auto</div>
  <div class="column is-fit">FIT</div>
  <div class="break"></div>
  <div class="column is-1-of-4">1-of-4</div>
  <div class="column">Auto</div>
  <div class="break"></div>
  <div class="column is-half">Half</div>
  <div class="column">Auto</div>
  <div class="break"></div>
  <div class="column is-1-of-5">1-of-5</div>
  <div class="column is-1-of-5">1-of-5</div>
  <div class="column is-1-of-5">1-of-5</div>
  <div class="column">Auto</div>
</div>
```

:::

::: definition

**Signature:**

```scss
@mixin use-grid($gaps: (), $units: ());
```

**Example:**

```scss
@include termeh.use-grid(("small", "medium", "large"), ("1-2", "1-3", "1-4"));
```

:::

::: termeh

Grid module uses the following Termeh global `var()`:

| Component       | Type     | Usage                           | Fallback |
| --------------- | -------- | ------------------------------- | -------- |
| `gap` → `macro` | _Number_ | Default spacing between columns | `1.6rem` |

:::

## Available Classes

### Structural Elements

- `.column` → column item inside the grid
- `.break` → line break forcing columns to wrap

### Column Modifiers

- `.is-<unit>` → sets column width using registered units
- `.is-fit` → auto-fit column width
- `.is-<device>-<unit>` → responsive column width
- `.is-<device>-fit` → responsive auto-fit column

### Layout Modifiers

- `.is-gapless` → removes spacing between columns
- `.is-<gap>-gap` → applies registered gap sizes

### Alignment Modifiers

- `.is-<align>-align` → vertical alignment
- `.is-<justify>-justify` → horizontal justification

### Responsive Modifiers

- `.is-<device>-<align>-align` → responsive vertical alignment
- `.is-<device>-<justify>-justify` → responsive justification
