import { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import TrabalheConoscoClass from '../index';
import { ICadidateInfo } from '../types';
import { toast } from 'react-toastify';

export const useCreateCandidate = () => {
  const { mutateAsync } = useMutation(
    async (candidate: ICadidateInfo) => {
      let response = toast.promise(
        async () => {
          let response: any = await TrabalheConoscoClass.postCandidate(
            candidate
          );
          return response;
        },
        {
          error: `Não foi possível cadastrar o currículo`,
          pending: 'Cadastrando currículo',
          success: 'Currículo cadastrado com sucesso'
        },
        {
          position: 'bottom-right',
          autoClose: 3000
        }
      );
      return response;
    },
    {
      retry: true
    }
  );

  return { createCandidate: mutateAsync };
};
