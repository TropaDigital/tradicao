import {
  ChangeTextColor,
  DropDownMenuFontSize,
  EditorHeader,
  MenuFontSize
} from './style';
import {
  BoldIcon,
  ClipFileIcon,
  ItalicIcon,
  ListOrderedIcon,
  ListUnorderedIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextColorIcon,
  TextSizeIcon,
  UnderlineIcon
} from '@/assets/icons';
import { ITextEditorHeader } from './types';
import { useEffect, useRef, useState } from 'react';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import UploadFile from '@/components/UI/UploadFile';
import InputImage from '../../inputs/InputImage';

type TextEditorHeaderType = {
  editor: ITextEditorHeader;
};

const TextEditorHeader = ({ editor }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const { postFile } = usePostFile();

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <EditorHeader>
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        type="button"
      >
        <BoldIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        type="button"
      >
        <ItalicIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        type="button"
      >
        <UnderlineIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().setTextAlign('left').run()}
        type="button"
      >
        <TextAlignLeftIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().setTextAlign('center').run()}
        type="button"
      >
        <TextAlignCenterIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().setTextAlign('right').run()}
        type="button"
      >
        <TextAlignRightIcon />
      </button>

      <button
        onClick={() => {
          editor?.chain().focus().setTextAlign('justify').run();
        }}
        type="button"
      >
        <TextAlignJustifyIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        type="button"
      >
        <ListUnorderedIcon />
      </button>

      <button
        onClick={() => editor?.chain().focus().toggleOrderedList().run()}
        type="button"
      >
        <ListOrderedIcon />
      </button>

      <ChangeTextColor>
        <TextColorIcon />
        <input
          type="color"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            editor?.chain()?.focus()?.setColor(e.currentTarget.value)?.run()
          }
        />
      </ChangeTextColor>

      <button onClick={() => setIsOpen(!isOpen)}>
        <MenuFontSize>
          <TextSizeIcon />
          <DropDownMenuFontSize isOpen={isOpen} ref={wrapperRef}>
            <ul>
              <li>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
                  type="button"
                >
                  Título
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
                  type="button"
                >
                  Sub-Título
                </button>
              </li>
              <li>
                <button
                  onClick={() => editor.chain().focus().setParagraph().run()}
                  type="button"
                >
                  Texto
                </button>
              </li>
            </ul>
          </DropDownMenuFontSize>
        </MenuFontSize>
      </button>

      <button type="button" style={{ position: 'relative' }}>
        <ClipFileIcon color="var(--black)" size={17} />
        <input
          type="file"
          onChange={(e: any) => {
            let formData = new FormData();
            formData.set('file', e?.target?.files[0]);

            let imageUrl = postFile(formData);

            editor.chain().focus().setImage({ url: imageUrl }).run();
          }}
          style={{
            width: '17px',
            height: '21px',
            opacity: '0',
            position: 'absolute',
            top: '0',
            left: '0',
            cursor: 'pointer',
            zIndex: '1'
          }}
        />
      </button>
    </EditorHeader>
  );
};

export default TextEditorHeader;
