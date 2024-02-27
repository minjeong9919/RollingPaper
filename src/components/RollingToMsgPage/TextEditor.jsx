import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function TextEditor() {
  const [quillValue, setQuillValue] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  return (
    <StyledQuillEditor
      style={{ width: '72rem', height: '21.8rem', borderRadius: 8 }}
      theme="snow"
      modules={modules}
      formats={formats}
      value={quillValue || ''}
      onChange={handleQuillChange}
    />
  );
}

export default TextEditor;

const StyledQuillEditor = styled(ReactQuill)`
  .ql-container {
    border-radius: 0 0 0.8rem 0.8rem;
  }

  .ql-toolbar {
    border-radius: 0.8rem 0.8rem 0 0;
  }
`;
