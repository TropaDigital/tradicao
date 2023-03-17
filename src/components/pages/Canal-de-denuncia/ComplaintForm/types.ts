import React, { HTMLAttributes } from 'react';

export interface IComplaintForm {
  isOpen: boolean;
  setOpenState: any;
  closeFormComplaint: () => void;
}

export interface IDenunciaBodyPost {
  nome?: string;
  email?: string;
  celular?: string;
  texto_denuncia: string;
}
