import { useQuery } from 'react-query';
import ComplaintClass from '../index';

export const useGetAllComplaints = () => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['AllComplaints'],
    async () => {
      return await ComplaintClass.getAllComplaint();
    }
  );

  return {
    allComplaints: data as any,
    isLoadingAllComplaints: isLoading as boolean,
    isErrorAllComplaints: isError as boolean,
    isSuccessAllComplaints: isSuccess as boolean
  };
};
