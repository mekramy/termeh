# Text Helper Module

The **Text Helper** modules provides utility classes to quickly apply text styles, colors, sizes, weights, and alignment. These helpers cover font styling (italic, underline, strikethrough, etc.), text transformations, ellipsis truncation, and color/size/weight/alignment adjustments based on registered Termeh values.

## Text Style Helpers

The **Text Style Helper** module provides utility classes for text styling such as italic, underline, strikethrough, text transformations, and ellipsis truncation. These helpers make it easy to apply common text formatting consistently across elements.

::: definition

**Signature:**

```scss
@mixin use-text-helper();
```

**Example:**

```scss
@include termeh.use-text-helper();
```

:::

### Available Style Classes

- `.is-italic` → applies italic style (`any text element`)
- `.is-underline` → applies underline (`any text element`)
- `.is-line-through` → applies strikethrough (`any text element`)
- `.is-undecorated` → removes all text decoration (`any text element`)
- `.is-capitalized` → capitalizes the first letter of each word (`any text element`)
- `.is-lowercase` → transforms text to lowercase (`any text element`)
- `.is-uppercase` → transforms text to uppercase (`any text element`)
- `.is-ellipsis` → applies ellipsis truncation for overflowing text (`any text element`)

## Text Color Helpers

The **Text Color Helper** module generates utility classes to apply readable colors from the registered Termeh color palette. It ensures consistent text coloring and optional selection styling across elements.

::: definition

**Signature:**

```scss
@mixin use-text-colors();
```

**Example:**

```scss
@include termeh.use-text-colors();
```

:::

### Available Color Classes

- `.is-<color>-color` → applies the readable variant of a registered color to text and optionally updates text selection.

## Text Size Helpers

The **Text Size Helper** module generates utility classes to apply font sizes based on the registered Termeh sizes. It allows consistent text sizing across components.

::: definition

**Signature:**

```scss
@mixin use-text-sizes();
```

**Example:**

```scss
@include termeh.use-text-sizes();
```

:::

### Available Size Classes

- `.is-<size>-size` → sets the font size to a registered Termeh size.

## Text Weight Helpers

The **Text Weight Helper** module provides utility classes to apply font weights consistently across text elements. It supports all registered Termeh font-weight variants.

::: definition

**Signature:**

```scss
@mixin use-text-weights();
```

**Example:**

```scss
@include termeh.use-text-weights();
```

:::

### Available Weight Classes

- `.is-<label>-weight` → sets font-weight to a registered Termeh weight.

## Text Align Helpers

The **Text Align Helper** module provides utility classes for applying text alignment consistently across elements. It supports all registered Termeh text-align variants.

::: definition

**Signature:**

```scss
@mixin use-text-aligns();
```

**Example:**

```scss
@include termeh.use-text-aligns();
```

:::

### Available Text Align Classes

- `.is-<label>-align` → sets text alignment to a registered Termeh alignment.
