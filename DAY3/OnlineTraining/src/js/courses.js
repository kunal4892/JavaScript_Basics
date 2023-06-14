async function fetchCourses() {
    try {
      let courses = null;
      let res = await fetch("http://localhost:3000/courses");
      if (res.ok) {
        courses = await res.json();
        DisplayCourses(courses);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  function DisplayCourses(courses) {
    for (const course of courses) {
      CreateNewCourseItem(course);
    }
  }


// Card HTML as decribed on Bootstrap
/*  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>*/


  function CreateNewCourseItem(course) {
    let listofcourses = document.getElementById("listofcourses");

    let newCourseCard = document.createElement("div");
    newCourseCard.className = "card";
    newCourseCard.style.width = "18rem";

    let newCourseCardImage = document.createElement("img");
    newCourseCardImage.src = course.imageUrl;

    newCourseCardImage.className = "card-image-top";
    newCourseCard.appendChild(newCourseCardImage);

    let newCourseCardDiv = document.createElement("div");
    newCourseCardDiv.className = "card-body";

    let newCourseCardTitle = document.createElement("h5");
    newCourseCardTitle.className = "card-title";
    newCourseCardTitle.innerHTML = course.title;

    let newCourseRating = document.createElement("p");
    newCourseRating.className = "card-text";
    newCourseRating.innerHTML = `Rating: ${course.rating}`;

    let newCourseLikes = document.createElement("p");
    newCourseLikes.className = "card-text";
    newCourseLikes.innerHTML = `Likes: ${course.likes}`;

    let newCoursePrice = document.createElement("p");
    newCoursePrice.className = "card-text";
    newCoursePrice.innerHTML = `Price: ₹. ${course.price} `;


    let newCourseLikesBtn = document.createElement("button");
    newCourseLikesBtn.innerText = course.likes;
    newCourseLikesBtn.className = "btn btn-primary";

    newCourseCardDiv.appendChild(newCourseCardTitle);
    newCourseCardDiv.appendChild(newCourseRating);
    newCourseCardDiv.appendChild(newCourseLikes);
    newCourseCardDiv.appendChild(newCoursePrice);
    newCourseCardDiv.appendChild(newCourseLikesBtn);

    newCourseCard.appendChild(newCourseCardDiv);
    // let newCourse = document.createElement("li");
    // newCourse.innerText = course.title;
    listofcourses.appendChild(newCourseCard);
  }
  window.addEventListener("DOMContentLoaded", fetchCourses);