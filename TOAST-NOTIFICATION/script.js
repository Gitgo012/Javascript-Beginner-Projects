document.addEventListener("DOMContentLoaded", () => {
    let toastBox = document.getElementById("toastBox");
    let successMsg='<i class="fa-solid fa-circle-check"></i> Successfully submitted';
    let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Oops! An error happened';
    let invalidMsg='<i class="fa-solid fa-circle-exclamation"></i> Invalid option!';
  
    document.getElementById("successButton").addEventListener("click", () => showToast(successMsg));
    document.getElementById("errorButton").addEventListener("click", () => showToast(errorMsg));
    document.getElementById("invalidButton").addEventListener("click", () => showToast(invalidMsg));
  
    function showToast(msg) {
      let toast = document.createElement("div");
      toast.classList.add("toast");
      toast.innerHTML = msg; 
      toastBox.appendChild(toast);

      if (msg.includes('error')){
        toast.classList.add("errorMsg");
      }
      else if (msg.includes('Invalid')){
        toast.classList.add("invalidMsg");
      }

      setTimeout(()=>{
        toast.remove()
      }, 5000)
    }
  });
let parentElement = document.getElementsByClassName('toast');
let count=parentElement.childElementCount;
let childElement=parentElement.children[0];
if (count>3){
  parentElement.removeChild(childElement);
}
  