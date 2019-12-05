


function transicionaMapa(step) {
  switch (step) {
    case 0: // esto es cuando estamos en el inicio
     
    break;
    
    case 1: // esto es el mapa con los lugares 
    break;

    case 2: // esto es el mapa con los lugares al aire libre
    
      d3.selectAll("#svgFamiliasIcons,#svgFamiliasExtra").transition().duration(500).style("opacity", d3.select("#svgFamiliasIcons").style("opacity") == 1 ? 0 : 1);
      d3.select("#svgPersonas").transition().duration(500)
        .attr("transform", d3.select("#svgFamiliasIcons").style("opacity") == 1 ? "translate(0,-240)" : "translate(0,0)");
  
    break;


     case 3:
    
      d3.selectAll("#svgPersonasIcons,#svgPersonasExtra").transition().duration(500).style("opacity", d3.select("#svgPersonasIcons").style("opacity")==1?0:1);

      break;



      case 4: 
    
      break;
     
      case 5: 
    

      break;
      
  
  }  
  

}

