import { JsonForms } from '@jsonforms/react';
import {
  JsonFormsStyleContext,
  vanillaCells,
  vanillaRenderers
} from "@jsonforms/vanilla-renderers";
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import loginschema from '../../schemas/loginschema.json';
import loginuischema from '../../schemas/loginuischema.json';
import PasswordControl from '../../schemas/password/passwordControl';
import passwordControlTester from '../../schemas/password/passwordControlTester';

const styleContextValue = {
  styles: [
    {
      name: "control",
      classNames: "my-5"
    },
    {
      name: "control.input",
      classNames:
        "block mt-2 w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    },
    {
      name: "control.label",
      classNames:
        "block text-sm font-medium leading-6 text-gray-900"
    },
    {
      name: "control.validation",
      classNames: "mt-2 text-xs text-red-500"
    },
    {
      name: "control.description",
      classNames: "mt-1 text-xs text-gray-500"
    },
    {
      name: "vertical.layout",
      classNames:
        "mt-2"
    },
    {
      name: "group.layout",
      classNames: "accordion-item bg-white"
    },
    {
      name: "group.label",
      classNames:
        "accordion-button relative flex w-full py-4 transition focus:outline-none block uppercase tracking-wide text-gray-700 text-s font-bold pb-4"
    }
  ]
};

const renderers = [
  ...vanillaRenderers,
  { tester: passwordControlTester, renderer: PasswordControl }
];

const LoginForm = () => {
  const [data, setData] = useState<any>()

  const handleSignIn = () => {
    console.log(data)
  }

  return (
    <div className="max-w-xl mx-auto overflow-hidden sm:px-6 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm" >
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Sign in to your account
          </h2>
        </div>
        </div>
      <JsonFormsStyleContext.Provider value={styleContextValue}>
        <JsonForms
          schema={loginschema}
          uischema={loginuischema}
          data={data}
          renderers={renderers}
          cells={vanillaCells}
          onChange={({ errors, data }) => setData(data)}
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
