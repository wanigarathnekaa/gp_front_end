import { FaEye, FaEdit } from "react-icons/fa"
import { CiViewList } from "react-icons/ci";
import  Link  from "next/link";

interface RoleTableProps{
    roleId: string;
    roleName: string;
    status: string;
    createdDate: string;
    createdBy:string;
}

interface Props {
    users:RoleTableProps[];
    
  }

const RoleTable = ({users}:Props) => {
  return (
    <div className="flex p-6 justify-center ">
      <table className='w-full max-w-6xl  bg-white rounded-2xl border border-gray-200 '>
        <thead className="text-base text-gray-500">
          <tr>
            <th className='border-b border-gray-200 py-2 px-4'>User role Id</th>
            <th className='border-b border-gray-200 py-2 px-4'>User role Name</th>
            <th className='border-b border-gray-200 py-2 px-4'>Status</th>

            
            
            <th className='border-b border-gray-200 py-2 px-4'>Created date</th>

            
            <th className='border-b border-gray-200 py-2 px-4'>Created by</th>
           
            <th className='border-b border-gray-200 py-2 px-4'></th>
          </tr>
          </thead>

          <tbody className="text-sm text-black">
            {users.map((user, index) => (
              <tr key = {index} className='text-center'>
                <td className='border-b border-gray-200 py-2 px-4'>{user.roleId}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.roleName}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.status}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.createdDate}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.createdBy}</td>

                <td className='border-b border-gray-200  py-2 px-4'>
                  <div className="flex justify-center items-center gap-2">

                    <Link href='/dashboard/users/UserRoleDetails'>
                        <CiViewList className='cursor-pointer text-black'/>
                    </Link>

                    <Link href='/dashboard/users/UserRoleDetails/UpdateUserRoleDetails'>
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

export default RoleTable