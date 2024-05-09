var items= localStorage.getItem('ListObject')
     
    //para ojeto
    items = items? JSON.parse(items) : []
    showItems()
    // para array
    //items = items? JSON.p(items) : []
  

    function addItem() {
        let NombreProducto = document.getElementById('NombreProducto').value
        let Costo = document.getElementById('Costo').value
        let obs = document.getElementById('obs').value


        if(NombreProducto && Costo && obs){
            items.push({'NombreProducto': NombreProducto, 
                        'Costo': Costo,
                        'obs': obs})
                  console.log()      
            showItems()
        }               
      console.log(items)
    }
    function  showItems () {
        //limpia el formulario 
        document.getElementById('NombreProducto').value=''  
        document.getElementById('Costo').value=''  
        document.getElementById('obs').value=''
        //coloca la posicion de el cursor 
        document.getElementById('NombreProducto').focus()
        
        let html=''
        items.forEach((data, indice) => {
            html += '<div class="row border border-warning mt-2 mb-2 ms-2 me-2">'
                html +=`<div class="col-4">${data.NombreProducto} </div>`
                html +=`<div class="col-3">${data.Costo} </div>`
                html +=`<div class="col-3">${data.obs} </div>`
                //boton para limpia el formulario
                html +=`<div class="col-2">
                   <a href="#" class= "btn btn-danger" onclick= deleteItem(${indice})> X </a>
                   </div>`
             html += '</div>'     

            
        });
             

        //conviertame el objeto a cadena para guardarlo en local 
        localStorage.setItem('ListObject', JSON.stringify(items))
        //muestra la informacin en el html
        document.getElementById('items-List').innerHTML= html

    }
    //comando para borrar la linea con el boton
    function deleteItem(indice) {
        items.splice(indice, 1)
        showItems()
    }
    