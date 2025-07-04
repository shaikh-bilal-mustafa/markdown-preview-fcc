import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";

const defaultMarkdown = `
# This is an H1 Heading

## This is an H2 Subheading

### This is an H3 Heading

#### This is an H4 Heading

##### This is an H5 Heading

###### This is an H6 Heading

---

**This text is bold**  
*This text is italic*  
~~This text is strikethrough~~

Here is a [link to Google](https://www.google.com)

Here is some \`inline code\`

\`\`\`javascript
// This is a JavaScript code block
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("World"));
\`\`\`

- Item 1
- Item 2
  - Nested Item 2.1
  - Nested Item 2.2
- Item 3

1. First ordered item
2. Second item
3. Third item

> This is a blockquote.

![Placeholder Image](https://via.placeholder.com/150)

### Task List
- [x] Write markdown
- [ ] Preview markdown
- [ ] Style it

### Table

| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Paragraph | Text     |
`;
function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)
  
  return (
    <>
    <div>
     <h1>Markdown Previewer</h1>
     <div className="boxes-container">
       <textarea name="editor" id="editor" value={markdownText} onChange={(e)=>setMarkdownText(e.target.value)}></textarea>
       <div id="preview">
         <ReactMarkdown>{markdownText}</ReactMarkdown>
       </div>
      </div>
    </div>
    </>
  )
}

export default App
