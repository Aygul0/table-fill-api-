fetch('https://dummyjson.com/comments')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    var tbody = document.querySelector("tbody")
for(let i = 0 ; i<data.comments.length;i++){

    tbody.innerHTML+=`
        <tr>
            <td>${data.comments[i].id}</td>
            <td>${data.comments[i].body}</td>
            <td>${data.comments[i].postId}</td>
            <td>${data.comments[i].user.id}</td>
        </tr>
            `



}






 
  });