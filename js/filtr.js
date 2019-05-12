
function formTable(selector) {
    var wrapper = document.querySelector(selector);
    var form = wrapper.getElementsByTagName("form")[0];
    var table = wrapper.getElementsByTagName("table")[0];

    form.onkeyup = function(ev){

        var name = form.elements[0].value   ;

        for ( var i = 1; i <table.rows.length; i++) {
            table.rows[i].className= "";

            if(table.rows[i].cells[0].innerHTML.indexOf(name) == -1) {
                table.rows[i].className="hide";
            } 
        }
    }
}
formTable(".wrapper");