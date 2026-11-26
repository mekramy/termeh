---
description: Define custom spin and shake keyframe animations that Termeh uses in its components.
---

# Animations

Termeh provides the *__spin__* and *__shake__* keyframe animations. Components use __spin__ for *loading indicators* and __shake__ for *invalid inputs*. To change how these animations look, you can `define` your own versions.

::: tip
Define your keyframes __before__ including any component module. If a keyframe with the same name already exists, Termeh uses your version and skips its default.
:::

## Define Spin

__Defines__ the *__spin__* keyframes with your own rules.

::: signature

```scss
@mixin define-spin();
```

Pass the keyframe rules as the content block.

```scss
@include termeh.define-spin() {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
}
```

:::

## Define Shake

__Defines__ the *__shake__* keyframes with your own rules.

::: signature

```scss
@mixin define-shake();
```

Pass the keyframe rules as the content block.

```scss
@include termeh.define-shake() {
  0%,
  100% {
    transform: translateX(0);
  }

  25%,
  75% {
    transform: translateX(-4px);
  }
}
```

:::

## Spin

__Emits__ the default *__spin__* keyframes, which rotate an element a full turn. If __spin__ is already defined with `define-spin`, this mixin emits nothing.

::: signature

```scss
@mixin spin();
```

:::

## Shake

__Emits__ the default *__shake__* keyframes, which move an element from side to side. If __shake__ is already defined with `define-shake`, this mixin emits nothing.

::: signature

```scss
@mixin shake();
```

:::
