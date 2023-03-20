import React, { HTMLAttributes } from 'react';

export interface IComplaintForm {
  isOpen: boolean;
  setOpenState: React.Dispatch<boolean>;
  closeFormComplaint: () => void;
}

export interface IDenunciaBodyPost {
  nome?: string;
  email?: string;
  celular?: string;
  texto_denuncia: string;
}
