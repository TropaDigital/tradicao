import { AxiosResponse } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import TrabalheConoscoClass from '../index';
import { ICadidateInfo } from '../types';

interface ICandidatePost {
  candidateBody: ICadidateInfo;
  id: number | undefined;
}

export const useUpdateCandidate = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (candidatePost: ICandidatePost) => {
      let response = toast.promise(
        async () => {
          let response: any = await TrabalheConoscoClass.updateCandidate(
            candidatePost?.candidateBody,
            candidatePost?.id
          );
          return response;
        },
        {
          error: `Não foi possível atualizar candidato`,
          pending: 'Atualizando candidato',
          success: 'Candidato atualizado com sucesso'
        },
        {
          position: 'top-right',
          autoClose: 3000
        }
      );
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('AllCandidates');
      }
    }
  );
  return { updateCandidate: mutateAsync };
};
