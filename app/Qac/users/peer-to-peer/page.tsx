"use client";
import React, { useState } from "react";
import {
  Sidebar,
  Navbar,
  Title,
  Table,
  Card,
  Navigation,
  ReviewTable,
  AssignReviewForm,
} from "@/components/index";
import { FaUser, FaUsers } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubTitle from "@/components/SubTitle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Breadcrumbs from "@/components/Breadcrumbs";

const links = [
  {
    href: "/Qac/users/peer-to-peer",
    label: "Lecturers",
  },
];

const review = [
  {
    id: 1,
    reviewer: "John Doe",
    reviewee: "Jane Smith",
    reviewDate: "2024-07-20",
  },
  {
    id: 2,
    reviewer: "Alice Brown",
    reviewee: "Bob Johnson",
    reviewDate: "2024-01-01",
  },
  {
    id: 3,
    reviewer: "Ava Martinez",
    reviewee: "Elijah Garcia",
    reviewDate: "2023-07-10",
  },
  {
    id: 4,
    reviewer: "Sophia Hernandez",
    reviewee: "Mason Lee",
    reviewDate: "2023-06-05",
  },
];

const PeerReviews = () => {
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    reviewer: "",
    reviewee: "",
    formType: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full">
      <Navbar />
      <Sidebar />

      <div className="ml-64 min-h-screen bg-blue-50 px-20 py-10">
        <Title text="Peer-to-peer review" />
        <Breadcrumbs />

        <div className="flex flex-row mt-10">
          <Card
            title="Assign New Peer Review"
            description="Assign a new peer review"
            icon={FaUser}
            onclick={openModal}
          />
        </div>
        <SubTitle text="Review history" />
        <div className="mt-5 ml-3">
            <ReviewTable users={review} />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className=" relaive  w-1/2">
            <AssignReviewForm
              reviewer={formData.reviewer}
              reviewee={formData.reviewee}
              formType={formData.formType}
              onInputChange={handleInputChange}
              onUrlChange={handleUrlChange}
              onSubmit={handleSubmit}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PeerReviews;
