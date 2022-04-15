import Head from 'next/head';
import Navbar from '../../components/navbar';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function JoinWithCode() {
  const [formData, setFormData] = useState({});

  async function saveEmail(e) {
    e.preventDefault();
    const response = await fetch(`/api/student_email_join`, {
      method: 'PUT',
      body: JSON.stringify(formData)
    });
    alert('Successfully registered, please extit window');
    return await response.json();
  }
<<<<<<< HEAD
=======

  const router = useRouter();
  const { joinCode } = router.query;
>>>>>>> 1c1a6cb (Able to update classroom students)

  const router = useRouter();
  const { joinCode } = router.query;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <Navbar>
          <li>
            <p>Welcome</p>
          </li>
        </Navbar>
      </Head>
      <h1>{joinCode}</h1>
      <div className='min-h-full flex items-center justify-center py-40 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Verify with FreeCodeCamp Email Address
            </h2>
          </div>
          <form className='mt-8 space-y-6' onSubmit={saveEmail}>
            <input type='hidden' name='remember' value='true'></input>
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  onChange={e =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                      classId: joinCode
                    })
                  }
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                ></input>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='text-sm'>
                <a
                  href='https://www.freecodecamp.org/'
                  className='font-medium text-indigo-600 hover:text-indigo-500'
                >
                  {' '}
<<<<<<< HEAD
                  Register on freeCodeCamp{' '}
=======
                  Register on FreeCodeCamp{' '}
>>>>>>> 1c1a6cb (Able to update classroom students)
                </a>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-[#0a0a23] text-sm font-medium rounded-md text-black bg-[#d0d0d5] hover:bg-[#0a0a23] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  {/* <!-- Heroicon name: solid/lock-closed --> */}
                  <svg
                    className='h-5 w-5 text-[#0a0a23] group-hover:text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                <span className='text-black group-hover:text-white'>
                  Submit
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
