// import { usePostImage } from '@/src/services/image/POST/usePostImage';
// import { usePathname } from 'next/navigation';
// import { CameraIcon } from '../../../../Svg';
import { Container } from './styles';
import { IInputFileProps } from './types';

export default function InputImage({ onPostImage, error }: IInputFileProps) {
  // const pathName = usePathname()
  let tipo = '';

  // if(pathName?.includes('receitas')) {
  //   tipo = "Receita"
  // }else {
  //   tipo = "Produto"
  // }

  // const { postImage } = usePostImage(tipo);

  async function LoadImage(file: React.ChangeEvent<HTMLInputElement>) {
    let formData = new FormData();
    if (file.target.files?.length) {
      formData.append('theFiles', file?.target?.files[0]);
      // let response: any = await postImage(formData);
      // onPostImage(response);
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
          {/* <CameraIcon /> */}
          <p className="inputTitle">Adicionar Miniatura</p>
          <p className="inputButton">Escolher Arquivo</p>
        </span>
      </div>
      {error && <span>{error}</span>}
    </Container>
  );
}
