export const MenuSampleOrder:Object = [
    { 'path': 'menu/default', 'component':'Default', 'name': 'Default Functionalities', 'order': '01', 'category': 'Menu Bar', 'api':'{ "MenuComponent":["items", "orientation"], "MenuItemModel": ["text", "iconCss", "items", "separator"] }', 'description': 'This example demonstrates the Syncfusion React Menu items with icons, text, separator and items submenu.' },
    { 'path': 'menu/data-binding', 'component':'DataBinding', 'name': 'Data Binding', 'order': '01', 'category': 'Menu Bar', 'api':'{ "MenuComponent": ["items"] }', 'description': 'This example demonstrates how to bind local data source (JavaScript object Array) with Syncfusion React Menu component.' },
    { 'path': 'menu/scrollable', 'component':'Scrollable', 'name': 'Scrollable', 'order': '01', 'category': 'Menu Bar', 'api':'{ "MenuComponent": ["items", "enableScrolling", "cssClass", "beforeOpen"] }', 'description': 'This example demonstrates how to load menu and sub menus with large number of menu items in horizontal / vertical scrollable Syncfusion React Menu.' },
    { 'path': 'menu/template', 'component':'Template', 'name': 'Template', 'order': '01', 'category': 'Menu Bar', 'api':'{ "MenuComponent": ["items", "fields", "template"], "FieldSettings": ["text", "children"] }', 'description': 'This example demonstrates how to customize Syncfusion React Menu component popup items by using templates.',
    'sourceFiles': [{ 'displayName': 'template.tsx', 'path': 'src/menu/template.tsx' }, { 'displayName': 'template.jsx', 'path': 'src/menu/template.jsx' }, { 'displayName': 'template-data.json', 'path': 'src/menu/template-data.json' }] },
    { 'path': 'menu/hamburger-mode', 'component':'HamburgerMenu', 'name': 'Hamburger Mode', 'order': '01', 'category': 'Menu Bar', 'api':'{ "MenuComponent": ["hamburgerMode", "title"] }', 'description': 'This example demonstrates the hamburger mode of the Syncfusion React Menu that enables the adaptive view.' },
    { 'path': 'menu/api', 'component':'Api', 'name': 'API', 'order': '01', 'category': 'Menu Bar', 'api':'{ "MenuComponent": ["orientation", "showItemOnClick", "enableItems"] }', 'description': 'This example demonstrates the supported APIs and its functionalities of the Syncfusion React Menu component.' },
    { 'path': 'menu/toolbar-integration', 'component':'ToolbarIntegration', 'name': 'Toolbar Integration', 'order': '02', 'category': 'Use Case', 'api':'{ "MenuComponent": ["items"], "FieldSettings": ["text", "children"] }', 'description': 'This example demonstrates the real use case of the Syncfusion React Menu in web application. It is integrated with toolbar component.' }
]