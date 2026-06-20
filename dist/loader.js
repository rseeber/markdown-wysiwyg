let exampleMd = `## Welcome to the Advanced Editor!

Use the **tabs** below to switch between editing modes.
The toolbar has been *slightly* adjusted. ***Bold and Italic together!***

This text is ~~strikethrough~~.
This text is ~~ with spaces ~~.

| Example Header 1 | Example Header 2 |
| --- | --- |
| Cell 1.1 with **bold** and *italic* | Cell 1.2 with a [link](https://example.com) |
| Cell 2.1 <br> with line break | Cell 2.2 with \`inline code\` |

---

### List and Code Demo
- List item 1
- List item 2
- Subitem 2.1
- Subitem 2.2
- Sub-subitem 2.2.1
- List item 3
With multiple lines
to test conversion.
- Final item

\`\`\`javascript
function helloWorld() {
console.log("Hello, Markdown World!");
}
\`\`\`

Text with \`inline code\` and a [link to Google](https://google.com).

> A quote block to show the blockquote style.
> It can have multiple lines.
> And one more.

More content to test scrolling:
1. Ordered item
2. Another item
3. One more item
1. Ordered subitem
2. Another subitem
4. Item
5. Item
6. Item
7. Item
8. Item
9. Item
10. Item
11. Item
12. Item
13. Item
14. Item
15. Item
`;


var editor;
document.addEventListener('DOMContentLoaded', () => {
    editor = new MarkdownWYSIWYG('site_editor', {
        initialValue: "## Hello World!\n\nThis is **Markdown** content.",
        onUpdate: (markdownContent) => {
        console.log("Updated content:", markdownContent);
        }
    });
    console.log("(frame) editor loaded");
    console.log("(frame) ", editor.getValue());
});