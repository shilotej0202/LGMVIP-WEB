/* Java Script Explaination:-
1)First I have given the 'if' condition. If nothing is input in this input place, that is, if the input is 0, then a kind of alert will be seen here. This error message will ask you to input something.
2)Then I have added the below conditions using else, which means what will happen if you add some information.
3)Then I used innerHTML which will help to see this information on the web page.
4)Then I said to show the input text in the id called 'taskname'. I have already added the required CSS code for the 'taskname'.
5)Then I created a delete button that will help to delete the information in the list. For this, I have added an icon here. I have already added the required CSS code for this button.
6)Then I have made arrangements to make the delete button effective. If you watch the demo you will understand that I have added a delete button in each list. 
7)That button will help to delete that information. Here are the instructions to remove the information using a simple 'onclick'.
8)Then I have created the completed function which will start everytime with blank title.


*/

document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
                <button class="delete">
                Delete
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    document.querySelector("#newtask input").value = "";
  }
};
