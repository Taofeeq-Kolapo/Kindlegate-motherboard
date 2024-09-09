'use client'
import Featured from '@/components/Index/Featured';
import Home from '@/components/Index/Home'
import Mission from '@/components/Index/Mission';
import Value from '@/components/Index/Value';
import axios from 'axios';
import { useEffect } from 'react';

export default function Page() {


  useEffect(()=>{
    fetchIndexpage()
  },[])

  const fetchIndexpage =async ()=>{
    const base_url = "/api/mothership/homepage"
    try {
      const resp = await axios.get(base_url)
      const result = resp.data
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  


  return (
    <div>
      <Home/>
      <Mission/>
      <Value/>
      <Featured/>
    </div>

  );
}
