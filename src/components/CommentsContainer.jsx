import React from "react";

const commentsData = [
  {
    name: "Kumar Hrithik",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    replies: [],
  },
  {
    name: "Kumar Hrithik",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    replies: [
      {
        name: "Kumar Hrithik",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        replies: [],
      },
      {
        name: "Random User",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        replies: [
          {
            name: "Random User",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            replies: [
              {
                name: "Random User",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                replies: [
                  {
                    name: "Random User",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                    replies: [
                      {
                        name: "Random User",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    replies: [],
  },
  {
    name: "Random User",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    replies: [],
  },
];
//individual Comments
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-slate-100 p-2 rounded-lg  my-2 ">
      <div>
        <img
          className="h-7 rounded-full"
          src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          alt="user"
        />
      </div>
      <div className="ml-5">
        <h2 className="text-xs font-bold ">{name}</h2>
        <h3 className="text-xs">{text}</h3>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-slate-400 ">
        {comment.replies && <CommentsList comments={comment.replies} />}
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5">
      <h3 className="font-semibold">Comments :</h3>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
