import React from 'react';
import { useFetch } from '../hooks/useFetch';

// useParams object will be any route parameters from the URL on this page.
// it will look at the URL and it will see we have an ID parameter.
import { useParams } from 'react-router-dom';

export default function Article() {
  // useParams will give us a params dot ID property that we can use.
  // the name of "id" property is dictated by watever we call that route parameter inside app.js route
  // 만약 App.js의 <Route path='/articles/:id'>의 :id가 :abc라면 여기서도 abc라고 사용해야한다.
  const { id } = useParams();
  // const params = useParams();
  // params.id
  //   const url = 'http://localhost:3000/articles/' + id;

  //? 1개의 item을 가져오려면, /(forward slash)를 사용하고, id를 작성하면 된다.
  // 이후 제이슨 서버가 해당 id를 찾아서 준다.
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
