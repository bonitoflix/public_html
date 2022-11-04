function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
  
}
function showAlert(){
    var myText = "Link is copied...";
    alert(myText);
  }

function AdvancedCopy(){
     var theText = 'https://bit.ly/3TSbnJI';
 
     var hiddenCopy = document.createElement('div');
     
     hiddenCopy.innerHTML = theText;
     
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';
 
     
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //append the div to the body
     document.body.appendChild(hiddenCopy);
     //create a selection range
     var CopyRange = document.createRange();
     //set the copy range to be the hidden div
     CopyRange.selectNode(hiddenCopy);
     //add the copy range
     window.getSelection().addRange(CopyRange);
 
     //since not all browsers support this, use a try block
     try
     {
          //copy the text
          document.execCommand('copy');
     }
     catch(err)
     {
          window.alert("Your Browser Doesn't support this! Error : " + err);
     }
     //remove the selection range (Chrome throws a warning if we don't.)
     window.getSelection().removeRange(CopyRange);
     //remove the hidden div
     document.body.removeChild(hiddenCopy);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}

function AdvancedCopy1(){
     var theText = 'https://drive.google.com/file/d/1grZnNEjQFsaZN4tQc2aQ1_Qj3ln6IN8p/view';
 
     var hiddenCopy = document.createElement('div');
     
     hiddenCopy.innerHTML = theText;
     
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';
 
     
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //append the div to the body
     document.body.appendChild(hiddenCopy);
     //create a selection range
     var CopyRange = document.createRange();
     //set the copy range to be the hidden div
     CopyRange.selectNode(hiddenCopy);
     //add the copy range
     window.getSelection().addRange(CopyRange);
 
     //since not all browsers support this, use a try block
     try
     {
          //copy the text
          document.execCommand('copy');
     }
     catch(err)
     {
          window.alert("Your Browser Doesn't support this! Error : " + err);
     }
     //remove the selection range (Chrome throws a warning if we don't.)
     window.getSelection().removeRange(CopyRange);
     //remove the hidden div
     document.body.removeChild(hiddenCopy);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}
function AdvancedCopy2(){
     var theText = 'https://drive.google.com/file/d/1Dueo1n_DtptVPHuJQvkgKly5HovS2osj/view?usp=sharing';
 
     var hiddenCopy = document.createElement('div');
     
     hiddenCopy.innerHTML = theText;
     
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';
 
     
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //append the div to the body
     document.body.appendChild(hiddenCopy);
     //create a selection range
     var CopyRange = document.createRange();
     //set the copy range to be the hidden div
     CopyRange.selectNode(hiddenCopy);
     //add the copy range
     window.getSelection().addRange(CopyRange);
 
     //since not all browsers support this, use a try block
     try
     {
          //copy the text
          document.execCommand('copy');
     }
     catch(err)
     {
          window.alert("Your Browser Doesn't support this! Error : " + err);
     }
     //remove the selection range (Chrome throws a warning if we don't.)
     window.getSelection().removeRange(CopyRange);
     //remove the hidden div
     document.body.removeChild(hiddenCopy);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}
function AdvancedCopy3(){
     var theText = 'https://drive.google.com/file/d/12Jw0iE12FczYmrT-qk1d8Ofa2YICqbOf/view?usp=sharing';
 
     var hiddenCopy = document.createElement('div');
     
     hiddenCopy.innerHTML = theText;
     
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';
 
     
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //append the div to the body
     document.body.appendChild(hiddenCopy);
     //create a selection range
     var CopyRange = document.createRange();
     //set the copy range to be the hidden div
     CopyRange.selectNode(hiddenCopy);
     //add the copy range
     window.getSelection().addRange(CopyRange);
 
     //since not all browsers support this, use a try block
     try
     {
          //copy the text
          document.execCommand('copy');
     }
     catch(err)
     {
          window.alert("Your Browser Doesn't support this! Error : " + err);
     }
     //remove the selection range (Chrome throws a warning if we don't.)
     window.getSelection().removeRange(CopyRange);
     //remove the hidden div
     document.body.removeChild(hiddenCopy);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}
function AdvancedCopy4(){
     var theText = 'https://drive.google.com/file/d/18zfd6x8uiMLgGbXDodZwAl17QUpi2cKE/view?usp=sharing';
 
     var hiddenCopy = document.createElement('div');
     
     hiddenCopy.innerHTML = theText;
     
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';
 
     
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //append the div to the body
     document.body.appendChild(hiddenCopy);
     //create a selection range
     var CopyRange = document.createRange();
     //set the copy range to be the hidden div
     CopyRange.selectNode(hiddenCopy);
     //add the copy range
     window.getSelection().addRange(CopyRange);
 
     //since not all browsers support this, use a try block
     try
     {
          //copy the text
          document.execCommand('copy');
     }
     catch(err)
     {
          window.alert("Your Browser Doesn't support this! Error : " + err);
     }
     //remove the selection range (Chrome throws a warning if we don't.)
     window.getSelection().removeRange(CopyRange);
     //remove the hidden div
     document.body.removeChild(hiddenCopy);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}

function AdvancedCopy5(){
     var theText = 'https://drive.google.com/file/d/1RCtirrOqWF7I7ijbaz1xjoLHq86odKKP/view?usp=sharing';
 
     var hiddenCopy = document.createElement('div');
     
     hiddenCopy.innerHTML = theText;
     
     hiddenCopy.style.position = 'absolute';
     hiddenCopy.style.left = '-9999px';
 
     
     var currentRange;
     if(document.getSelection().rangeCount > 0)
     {
          //the user has a text selection range, store it
          currentRange = document.getSelection().getRangeAt(0);
          //remove the current selection
          window.getSelection().removeRange(currentRange);
     }
     else
     {
          //they didn't have anything selected
          currentRange = false;
     }
 
     //append the div to the body
     document.body.appendChild(hiddenCopy);
     //create a selection range
     var CopyRange = document.createRange();
     //set the copy range to be the hidden div
     CopyRange.selectNode(hiddenCopy);
     //add the copy range
     window.getSelection().addRange(CopyRange);
 
     //since not all browsers support this, use a try block
     try
     {
          //copy the text
          document.execCommand('copy');
     }
     catch(err)
     {
          window.alert("Your Browser Doesn't support this! Error : " + err);
     }
     //remove the selection range (Chrome throws a warning if we don't.)
     window.getSelection().removeRange(CopyRange);
     //remove the hidden div
     document.body.removeChild(hiddenCopy);
 
     //return the old selection range
     if(currentRange)
     {
          window.getSelection().addRange(currentRange);
     }
}