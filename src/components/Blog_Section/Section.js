import React from 'react';
import BlogData from '../Data/BlogData';
import BlogItem from './BlogItem';

const Section = () => {
  return <div className='Blog' >
      <h1 className='title1 text-center'>Recent blog post</h1>
        <div className="container" data-aos="fade-up">
            <div className="row">
                {BlogData.data.map((item,index)=> {
                    return(
                        <BlogItem
                        img = {item.img}
                        desc={item.desc}
                        item={item}
                        key={index}
                        />
                    );
                })}
            </div>
        </div>
  </div>;
};

export default Section;
