function incrementLike(){
  var likeCount = document.getElementById('likeCount');
  var newCount = parseInt(likeCount.textContent) + 1;
  likeCount.textContent = newCount;

  localStorage.setItem('likeCount', newCount);
}

function loadLikesAndComments(){

  var storedLikeCount = localStorage.getItem('likeCount') || 0;
  document.getElementById('likeCount').textContent = storedLikeCount;
  

  for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    if(key !== 'likeCount') { 
      const value = localStorage.getItem(key);
      appendComment(key, value);
    }
  }
}

const inpKey = document.getElementById("inpKey");
const inpVal = document.getElementById("inpVal");
const btnInsert = document.getElementById("btnInsert");
const isOutput = document.getElementById("isOutput");

btnInsert.onclick = function(){
  const key = inpKey.value;
  const value = inpVal.value;
  if(key && value){
    localStorage.setItem(key, value);
    appendComment(key, value);
    inpKey.value = ''; 
    inpVal.value = '';
  }
};

function appendComment(username, comment) {
  isOutput.innerHTML += `${username}: ${comment}<br/>`;
}


document.addEventListener('DOMContentLoaded', loadLikesAndComments);
