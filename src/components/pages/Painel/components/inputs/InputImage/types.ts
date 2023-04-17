import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes
} from 'react';

export interface IInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  onPostImage: (image: string) => void;
  title?: string;
  error?: any;
}
