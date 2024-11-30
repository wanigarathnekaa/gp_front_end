import React, { useState } from 'react';
import { Dropdown } from '@/components/index';
import ButtonText from './ButtonTextBlue';

interface NewPrivilegesAssignFormProps {
  userRoleId: string;
  userRoleName: string;
  status: string;
  createdDate: string;
  createdBy: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const NewPrivilegesAssignForm = ({ onSubmit }: NewPrivilegesAssignFormProps) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedPrivileges, setSelectedPrivileges] = useState<string[]>([]);
  const [showErrors, setShowErrors] = useState(false);

  const handleSelect = (selectedOption: string): void => {
    setSelectedRole(selectedOption);
    // Clear "Select a role" error when dropdown is interacted with
    setShowErrors(false);
  };

  const handleCheckboxChange = (privilege: string) => {
    setSelectedPrivileges((prev) =>
      prev.includes(privilege)
        ? prev.filter((item) => item !== privilege) // Remove if already selected
        : [...prev, privilege] // Add if not selected
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Trigger error messages if validation fails
    if (!selectedRole || selectedPrivileges.length === 0) {
      setShowErrors(true);
      return;
    }
    // Reset errors and proceed
    setShowErrors(false);
    onSubmit(e);
  };

  return (
    <div className="ml-2 p-8 bg-white rounded-2xl shadow-md w-full lg:w-3/4 max-w-full mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mt-3 mb-4 justify-center items-center">
          <h2 className="text-gray-700 text-xl font-bold">Select user role</h2>
        </div>

        {/* Dropdown component */}
        <Dropdown
          options={['Student', 'Lecturer', 'Examination Department']}
          onSelect={handleSelect}
        />
        {showErrors && !selectedRole && (
          <p className="text-red-500 text-sm mt-2">Please select a user role.</p>
        )}

        {/* Box containing privileges with checkboxes */}
        <div className="mt-6 p-4 px-6 border border-gray-300 rounded-md bg-gray-50">
          <h3 className="text-gray-700 text-lg font-bold mb-3">Select Privileges</h3>
          <div className="space-y-2">
            {['Create Forms', 'View Forms', 'View Analytics', 'Generate Reports'].map((privilege) => (
              <label key={privilege} className="flex items-center justify-between space-x-2">
                <span className="text-gray-600">{privilege}</span>
                <input
                  type="checkbox"
                  name={privilege}
                  className="rounded text-blue-500 focus:ring-blue-500"
                  onChange={() => handleCheckboxChange(privilege)}
                />
              </label>
            ))}
          </div>
        </div>
        {showErrors && selectedRole && selectedPrivileges.length === 0 && (
          <p className="text-red-500 text-sm mt-2">Please select at least one privilege.</p>
        )}

        <div className="mt-10 flex justify-start space-x-4">
          <ButtonText text="Assign" />
        </div>
      </form>
    </div>
  );
};

export default NewPrivilegesAssignForm;
