function AddNewCourse(e){
    e.preventDefault();
    let body = {
        id: parseInt(document.querySelector("#txtCourseId").value),
        title: document.querySelector("#txtCourseTitle").value,
        price: parseInt(document.querySelector("#txtCoursePrice").value),
        likes: parseInt(document.querySelector("#txtCourseLikes").value),
        rating: parseInt(document.querySelector("#txtCourseRating").value),
        imageUrl: document.querySelector("#txtCourseImageUrl").value,
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