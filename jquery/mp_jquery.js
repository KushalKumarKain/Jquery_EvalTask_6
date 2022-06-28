$(document).ready(function() {

  addNewRow = function() {
    var row_count = mp_table.rows.length;
    if (row_count<7){
      $("#tbody").append('<tr id="row"><td id="rowcell1"><select class="DROPDOWN" id="dropdwn" name="dropdown"><option  value="">Select an option</option><option value="Item-1">Item-1</option><option value="Item-2">Item-2</option><option value="Item-3">Item-3</option><option  value="Item-4">Item-4</option><option  value="Item-5">Item-5</option><option  value="Item-6">Item-6</option></select></td><td id="rowcell2"><button type="button" id="remove" class="rem" name="rembtn" onClick="deleteRow(this)">x</button></td></tr>')
    }
  }

  deleteRow = function(element) {
  var row_count = mp_table.rows.length;
    if (row_count>2){
    $(element).parent().parent().remove();
  }}

});


$(document).ready(function(){

  var selectedList = [];

  Array.prototype.equals = function(array){

    // if the other array is a falsy value, return

    if (!array)
      return false;


    // compare lengths - can save a lot of time 

    if (this.length != array.length)
      return false;


    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays

      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays

        if (!this[i].equals(array[i]))
          return false;

        else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
          return false;

        }
      }
    }

    return true;

  }

  function updateSelectedList(){

    selectedList = [];

    var selectedValue;

    $('.DROPDOWN').each(function() {

      selectedValue = $(this).find('option:selected').text();

      if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1"){
        selectedList.push(selectedValue);

      }

    });
  }


  //disable the dropdown items that have already been selected

  function disableAlreadySelected(){

    $('option').each(function(){

      if ($.inArray(this.value, selectedList) != "-1"){

        $(this).attr("disabled", true);
      }

      else{
        $(this).attr("disabled", false);

      }

    });
  }

  
  $('#mp_table').on('click','.DROPDOWN',function(){

    setTimeout(function() {

      updateSelectedList();

      disableAlreadySelected();

    }, 0);

  });
  

  //when a new table row is added, disable the dropdown options that have already been selected

  $('#mp_table #addbutton').on('click', disableAlreadySelected);
  
});