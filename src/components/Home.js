import React from 'react';
import image from '../BGImage_Home.jpg';
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='River'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex h-screen min-h-screen pt-12 lg:pt-46 px-8'>
        <h1 className='text-6xl text-green-100 m-auto font-bold cursive leading-none lg:leading-snug home-name'>
          Hello. I'm Justin.
        </h1>
      </section>
    </main>
  );
}
