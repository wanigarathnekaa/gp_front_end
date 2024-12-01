import React from 'react';
import ButtonText from './ButtonTextBlue';

interface NewRoleCreationFormProps {
    roleName: string;
    roleDescription: string;
    selectedPrivileges: string[];
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const NewRoleCreationForm = ({
    roleName,
    roleDescription,
    selectedPrivileges,
    onInputChange,
    onCheckboxChange,
    onSubmit
}: NewRoleCreationFormProps) => {
    return (
        <div className='ml-2 p-8 bg-white rounded-2xl shadow-md w-full max-w-full mx-auto'>
            <form onSubmit={onSubmit}>
                <div className='mt-3 mb-4 text-center'>
                    <h2 className='text-gray-700 text-xl font-bold'>Create New User Role</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {/* Role Name Field */}
                    <div className="mb-3">
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor="roleName">
                            Role Name
                        </label>
                        <input
                            type="text"
                            id="roleName"
                            name="roleName"
                            value={roleName}
                            onChange={onInputChange}
                            className="appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        />
                    </div>

                    {/* Role Description Field */}
                    <div className="mb-5">
                        <label
                            className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor="roleDescription">
                            Role Description
                        </label>
                        <textarea
                            id="roleDescription"
                            name="roleDescription"
                            value={roleDescription}
                            onChange={onInputChange}
                            rows={4}
                            className="appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
                        />
                    </div>

                    {/* Privileges Section */}
                    <div className="mb-5">
                        <h3 className='text-gray-700 text-lg font-semibold mb-3'>Privileges</h3>
                        <div className="flex flex-col space-y-3">
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    name="formCreation"
                                    checked={selectedPrivileges.includes('formCreation')}
                                    onChange={onCheckboxChange}
                                    className="mr-2"
                                />
                                Form Creation
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    name="viewFormAnalysis"
                                    checked={selectedPrivileges.includes('viewFormAnalysis')}
                                    onChange={onCheckboxChange}
                                    className="mr-2"
                                />
                                View Form Analysis
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    name="courseCreation"
                                    checked={selectedPrivileges.includes('courseCreation')}
                                    onChange={onCheckboxChange}
                                    className="mr-2"
                                />
                                Course Creation
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    name="studentRegistration"
                                    checked={selectedPrivileges.includes('studentRegistration')}
                                    onChange={onCheckboxChange}
                                    className="mr-2"
                                />
                                Student Registration
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    name="lecturerRegistration"
                                    checked={selectedPrivileges.includes('lecturerRegistration')}
                                    onChange={onCheckboxChange}
                                    className="mr-2"
                                />
                                Lecturer Registration
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type="checkbox"
                                    name="userRoleCreation"
                                    checked={selectedPrivileges.includes('userRoleCreation')}
                                    onChange={onCheckboxChange}
                                    className="mr-2"
                                />
                                User Role Creation
                            </label>
                        </div>
                    </div>
                </div>

                <div className='mt-10 flex justify-end'>
                    <ButtonText text="Add Role" />
                </div>
            </form>
        </div>
    );
};

export default NewRoleCreationForm;
