{/* <input id="id">Enter Id</input>
<input id="title">Enter title</input>
<input id="price">Enter price</input>
<input id="likes">Enter likes</input>
<input id="rating">Enter rating</input>
<input id="imageUrl">Enter imageUrl</input> */}

function AddNewCourse(){
    let Id = document.getElementById("Id").value;
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let likes = document.getElementById("likes").value;
    let rating = document.getElementById("rating").value;
    let imageUrl = document.getElementById("imageUrl").value;

    let body = {
        id:Id,
        title:title,
        price:price,
        likes:likes,
        rating:rating,
        imageUrl:imageUrl
    }

    fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then(res => res.json())
        .then(newcourse => {
          // alert(`${newcourse.title} added successfully !`);
          window.location.href =
            "http://127.0.0.1:5500/DAY3/OnlineTraining/src/html/courses.html";
        });
}