import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function TextEditor({ quillValue, setQuillValue, onChange }) {
  const modules = {
    toolbar: [
      // [{ header: [1, 2, false] }],
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

  const onQuillChangeHandle = (content) => {
    const newValue = content;
    setQuillValue(newValue);
    onChange(newValue);
  };

  return (
    <StyledQuillEditor
      theme="snow"
      modules={modules}
      formats={formats}
      value={quillValue || ''}
      onChange={onQuillChangeHandle}
    />
  );
}

TextEditor.propTypes = {
  quillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  setQuillValue: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextEditor;

const StyledQuillEditor = styled(ReactQuill)`
  width: 72rem;
  height: 21.8rem;
  border-radius: 0.8rem;

  @media (max-width: 360px) {
    width: 32rem;
    height: 19.4rem;
  }

  .ql-toolbar {
    border: 0.2rem solid var(--gray300);
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: var(--gray200);
  }

  .ql-container {
    border: 0.2rem solid var(--gray300);
    border-radius: 0 0 0.8rem 0.8rem;
  }
`;
