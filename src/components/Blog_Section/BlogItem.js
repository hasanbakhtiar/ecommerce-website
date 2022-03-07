import React from 'react';

const BlogItem = (props) => {
  return <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12' data-aos="zoom-in">
    <div className="box-content">
    <div className='bg-img '>
        <img src={props.img} alt="" />
    </div>
      <div className="content"> 
          <div className="buttons">
                <button><i class="fas fa-list"></i> Sub Category 1</button>
                <button><i class="fas fa-user"></i> Demo Demo</button>
                <button><i class="far fa-clock"></i>  Tuesday January 4 2022</button>
          </div>

          <h5 className="title">{props.desc}</h5>
          <button className='button-read-me'>READ MORE</button>
      </div>
    </div>
  </div>;
};

export default BlogItem;
