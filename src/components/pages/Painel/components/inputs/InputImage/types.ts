import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes
} from 'react';

export interface IInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  onPostImage: (image: string) => void;
  styleComponent?: any;
  title?: string;
  subtitle?: string;
  error?: any;
}
