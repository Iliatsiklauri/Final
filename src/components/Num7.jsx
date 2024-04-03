import useFetch from './useFetch';

export default function Num7() {
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <div>
      {data?.map((el, key) => (
        <p key={key}>{el.name}</p>
      ))}
    </div>
  );
}
