console.log("Hello G");
document.querySelector("input").value = "2024-01-21";
document.querySelector(".cal-logo").addEventListener("click",e=>{
let inputDate = document.querySelector("input").valueAsDate
let today = new Date()
let yearDiff = today.getFullYear() - inputDate.getFullYear();
let monthDiff = today.getMonth() - inputDate.getMonth();
let dayDiff = today.getDate() - inputDate.getDate();
if(monthDiff<0){
    yearDiff--;
    monthDiff = monthDiff+12;
}
if(dayDiff<0){
    monthDiff--;
    dayDiff = dayDiff + 30
}
let spans = document.getElementsByTagName("span")
spans[0].innerHTML = yearDiff
spans[1].innerHTML = monthDiff
spans[2].innerHTML = dayDiff
})





