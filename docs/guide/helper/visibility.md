# Visibility Helper Module

The **Visibility Helper** module provides utility classes for conditionally hiding or showing elements based on breakpoints and device types. These helpers are responsive by design and cover common scenarios such as mobile-only content, desktop-only sections, and touch vs. non-touch visibility.

::: definition

**Signature:**

```scss
@mixin use-visibility-helper();
```

**Example:**

```scss
@include termeh.use-visibility-helper();
```

**Module:**

This module is registered as `visibility-helper` in the _presented modules_.

:::

## Available Classes

- `.is-hidden` → always hides the element.
- `.is-until-fullhd-hidden` → hides element until `fullhd`.
- `.is-until-widescreen-hidden` → hides element until `widescreen`.
- `.is-until-desktop-hidden` → hides element until `desktop`.
- `.is-mobile-hidden` → hides element on `mobile` screens.
- `.is-tablet-hidden` → hides element on `tablet` screens.
- `.is-desktop-hidden` → hides element on `desktop` screens.
- `.is-widescreen-hidden` → hides element on `widescreen` screens.
- `.is-fullhd-hidden` → hides element on `fullhd` screens.
- `.is-mobile-only` → shows element only on `mobile`.
- `.is-tablet-only` → shows element only on `tablet`.
- `.is-desktop-only` → shows element only on `desktop`.
- `.is-widescreen-only` → shows element only on `widescreen`.
- `.is-fullhd-only` → shows element only on `fullhd`.
- `.is-tablet-only-hidden` → hides element specifically on `tablet-only`.
- `.is-desktop-only-hidden` → hides element specifically on `desktop-only`.
- `.is-widescreen-only-hidden` → hides element specifically on `widescreen-only`.
- `.is-touch-only` → shows element only on touch devices.
- `.is-touch-hidden` → hides element on touch devices.
