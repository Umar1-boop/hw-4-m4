    // const postsContainer = document.getElementById('posts');

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Ошибка загрузки данных');
    //     }

    //     return response.json();
    //   })
    //   .then(posts => {
    //     postsContainer.innerHTML = '';

    //     posts.forEach(post => {
    //       const card = document.createElement('article');
    //       card.className = 'card';

    //       card.innerHTML = `
    //         <h2>${post.title}</h2>
    //         <p>${post.body}</p>
    //       `;

    //       postsContainer.appendChild(card);
    //     });
    //   })
    //   .catch(error => {
    //     postsContainer.innerHTML = `
    //       <p class="error">${error.message}</p>
    //     `;
    //   });








    //       const commentsContainer = document.getElementById('comments');

    // fetch('https://jsonplaceholder.typicode.com/comments')
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Ошибка загрузки комментариев');
    //     }

    //     return response.json();
    //   })
    //   .then(comments => {
    //     commentsContainer.innerHTML = '';

    //     comments.forEach(comment => {
    //       const card = document.createElement('article');
    //       card.className = 'card';

    //       card.innerHTML = `
    //         <h2>${comment.name}</h2>
    //         <div class="email">${comment.email}</div>
    //         <div class="body">${comment.body}</div>
    //       `;

    //       commentsContainer.appendChild(card);
    //     });
    //   })
    //   .catch(error => {
    //     commentsContainer.innerHTML = `
    //       <p class="error">${error.message}</p>
    //     `;
    //   });








      const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const todosContainer = document.getElementById('todos');

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка загрузки');
        }

        return response.json();
      })
      .then(todos => {
        todos.forEach(todo => {
          const li = document.createElement('li');

          li.textContent = `${todo.title} — ${
            todo.completed ? 'Выполнено' : 'Не выполнено'
          }`;

          if (todo.completed) {
            li.classList.add('completed');
          } else {
            li.classList.add('not-completed');
          }

          todosContainer.appendChild(li);
        });
      })
      .catch(() => {
        error.textContent = 'Ошибка загрузки';
      })
      .finally(() => {
        loading.style.display = 'none';
      });