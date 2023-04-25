import {
  ChangeTextColor,
  DropDownMenuFontSize,
  EditorHeader,
  InsetImageWrapper,
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
import { useEffect, useRef, useState } from 'react';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';

const TextEditorHeader = ({ editor }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const { postFile } = usePostFile();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsOpen);

  async function setImage(e: any) {
    let formData = new FormData();
    formData.set('file', e?.target?.files[0]);

    let responseUrl = await postFile(formData);

    editor.commands.setImage({
      src: responseUrl,
      alt: 'Imagem relacionada à postagem'
    });

    e.target.value = '';
  }

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

      <div onClick={() => setIsOpen(!isOpen)}>
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
                  Subtítulo
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
      </div>

      <InsetImageWrapper type="button">
        <ClipFileIcon color="var(--black)" size={17} />
        <input type="file" onChange={setImage} className="insertImageInput" />
      </InsetImageWrapper>
    </EditorHeader>
  );
};

export default TextEditorHeader;
