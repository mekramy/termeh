# Module Registration and Duplicate Checks

Termeh provides utilities for managing custom modules. Use them to check whether required modules are available, register modules as loaded, and avoid defining a module more than once.

## Present Module

Registers a module as available so other module checks can recognize it.

::: definition

**Signature:**

```scss
@mixin present-module($module: String);
```

**Example:**

```scss
@include use-toast() {
  // Define the module only if it has not already been registered
  @if not termeh.module-presented("toast") {
    // Register the module to prevent duplicate definitions
    @include termeh.present-module("toast");

    @at-root {
      .toast {
        // ...
      }
    }
  }
}
```

:::

::: error
**throw** If the input is not a string.
:::

## Required Module Check

Checks that a required module is available. Throws an error if the required module has not been registered.

::: definition

**Signature:**

```scss
@mixin require($module: String, $requirement: String);
```

**Example:**

```scss
@include use-notification() {
  @include termeh.require("notification", "toast");

  @if not termeh.module-presented("notification") {
    @include termeh.present-module("notification");
    @at-root {
      .notification {
        @extend .toast;
        // ...
      }
    }
  }
}
```

:::

::: error
**throw** If either input is not a valid string, or if the required module is not present.
:::

## Module Presented Check

Checks whether a module has been registered as available.

::: definition

**Signature:**

```scss
@function module-presented($module: String): Boolean;
```

**Example:**

```scss
@include use-toast() {
  @if not termeh.module-presented("toast") {
    @at-root {
      .toast {
        // styling only applied if module not registered
      }
    }
  }
}
```

:::

::: error
**throw** If the input is not a valid string.
:::
