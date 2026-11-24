---
description: Default variables that Termeh registers for layout, typography and components, and how to change them.
---

# Default Variables

__Variables__ are the =general-purpose values= that control how Termeh looks and behaves. Any value used in the UI, such as _text settings_, _border radius_, _transitions_, _container widths_, and _component options_, is read from a variable. Because components never hard-code these values, changing the @scheme@ restyles every component that uses it.

Termeh already defines a default value for every variable, so the framework looks consistent out of the box. You can =change= any of these values to match your design.

When a variable is set to `null` or not defined, Termeh ignores it and uses the =fallback= value, if one is passed to the getter function.

The sections below list each group of variables with its default values and what each one does.

::: tip Note
Define your variables =before= you include any component module, so that components pick up your custom values.
:::

::: note
See [Variables Reference](/guide/reference/variable) for advanced usage and complete reference.
:::

## Document

```scss
@include termeh.define("document", "direction", ltr);
@include termeh.define("document", "min-width", 300px);
@include termeh.define("document", "scroll-width", 0.75rem);
```

- __direction__ ~direction~ - Text direction of the document.
- __min-width__ ~length~ - Minimum page width.
- __scroll-width__ ~length~ - Scrollbars width.

## Spacing

```scss
@include termeh.define("gap", "micro", 0.5em);
@include termeh.define("gap", "macro", 1.8rem);
```

- __micro__ ~length~ - Small gap between related components.
- __macro__ ~length~ - Large gap between layout sections.

## Padding

```scss
@include termeh.define("padding", "control", 1.2em);
@include termeh.define("padding", "container", 1.6em);
@include termeh.define("padding", "section", 2.2em);
```

- __control__ ~length~ - Padding for inline controls.
- __container__ ~length~ - Padding for containers.
- __section__ ~length~ - Padding for sections.

## Border Radius

```scss
@include termeh.define("radius", "normal", 2px);
@include termeh.define("radius", "circle", 50%);
@include termeh.define("radius", "rounded", 290486px);
```

- __normal__ ~length~ - Default corner radius.
- __circle__ ~length~ - Fully circular corners.
- __rounded__ ~length~ - Pill-shaped corners.

## Line Heights

```scss
@include termeh.define("line-height", "normal", 1.6em);
@include termeh.define("line-height", "medium", 1.4em);
@include termeh.define("line-height", "large", 1.2em);
```

- __normal__ ~length~ - Default line height for normal text.
- __medium__ ~length~ - Line height for medium text.
- __large__ ~length~ - Line height for large text.

## Text

```scss
@include termeh.define("text", "font-family", ("Segoe UI", Verdana));
@include termeh.define("text", "font-size", 14px);
@include termeh.define("text", "font-weight", normal);
@include termeh.define("text", "mono-family", monospace);
@include termeh.define("text", "mono-size", 1rem);
@include termeh.define("text", "mono-weight", normal);
@include termeh.define("text", "small-size", 0.875em);
@include termeh.define("text", "small-weight", 500);
@include termeh.define("text", "strong-weight", bold);
@include termeh.define("text", "decorated-weight", normal);
```

- __font-family__ ~string~ - Main font family stack.
- __font-size__ ~length~ - Main font size.
- __font-weight__ ~number~ - Main font weight.
- __mono-family__ ~string~ - Monospace font family stack.
- __mono-size__ ~length~ - Monospace font size.
- __mono-weight__ ~number~ - Monospace font weight.
- __small-size__ ~length~ - Size of small text.
- __small-weight__ ~number~ - Weight of small text.
- __strong-weight__ ~number~ - Weight of strong text.
- __decorated-weight__ ~number~ - Weight of decorated text.

## Transitions

```scss
@include termeh.define("transition", "ease", ease);
@include termeh.define("transition", "duration", 250ms);
@include termeh.define("transition", "delay", 100ms);
```

- __ease__ ~string~ - Default easing function.
- __duration__ ~duration~ - Default animation duration.
- __delay__ ~duration~ - Delay for staggered animations.

## Decorators

```scss
@include termeh.define("decorator", "thickness", 2px);
@include termeh.define("decorator", "spinner", 2em);
```

- __thickness__ ~length~ - Thickness of decorative lines.
- __spinner__ ~length~ - Size of overlaid loading spinners.

## Overlay

```scss
@include termeh.define("overlay", "opacity", 0.75);
@include termeh.define("overlay", "filter", none);
```

- __opacity__ ~number~ - Background opacity of overlays.
- __filter__ ~string~ - Backdrop filter for overlays.

## Containers

Maximum container widths at each breakpoint.

```scss
@include termeh.define("container", "desktop", 960px);
@include termeh.define("container", "widescreen", 1200px);
@include termeh.define("container", "ultrawide", 1500px);
```

- __desktop__ ~length~ - Maximum width on desktop.
- __widescreen__ ~length~ - Maximum width on widescreen displays.
- __ultrawide__ ~length~ - Maximum width on ultrawide displays.

## Gallery

Settings for image galleries and similar grid layouts.

```scss
@include termeh.define("gallery", "height", 300px);
@include termeh.define("gallery", "height-tablet", 200px);
@include termeh.define("gallery", "height-mobile", 100px);
```

- __height__ ~length~ - Default row height.
- __height-tablet__ ~length~ - Row height on tablets.
- __height-mobile__ ~length~ - Row height on mobile devices.

## Grid

Settings for grid layouts, including column units.

```scss
@include core.define("grid", "units", (5 12));
```

## Inputs

Shared settings for form inputs, checkboxes, and related elements.

```scss
@include termeh.define("input", "height", 2.8em);
@include termeh.define("input", "checkbox", 1.3em);
@include termeh.define("input", "legend-size", 0.875em);
@include termeh.define("input", "legend-weight", 600);
@include termeh.define("input", "placeholder-size", 0.875em);
@include termeh.define("input", "placeholder-weight", 600);
@include termeh.define("input", "disabled-opacity", 0.45);
```

- __height__ ~length~ - Height of input fields.
- __checkbox__ ~length~ - Size of checkboxes and radio buttons.
- __legend-size__ ~length~ - Font size of fieldset legends.
- __legend-weight__ ~number~ - Font weight of fieldset legends.
- __placeholder-size__ ~length~ - Font size of placeholder text.
- __placeholder-weight__ ~number~ - Font weight of placeholder text.
- __disabled-opacity__ ~number~ - Opacity of disabled inputs.

## Components

Shared settings for buttons, links, badges, and similar components.

```scss
@include termeh.define("component", "weight", 500);
@include termeh.define("component", "height", 2.2em);
@include termeh.define("component", "v-padding", 0);
@include termeh.define("component", "h-padding", 1.2em);
@include termeh.define("component", "meta-size", 0.9em);
@include termeh.define("component", "meta-weight", 600);
@include termeh.define("component", "light-opacity", 0.4);
@include termeh.define("component", "action-opacity", 0.85);
@include termeh.define("component", "button-opacity", 1);
@include termeh.define("component", "skeleton-opacity", 0.3);
@include termeh.define("component", "outline-opacity", 0.2);
@include termeh.define("component", "disabled-opacity", 0.45);
@include termeh.define("component", "skeleton-ratios", ((4 3), (16 9)));
```

- __weight__ ~number~ - Font weight.
- __height__ ~length~ - Height.
- __v-padding__ ~length~ - Vertical padding.
- __h-padding__ ~length~ - Horizontal padding.
- __meta-size__ ~length~ - Size of meta-like text (meta, tag, action, breadcrumb, ...).
- __meta-weight__ ~number~ - Weight of meta-like text (meta, tag, action, breadcrumb, ...).
- __light-opacity__ ~number~ - Opacity of tags.
- __action-opacity__ ~number~ - Opacity of actions.
- __button-opacity__ ~number~ - Opacity of buttons.
- __skeleton-opacity__ ~number~ - Opacity of skeleton placeholders.
- __outline-opacity__ ~number~ - Opacity of focused outlines.
- __disabled-opacity__ ~number~ - Opacity of disabled components.
- __skeleton-ratios__ ~list\<tuple\>~ - Aspect ratios of skeleton blocks, each defined as a tuple of width and height.

## Boxes

Defaults for cards, modals, and other box-like components.

```scss
@include termeh.define("box", "opacity", 1);
@include termeh.define("box", "backdrop-filter", none);
@include termeh.define("box", "overlay-opacity", null);
@include termeh.define("box", "overlay-filter", null);
@include termeh.define(
  "box",
  "shadow",
  (
    termeh.soft-shadow(0, 1px, 1px, termeh.color("shade")),
    termeh.soft-shadow(0, -1px, 1px, termeh.color("shade")),
    termeh.soft-shadow(0, 3px, 3px, termeh.color("shade"))
  )
);
@include termeh.define(
  "box",
  "sizes",
  ("small" 22em, "normal" 26em, "medium" 36em)
);
```

- __opacity__ ~number~ - Background opacity of boxes.
- __backdrop-filter__ ~string~ - Backdrop filter of boxes.
- __overlay-opacity__ ~number~ - Opacity of box overlays.
- __overlay-filter__ ~string~ - Filter of box overlays.
- __shadow__ ~list~ - Box-Shadow of boxes.
- __sizes__ ~list\<tuple\>~ - Available box sizes, each defined as a tuple of name and size.
