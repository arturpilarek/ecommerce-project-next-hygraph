import { JsonForms } from '@jsonforms/react';
import {
  JsonFormsStyleContext,
  vanillaCells,
  vanillaRenderers
} from "@jsonforms/vanilla-renderers";
import { useState } from 'react';
import signupschema from '../../schemas/signup/signupSchema.json';
import signupuischema from '../../schemas/signup/signupuiSchema.json';
import styleContextValue from '../../schemas/styleContextValue';

type signupData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

async function createUser(signupData: signupData) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify(signupData),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!")
  }

  return data
}


const renderers = [
  ...vanillaRenderers,
//   { tester: passwordControlTester, renderer: PasswordControl }
];

const LoginForm = () => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<string>('')

  const handleSignIn = async () => {
    setError('')
    try {
      const result = await createUser(data)
    } catch (error: any) {
      setError(error.message)
    }
  }

  return (
    <div className="max-w-xl mx-auto overflow-hidden sm:px-6 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm" >
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Create new account
          </h2>
        </div>
        </div>
        {/* @ts-expect-error */}
      <JsonFormsStyleContext.Provider value={styleContextValue}>
        <JsonForms
          schema={signupschema}
          uischema={signupuischema}
          data={data}
          renderers={renderers}
          cells={vanillaCells}
          onChange={({ data }) => setData(data)}
        />
      </JsonFormsStyleContext.Provider>
      <div className='mt-4'>
              {error && <p className='my-3 text-sm leading-6 text-red-600'>{error}</p>}
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
