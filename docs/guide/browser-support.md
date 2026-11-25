---
description: Browser support for Termeh CSS framework.
---

# Browser Support

Termeh suggest use =last versions= of __modern browsers__ for the =best experience=. Minimum supported versions are listed below:

- __Chrome__ @88+@ (_January 2021_)
- __Edge__ @88+@ (_January 2021_)
- __Firefox__ @84+@ (_December 2020_)
- __Safari__ @14.1+@ (_April 2021_)
- __iOS Safari__ @14.5+@ (_April 2021_)
- __Opera__ @74+@ (_March 2021_)
- __Samsung Internet__ @15+@ (_April 2021_)
- __Chrome for Android__ @88+@ (_January 2021_)
- __Firefox for Android__ @84+@ (_December 2020_)

=Opera Mini= and =dead browsers= are excluded from the configured targets.

The table below lists all =CSS features= used in Termeh along with their priority. Features marked @High@ are required for Termeh to work correctly.

::: signature

| Feature | Supported Since | Priority |
| -- | -- | -- |
| `var()` function | _2017 Apr_ | @High@ |
| `calc()` function | _2015 Jul_ | @High@ |
| `:is` selector | _2021 Jan_ | @High@ |
| `:not` with selector lists | _2021 Jan_ | @High@ |
| Flex and flex gap | _2021 Apr_ | @High@ |
| CSS logical properties and values | _2020 Nov_ | Medium |
| CSS Grid | _2017 Mar_ | Medium |
| `aspect-ratio` property | _2021 Sep_ | Medium |
| `inset` property | _2021 Apr_ | Medium |
| `place-content` property | _2018 Jul_ | Medium |
| `backdrop-filter` property | _2022 Jul_ | Low |
| `:focus-visible` pseudo-class | _2022 Mar_ | Low |
| `:focus-within` pseudo-class | _2017 Mar_ | Low |
| `resolution` media feature | _2023 Mar_ | Only if use =responsive= mixin |
| `prefers-color-scheme` media feature | _2019 Jul_ | Only if use =responsive= mixin |
| `prefers-reduced-motion` media feature | _2019 Apr_ | Only if use =responsive= mixin |
| `prefers-contrast` media feature | _2022 May_ | Only if use =responsive= mixin |
| `dynamic-range` media feature | _2022 Feb_ | Only if use =responsive= mixin |
| `hover` and `pointer` media features | _2018 Dec_ | Only if use =responsive= mixin |

:::
