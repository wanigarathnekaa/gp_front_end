'use client';
import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { getStudentDetails } from "@/actions/studentDetails";

interface StudentProfile {
  id: string;
  regNumber: string;
  name: string;
  indexNumber: string;
  email: string;
  nic: string;
  password: string | null;
  role: string | null;
  semester: number;
  year: number;
  enabled: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  username: string;
  authorities: any[];
}

interface UserProfileProps {
  params: {
    profileId: string;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ params }) => {
  const { profileId } = params;
  const [user, setUser] = useState<StudentProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!profileId) {
      setError("Student ID is missing in the URL.");
      setLoading(false);
      return;
    }
  
    const fetchStudentDetails = async () => {
      try {
        console.log("Fetching details for profileId:", profileId);
        const data = await getStudentDetails(profileId);
        console.log("Fetched student data:", data);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching student details:", error);
        setError("Failed to fetch student details.");
        setLoading(false);
      }
    };
  
    fetchStudentDetails();
  }, [profileId]);  

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-blue-500 text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-gray-500 text-sm">{user?.email}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-500">Registration Number</p>
            <p className="font-medium text-gray-700">{user?.regNumber || 'N/A'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Index Number</p>
            <p className="font-medium text-gray-700">{user?.indexNumber || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
