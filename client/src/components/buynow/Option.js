import {React,useContext} from 'react';
import { LoginContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata,get}) => {

  
  const { account, setAccount } = useContext(LoginContext);

  const removedata = async(req,res)=>{
    try {
      const res =  await fetch(`/remove/${deletedata}`,{
        method:"DELETE",
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
        },
        credentials:"include"
      });

      const data = await res.json();
      console.log(data);

      if(res.status === 400 || !data){
        console.log("error");
      }else{
        console.log("user delete");
        setAccount(data);
        toast.success("items remove from cart",{
          position: "top-center",
      })
        get();
      }

    } catch (error) {
        console.log("error");
    }
  }

  return <div className='add_remove_select'>
      <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
      </select>
      <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete</p><span>|</span>
      <p className='forremovemedia'>Save Or Later</p><span>|</span>
      <p className='forremovemedia'>See More like this</p>
      <ToastContainer />
  </div>;
};

export default Option;
