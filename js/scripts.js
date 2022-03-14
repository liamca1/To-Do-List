
function newItem(){

    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }


    // this should trigger the 'add' button with the 'enter' key
    $("#input").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#button").click();
        }
    });
    
    $("#button").click(function() {
      alert("Button code executed.");
    });

    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
      crossOutButton.on("click", deleteListItem);
      function deleteListItem(){
            li.addClass("delete")
        }
       $('#list').sortable();
    }    