function SearchUser() {
  console.log("hit add")
  document.querySelector('.CloseInput').classList.add('btn-close');
  document.querySelector('.searchPen').classList.add('hidePen');
}
function Close() {
  document.getElementById("SearchUser").value = "";
  document.querySelector('.CloseInput').classList.remove('btn-close');
  document.querySelector('.searchPen').classList.remove('hidePen');

}