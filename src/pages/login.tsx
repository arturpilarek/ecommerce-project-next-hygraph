import { JsonForms } from '@jsonforms/react';
import {
  JsonFormsStyleContext,
  vanillaCells,
  vanillaRenderers
} from "@jsonforms/vanilla-renderers";
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import loginschema from '../../schemas/login/loginSchema.json';
import loginuischema from '../../schemas/login/loginuiSchema.json';
import PasswordControl from '../../schemas/login/password/passwordControl';
import passwordControlTester from '../../schemas/login/password/passwordControlTester';
import styleContextValue from '../../schemas/styleContextValue';

const renderers = [
  ...vanillaRenderers,
  { tester: passwordControlTester, renderer: PasswordControl }
];

type LoginData = {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [data, setData] = useState<LoginData>()

  const handleSignIn = () => {
    
    const result = signIn('credentials', {
      email: data?.email,
      password: data?.password,
      callbackUrl: "/"
    })
  }

  return (
    <div className="max-w-xl mx-auto overflow-hidden sm:px-6 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm" >
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        </div>
      {/* @ts-expect-error */}
      <JsonFormsStyleContext.Provider value={styleContextValue}>
        <JsonForms
          schema={loginschema}
          uischema={loginuischema}
          data={data}
          renderers={renderers}
          cells={vanillaCells}
          onChange={({ data }) => setData(data)}
        />
      </JsonFormsStyleContext.Provider>
      <div className='mt-4'>
              <button
                onClick={handleSignIn}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
    </div>

  );
};

export default LoginForm;
