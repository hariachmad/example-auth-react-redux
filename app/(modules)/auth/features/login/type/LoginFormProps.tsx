import { FormEvent } from 'react';

export type LoginFormProps = {
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};
