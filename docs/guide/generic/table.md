# Table Styles

Provides fully-featured table styles with configurable colors, row behaviors, hover effects, sorting, expandable rows, and alignment utilities.

::: tabs

== Preview

<Preview>
  <table class="is-fullwidth is-hoverable is-stripped is-primary is-ellipsis">
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
</Preview>

== Source

```html
<table class="is-fullwidth is-hoverable is-stripped is-primary is-ellipsis">
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
@include use-table();

// Apply only specific color variants
@include use-table(("primary", "error"));
```

:::

::: termeh

Table module uses the following Termeh registered `color()`

| Color     | Usage                                     |
| --------- | ----------------------------------------- |
| `shade`   | Base shade for hover, sort, and decorator |
| `primary` | Scrollbar color inside `.table-container` |

Table module uses the following Termeh global `var()`

| Component                   | Type     | Usage                                                   |
| --------------------------- | -------- | ------------------------------------------------------- |
| `base` → `color`            | _Color_  | _Default_ table background                              |
| `base` → `section`          | _Color_  | _Default_ even row background                           |
| `base` → `separator`        | _Color_  | _Default_ Divider/separator border colors               |
| `strong` → `weight`         | _String_ | _Default_ strong font-weight for headers                |
| `table` → `background`      | _Color_  | Table background color                                  |
| `table` → `foreground`      | _Color_  | Text color inside cells and headers                     |
| `table` → `even`            | _Color_  | Background for even rows                                |
| `table` → `hover`           | _Color_  | Background color on row hover                           |
| `table` → `grid`            | _Color_  | Vertical cell borders (grid lines)                      |
| `table` → `divider`         | _Color_  | Border color for section (head, body, footer) separator |
| `table` → `separator`       | _Color_  | Row separator borders                                   |
| `table` → `decorator`       | _Color_  | Border color for sorted columns                         |
| `table` → `sort-background` | _Color_  | Background for sorted cells                             |
| `table` → `sort-foreground` | _Color_  | Text color for sorted header cells                      |
| `table` → `strong-weight`   | _String_ | Font-weight for strong table headers                    |

Table module uses the following Termeh registered `colors()`

| Color Variant        | Usage                                      |
| -------------------- | ------------------------------------------ |
| any registered color | Overrides table selection and sort styling |

:::

## Available classes

- `.table-container` → wraps the table with scrollable container
- `.is-fullwidth` → makes the table span 100% width
- `.is-stripped` → applies alternating background to even rows
- `.is-hoverable` → highlights rows on hover
- `.is-center-aligned` → centers text inside `th`/`td`
- `.is-right-aligned` → right-aligns text inside `th`/`td`
- `.is-left-aligned` → left-aligns text inside `th`/`td`
- `.is-ellipsis` → truncates overflowing text in `th`/`td` with ellipsis
- `.is-filler` → expands `th`/`td` to fill remaining space
- `.is-multiline` → allows multi-line text inside `td`
- `.is-sorted` → marks a column as sorted (`th`/`td`)
- `.is-sortable` → makes a column sortable (`th`)
- `.is-asc` → marks sorted column as ascending (`th`)
- `.is-desc` → marks sorted column as descending (`th`)
- `.is-even` → applies alternate background to even `tr` rows
- `.is-expanded` → expands a `tr` and reveals the following `.extra` row
- `.is-<color>` → applies a themed color variant to the table (e.g., `.is-primary`, `.is-error`)
