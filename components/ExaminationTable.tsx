import React from 'react';

interface User {
  userId: string;
  userName: string;
  regNo: string;
  indexNo: string;
  size: string;
  phone: string;
  status: string;
  issuedDate: string;
  returnedDate?: string;
}

interface ExaminationTableProps {
  users: User[];
}

const ExaminationTable = ({users}:ExaminationTableProps) => {
  return (
    <div className='overflow-x-auto'>
    <table className='w-full max-w-full bg-white rounded-2xl border-none'>
      <thead className="text-base text-gray-500">
        <tr>
          <th className='border-b border-gray-200 py-2 px-4'>User ID</th>
          <th className='border-b border-gray-200 py-2 px-4'>User Name</th>
          <th className='border-b border-gray-200 py-2 px-4'>Reg. No</th>
          <th className='border-b border-gray-200 py-2 px-4'>Index No</th>
          <th className='border-b border-gray-200 py-2 px-4'>Mobile No</th>
          <th className='border-b border-gray-200 py-2 px-4'>Cloak size</th>
          <th className='border-b border-gray-200 py-2 px-4'>Issued Date</th>
          <th className='border-b border-gray-200 py-2 px-4'>Returned Date </th>
          <th className='border-b border-gray-200 py-2 px-4'>Status</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-500">
        {users.map((user, index) => (
          <tr key={index} className='text-center'>
            <td className='border-b border-gray-200 py-2 px-4'>{user.userId}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.userName}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.regNo}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.indexNo}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.phone}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.size}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.issuedDate}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.returnedDate || '-'}</td>
            <td className='border-b border-gray-200 py-2 px-4'>{user.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ExaminationTable;
