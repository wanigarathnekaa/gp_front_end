"use client";

import { getFormContent, getForms } from "@/actions/form";
import React, { Suspense, useState, useCallback } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";
import CreateFormBtn from "./CreateFormBtn";
import CreateFormBtnTemplate from "./CreateFormBtnTemplate";

export interface Form {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  published: boolean;
  template: boolean;
  visits: number;
  submissions: number;
}

function TemplateListPopUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormId, setSelectedFormId] = useState<number | null>(null);
  const [showButton, setShowButton] = useState(false); // New state for button
  const [formContent, setFormContent] = useState<any | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowButton(false); // Hide button when modal closes
  };

  const handleCardClick = useCallback((formId: number) => {
    setSelectedFormId(formId);
  }, []);

  const handleChooseClick = async () => {
    if (selectedFormId !== null) {
      const content = await getFormContent(selectedFormId.toString());
      setFormContent(content); // Save content to state
      setShowButton(true); // Show button when form is selected
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Use Template
      </button>

      {isModalOpen && (
        <div
          id="static-modal"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 pl-0 inset-0 z-[999] flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-70"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Templates
                </h3>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Suspense
                    fallback={[1, 2, 3, 4].map((ele) => (
                      <FormCardSkeleton key={ele} />
                    ))}
                  >
                    <FormCards
                      onCardClick={handleCardClick}
                      selectedFormId={selectedFormId}
                    />
                  </Suspense>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  onClick={handleChooseClick}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Choose
                </button>
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Conditionally render the button */}
      {showButton &&   <CreateFormBtnTemplate template={false} content={formContent} />}
    </>
  );
}

function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
}

interface FormCardsProps {
  onCardClick: (formId: number) => void;
  selectedFormId: number | null;
}

async function FormCards({ onCardClick, selectedFormId }: FormCardsProps) {
  const forms = await getForms();
  return (
    <>
      {forms.map((form: any) => (
        <FormCard
          key={form.id}
          form={form}
          onClick={() => onCardClick(form.id)}
          isSelected={selectedFormId === form.id}
        />
      ))}
    </>
  );
}

interface FormCardProps {
  form: Form;
  onClick: () => void;
  isSelected: boolean;
}

const FormCard = React.memo(({ form, onClick, isSelected }: FormCardProps) => {
  return (
    <Card
      onClick={onClick}
      className={`shadow-xl cursor-pointer transition-all ${
        isSelected ? "border-2 border-red-500" : "border-none"
      }`}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font-bold">{form.name}</span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
});

export default TemplateListPopUp;
