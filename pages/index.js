import Head from 'next/head';
import AuthButton from '../components/auth-button';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import prisma from '../prisma/prisma';
export async function getServerSideProps() {
  const classrooms = await prisma.Classroom.findMany();
  const output = [];
  for (let i = 0; i < classrooms.length; i++) {
    output[i] = {
      classroomName: classrooms[i].classroomName,
      classroomId: classrooms[i].classroomId,
      description: classrooms[i].description,
      createdAt: JSON.stringify(classrooms[i].createdAt)
    };
  }
  return {
    props: { classrooms: output }
  };
}

export default function Home() {
  return (
    <>
      <AuthButton></AuthButton>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
          <Navbar></Navbar>
        </Head>
        <div className={styles.boxx}>
          <h1 className='text-[40px] text-center big-heading underline'>
            Welcome to FreeCodeCamp Classroom Mode
          </h1>
        </div>
        <div className={'p-6 ml-20 mr-20'}>
          <h1
            className={
              'box-content bg-[#d0d0d5] h-100 w-100 p-4 border-4 border-[#0a0a23] text-3xl'
            }
          >
            A self-hosted solution to help teachers plan and manage
            classroom-based learning, on top of freeCodeCamp&apos;s learn
            platform.
          </h1>
        </div>
      </div>
    </>
  );
}
