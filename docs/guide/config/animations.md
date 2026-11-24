---
description: Define custom spin and shake keyframe animations that Termeh uses in its components.
---

# Animations

Termeh provides the __spin__ and __shake__ keyframe animations. Components use =spin= for _loading indicators_ and =shake= for _invalid inputs_. To change how these animations look, you can =define= your own versions.

::: tip Note
Define your keyframes =before= including any component module. If a keyframe with the same name already exists, Termeh uses your version and skips its default.
:::

## Define Spin

=Defines= the __spin__ keyframes with your own rules.

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

=Defines= the __shake__ keyframes with your own rules.

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

=Emits= the default __spin__ keyframes, which rotate an element a full turn. If =spin= is already defined with `define-spin`, this mixin emits nothing.

::: signature

```scss
@mixin spin();
```

:::

## Shake

=Emits= the default __shake__ keyframes, which move an element from side to side. If =shake= is already defined with `define-shake`, this mixin emits nothing.

::: signature

```scss
@mixin shake();
```

:::
