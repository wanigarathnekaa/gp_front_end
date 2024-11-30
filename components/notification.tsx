import React, { useState } from 'react';

interface NotificationProps {
  isOpen: boolean;
}

const Notification: React.FC<NotificationProps> = ({ isOpen }) => {
  const [notification, setNotification] = useState([
    {
      id: 1,
      title: 'New user registered',
      description: 'A new user has registered on the platform',
      date: '2021-08-01',
      time: '12:00',
      read: false,
    },
    // Additional notifications
  ]);

  const markAllAsRead = () => {
    setNotification(notification.map(notif => ({ ...notif, read: true })));
  };

  return (
    isOpen ? (
      <div className="absolute right-0 mt-2 w-80 overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50">
          <h3 className="text-sm font-medium text-gray-900">Notifications</h3>
          <button onClick={markAllAsRead} className="text-xs text-blue-600 hover:text-blue-800">
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-100 max-h-96 overflow-y-auto">
          {notification.map((notif) => (
            <div key={notif.id} className={`p-4 ${notif.read ? 'bg-white' : 'bg-blue-50'}`}>
              <div className="flex items-start">
                <div className="ml-3 w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{notif.description}</p>
                  <p className="mt-1 text-xs text-gray-400">{notif.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-sm text-gray-500 hover:text-gray-700 cursor-pointer border-t">
          View all notifications
        </div>
      </div>
    ) : null
  );
};

export default Notification;
