export function DeleteCourse(id){
    fetch("http://localhost:3000/courses/"+ id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(body),
      })
        .then(res => res.json())
        .then(newcourse => {
        alert(`Course Deleted successfully !`);
        //   window.location.href =
        //     "http://127.0.0.1:5500/DAY3/OnlineTraining/src/html/courses.html";
        });
}