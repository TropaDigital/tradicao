// import { EditorContent } from '@tiptap/react';
import { TextEditorContainer } from './style';
import TextEditorHeader from './TextEditorHeader';

const TextEditor = ({ editor }: any) => {
  return (
    <TextEditorContainer>
      <TextEditorHeader editor={editor} />
      {/* <EditorContent editor={editor} /> */}
    </TextEditorContainer>
  );
};

export default TextEditor;
