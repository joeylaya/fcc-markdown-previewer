import { useEffect, useState } from 'react'
import './App.css'
import {marked} from 'marked'

function App() {
  const [editorContent, setEditorContent] = useState(`# Welcome to my React Markdown Previewer!
    \n## This is a sub-heading...
    \n### And here's some other cool stuff:
    \n\`<div></div>\`
    \n\`\`\`var = 5;
    \n\`\`\`
    \n**This is bold text**
    \n*This is italic text*
    \n[Link](https://www.freecodecamp.org)
    \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    \n- list
    \n> blockquote
  `)

  useEffect(() => {
    
  }, [editorContent])

  return (
    <div>
      <textarea id='editor' value={editorContent} onChange={(e) => setEditorContent(e.target.value)} />
      <div id='preview' dangerouslySetInnerHTML={{__html: marked.parse(editorContent, {breaks: true, gfm: true})}}></div>
    </div>
  )
}

export default App
