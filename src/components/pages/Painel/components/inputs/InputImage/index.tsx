// import { usePostImage } from '@/src/services/image/POST/usePostImage';
// import { usePathname } from 'next/navigation';
import { CameraIcon } from '@/assets/icons';
import { usePostFile } from '@/services/arquivos/POST/usePostFile';
import { Container } from './styles';
import { IInputFileProps } from './types';

export default function InputImage({ onPostImage, error }: IInputFileProps) {
  const { postFile } = usePostFile();

  async function LoadImage(e: React.ChangeEvent<HTMLInputElement>) {
    let formData = new FormData();
    if (e?.target?.files?.length) {
      formData.set('file', e?.target?.files[0]);
      let response = await postFile(formData);
      onPostImage(response);
    }
  }

  return (
    <Container>
      <div className="inputWrapper">
        <input
          type={'file'}
          className="inputImage"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            LoadImage(e);
          }}
        />
        <span className="inputContent">
          <CameraIcon />
          <p className="inputTitle">Adicionar Miniatura</p>
          <p className="inputButton">Escolher Arquivo</p>
        </span>
      </div>
      {error && <span>{error}</span>}
    </Container>
  );
}
