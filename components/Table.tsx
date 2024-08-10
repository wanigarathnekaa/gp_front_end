import { FaEye, FaEdit } from "react-icons/fa"
import { CiViewList } from "react-icons/ci";
import  Link  from "next/link";

interface TableProps{
  userId: string,
  userName :string,
  staffId?: string,
  lecturerId?: string,
  regNo?: string,
  indexNo?: number,
  email: string,
  nic:string,
  year?: string,
  type?: string,
 

}

interface Props {
  users:TableProps[];
  type:"lecturer" | "student" | "other";
}

const Table = ({ users, type }:Props) => {
  return (
    <div className="flex mt-5 ml-3 justify-center">
      <table className='w-full max-w-full  bg-white rounded-2xl border-none shadow-md'>
        <thead className="text-base text-gray-700">
          <tr>
            <th className='border-b border-gray-200 py-3 px-3'>User Id</th>
            <th className='border-b border-gray-200 py-3 px-3'>User Name</th>

            {type === "other" && (
              <>
                <th className='border-b border-gray-200 py-3 px-3'>Staff Id</th>
                
              </>
            )}
            

            {type === "lecturer" && (
              <>
                <th className='border-b border-gray-200 py-3 px-3'>Lecturer Id</th>
                
              </>
            )}
            

            {type === "student" && (
              <>
                <th className='border-b border-gray-200 py-3 px-3'>Reg. No</th>
                <th className='border-b border-gray-200 py-3 px-3'>Index No</th>
              </>
            )}
            
            <th className='border-b border-gray-200 py-3 px-3'>Email</th>

            <th className='border-b border-gray-200 py-3 px-3'>NIC</th>

            
            

            {type === "student" && (
              <>

                
                <th className='border-b border-gray-200 py-3 px-3'>Year studying</th>
                <th className='border-b border-gray-200 py-3 px-3'>Role</th>

              </>

            )}
           
            <th className='border-b border-gray-200 py-3 px-3'></th>
          </tr>
          </thead>

          <tbody className="text-sm text-gray-500">
            {users.map((user, index) => (
              <tr key = {index} className='text-center'>
                <td className='border-b border-gray-200 py-3 px-3'>{user.userId}</td>
                <td className='border-b border-gray-200 py-3 px-3'>{user.userName}</td>

                {type === "other" && (
                  <>
                    <td className='border-b border-gray-200 py-3 px-3'>{user.staffId}</td>
                    
                  </>
                )}
                

                {type === "lecturer" && (
                  <>
                    <td className='border-b border-gray-200 py-3 px-3'>{user.lecturerId}</td>
                    
                  </>
                )}
                

                {type === "student" && (
                  <>
                    <td className='border-b border-gray-200 py-3 px-3'>{user.regNo}</td>
                    <td className='border-b border-gray-200 py-3 px-3'>{user.indexNo}</td>
                  </>
                )}
                
                <td className='border-b border-gray-200 py-3 px-3'>{user.email}</td>

                <td className='border-b border-gray-200 py-3 px-3'>{user.nic}</td>

                {type === "student" &&(
                  <>
                    
                    <td className='border-b border-gray-200 py-2 px-3'>{user.year}</td>
                    <td className='border-b border-gray-200 py-2 px-3'>{user.type}</td>
                  </>
                )}
               
                <td className='border-b border-gray-200  py-3 px-3'>
                  <div className="flex justify-center items-center gap-2">

                    <Link href={`/dashboard/users/UserDetails/${type}`}>
                        <CiViewList className='cursor-pointer text-[#706ee4]'/>
                    </Link>

                    <Link href={`/dashboard/users/UserDetails/UpdateUserDetails/${type}`}>
                      <FaEdit className='cursor-pointer text-green-400 opacity-60'/>
                    </Link>

                  </div>
                  
                </td>
              </tr>
            ))}
          </tbody>
        


      </table>
  </div>
    

  )
}

export default Table