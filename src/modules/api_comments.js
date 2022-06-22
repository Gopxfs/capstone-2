const sendComment = async (name, comment, url, id) => {
  const request = new Request(url);
  // const commentId = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(2, 5);
  const data = {
    item_id: `item${id}`,
    username: name,
    comment,
  };

  await fetch(request, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { sendComment as default };