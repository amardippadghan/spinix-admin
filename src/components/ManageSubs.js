import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageSubs() {
  const [subscriptionRequests, setSubscriptionRequests] = useState([]);

  useEffect(() => {
    fetchSubscriptionRequests();
  }, []);

  const fetchSubscriptionRequests = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://sphinix-backend.onrender.com/api/request",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSubscriptionRequests(response.data.data);
    } catch (error) {
      console.error("Error fetching subscription requests:", error);
    }
  };

  const handleApprove = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://sphinix-backend.onrender.com/api/auth/license/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Subscription request approved:", response.data);
      if (response.status === 200)
        alert("Subscription request approved successfully");
      else alert("Something went wrong");
    } catch (error) {
      console.error("Error approving subscription request:", error);
    }
  };

  return (
    <div className="flex-1 p-10">
      <h1 className="text-2xl font-bold mb-4">Manage Subscription Requests</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subscriptionRequests.map((request) => (
          <div key={request._id} className="border rounded p-4">
            <h2 className="text-lg font-semibold mb-2">{request.userName}</h2>
            <p>Email: {request.userEmail}</p>
            <p>UTR Number: {request.UtrNumber}</p>
            <p>Amount: ₹{request.amount}</p>
            <p>Status: {request.status}</p>
            {request.status === "pending" && (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2 ml-auto block"
                onClick={() => handleApprove(request.userId)}
              >
                Approve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageSubs;
