import RocketImage from '@/assets/rocket.png';
import Image from 'next/image'
import React from 'react';

export default function Header(){
    return <div className='bg-darkBlack w-full min-h-[150px] flex-1 flex items-center justify-center'>
        <Image src={RocketImage} width={22} height={36} alt='' aria-hidden/>
        <h1 className='text-lightBlue font-black text-5xl ml-4'>Todo <span className='text-purple'>App</span></h1>
    </div>
}