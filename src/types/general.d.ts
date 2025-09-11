// export type FormState = {
//   errors?: {
//     _form?: string[];
//   };
//   status?: string[];
// };
export type FormState = {
  errors?: {
    _form?: string[];
  };
  status: 'idle' | 'success' | 'error'; // string tunggal, bukan array
};

export type Preview = {
  file: File;
  displayUrl: string;
};
