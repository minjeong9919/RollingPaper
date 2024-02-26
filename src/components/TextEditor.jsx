import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor() {
  const [quillValue, setQuillValue] = useState('');

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  return (
    <ReactQuill
      style={{ height: '600px' }}
      theme="snow"
      //   modules={modules}
      //   formats={formats}
      value={quillValue || ''}
      onChange={handleQuillChange}
    />
  );
}

export default TextEditor;
