import React, { useEffect, useState } from 'react';
import { Dropdown } from '@/components/index';
import ButtonText from './ButtonTextBlue';
import { getRoles } from '@/actions/roleCreation';

interface NewPrivilegesAssignFormProps {
  onSubmit: (formData: {
    selectedRole: string;
    name: string;
    email: string;
    nic: string;
  }) => void;
}

interface Role {
  id: string;
  roleName: string;
  roleDescription: string;
  selectedPrivileges: string[];
}

const NewPrivilegesAssignForm = ({ onSubmit }: NewPrivilegesAssignFormProps) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [formData, setFormData] = useState({
    selectedRole: '',
    name: '',
    email: '',
    nic: '',
  });
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    // Fetch roles when the component mounts
    const fetchRoles = async () => {
      try {
        const fetchedRoles = await getRoles();
        setRoles(fetchedRoles); // Set the fetched roles
      } catch (error) {
        alert('Failed to fetch roles');
      }
    };

    fetchRoles();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setShowErrors(false); // Clear errors on input change
  };

  const handleRoleSelect = (role: string) => {
    setFormData((prev) => ({ ...prev, selectedRole: role }));
    setShowErrors(false); // Clear errors when a role is selected
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { selectedRole, name, email, nic } = formData;

    // Validation logic
    if (!selectedRole || !name || !email || !nic) {
      setShowErrors(true);
      return;
    }

    setShowErrors(false);
    onSubmit(formData); // Submit form data
  };

  return (
    <div className="ml-2 p-8 bg-white rounded-2xl shadow-md w-full lg:w-3/4 max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mt-3 mb-4 justify-center items-center">
          <h2 className="text-gray-700 text-xl font-bold">Assign User Role</h2>
        </div>

        {/* Dropdown for user role */}
        <div className="mb-4">
          <label htmlFor="role" className="text-gray-700 font-medium">
            Select User Role
          </label>
          <Dropdown
            options={roles.map((role) => role.roleName)} // Map role names for the dropdown
            onSelect={handleRoleSelect}
          />
          {showErrors && !formData.selectedRole && (
            <p className="text-red-500 text-sm mt-2">Please select a user role.</p>
          )}
        </div>

        {/* Name input */}
        <div className="mb-4">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2"
          />
          {showErrors && !formData.name && (
            <p className="text-red-500 text-sm mt-2">Name is required.</p>
          )}
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2"
          />
          {showErrors && !formData.email && (
            <p className="text-red-500 text-sm mt-2">Email is required.</p>
          )}
        </div>

        {/* NIC input */}
        <div className="mb-4">
          <label htmlFor="nic" className="text-gray-700 font-medium">
            NIC
          </label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={formData.nic}
            onChange={handleInputChange}
            className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm p-2"
          />
          {showErrors && !formData.nic && (
            <p className="text-red-500 text-sm mt-2">NIC is required.</p>
          )}
        </div>

        <div className="mt-10 flex justify-start space-x-4">
          <button type="submit" className="text-white bg-blue-500 px-4 py-2 rounded">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPrivilegesAssignForm;
