function direBonjour() {

        var nom = document.getElementById("nom");
        if(nom!=null) {
            var span = document.getElementById("span");
            span.setAttribute("class","visible-fade")
            span.innerHTML = "Bonjour " + nom;

        }
}