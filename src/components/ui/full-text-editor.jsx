import { forwardRef } from "react";

import tinymce from "tinymce/tinymce";

import BundledEditor from "./bunde-editor";

const FullTextEditor = forwardRef(function FullTextEditor(props, ref) {
  return (
    <BundledEditor
      onInit={(evt, editor) => (ref.current = editor)}
      init={{
        height: 700,
        menubar: false,
        plugins: [
          "preview",
          "importcss",
          "searchreplace",
          "autolink",
          "directionality",
          "code",
          "visualblocks",
          "visualchars",
          "fullscreen",
          "image",
          "link",
          "media",
          "template",
          "codesample",
          "table",
          "charmap",
          "pagebreak",
          "nonbreaking",
          "anchor",
          "insertdatetime",
          "advlist",
          "lists",
          "wordcount",
          "help",
          "charmap",
          "quickbars",
          "emoticons",
          "accordion",
        ],
        menubar: "file edit view insert format tools table help",
        toolbar:
          "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
        content_style: "body { font-size:14px }",
        image_caption: true,
        quickbars_selection_toolbar:
          "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
        toolbar_mode: "sliding",
        contextmenu: "link image table",
        image_advtab: true,
        templates: [
          {
            title: "New Table",
            description: "creates a new table",
            content:
              '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
          },
          {
            title: "Starting my story",
            description: "A cure for writers block",
            content: "Once upon a time...",
          },
          {
            title: "New list with dates",
            description: "New List with dates",
            content:
              '<div class="mceTmpl"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
          },
        ],
      }}
      {...props}
    />
  );
});

export default FullTextEditor;
