import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  
  const[first,setFirst]=useState();
  const[second,setSecond]=useState();
  const[gender,setGender]=useState();
  const[phone,setPhone]=useState();
  const[pic_s,setPic_s]=useState();
  const[pic_l,setPic_l]=useState();

  useEffect(()=>{
    const getDetails=async()=>{
      try{
        const data=await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        if(data){
         
          setPic_s(data.data.results[0].picture.medium);
          setPic_l(data.data.results[0].picture.large);
           setFirst(data.data.results[0].name.first);
           setSecond(data.data.results[0].name.last);
           setGender(data.data.results[0].gender);
           setPhone(data.data.results[0].cell);

        }
        else{
          console.log("no data");
        }
      }
      catch(err){
        console.log(err);
      }
         
    }
    getDetails();
  },[])

  return (
  <div className="bg-slate-900 w-full h-screen grid place-content-center">
         <div className="max-w-xl ">
           <div>
            <div className="md:flex bg-slate-600 p-5 rounded-lg">
              <div className="p-3 rounded-full  overflow-hidden   ">
                <img className="rounded-full m-auto hidden md:block" src={pic_s} alt="" />
                <img className="rounded-full m-auto md:hidden" src={pic_l} alt="" />
              </div>
              <div className=" p-5 py-8 md:p-3 md:px-5 ">
                <p className="font-bold text-white text-lg"> {first} {second}</p>
                <p className=" text-green-500 ">{gender}</p>
                <p className=" text-yellow-500 ">{phone}</p>
              </div>
            </div>
           </div>
         </div>
  </div>
  );
}

export default App;
