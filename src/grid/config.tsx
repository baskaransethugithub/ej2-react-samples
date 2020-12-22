export const GridSampleOrder: Object = [
  { 'path': 'grid/overview', 'component': 'OverView', 'name': 'Overview', 'description':'This demo for Essential JS 2 grid component is an overview of how to display and manipulate large data with configuration options.', 'order': '01', 'category': 'Data Grid' ,'api':'{"GridComponent":["queryCellInfo","dataSource","enableVirtualization","allowFiltering","allowSorting","allowSelection","selectionSettings","height","columns","dataBound","actionComplete","load"] }',
    'sourceFiles': [{ 'displayName': 'overview.tsx', 'path': 'src/grid/overview.tsx' }, { 'displayName': 'overview.jsx', 'path': 'src/grid/overview.jsx' }, { 'displayName': 'overview.css', 'path': 'src/grid/grid-overview.css' }] },
    { 'path': 'grid/default', 'component': 'Default', 'name': 'Default Functionalities', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the default rendering of the grid component with minimum configuration.', 'category': 'Data Grid' ,'api':'{"GridComponent":["columns","dataSource"] }'},
     { 'path': 'grid/grid-lines', 'component': 'GridLines', 'name': 'GridLines', 'order': '01', 'description':'This demo for Essential JS 2 grid component demonstrates the visibility of the grid lines that separate the rows and columns.', 'category': 'Data Grid','api':'{"GridComponent":["gridLines","dataSource"] }' },
     { 'path': 'grid/hierarchy', 'component': 'Hierarchy', 'name': 'Hierarchy Grid', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the hierarchical binding feature that helps to build multilevel parent-child relationships.', 'category': 'Data Grid','api':'{"GridComponent":["dataSource","allowSorting","columns","detailDataBound","dataBound","created","childGrid"] }' },
     { 'path': 'grid/clipboard', 'component': 'Clipboard', 'name': 'Clipboard', 'order': '01', 'description':'This demo for Essential JS 2 grid control shows copy to clipboard functionality of grid. Select rows and click Copy button from toolbar to copy content.', 'category': 'Data Grid','api':'{"GridComponent":["dataSource","allowPaging","toolbar","columns","pageSettings","allowSelection","selectionSettings","toolbarClick"] }' },
     { 'path': 'grid/context-menu', 'component': 'ContextMenuSample', 'name': 'Context Menu', 'order': '01', 'description':'This demo for Essential JS 2 grid control shows demonstrates the usage of context menu in grid. Right click anywhere on the grid to view context menu.', 'category': 'Data Grid', 'api':'{"GridComponent":["dataSource","allowSorting", "allowGrouping", "allowPdfExport", "allowExcelExport", "editSettings", "allowPaging", "contextMenuItems", "columns"]}'},
     { 'path': 'grid/master-detail', 'component': 'MasterDetail', 'name': 'Master/Detail', 'order': '01', 'description':'This demo for Essential JS 2 grid component shows the the usage of master/detail. When a particular row is clicked in master Grid.', 'category': 'Data Grid', 'api':'{"GridComponent":["dataSource","allowSelection", "rowSelected","columns"]}' },
     { 'path': 'grid/grouping', 'component': 'Grouping', 'name': 'Default Grouping', 'order': '02', 'description':'This demo for Essential JS 2 grid control demonstrates the grouping feature of the grid control. The grid control has options to group records based on columns.', 'category': 'Grouping','api':'{"GridComponent":["allowPaging","allowSorting","groupSettings","pageSettings","allowGrouping"] }' },
     { 'path': 'grid/lazy-load-grouping', 'component': 'LazyLoadGrouping', 'name': 'Lazy Load Grouping', 'order': '02', 'description':'This demo for Essential JS 2 grid control shows demonstrates the usage of the lazy load grouping feature.', 'category': 'Grouping','api':'{"GridComponent":["dataSource","allowPaging","groupSettings","allowGrouping","height","columns"] }' },
     { 'path': 'grid/scrolling', 'component': 'Scrolling', 'name': 'Default Scrolling', 'order': '03', 'description':'This demo for Essential JS 2 grid component shows the usage of the horizontal and vertical scrollbars to view grid content that exceeds the grid area.', 'category': 'Scrolling','api':'{"GridComponent":["dataSource","height","width","columns"] }' },
     { 'path': 'grid/virtualization', 'component': 'Virtualization', 'name': 'Virtual Scrolling', 'order': '03', 'description':'This demo demonstrates how to use Essential JS 2 grid to show a large data view without performance degradation by rendering only the required rows and columns.', 'category': 'Scrolling','api':'{"GridComponent":["dataSource","enableVirtualization","enableColumnVirtualization","dataBound","height","columns"] }' },
     { 'path': 'grid/infinite-scrolling', 'component': 'InfiniteScrolling', 'name': 'Infinite Scrolling', 'order': '03', 'description':'This sample demonstrates the Grid component with the infinite scrolling feature in which the buffer data is loaded only when the scrollbar reaches the end.', 'category': 'Scrolling','api':'{"GridComponent":["dataSource","enableInfiniteScrolling","height","columns"] }' },
     { 'path': 'grid/local-binding', 'component': 'Localbinding', 'name': 'Local Data', 'order': '04', 'description':'This demo for Essential JS 2 grid control demonstrates the way for binding a grid with a local data source.', 'category': 'Data Binding','api':'{"GridComponent":["dataSource","allowPaging","columns","pageSettings"] }' },
     { 'path': 'grid/remote-data', 'component': 'RemoteDataBinding', 'name': 'Remote Data', 'order': '04', 'description':'This demo for Essential JS 2 grid control shows the way of data binding grid with remote service. Grid data source is bound to remote data using DataManager.', 'category': 'Data Binding','api':'{"GridComponent":["dataSource","allowPaging","columns","pageSettings"] }' },
     { 'path': 'grid/custom-binding', 'component': 'CustomBinding', 'name': 'Custom Binding', 'order': '04', 'description':'This demo for Essential JS 2 grid component shows how to bind the data using custom data binding. It shows the way of binding data to the grid.', 'category': 'Data Binding','api':'{"GridComponent":["dataSource","allowPaging","columns","pageSettings","allowSorting", "allowGrouping"] }' },
     { 'path': 'grid/auto-wrap', 'component': 'AutoWrap', 'name': 'AutoWrap Column cells', 'order': '05', 'description':'This demo for Essential JS 2 grid component shows how the grid cell content is autowrapped to show large cell content.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","allowTextWrap","columns","pageSettings"] }' },
     { 'path': 'grid/show-hide', 'component': 'ShowHide', 'name': 'Show or Hide Column', 'description':'This demo for Essential JS 2 grid control demonstrates the dynamic show and hide columns feature. Use the properties panel to hide/show the column.', 'order': '05', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/stacked-header', 'component': 'StackedHeader', 'name': 'Stacked Header', 'description':'This demo for Essential JS 2 grid control shows the usage of the sorting API in grid. Use the properties panel to sort/unsort columns using API.', 'order': '05', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns"] }'},
     { 'path': 'grid/reorder', 'component': 'Reordering', 'name': 'Reorder', 'order': '05', 'description':'This demo for Essential JS 2 grid control shows the reordering columns feature. Select column name and index from properties panel to reorder the columns.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowReordering","actionComplete","columns"] }' },
     { 'path': 'grid/column-chooser', 'component': 'ColChooser', 'name': 'Column Chooser', 'order': '05', 'description':'This demo for Essential JS 2 grid component shows how the column chooser feature can be used to show or hide columns dynamically.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowPaging","showColumnChooser","columns","toolbar"] }'},
     { 'path': 'grid/column-resizing', 'component': 'ColumnResizing', 'name': 'Column Resize', 'order': '05', 'description':'This demo for Essential JS 2 grid component shows how the column resizing feature can be used to change width dynamically.', 'category': 'Columns','api':'{"GridComponent":["dataSource","allowResizing","height","columns"] }'},
     { 'path': 'grid/column-spanning', 'component': 'ColumnSpanning', 'name': 'Column Spanning', 'order': '05', 'description':'This demo for Essential JS 2 grid control demonstrates the grid with column spanning feature to span multiple adjacent cells together.', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowTextWrap","columns","queryCellInfo","gridLines","width","height"] }' },
     { 'path': 'grid/column-template', 'component': 'ColumnTemplate', 'name': 'Column Template', 'order': '05', 'description':'This demo for Essential JS 2 grid control demonstrates usage of template columns in Grid to shown custom images in the Employee Image column.', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","columns","width","height"] }' },
     { 'path': 'grid/column-menu', 'component': 'ColumnMenuSample', 'name': 'Column Menu', 'description':'This demo for Essential JS 2 grid component shows the usage of the various column functionalities of the column menu feature.', 'order': '05', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowSorting", "allowGrouping", "allowFiltering", "showColumnMenu", "filterSettings", "groupSettings", "columns", "allowSorting"]}' },
     { 'path': 'grid/foreign-key', 'component': 'ForeignKeyColumn', 'name': 'Foreign Key Column', 'description':'This demo for Essential JS 2 grid control shows the usage of a foreign key column and perform actions like filtering, sorting and editing.', 'order': '05', 'category': 'Columns', 'api':'{"GridComponent":["dataSource","allowSorting","allowPaging", "columns", "allowFiltering", "filterSettings", "editSettings"]}'},
     { 'path': 'grid/row-template', 'component': 'RowTemplate', 'name': 'Row Template', 'order': '06', 'description':'This demo for Essential JS 2 grid control shows the usage of the row template feature. We have rendered each Grid row using template.', 'category': 'Rows','api':'{"GridComponent":["dataSource","columns","rowTemplate"] }' },
     { 'path': 'grid/detail-template', 'component': 'DetailTemplate', 'name': 'Detail Template', 'order': '06', 'description':'This demo for Essential JS 2 grid control shows the grid with detail template feature. Click the expand button to show the detailed information about a row.', 'category': 'Rows', 'api':'{"GridComponent":["dataSource","columns","detailTemplate","width","height"] }' },
     { 'path': 'grid/row-height', 'component': 'RowHeight', 'name': 'Row Height', 'description':'This demo for Essential JS 2 grid control shows the row height feature. Click on the toolbar icons to change row"s height.', 'order': '06', 'category': 'Rows','api':'{"GridComponent":["dataSource","toolbar","height","columns","rowHeight","toolbarClick"] }' },
     { 'path': 'grid/row-drag-drop', 'component': 'Source', 'name': 'Row Drag and Drop', 'description':'This demo for Essential JS 2 grid component demonstrates how the rows can be dragged between grids using the row drag-and-drop feature.', 'order': '06', 'category': 'Rows', 'hideOnDevice': 'true','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","allowRowDragAndDrop","selectionSettings","rowDropSettings","width"] }' },
     { 'path': 'grid/drag-drop-within-grid', 'component': 'DragWithinGrid', 'name': 'Row Drag And Drop Within Grid', 'description':'This demo for Essential JS 2 grid component demonstrates how the rows can be dragged within the grid using the row drag-and-drop feature.', 'order': '06', 'category': 'Rows', 'hideOnDevice': 'true','api':'{"GridComponent":["dataSource","allowPaging","columns","allowRowDragAndDrop","selectionSettings","width"] }' },
     { 'path': 'grid/row-spanning', 'component': 'RowSpanning', 'name': 'Row Spanning', 'description':'This demo for Essential JS 2 grid control demonstrates the row spanning feature. In this sample, we have spanned row cells together.', 'order': '06', 'category': 'Rows', 'hideOnDevice': 'true', 'api':'{"GridComponent":["dataSource","allowTextWrap","columns","queryCellInfo","gridLines","width","height"] }' },
     { 'path': 'grid/frozen-rows', 'component': 'FrozenRows', 'name': 'Default Frozen', 'order': '07', 'description':'This demo for Essential JS 2 grid control shows frozen rows/columns feature of grid. Scroll the movable content to view the frozen rows/columns.', 'category': 'Frozen', 'api':'{"GridComponent":["dataSource","allowSelection","columns","frozenColumns","frozenRows","height"] }' },
     { 'path': 'grid/frozen-api', 'component': 'FrozenAPI', 'name': 'Frozen API', 'order': '07', 'description':'This demo for Essential JS 2 grid component shows how the frozen rows and columns at both sides of the Grid.', 'type': 'new', 'category': 'Frozen',  'api':'{"GridComponent":["dataSource","allowSelection","columns","frozenColumns","frozenRows","height"] }' },
     { 'path': 'grid/sorting', 'component': 'Sorting', 'name': 'Sorting', 'order': '08', 'description':'This demo for Essential JS 2 grid component shows the grid multi-sorting feature. Using this feature, grid rows can be sorted by two or more columns.', 'category': 'Sorting','api':'{"GridComponent":["dataSource","allowSelection","selectionSettings","columns","enableHover"] }' },
     { 'path': 'grid/filtering', 'component': 'Filtering', 'name': 'Default Filtering', 'description':'This demo for Essential JS 2 grid component shows how to place a filter bar row in the header to filter grid rows.', 'order': '09', 'category': 'Filtering','api':'{"GridComponent":["allowFiltering","dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/filter-menu', 'component': 'FilterMenu', 'type': 'update', 'name': 'Filter Menu', 'order': '09', 'category': 'Filtering', 'description':'This demo for Essential JS 2 grid component demonstrates a way of filtering rows using a menu, check box, and Excel filter UI.', 'api':'{"GridComponent":["allowFiltering","filterSettings","dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/searching', 'component': 'Searching', 'name': 'Search', 'description':'This demo for Essential JS 2 grid control shows the content searching feature. Use the search box from toolbar to search for records in grid.', 'order': '09', 'category': 'Filtering','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","toolbar"] }' },
     { 'path': 'grid/paging', 'component': 'Paging', 'type': 'update', 'name': 'Paging', 'description':'This demo for Essential JS 2 grid component shows how you can display the contents of the grid in page segments using the paging feature.', 'order': '10', 'category': 'Paging','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns"] }' },
     { 'path': 'grid/selection', 'component': 'Selectioning', 'name': 'Default Selection', 'description':'This demo for Essential JS 2 grid component shows how to select rows or cells through simple mouse down or keyboard interaction using the selection feature.', 'order': '11', 'category': 'Selection','api':'{"GridComponent":["dataSource","allowSelection","selectionSettings","enableHover","columns"] }' },
     { 'path': 'grid/selection-api', 'component': 'SelectionAPI', 'type':'update', 'name': 'Selection API', 'description':'This demo for Essential JS 2 grid control shows how to perform selection programmatically by using the buttons in properties panel.', 'order': '11', 'category': 'Selection','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","allowSelection","selectionSettings","enableHover"] }' },
     { 'path': 'grid/checkbox-selection', 'component': 'CheckboxSelection', 'name': 'Checkbox Selection', 'description':'This demo for Essential JS 2 grid component shows how the check box selection feature can be used to select grid rows.', 'order': '11', 'category': 'Selection','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","allowSelection","selectionSettings","enableHover"] }' },
     { 'path': 'grid/aggregate-default', 'component': 'AggregateDefault',  'description': 'This demo for Essential JS 2 grid component shows how the row values can be aggregated and shown in a column footer.', 'name': 'Default Aggregate', 'order': '12', 'category': 'Aggregates','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","Aggregate"] }'},
     { 'path': 'grid/aggregate-group', 'component': 'AggregateGroup', 'name': 'Group and Caption aggregate', 'description': 'This demo for Essential JS 2 grid component shows how the row values can be aggregated for each group of items and shown in a group caption and footer.', 'order': '12', 'category': 'Aggregates','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","Aggregate", "Group"] }'},
     { 'path': 'grid/reactive-aggregate', 'component': 'ReactiveAggregate', 'name': 'Reactive Aggregate', 'order': '12', 'description': 'This demo for Essential JS 2 grid component shows how the row values can be updated while the data is modified.', 'category': 'Aggregates','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","Aggregate", "Group", "Edit","Toolbar"] }'},
     { 'path': 'grid/normal-edit', 'component': 'NormalEdit', 'name': 'Inline Editing', 'description':'This demo for Essential JS 2 grid control shows the inline editing operation. In the below sample, You can perform CRUD operations in grid.', 'order': '13', 'category': 'Editing','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }'},
     { 'path': 'grid/dialog-edit', 'component': 'DialogEdit', 'name': 'Dialog Editing', 'order': '13', 'category': 'Editing', 'description':'This demo for Essential JS 2 grid component shows how to edit grid rows using the Essential JS 2 dialog component.', 'api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }' },
     { 'path': 'grid/dialog-template', 'component': 'DialogTemplate', 'name': 'Dialog Template', 'order': '13', 'category': 'Editing', 'description':'This demo for Essential JS 2 grid component shows how to edit the grid rows using Essential JS 2 Dialog template.','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }' },
     { 'path': 'grid/batch', 'component': 'BatchEdit', 'name': 'Batch Editing', 'order': '13', 'description':'This demo for Essential JS 2 grid component shows how to perform bulk changes to the grid content using batch edit mode.', 'category': 'Editing','api':'{"GridComponent":["dataSource","allowPaging","pageSettings","columns","editSettings","toolbar"] }'},
     { 'path': 'grid/command-column', 'component': 'CommandColumnEdit', 'name': 'CommandColumn', 'order': '13', 'description':'This demo for Essential JS 2 grid component shows how to edit and delete records using a command column.', 'category': 'Editing','api':'{"GridComponent":["dataSource","allowPaging","showColumnChooser","columns","toolbar"] }'},
     { 'path': 'grid/default-exporting', 'component': 'Exporting', 'name': 'Default Exporting', 'order': '14', 'category': 'Exporting', 'description':'This demo for Essential JS 2 grid component shows the client-side exporting of grid content to Excel, PDF, and CSV formats.', 'api':'{"GridComponent":["dataSource","allowExcelExport","allowPdfExport","allowPaging","toolbar","pageSettings","columns","groupSettings","allowGrouping"] }' },
     { 'path': 'grid/advanced-exporting', 'component': 'AdvancedExporting', 'name': 'Advanced Exporting', 'order': '14', 'description':'This demo for Essential JS 2 grid component demonstrates how exporting can be customized to add headers and footers in exported documents.', 'category': 'Exporting','api':'{"GridComponent":["dataSource","allowExcelExport","allowPdfExport","toolbar","allowPaging","pageSettings","columns"] }'},
     { 'path': 'grid/master-details-export', 'component': 'HierarchyExport', 'name': 'Hierarchy Exporting', 'order': '14', 'description':'This demo for Essential JS 2 grid control demonstrates how to export hierarchy grid in exported documents.', 'category': 'Exporting','api':'{"GridComponent":["dataSource","toolbar","allowPaging","pageSettings","columns", "childGrid"] }'},
     { 'path': 'grid/print', 'component': 'Print', 'name': 'Print', 'order': '14', 'description':'This demo for Essential JS 2 grid control shows how to print the grid content. Click the print button from the toolbar item to print Grid.', 'category': 'Exporting','api':'{"GridComponent":["dataSource","toolbar","allowPaging","pageSettings","columns"] }'}
 ]