function calcular() 
{
    if(cantidad.value <= 3)
     {       
      const div = document.getElementById("divtotal");
      div.classList.add("divtotal");
      const costoEntrada = 200  
      const cantidad = parseFloat(document.getElementById("cantidad").value);
      console.log(cantidad);
      const categoria = parseFloat(document.getElementById("categoria").value);
      const total = (cantidad * costoEntrada) * categoria;
      document.getElementById("total").value = total;
      
      
    } else {
      const div = document.getElementById("divtotal");
      div.classList.add("error");
      document.getElementById("total").value = "Por compra hasta 3 entradas";          
    }
      }

    
  