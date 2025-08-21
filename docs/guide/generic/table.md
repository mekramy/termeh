# Table Styles

Provides fully-featured table styles with configurable colors, row behaviors, hover effects, sorting, expandable rows, and alignment utilities.

::: code-group

```scss [usage.scss]
@mixin use-table($colors: ());
```

```scss [example.scss]
// Apply all registered color variants
@include use-table();

// Apply only specific color variants
@include use-table(("primary", "error"));
```

:::

::: extra Termeh Variables

```scss
$shade: termeh.color("shade");
$primary: termeh.color("primary");

$base-color: termeh.var("base", "color", white);
$base-section: termeh.var("base", "section");
$base-separator: termeh.var("base", "separator");
$base-sort: rgba($shade, 0.05);
$base-hover: color.mix($base-section, $shade, 90%);
$base-strong: termeh.var("strong", "weight", bold);

$table-color: termeh.var("table", "background", $base-color);
$table-fg: termeh.var("table", "foreground");
$table-even: termeh.var("table", "even", $base-section);
$table-hover: termeh.var("table", "hover", $base-hover);
$table-grid: termeh.var("table", "grid", null);
$table-divider: termeh.var("table", "divider", $base-separator);
$table-separator: termeh.var("table", "separator", $base-separator);
$table-decorator: termeh.var("table", "decorator", $shade);

$sort-background: termeh.var("table", "sort-background", $base-sort);
$sort-foreground: termeh.var("table", "sort-foreground", null);

$table-strong: termeh.var("table", "strong-weight", $base-strong);
```

- `$shade` → Accent color for row hover, decorators, and subtle highlights.
- `$primary` → Brand primary color for scrollable areas and selections.
- `$table-color` → Table body background (alternative).
- `$table-fg` → Text color for table cells.
- `$table-even` → Background for even rows.
- `$table-hover` → Row hover color.
- `$table-grid` → Optional column border color.
- `$table-divider` → Bottom border color for last row.
- `$table-separator` → Row separator color.
- `$table-decorator` → Color for sorting indicators.
- `$sort-background` → Background for sorted column/cell.
- `$sort-foreground` → Text color for sorted column/cell.
- `$table-strong` → Font weight for header cells.

:::

## Available Classes

### Table Layout & Structure

- _`.is-fullwidth`_ → Table spans full container width.
- _`.is-stripped`_ → Alternating background for even rows.
- _`.is-hoverable`_ → Row highlights on hover.
- _`.table-container`_ → Wrap table to enable horizontal scrolling.

### Expandable Rows

- _`.is-expanded`_ → Shows associated `.extra` row.
- _`.extra`_ → Hidden content shown only for expanded row.

### Column Alignment

- _`.is-left-aligned`_ → Align text left.
- _`.is-center-aligned`_ → Align text center.
- _`.is-right-aligned`_ → Align text right.

### Text Overflow

- _`.is-ellipsis`_ → Truncate overflow text with ellipsis.
- _`.is-filler`_ → Fills remaining width, truncates overflow.

### Sorting

- _`.is-sortable`_ → Makes column sortable; pointer cursor added.

  - `.is-asc` → Sorted ascending.
  - `.is-desc` → Sorted descending.

- _`.is-sorted`_ → Highlights sorted column/cell.

### Color Variants

- `.is-primary`, `.is-error`, `.is-warning`, etc.
- Changes hover, sorted column, and decorator colors.

## Colors

- `$colors` → List of color variants to include. Defaults to `()` (all registered).
  Example: `("primary", "error")` to include only those two variants.

## Example

```html
<div class="table-container">
  <table class="is-fullwidth is-hoverable is-stripped is-primary">
    <thead>
      <tr>
        <th class="is-left-aligned is-filler is-sortable is-sorted is-asc">
          Name
        </th>
        <th class="is-center-aligned">Age</th>
        <th class="is-right-aligned is-ellipsis">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr class="is-expanded">
        <td class="is-left-aligned is-filler is-sorted">John Doe</td>
        <td class="is-center-aligned">30</td>
        <td class="is-right-aligned is-ellipsis">john@example.com</td>
      </tr>
      <tr class="extra">
        <td colspan="3">Extra info for John Doe</td>
      </tr>
      <tr class="is-even">
        <td class="is-left-aligned is-filler is-sorted">Jane Smith</td>
        <td class="is-center-aligned">25</td>
        <td class="is-right-aligned is-ellipsis">jane.smith@example.com</td>
      </tr>
    </tbody>
  </table>
</div>
```
