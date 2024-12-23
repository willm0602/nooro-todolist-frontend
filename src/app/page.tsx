import Link from '@/components/link';
import RoundedPlus from '@/assets/plus.png';
import Image from "next/image";

function CreateTaskLink() {
  return <Link href="/create" className='mt-[-48px]'>
    Create Task <Image src={RoundedPlus} alt='' width={16} height={16} className='inline-block mt-[-4px]'/>
  </Link>
}

export default function Home() {
  return (
    <>
      <CreateTaskLink/>
    </>
  );
}
