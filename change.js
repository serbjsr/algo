const node_for_click = document.getElementById('for_click')

function find_edit()
{
    document.all[11].innerHTML = "Batalov"
    document.all[10].innerHTML = "Sergei"
    document.all[12].innerHTML = "Dmitrievich"
    document.all[13].innerHTML = "male"
    document.all[15].innerHTML = "Voronezh"


}

node_for_click.addEventListener("click",find_edit)