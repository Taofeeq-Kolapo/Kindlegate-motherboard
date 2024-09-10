'use client'
import Featured from '@/components/Index/Featured';
import Home from '@/components/Index/Home'
import Mission from '@/components/Index/Mission';
import Value from '@/components/Index/Value';


export default function Page() {

  return (
    <div>
      <Home/>
      <Mission/>
      <Value/>
      <Featured/>
    </div>

  );
}
