import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { users } from './data';

export default function Posts() {
  const params = useParams();
  const data = users.find((el) => el.name === params.id);
  return (
    <div className="border-[1px] border-blue-500 flex flex-col justify-center items-center gap-10">
      <Link to={'/'}>
        <h1 className="bg-red-400">Back to Home</h1>
      </Link>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.lastname}</p>
      <p>{data.address}</p>
    </div>
  );
}
