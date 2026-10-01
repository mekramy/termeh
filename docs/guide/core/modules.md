# Module Presented And Duplicated Check

Termeh provides utilities to manage custom modules. It allows you to check if a required module is loaded and throws an If not. You can also register modules as loaded and check if a module has been presented.

## Present Module

Registers a module as available.

::: error
**throws** If the input is not a string.
:::

::: definition

**Signature:**

```scss
@mixin present-module($module: STRING);
```

**Example:**

```scss
@include use-toast() {
  // Skip define if module already defined
  @if not termeh.module-presented("toast") {
    // Register module to ignore duplicate call
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

## Required Module Check

Validates that required modules are present. Throws an If any required module is missing.

::: error
**throws** If either input is not a valid string or if the required module is not present.
:::

::: definition

**Signature:**

```scss
@mixin require($module: STRING, $requirement: STRING);
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

## Module Presented Check

Checks whether a module has been registered.

::: error
**throws** If the input is not a valid string.
:::

::: definition

**Signature:**

```scss
@function module-presented($module: STRING): BOOLEAN;
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
