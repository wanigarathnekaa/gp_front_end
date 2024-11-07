"use client";
import React, { useState , useEffect} from 'react'
import { Sidebar, Navbar, Title, Table, Navigation, Dropdown, SearchBar } from '@/components/index';
import { usePathname } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';


const usersData = [
  {
    userId: "1",
    userName : "John Doe",
    regNo: '2021CS100',
    indexNo: 2100798,
    email: 'user1@example.com',
    phone: '0724646186',
    nic: '982234566234',
    year: '2nd Year',
    type :"Postgraduate"
  },
  {
    userId: '2',
    userName : "Ann Fernando",
    regNo: '2021CS001',
    indexNo: 21345001,
    email: 'user2@example.com',
    phone: '0762341566',
    nic: '20179568445',
    year: '2nd Year',
    type:"Graduate",
  },

  {
    userId: '3',
    userName : "Alex Silva",
    regNo: '2021CS002',
    indexNo: 21385001,
    email: 'user3@example.com',
    phone: '0765456789',
    nic: '98704567890',
    year: '2nd Year',
    type: 'Undergraduate'
  },

  {
    userId: '4',
    userName : 'James Perera',
    regNo: '2020CS006',
    indexNo: 20345001,
    email: 'user4@example.com',
    phone: '0743217890',
    nic: '20025438796',
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

      <div className=' mt-12 ml-64 flex flex-col min-h-screen bg-[#EEF2FF] px-20 py-20'>  
      <Title text='Registered students' />
      <Breadcrumbs/>

      
      <div className="flex justify-between">
        <div className='flex items-center justify-start gap-8 mb-5'>

          <SearchBar onSearch={handleSearch}/>

          <Dropdown 
            options={["All",'Undergraduates', 'Postgraduates', 'Graduates']}
            onSelect={handleCategorySelect}
            title='Student Type'
          />

          <Dropdown
            options={["All","1st Year", "2nd Year", "3rd Year", "4th Year"]}
            onSelect={handleYearSelect}
            title='Year'
          />


        </div>
        <div className="mt-4">
          <Navigation links={links} pathname={pathname}/>
        </div>
      </div>

      <div >
        <Table users={users} type="student"/>
      </div>
      </div>
    </div>
    
  )
}

export default StudentsData;