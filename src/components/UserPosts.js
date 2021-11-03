import React from "react";

const UserPosts = (props) => {
  const { returnToUsers, posts } = props;
  return (
    <div>
      <button className="btn btn-success btn-block m-2" onClick={returnToUsers}>
        Back To The Users Table
      </button>
      <div class="card text-center m-5">
        {posts.map((post) => (
          <div class="card-body border bg-primary text-white">
            <h5 class="card-title">{post.title}</h5>
            <p class="card-text">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
