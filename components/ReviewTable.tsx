import React from 'react'
import { CiViewList } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import  Link  from "next/link";

interface ReviewTableProps{
    id:number;
    reviewer:string;
    reviewee:string;
    reviewDate:string;

}

interface props{
    users:ReviewTableProps[];
}

const ReviewTable = ({users}:props) => {
  return (
    <div className="flex p-6 justify-center ">
      <table className='w-full max-w-6xl  bg-white rounded-xl border border-gray-200 '>
        <thead className="text-base text-gray-500">
          <tr>
            <th className='border-b border-gray-200 py-2 px-4'>Id</th>
            <th className='border-b border-gray-200 py-2 px-4'>Reviewer</th>
            <th className='border-b border-gray-200 py-2 px-4'>Reviewee</th>

            
            
            <th className='border-b border-gray-200 py-2 px-4'>Review date</th>

            <th className='border-b border-gray-200 py-2 px-4'></th>
          </tr>
          </thead>

          <tbody className="text-sm text-black">
            {users.map((user, index) => (
              <tr key = {index} className='text-center'>
                <td className='border-b border-gray-200 py-2 px-4'>{user.id}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.reviewer}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.reviewee}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.reviewDate}</td>

                <td className='border-b border-gray-200  py-2 px-4'>
                  <div className="flex justify-center items-center gap-2">

                    <Link href='/dashboard/users/UserDetails'>
                        <CiViewList className='cursor-pointer text-black'/>
                    </Link>

                    <Link href='/dashboard/users/UserDetails/UpdateUserDetails'>
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

export default ReviewTable