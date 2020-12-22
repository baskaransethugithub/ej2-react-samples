export const PdfViewerSampleOrder:Object = [
    { 'path': 'pdfviewer/default', 'component':'Default', 'name': 'Default', 'order': '01', 'category': 'PDF Viewer', 'description': 'This demo for Essential JS 2 PdfViewer shows the default rendering of the PdfViewer with minimum configuration.' , 'api':'{"PdfViewerComponent":["serviceUrl", "documentPath"] }' },
    { 'path': 'pdfviewer/custom-toolbar', 'component': 'CustomToolbar', 'name': 'Custom Toolbar', 'order': '01', 'category': 'PDF Viewer', 'description': 'This demo for Essential JS 2 PdfViewer shows the default rendering of the PdfViewer with custom toolbar configuration.', 'api': '{"PdfViewerComponent":["serviceUrl", "documentPath","documentLoad","pageChange","enableToolbar"] }' },
    { 'path': 'pdfviewer/right-to-left', 'component': 'RightToLeft', 'name': 'Right To Left', 'order': '01', 'category': 'PDF Viewer', 'description': 'This demo for Essential JS 2 PdfViewer shows the default rendering of the PdfViewer with Right To Left Configuration.', 'api': '{"PdfViewerComponent":["serviceUrl", "documentPath","enableRtl"] }' },
    { 'path': 'pdfviewer/form-filling', 'component': 'FormFilling', 'name': 'Form Filling', 'order': '01', 'category': 'PDF Viewer', 'description': 'This demo for Essential JS 2 PdfViewer shows the default rendering of the PdfViewer with Form Filling Configuration.', 'api': '{"PdfViewerComponent":["serviceUrl", "documentPath"] }' },
    { 'path': 'pdfviewer/hand-written', 'component': 'HandWrittenSignature', 'name': 'Handwritten Signature', 'order': '01', 'category': 'PDF Viewer', 'type': 'new', 'description': 'The sample demonstrates the Handwritten Signature support of  PDF Viewer. The Handwritten signature reduces the paperwork of reviewing the contents and its verified its digitally.', 'api': '{"PdfViewerComponent":["serviceUrl", "documentPath", "documentLoad"]}'}
]