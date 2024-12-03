"use client";

import React, { useEffect, useState } from "react";
import { CgDetailsMore } from "react-icons/cg";

interface PeerReview {
  reviewer: string;
  reviewee: string;
  reviewDate: string;
  assignDate: string;
  reviewDetailsLink: string;
  details: string; // Extra field to hold review details
}

const PeerReviewsList: React.FC = () => {
  const [peerReviews, setPeerReviews] = useState<PeerReview[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedReview, setSelectedReview] = useState<PeerReview | null>(null);

  useEffect(() => {
    const fetchPeerReviews = async () => {
      const data: PeerReview[] = [
        {
          reviewer: "John Doe",
          reviewee: "Jane Smith",
          reviewDate: "2024-12-01",
          assignDate: "2024-11-25",
          reviewDetailsLink: "#",
          details: "This is a detailed review comment for John Doe's review of Jane Smith.",
        },
        {
          reviewer: "Alice Johnson",
          reviewee: "Bob Brown",
          reviewDate: "2024-12-02",
          assignDate: "2024-11-20",
          reviewDetailsLink: "#",
          details: "This is a detailed review comment for Alice Johnson's review of Bob Brown.",
        },
      ];
      setPeerReviews(data);
    };

    fetchPeerReviews();
  }, []);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleRowsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = peerReviews.slice(startIndex, endIndex);

  const openModal = (review: PeerReview) => {
    setSelectedReview(review);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReview(null);
  };

  return (
    <div className="px-4 w-full -mt-2">
      <table className="w-full bg-white rounded-2xl shadow-md border-none text-gray-600">
        <thead>
          <tr>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Row No</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Reviewer</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Reviewee</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Review Date</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Assign Date</th>
            <th className="border-b border-gray-200 py-3 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((review, index) => (
            <tr key={index} className="border border-gray-200">
              <td className="py-3 px-4 text-center align-middle">{startIndex + index + 1}</td>
              <td className="py-3 px-4 text-center align-middle">{review.reviewer}</td>
              <td className="py-3 px-4 text-center align-middle">{review.reviewee}</td>
              <td className="py-3 px-4 text-center align-middle">{review.reviewDate}</td>
              <td className="py-3 px-4 text-center align-middle">{review.assignDate}</td>
              <td className="py-3 px-4 text-center align-middle">
                <button
                  onClick={() => openModal(review)}
                  className="text-blue-600 hover:text-blue-800 flex justify-center items-center gap-2"
                >
                  <CgDetailsMore />
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor="rows-per-page" className="text-sm">
            Rows per page:
          </label>
          <select
            id="rows-per-page"
            className="p-2 border rounded bg-white"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm">
            Page {currentPage} of {Math.ceil(peerReviews.length / rowsPerPage)}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(peerReviews.length / rowsPerPage)}
            className="px-3 py-1 bg-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-4xl">
            <h3 className="text-xl font-bold mb-10">Peer-Review Details</h3>
            <p className="mt-2"><strong>Reviewer:</strong> {selectedReview.reviewer}</p>
            <p className="mt-2"><strong>Reviewee:</strong> {selectedReview.reviewee}</p>
            <p className="mt-2"><strong>Review Date:</strong> {selectedReview.reviewDate}</p>
            <p className="mt-2"><strong>Assigned Date:</strong> {selectedReview.assignDate}</p>
            <p className="mt-2"><strong>Details:</strong> {selectedReview.details}</p>
            <div className="mt-10 flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeerReviewsList;
