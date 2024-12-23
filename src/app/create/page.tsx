import Button from '@/components/button';
import Image from 'next/image';
import LeftIcon from '@/assets/left.png';
import RoundedPlus from '@/assets/plus.png';
import React from 'react';
import ModifyTaskComponent from '@/components/modifyTask';

export default function CreateTask(){
    return <>
        <a href="/" className='cursor-pointer'>
            <Image src={LeftIcon} alt="Go Home"/>
        </a>
        <form action="" className='mt-14 pb-20'>
            <ModifyTaskComponent/>
            <Button className='mt-12'>
                Add Task <Image src={RoundedPlus} alt='' width={16} height={16} className='inline-block mt-[-4px]'/>
            </Button>
        </form>
    </>
}