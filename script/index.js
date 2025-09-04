const loadLessons=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res =>res.json())
    .then((json)=> displayLesson(json.data))

}
const displayLesson=(lessons)=>{
// get the container & Empty
const levelContainer = document.getElementById("level-container");
levelContainer.innerHTML="";
// get into evey lessons
for (let lesson of lessons){
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML=`<button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>`;
    // append into container
    levelContainer.append(btnDiv);

}
};
loadLessons();
