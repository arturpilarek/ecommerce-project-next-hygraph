import { withJsonFormsControlProps } from '@jsonforms/react';

interface PasswordControlProps {
  data: any;
  handleChange(path: string, value: any): void;
  path: string;
  id: string;
  label: string;
}

const PasswordControl = ({data, handleChange, path, id, label}: PasswordControlProps) => {

return (
  <>
  <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
  <input id={id} type="password" value={data} onChange={(e) => handleChange(path, e.target.value)} className="block mt-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
  </>
);
}

export default withJsonFormsControlProps(PasswordControl);
