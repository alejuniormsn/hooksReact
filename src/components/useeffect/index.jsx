import { useState, useEffect } from "react";


export default function Useeffect() {
  const [resourceType, setResourceType] = useState('posts');

  const fetchResourceType = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
    const responseJSON = await response.json();
    console.log(responseJSON);
  };

  useEffect(() => {
    fetchResourceType();

    return () => {
      console.log('AQUI sempre é chamado após a execução do useEffect');
    };
  }, [resourceType]);

  function changeResourceType(resourceType) {
    setResourceType(resourceType);
  }

  return (
    <div>
      <h2>useEffect</h2>
      <p>{resourceType.toLocaleUpperCase()}</p>
      <span>Verifique o console se tem a resposta da API.</span>
      <div>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>To Do</button>
      </div>
      <hr />
    </div>
  );
}
