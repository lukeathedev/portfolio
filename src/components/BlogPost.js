import React, { useState } from 'react';
import './BlogPost.scss';

// TODO: Minimize other posts when this becomes active??

function BlogPost(props) {
  const [active, setActive] = useState();

  const handleClick = () => {
    console.log('test')
    setActive(active ? false : true);
  }

  return (
    <div className={(active ? "blogPostActive " : "") + "BlogPost bg1 fg0 border-ac0"}>
      <div className="blogPostHeader" onClick={handleClick}>
        <h1>{props.title}</h1>
        <h1 className="chevron">&gt;</h1>
      </div>
      <div className="blogPostBody">
        {props.body}
      </div>
    </div >
  );
}

export default BlogPost;
