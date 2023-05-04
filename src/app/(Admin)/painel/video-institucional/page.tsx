'use client';

// React
import React, { useEffect, useRef, useState } from 'react';

// Components
import HeaderPage from '@/components/pages/Painel/components/HeaderPage';

// Styles
import { HeaderDashboard } from '../styles';
import * as S from './styles';

// Hooks
import { useGetVideo } from '@/services/video-institucional/GET/useGetVideo';

// Icons
import { RadialPauseIcon, RadialPlayIcon } from '@/assets/icons';
import CenterWrapper from '@/components/global/CenterWrapper';

// Libraries
import { Form, Formik } from 'formik';
import UploadFile from '@/components/pages/Painel/components/inputs/UploadFile';
import Button from '@/components/UI/Button';
import { useUpdateVideo } from '@/services/video-institucional/PUT/useUpdateVideo';

type videoBodyType = {
  url_video: string;
  url_thumb: string;
};

const PageVideoInstitucional = () => {
  const [videoStats, setVideoStats] = useState(false);
  const [videoObject, setVideoObject] = useState({} as videoBodyType);
  const [fileName, setFileName] = useState({} as any);

  const { video } = useGetVideo();
  const { updateVideo } = useUpdateVideo();

  const videoRef: any = useRef();

  useEffect(() => {
    if (video) {
      setVideoObject({
        url_thumb: video?.url_thumb,
        url_video: video?.url_video
      });
    }
  }, [video]);

  function toogleVideoStatus() {
    let video = videoRef?.current;
    if (video?.currentTime > 0 && !video?.paused && !video?.ended) {
      //check if video is playing
      video?.pause();
      setVideoStats(false);
    } else {
      video.play();
      setVideoStats(true);
    }
  }

  return (
    <>
      <HeaderDashboard>
        <HeaderPage title="Vídeo Institucional" />
      </HeaderDashboard>

      <S.Container>
        <Formik
          initialValues={{} as videoBodyType}
          onSubmit={(values) => {
            updateVideo(videoObject);
          }}
        >
          {({ handleSubmit, values, errors }) => (
            <>
              <Form onSubmit={handleSubmit} className="form-container">
                <UploadFile
                  placeholder="Selecione a capa do vídeo"
                  label="Capa do vídeo"
                  filename={fileName?.thumb ?? ''}
                  onPostFile={(responseUrl, e) => {
                    setVideoObject({ ...videoObject, url_thumb: responseUrl });
                    setFileName({
                      ...fileName,
                      thumb: e?.target?.files?.[0]?.name
                    });
                  }}
                />

                <UploadFile
                  placeholder="Selecione o vídeo"
                  label="Upload do vídeo"
                  filename={fileName?.video ?? ''}
                  onPostFile={(responseUrl, e) => {
                    setVideoObject({ ...videoObject, url_video: responseUrl });
                    setFileName({
                      ...fileName,
                      video: e?.target?.files?.[0]?.name
                    });
                  }}
                />

                <Button type="submit" color="secondary" degrade>
                  Atualizar vídeo
                </Button>
              </Form>
            </>
          )}
        </Formik>

        <S.MediaContainer>
          <S.PreviewVideoTitle>
            Pré-Visualização Vídeo Institucional
          </S.PreviewVideoTitle>

          <S.VideoContainer>
            <S.VideoWrapper videoIsRunning={videoStats}>
              <video
                webkit-playsInline
                playsInline
                autoPlay={false}
                ref={videoRef}
                className="bgHomeVideo"
                poster={videoObject?.url_thumb}
                src={videoObject?.url_video}
              >
                {/* <source src={video?.url_video} type={'video/mp4'} /> */}
              </video>

              <div className="overlayPlay">
                <div className="thirdColor">
                  <div className="secondColor">
                    <button
                      className="primaryColor"
                      onClick={() => {
                        toogleVideoStatus();
                      }}
                    >
                      {videoStats === false ? (
                        <>
                          <RadialPlayIcon size={50} color={'var(--white)'} />
                        </>
                      ) : (
                        <>
                          <RadialPauseIcon size={50} color={'var(--white)'} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </S.VideoWrapper>
          </S.VideoContainer>
        </S.MediaContainer>
      </S.Container>
    </>
  );
};

export default PageVideoInstitucional;
