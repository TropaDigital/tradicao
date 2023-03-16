import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import CurriculumClass from '../index';

export const usePostCurriculum = () => {
  const { mutateAsync } = useMutation(
    async (curriculum: any) => {
      let response: any = await CurriculumClass.postCurriculum(curriculum);
      return response.data?.arquivo;
    },
    {
      retry: true
    }
  );

  return { postCurriculum: mutateAsync };
};
