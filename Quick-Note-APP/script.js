const Add_Note_input_field = document.querySelector("#Add-Note");
const Add_Note_BTN = document.querySelector("#Add-Note-BTN");
let Done_btn = document.querySelectorAll(".Done");
let DELETE_btn;
let get_local_Notes_ = localStorage.getItem("Notes");
if (get_local_Notes_ == null || get_local_Notes_ == undefined) {
    localStorage.setItem("Notes", "[]");
};
// edit  NOTE VALUES
let old_DESCP;
let old_TITLE;
let new_TITLE;
let new_DESCP;
// updation to local storage--------------------------------------------START
function Update_note_localStorage(old_TITLE, old_DESCP, NEW_TITLE, NEW_DESCP) {
    // let Updated_Notes;
    let Get_Old_Array = JSON.parse(localStorage.getItem("Notes"));
    Get_Old_Array.forEach(element => {
        if (element.Title == old_TITLE || element.Desp == old_DESCP) {
            element.Title = NEW_TITLE;
            element.Desp = NEW_DESCP;
        }
        localStorage.setItem("Notes", JSON.stringify(Get_Old_Array));
    });
};
// updation to local storage--------------------------------------------END
let previous_note;
// arary for notes
let NOTE = [];
// SAVING TO LOCAL STORAGE
// function savingIN_loaclStorage(content) {

// }
let indexNO = 0;
let arryOBJ = [];
function insert_note_in_Array(title, descprition) {
    let index_note = {
        Title: title,
        Desp: descprition
    }
    return index_note;
};
// function for local storage 
function load_Notes() {
    let Quick_Notes = JSON.parse(localStorage.getItem("Notes"));
    Quick_Notes.forEach(element => {
        let card = document.createElement("div");
        card.className = "card ";
        let htmlData = `       
     <div class="card-body ">
        <h5 class="card-title" >${element.Title}</h5>
        <textarea name="text" class="card-text"  placeholder="description" cols="10" rows="4" disabled>${element.Desp}</textarea>
        <button class=" edit-btn btn btn-primary">EDIT</button>
        <button class="btn btn-primary Done" id="Done">Done</button>
        <button class="btn btn-danger">DELETE</button>
     </div>
     `;
        card.insertAdjacentHTML("afterbegin", htmlData);
        document.querySelector(".row").appendChild(card);
    });
};
function Local_notes(objSTIN) {
    localStorage.setItem("Notes", objSTIN);
}
function addNote() {
    Note_title = document.querySelector("#Title").value;
    Note_Descp = document.querySelector("#Description").value;
    arryOBJ.push(insert_note_in_Array(Note_title, Note_Descp));
    // creating UI NOTE
    let card = document.createElement("div");
    card.className = "card ";
    let htmlData = `       
    <div class="card-body ">
       <p style="display: none;">${indexNO}</p>
       <h5 class="card-title" >${arryOBJ[indexNO].Title}</h5>
       <textarea name="text" class="card-text"  placeholder="description" cols="10" rows="4" disabled${arryOBJ[indexNO].Desp}</textarea>

       <button class=" edit-btn btn btn-primary " >EDIT</button>
       <button class="btn btn-primary Done" id="Done">Done</button>
       <button class="btn btn-danger" >DELETE</button>
    </div>
    `;
    card.insertAdjacentHTML("afterbegin", htmlData);
    document.querySelector(".row").appendChild(card);
    // saving to localstorage 
    let ii = JSON.stringify(arryOBJ.concat(previous_note));
    Local_notes(ii);
    indexNO++;
    window.location.reload();
};
let Edit_BTN;
Add_Note_BTN.addEventListener("click", (e) => {
    e.preventDefault();
    let AlerMsg = document.querySelector(".alert");
    if (document.querySelector("#Title").value == "" && document.querySelector("#Description").value == "") {
        AlerMsg.style.display = "block";
    } else {
        AlerMsg.style.display = "none";
        addNote();
    }
    document.querySelector("#Title").value = "";
    document.querySelector("#Description").value = "";
});
// window loding function
window.addEventListener("load", () => {
    let get_local_Notes_ = localStorage.getItem("Notes");
    if (get_local_Notes_ == "undefined") {
        localStorage.setItem("Notes", "[]");
    }
    else if (get_local_Notes_ === null) {
        localStorage.setItem("Notes", "[]");
    } else {
        previous_note = JSON.parse(localStorage.getItem("Notes"));
    }
    load_Notes();
});
// edit NOTE function
function Edit_Note(index) {
    Edit_BTN[index].style.display = "none";
    Edit_BTN[index].parentElement.style.focus = "true";
    let old_descp_Ele = Edit_BTN[index].previousElementSibling;
    let old_Title_Ele = old_descp_Ele.previousElementSibling;
    Done_btn = Edit_BTN[index].nextElementSibling.style.display = "inline-block";
    old_TITLE = old_Title_Ele.innerHTML;
    old_DESCP = old_descp_Ele.innerHTML;
    old_descp_Ele.removeAttribute("disabled");
    old_Title_Ele.setAttribute("contenteditable", "true");
};
// DELETE NOTE--------------------------------------------------------------------------------
let Updated_ARRAY_AFTER_DEL;
function Delete_Note(Btn_index, DEL_TITLE, DEL_DESCP
    // Dele_Note
) {
    if (get_local_Notes_ === null || get_local_Notes_ === undefined) {
        localStorage.setItem("Notes", "[]");
    }
    let ArrayToDelete = JSON.parse(localStorage.getItem("Notes"));
    // let ArryLenth = ArrayToDelete;
    ArrayToDelete.forEach(element => {
        if (element.Title == DEL_TITLE && element.Desp == DEL_DESCP) {
            let num = ArrayToDelete.indexOf(element);
            if (num >= 0 && num <= ArrayToDelete.length) {
                ArrayToDelete.splice(num, 1);
            }
            localStorage.setItem("Notes", JSON.stringify(ArrayToDelete));
            window.location.reload();
        }
    });
    let o = ArrayToDelete.includes(Dele_Note);
};
setTimeout(() => {
    Edit_BTN = document.querySelectorAll(".edit-btn");
    Done_btn = document.querySelectorAll(".Done");
    DELETE_btn = document.querySelectorAll(".btn-danger");
    Done_btn.forEach(element => {
        element.addEventListener("click", () => {
            element.style.display = "none";
            element.previousElementSibling.style.display = "inline-block";
            let ip = element.previousElementSibling.previousElementSibling;
            let o = element.previousElementSibling.previousElementSibling.previousElementSibling;
            ip.setAttribute("disabled", "");
            o.setAttribute("contenteditable", "false");
            new_TITLE = o.innerHTML;
            new_DESCP = ip.value;
            Update_note_localStorage(old_TITLE, old_DESCP, new_TITLE, new_DESCP);
        });
        for (let i = 0; i < DELETE_btn.length; i++) {
            let Element = DELETE_btn[i];
            Element.addEventListener("click", () => {
                let old_descp_Ele = Element.previousElementSibling.previousElementSibling.previousElementSibling;
                let old_Title_Ele = old_descp_Ele.previousElementSibling;
                old_TITLE = old_Title_Ele.innerHTML;
                old_DESCP = old_descp_Ele.innerHTML;
                // let SerchStr_To_Del = `{"Title":"${old_TITLE}","Desp":"${old_DESCP}"}`;
                Delete_Note(i, old_TITLE, old_DESCP);

            });
        }
    });

    for (let i = 0; i < Edit_BTN.length; i++) {
        let element = Edit_BTN[i];
        element.addEventListener("click", () => {
            Edit_Note(i);
        });
    }
}, 200)

