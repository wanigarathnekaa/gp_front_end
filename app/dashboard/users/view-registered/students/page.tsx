"use client";
import React, { useState , useEffect} from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, Dropdown, SearchBar } from '@/components/index';
import { usePathname } from 'next/navigation';


const usersData = [
  {
    userId: "1",
    userName : "John Doe",
    regNo: '2021CS100',
    indexNo: 2100798,
    email: 'user1@example.com',
    phone: '1234567890',
    nic: '1234567890',
    year: '2nd Year',
    type :"Postgraduate"
  },
  {
    userId: '2',
    userName : "John Doe",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user1@example.com',
    phone: '1234567890',
    nic: '1234567890',
    year: '2nd Year',
    type:"Graduate",
  },

  {
    userId: '3',
    userName : "John Doe",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user1@example.com',
    phone: '1234567890',
    nic: '1234567890',
    year: '2nd Year',
    type: 'Undergraduate'
  },

  {
    userId: '4',
    userName : "John Doe",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user1@example.com',
    phone: '1234567890',
    nic: '1234567890',
    year: '2nd Year',
    type:"Undergraduate",
  },
  
];



const StudentsData = () => {

  const pathname = usePathname();

  const links =[

    {
      href: '/dashboard/users/view-registered/other',
      label: 'Staff'
  
    },
  
    
    {
      href: '/dashboard/users/view-registered/lecturers',
      label: 'Lecturers'
    },

    {
      href: '/dashboard/users/view-registered/students',
      label: 'Students'
    },
  
  
  ]

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [users, setUsers] = useState(usersData);

  useEffect(() => {
    filterUsers(selectedCategory, selectedYear);
  }, [selectedCategory, selectedYear]);

  const handleCategorySelect = (selectedOption: string) => {
    setSelectedCategory(selectedOption);
  };

  const handleYearSelect = (selectedOption: string) => {
    setSelectedYear(selectedOption);
  };

  const filterUsers = (category: string, year: string) => {
    const filteredUsers = usersData.filter(user => {
      const matchCategory = category === "All" || user.type === category;
      const matchYear = year === "All" || user.year === year;
      return matchCategory && matchYear;
    });

    setUsers(filteredUsers);
  };

  const handleSearch = (searchTerm: string) => {
    const filteredUsers = usersData.filter(user =>
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.nic.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers);
  };
  

  return (
    <div className='w-full'>
      <Navbar/>
      <Sidebar/>

      <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#D6D6FF] p-4'>
      <Title text='Registered Users' />

      <Navigation links={links} pathname={pathname}/>

      <div className='flex items-center justify-start mt-8 mb-4 ml-8 gap-14'>

        <SearchBar onSearch={handleSearch}/>

        <Dropdown 
          options={["All",'Undergraduates', 'Postgraduates', 'Graduates']}
          onSelect={handleCategorySelect}
        />

        <Dropdown
          options={["All","1st Year", "2nd Year", "3rd Year", "4th Year"]}
          onSelect={handleYearSelect}
        />

        
      </div>

      <div >
        <Table users={users} type="student"/>
      </div>
      
      

    </div>
    </div>
    
  )
}

export default StudentsData;