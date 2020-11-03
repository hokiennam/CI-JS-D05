//tạo nut close
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  var edit = document.createElement("BUTTON");
  var change = document.createTextNode("\u2B80");
  span.className = "close";
  edit.className = "edit"
  span.appendChild(txt);
  edit.appendChild(change)
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(edit);
}

//bấm để edit để sửa
function editElement(){


var replace = document.createElement("INPUT");
edit.onclick = function(){
  if(replace === '' ){
    alert("You must write something to edit");
  }else{
  }}
  
// bấm close để xóa
function deleteElement () {
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}}
}
// CHECK
var list = document.getElementById('itemlist');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false);
//Nhấp enter là add
document.getElementById("input").focus();
document.addEventListener("keypress", (e) => {
    if (e.charCode === 13) {
      newElement();
    }
});
// tạo list mới khi bấm add
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("itemlist").appendChild(li);
    }
    document.getElementById("input").value = "";
        input.value="";
        document.getElementById('erase').style.display = 'none';
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var edit = document.createElement("SPAN");
    var change = document.createTextNode("\u2B80");
    span.className = "close";
    edit.className = "edit";
    span.appendChild(txt);
    edit.appendChild(change)
    li.appendChild(span);
    li.appendChild(edit);
  
    deleteElement();
  }
}

