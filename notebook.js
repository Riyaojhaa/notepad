
let themeSelect = document.querySelector("#theme");
let notepadTextarea = document.querySelector("#notepad");



// theme portion
themeSelect.addEventListener("change", function () {
    let selectedOption = themeSelect.value;
    switch (selectedOption) {
        case "white":
            document.body.style.backgroundColor = "white";
            notepadTextarea.style.backgroundImage = "";
            notepadTextarea.style.color = "black";
            break;
        case "black":
            document.body.style.backgroundColor = "black";
            notepadTextarea.style.backgroundImage = "url('black.jfif')";
            notepadTextarea.style.color = "white";
            notepadTextarea.style.backgroundSize = "cover"; // or "contain" depending on your preference
            //notepadTextarea.style.backgroundRepeat = "no-repeat";
           //notepadTextarea.style.backgroundAttachment = "fixed";
            break;
        case "green":
            document.body.style.backgroundColor = "green";
            notepadTextarea.style.backgroundImage = "url('green3.jfif')";
            notepadTextarea.style.color = "black";
            notepadTextarea.style.backgroundSize = "cover"; // or "contain" depending on your preference
            //notepadTextarea.style.backgroundRepeat = "no-repeat";
           //notepadTextarea.style.backgroundAttachment = "fixed";
            break;
        case "yellow":
            document.body.style.backgroundColor = "yellow";
            notepadTextarea.style.backgroundImage = "url('yellow.jfif')";
            notepadTextarea.style.color = "black";
            notepadTextarea.style.backgroundSize = "cover"; // or "contain" depending on your preference
            //notepadTextarea.style.backgroundRepeat = "no-repeat";
           //notepadTextarea.style.backgroundAttachment = "fixed";
            break;
        case "red":
            document.body.style.backgroundColor = "red";
            notepadTextarea.style.backgroundImage = "url('love1.jfif')";
            notepadTextarea.style.backgroundPosition = "center"; 
            notepadTextarea.style.color = "black";
            notepadTextarea.style.backgroundSize = "cover"; // or "contain" depending on your preference
            //notepadTextarea.style.backgroundRepeat = "no-repeat";
           //notepadTextarea.style.backgroundAttachment = "fixed";
            break;
        case "pink":
            document.body.style.backgroundColor = "pink";
            notepadTextarea.style.backgroundImage = "url('chill.jfif')";
            notepadTextarea.style.color = "black";
            notepadTextarea.style.backgroundPosition = "center"; 
            notepadTextarea.style.backgroundSize = "cover"; // or "contain" depending on your preference
             //notepadTextarea.style.backgroundRepeat = "no-repeat";
            //notepadTextarea.style.backgroundAttachment = "fixed";
            break;
        default:
            // Handle default case
            break;
    }
});


// text size portion
let SelectTextsize = document.querySelector("#textsize");

SelectTextsize.addEventListener("change", function () {
    let SelectedOption2 = SelectTextsize.value;
    switch (SelectedOption2) {
        case "10":
            notepadTextarea.style.fontSize = "10px";
            break;
        case "11":
            notepadTextarea.style.fontSize = "11px";
            break;
        case "12":
            notepadTextarea.style.fontSize = "12px";
            break;
        case "13":
            notepadTextarea.style.fontSize = "13px";
            break;
        case "14":
            notepadTextarea.style.fontSize = "14px";
            break;
        case "15":
            notepadTextarea.style.fontSize = "15px";
            break;
        case "16":
            notepadTextarea.style.fontSize = "16px";
            break;
        case "17":
            notepadTextarea.style.fontSize = "17px";
            break;

        default:
            // Handle default case
            break;
    }
});


// font-style setup portion
let body = document.querySelector("body");

let Selectfontstyle = document.querySelector("#fontstyle");

Selectfontstyle.addEventListener("change", function () {
    let SelectedOption3 = Selectfontstyle.value;
    switch (SelectedOption3) {
        case "arial":
            notepadTextarea.style.fontFamily = "'Madimi One', sans-serif"
            break;
        case "verdana":
            notepadTextarea.style.fontFamily = "'Ojuju', sans-serif"

            break;
        case "Helvetica":
            notepadTextarea.style.fontFamily = "'Roboto Condensed', sans-serif"
            break;
        case "Times New Roman":
            notepadTextarea.style.fontFamily = "'Inria Sans', sans-serif"
            break;
        case "Courier New":
            notepadTextarea.style.fontFamily = " 'PT Serif', serif"
            break;
        case "Georgia":
            notepadTextarea.style.fontFamily = "'Josefin Sans', sans-serif"
            break;
        default:
            break;
    }
})


// edit portion
let Selectedit = document.querySelector("#edit");
Selectedit.addEventListener("change", function () {
    let SelectedOption4 = Selectedit.value;
    switch (SelectedOption4) {
        case "cut":
            handlecuttextfromarea();
            break;
        case "copy":
            handlecopytextfromarea();
            break;
        case "paste":
            handlepastefromarea();
            break;
        // case "highlight":
        //     highlightSelectedText();
        //     break;
        case "bold":
            bold();
            break;
        case "italic":
            italic();
            break;
        case "centeralign":
            centeralign();
            break;
        case "rightalign":
            rightalign();
            break;
        case "leftalign":
            leftalign();
            break;
        case "uppercase":
            uppercase();
            break;
        case "lowercase":
            lowercase();
            break;
        default:
            break;
    }
})

function handlecopytextfromarea(){
    const area = document.querySelector("#notepad")
    area.select();
    document.execCommand('copy')
}
function handlecuttextfromarea(){
    const part = document.querySelector("#notepad")
    part.select();
    document.execCommand('cut')
}
// function handlepastefromarea() {
//     const area = document.getElementById("notepad");
//     area.focus(); // Ensure the textarea has focus
//     document.execCommand('paste'); // Execute the paste command
// }
function handlepastefromarea() {
    const area = document.getElementById("notepad");
    
    // Request permission to access the clipboard
    navigator.permissions.query({ name: 'clipboard-read' }).then(permissionStatus => {
        // If permission is granted or already granted
        if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
            // Read text from clipboard
            navigator.clipboard.readText()
                .then(text => {
                    // Append the text from clipboard to textarea
                    area.setRangeText(text, area.selectionStart, area.selectionEnd, 'end');
                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err);
                });
        } else {
            console.error('Clipboard read permission denied');
        }
    });
}

// function highlightSelectedText() {
//     let textarea = document.getElementById("notepad");
//     let startIndex = textarea.selectionStart;
//     let endIndex = textarea.selectionEnd;
//     let selectedText = textarea.value.substring(startIndex, endIndex);
//     let newText = textarea.value.substring(0, startIndex) +
//                   '<span style="background-color: yellow">' + selectedText + '</span>' +
//                   textarea.value.substring(endIndex);
//     textarea.innerHTML = newText;
// }
function bold() {
    notepadTextarea.style.fontWeight = "bold";
    
}
function italic() {
    notepadTextarea.style.fontStyle = "italic";
    
}
function centeralign() {
    notepadTextarea.style.textAlign = "center";
    
}
function rightalign() {
    notepadTextarea.style.textAlign = "right";
    
}
function leftalign() {
    notepadTextarea.style.textAlign = "left";
    
}
function uppercase() {
    notepadTextarea.style.textTransform = "uppercase";
    
}
function lowercase() {
    notepadTextarea.style.textTransform = "lowercase";
    
}
//file portion
document.getElementById("fileDropdown").addEventListener("change", function() {
    if (this.value === "Download") {
        // // Get the content of the notebook
        var notebookContent = document.getElementById("notepad").value;

        // // Create a Blob containing the notebook content
        var blob = new Blob([notebookContent], { type: "text" });

        // // Create a temporary link element
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);

        // // Set the filename
        link.download = "notebook.txt";

        // // Simulate click to trigger download
        link.click();
        notepadTextarea.addEventListener(
            "focusout",
            function(){
                savenotes()
            }
        )
    }
});  
let selectFile = document.querySelector('#fileDropdown');
selectFile.addEventListener("change", function () {
    let selectedOption5 = selectFile.value;
    switch (selectedOption5) {
        case "Delete":
            notepadTextarea.value = ""; // Clear the content of notepadTexta     
    }
});


// })
// function changecontent() {
//     let x = document.getElementById("notepad")
//     x.value = 'write your notes';
// }
    // else if (this.value === "Share") {
    //             // Sharing functionality
    //             var notebookContent = document.getElementById("notepad").value;

    //             // Define sharing URLs for WhatsApp and email
    //             var whatsappUrl = "whatsapp://send?text=" + encodeURIComponent(notebookContent);
    //             var emailUrl = "mailto:?subject=Shared%20Notes&body=" + encodeURIComponent(notebookContent);

    //             // Open the sharing options in a new window
    //             window.open(whatsappUrl); // Opens WhatsApp
    //             // window.open(emailUrl); // Uncomment this line to open email client
    //         }


// function savePage() {
//     html2canvas(document.body).then(function(canvas) {
//         var link = document.createElement('a');
//         link.download = 'notepad_page.png';
//         link.href = canvas.toDataURL();
//         link.click();
//     });M
// }
