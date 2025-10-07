import React from "react";

const AppCard = ({ data }) => {
  const { title, id, image, size, download, ratingAvg } = data;
  return (
    <div>
      <div className="card bg-white shadow-md ">
        <figure className="p-2 w-[300px] h-[300px] mx-auto">
          <img src={image} alt="App Icon" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;

// {
//     "image": "https://img.icons8.com/color/96/task.png",
//     "title": "TaskMaster Pro",
//     "companyName": "NextGen Apps",
//     "id": 1,
//     "description": "Organize your tasks with smart reminders and collaborative features.",
//     "size": 45,
//     "reviews": 12000,
//     "ratingAvg": 4.5,
//     "downloads": 500000,
//     "ratings": [
//       { "name": "1 star", "count": 500 },
//       { "name": "2 star", "count": 800 },
//       { "name": "3 star", "count": 1500 },
//       { "name": "4 star", "count": 3000 },
//       { "name": "5 star", "count": 7200 }
//     ]
//   },
