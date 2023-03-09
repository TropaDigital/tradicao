import Image from 'next/image'
import * as S from './styles'

interface ISkewImage {
  src: string | any
  alt: string
}

const SkewImage = ({ src, alt }: ISkewImage) => {
  return (
    <S.Container>
      <div>
        <Image
          src={src}
          // placeholder="blur"
          alt={alt}
          width={1200}
          height={400}
        />
      </div>
    </S.Container>
  )
}

export default SkewImage
