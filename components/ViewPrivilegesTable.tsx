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
  phone: string,
  year?: string,
  type?: string,
 

}

interface Props {
  users:TableProps[];
  type:"lecturer" | "student" | "staff";
}

const ViewPrivilegesTable = ({ users, type }:Props) => {
  return (
    <div className="flex justify-center mt-8 ">
      <table className='w-full max-w-6xl  bg-white rounded-xl border border-gray-200 '>
        <thead className="text-base text-gray-500">
          <tr>
            <th className='border-b border-gray-200 py-2 px-4'>User Id</th>
            <th className='border-b border-gray-200 py-2 px-4'>User Name</th>

            {type === "staff" && (
              <>
                <th className='border-b border-gray-200 py-2 px-4'>Staff Id</th>
                
              </>
            )}
            

            {type === "lecturer" && (
              <>
                <th className='border-b border-gray-200 py-2 px-4'>Lecturer Id</th>
                
              </>
            )}
            

            {type === "student" && (
              <>
                <th className='border-b border-gray-200 py-2 px-4'>Reg. No</th>
                <th className='border-b border-gray-200 py-2 px-4'>Index No</th>
              </>
            )}
            
            <th className='border-b border-gray-200 py-2 px-4'>Email</th>

            <th className='border-b border-gray-200 py-2 px-4'>NIC</th>

            
            <th className='border-b border-gray-200 py-2 px-4'>Mobile No</th>

            {type === "student" && (
              <>

                
                <th className='border-b border-gray-200 py-2 px-4'>Year studying</th>
                <th className='border-b border-gray-200 py-2 px-4'>Type</th>

              </>

            )}
           
            <th className='border-b border-gray-200 py-2 px-4'></th>
          </tr>
          </thead>

          <tbody className="text-sm text-black">
            {users.map((user, index) => (
              <tr key = {index} className='text-center'>
                <td className='border-b border-gray-200 py-2 px-4'>{user.userId}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.userName}</td>

                {type === "staff" && (
                  <>
                    <td className='border-b border-gray-200 py-2 px-4'>{user.staffId}</td>
                    
                  </>
                )}
                

                {type === "lecturer" && (
                  <>
                    <td className='border-b border-gray-200 py-2 px-4'>{user.lecturerId}</td>
                    
                  </>
                )}
                

                {type === "student" && (
                  <>
                    <td className='border-b border-gray-200 py-2 px-4'>{user.regNo}</td>
                    <td className='border-b border-gray-200 py-2 px-4'>{user.indexNo}</td>
                  </>
                )}
                
                <td className='border-b border-gray-200 py-2 px-4'>{user.email}</td>

                <td className='border-b border-gray-200 py-2 px-4'>{user.nic}</td>

                
                <td className='border-b border-gray-200 py-2 px-4'>{user.phone}</td>

                {type === "student" &&(
                  <>
                    
                    <td className='border-b border-gray-200 py-2 px-4'>{user.year}</td>
                    <td className='border-b border-gray-200 py-2 px-4'>{user.type}</td>
                  </>
                )}
               
                <td className='border-b border-gray-200  py-2 px-4'>
                  <div className="flex justify-center items-center gap-2">

                    

                    <Link href={`/dashboard/privileges/view-privileges/user-details`}>
                      <FaEdit className='cursor-pointer text-black'/>
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

export default ViewPrivilegesTable