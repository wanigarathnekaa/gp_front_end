import React from 'react';

interface User {
  userId: string;
  userName: string;
  regNo: string;
  indexNo: string;
  size: string;
  phone: string;
  status: string;
}

interface ExaminationTableProps {
  users: User[];
}

const ExaminationTable: React.FC<ExaminationTableProps> = ({ users }) => {
  return (
    <table className='w-full max-w-6xl bg-white rounded-xl border border-gray-200'>
      <thead className="text-base text-gray-500">
        <tr>
          <th className='border-b border-gray-200 py-2 px-4'>User ID</th>
          <th className='border-b border-gray-200 py-2 px-4'>User Name</th>
          <th className='border-b border-gray-200 py-2 px-4'>Reg. No</th>
          <th className='border-b border-gray-200 py-2 px-4'>Index No</th>
          <th className='border-b border-gray-200 py-2 px-4'>Mobile No</th>
          <th className='border-b border-gray-200 py-2 px-4'>Cloak size</th>
          <th className='border-b border-gray-200 py-2 px-4'>Status</th>
        </tr>
      </thead>
      <tbody className="text-sm text-black">
        {users.map((user, index) => (
          <tr key={index} className='text-center'>
            <td className='border-b border-gray-200 py-2 px-4'>{user.userId}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.userName}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.regNo}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.indexNo}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.phone}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.size}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExaminationTable;
