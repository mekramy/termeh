# Module Presented Check

Termeh provides utilities to manage custom modules. It allows you to check if a required module is loaded and throws an error if not. You can also register modules as loaded.

## Present Module

Adds a module to the global presented modules list.

::: definition

**Signature:**

```scss
@mixin present-module($module: STRING);
```

**Example:**

```scss
@include use-toast() {
  @include termeh.present-module("toast");

  @at-root {
    .toast {
      // ...
    }
  }
}
```

:::

## Required Module Check

Validates that required module are present. Throws an error if required module is missing.

::: definition

**Signature:**

```scss
@mixin require($module: STRING, $requirement: STRING);
```

**Example:**

```scss
@include use-notification() {
  @include termeh.require("notification", "toast");

  @at-root {
    @include termeh.present-module("notification");
    .notification {
      @extend .toast;
      // ...
    }
  }
}
```

:::
