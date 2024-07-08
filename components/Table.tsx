import { FaEye, FaEdit } from "react-icons/fa"
import { CiViewList } from "react-icons/ci";

interface TableProps{
  userId: string,
  userName :string,
  regNo: string,
  indexNo: number,
  email: string,
  phone: string,
  fixedLine: string,
  year: string,

}

const Table = ({ users }:{users:TableProps[]}) => {
  return (
    <div className="flex justify-center mt-8">
      <table className='w-full max-w-6xl  bg-white rounded-xl border border-gray-200 '>
        <thead className="text-base text-gray-500">
          <tr>
            <th className='border-b border-gray-200 py-2 px-4'>User Id</th>
            <th className='border-b border-gray-200 py-2 px-4'>User Name</th>
            <th className='border-b border-gray-200 py-2 px-4'>Registration No</th>
            <th className='border-b border-gray-200 py-2 px-4'>Index No</th>
            <th className='border-b border-gray-200 py-2 px-4'>Email</th>
            <th className='border-b border-gray-200 py-2 px-4'>Mobile No</th>
            <th className='border-b border-gray-200 py-2 px-4'>Fixed Contact No</th>
            <th className='border-b border-gray-200 py-2 px-4'>Year studying</th>
            <th className='border-b border-gray-200 py-2 px-4'></th>
          </tr>
          </thead>

          <tbody className="text-sm">
            {users.map((user, index) => (
              <tr key = {index} className='text-center'>
                <td className='border-b border-gray-200 py-2 px-4'>{user.userId}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.userName}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.regNo}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.indexNo}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.email}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.phone}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.fixedLine}</td>
                <td className='border-b border-gray-200 py-2 px-4'>{user.year}</td>
                <td className='border-b border-gray-200  py-2 px-4'>
                  <div className="flex justify-center items-center gap-2">
                    <CiViewList className='cursor-pointer text-black'/>
                    <FaEdit className='cursor-pointer text-black'/>

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