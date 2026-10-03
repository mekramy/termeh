# Table Styles

Provides fully-featured table styles with configurable colors, row behaviors, hover effects, sorting, expandable rows, and alignment utilities.

::: tabs

== Preview

<!-- markdownlint-disable MD033 -->
<Preview>
  <div class="demo">
    <table class="is-fullwidth is-hoverable is-stripped is-primary">
      <thead>
        <tr>
          <th class="is-left-aligned is-filler is-sortable">Name</th>
          <th class="is-center-aligned is-sortable is-sorted is-asc">Age</th>
          <th class="is-sortable">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="is-left-aligned is-filler is-ellipsis">John Doe</td>
          <td class="is-center-aligned is-sorted">20</td>
          <td>john@example.com</td>
        </tr>
        <tr>
          <td class="is-left-aligned is-filler is-ellipsis">Jane Smith</td>
          <td class="is-center-aligned is-sorted">25</td>
          <td>jane.smith@example.com</td>
        </tr>
        <tr>
          <td class="is-left-aligned is-filler is-ellipsis">Jack Ma</td>
          <td class="is-center-aligned is-sorted">39</td>
          <td>jack.ma@example.com</td>
        </tr>
        <tr>
          <td class="is-left-aligned is-filler is-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus
            ex sapien vitae pellentesque sem placerat in id cursus mi.
          </td>
          <td class="is-center-aligned is-sorted">44</td>
          <td>jack.ma@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="demo">
    <table class="is-fullwidth is-hoverable is-stripped is-maroon">
      <thead>
        <tr>
          <th class="is-left-aligned is-filler is-sorted is-asc is-sortable">Name</th>
          <th class="is-center-aligned is-sortable">Age</th>
          <th class="is-sortable is-indigo">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="is-left-aligned is-filler is-sorted is-ellipsis">John Doe</td>
          <td class="is-center-aligned">20</td>
          <td class="is-indigo">john@example.com</td>
        </tr>
        <tr>
          <td class="is-left-aligned is-filler is-sorted is-ellipsis">Jane Smith</td>
          <td class="is-center-aligned">25</td>
          <td class="is-indigo">jane.smith@example.com</td>
        </tr>
        <tr>
          <td class="is-left-aligned is-filler is-sorted is-ellipsis">Jack Ma</td>
          <td class="is-center-aligned">39</td>
          <td class="is-indigo">jack.ma@example.com</td>
        </tr>
        <tr>
          <td class="is-left-aligned is-filler is-sorted is-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus
            ex sapien vitae pellentesque sem placerat in id cursus mi.
          </td>
          <td class="is-center-aligned">44</td>
          <td class="is-indigo">jack.ma@example.com</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="is-filler"></td>
          <td>AVG: 32</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</Preview>
<!-- markdownlint-enable MD033 -->

== Source

```html
<table class="is-fullwidth is-hoverable is-stripped is-primary">
  <thead>
    <tr>
      <th class="is-left-aligned is-filler is-sortable">Name</th>
      <th class="is-center-aligned is-sortable is-sorted is-asc">Age</th>
      <th class="is-sortable is-indigo">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="is-left-aligned is-filler is-ellipsis">John Doe</td>
      <td class="is-center-aligned is-sorted">20</td>
      <td class="is-indigo">john@example.com</td>
    </tr>
    <tr>
      <td class="is-left-aligned is-filler is-ellipsis">Jane Smith</td>
      <td class="is-center-aligned is-sorted">25</td>
      <td class="is-indigo">jane.smith@example.com</td>
    </tr>
    <tr>
      <td class="is-left-aligned is-filler is-ellipsis">Jack Ma</td>
      <td class="is-center-aligned is-sorted">39</td>
      <td class="is-indigo">jack.ma@example.com</td>
    </tr>
    <tr>
      <td class="is-left-aligned is-filler is-ellipsis">
        Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus
        ex sapien vitae pellentesque sem placerat in id cursus mi.
      </td>
      <td class="is-center-aligned is-sorted">44</td>
      <td class="is-indigo">jack.ma@example.com</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td class="is-filler"></td>
      <td>AVG: 32</td>
      <td></td>
    </tr>
  </tfoot>
</table>
```

:::

## Usage

::: definition

**Signature:**

```scss
@mixin use-table($colors: ());
```

**Example:**

```scss
// Apply all registered color variants
@include termeh.use-table();

// Apply only specific color variants
@include termeh.use-table(("primary", "error"));
```

**Module:**

This module is registered as `table` in the _presented modules_.

:::

::: dependencies

Table module uses the following Termeh global `var()`:

| Component  | Variable               | Type          | Usage                                              | Default    |
|------------|------------------------|---------------|----------------------------------------------------|------------|
| **base**   | **section**            | _Color_       | _Fallback_ background for striped rows             | `null`     |
| **base**   | **separator**          | _Color_       | _Fallback_ color for row and section separators    | `null`     |
| **strong** | **weight**             | _Font Weight_ | _Fallback_ font weight for headers                 | `bold`     |
| **table**  | **background**         | _Color_       | Main table background                              | `null`     |
| **table**  | **foreground**         | _Color_       | Default table text color                           | `null`     |
| **table**  | **decorator**          | _Color_       | Sort decorator color                               | _FALLBACK_ |
| **table**  | **hover-background**   | _Color_       | Hover row background                               | _FALLBACK_ |
| **table**  | **striped-background** | _Color_       | Even row background                                | _FALLBACK_ |
| **table**  | **sorted-background**  | _Color_       | Sorted column background                           | _FALLBACK_ |
| **table**  | **column-separator**   | _Color_       | Column separator color for `<tbody>` cells         | `null`     |
| **table**  | **row-separator**      | _Color_       | Row separator color                                | _FALLBACK_ |
| **table**  | **section-separator**  | _Color_       | Section separator color                            | _FALLBACK_ |
| **table**  | **strong-weight**      | _Font Weight_ | Strong font weight for headers                     | _FALLBACK_ |

---

Table module uses the following Termeh `color()` :

| Color       | Usage                                                | Default |
|-------------|------------------------------------------------------|---------|
| **primary** | Accent color for scrollbars                          | _error_ |
| **shade**   | _Fallback_ color for sort backgrounds and decorators | _error_ |

:::

## Table Container

You can wrap your table inside `.table-container` to enable scrolling on overflow.

## Modifiers

- `.is-fullwidth` → makes the table span 100% width
- `.is-stripped` → applies alternating background to even rows
- `.is-hoverable` → highlights rows on hover
- `.is-<color>` → applies a registered color as accent color

## Child Elements

- `<thead>` → include header rows
  - `<tr>` → define a header row
    - `<th>` → define a header column
- `<tbody>` → include table content
  - `<tr>` → define a body row
    - `<td>` → define a body column
- `<tfoot>` → include table footer and summary
  - `<tr>` → define a footer row
    - `<td>` → define a footer column

## Header Modifiers

- `.is-center-aligned` → centers text inside column
- `.is-right-aligned` → right-aligns text inside column
- `.is-left-aligned` → left-aligns text inside column
- `.is-ellipsis` → truncates overflowing text in column with ellipsis
- `.is-filler` → expands column to fill remaining space
- `.is-sortable` → makes a column sortable
- `.is-sorted` → marks a column as sorted
- `.is-asc` → marks sorted column as ascending
- `.is-desc` → marks sorted column as descending

## Body And Footer Modifiers

- _ROW_

  - `.is-even` → applies alternate background to even rows
  - `.extra` → marks row as extra content for the previous row
  - `.is-expanded` → shows the next `.extra` row

- _COLUMN_
  - `.is-center-aligned` → centers text inside column
  - `.is-right-aligned` → right-aligns text inside column
  - `.is-left-aligned` → left-aligns text inside column
  - `.is-ellipsis` → truncates overflowing text in column with ellipsis
  - `.is-filler` → expands column to fill remaining space
  - `.is-multiline` → allows multi-line text inside column
  - `.is-sorted` → marks a column as sorted
  - `.is-<color>` → apply light highlight to column
