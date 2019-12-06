


function transicionaMapa(step) {

      d3.selectAll("#svgFamiliasIcons,#svgFamiliasExtra").transition().duration(500).style("opacity", d3.select("#svgFamiliasIcons").style("opacity") == 1 ? 0 : 1);
      d3.select("#svgPersonas").transition().duration(500)
        .attr("transform", d3.select("#svgFamiliasIcons").style("opacity") == 1 ? "translate(0,-240)" : "translate(0,0)");

      d3.selectAll("#svgPersonasIcons,#svgPersonasExtra").transition().duration(500).delay(1500).style("opacity", d3.select("#svgPersonasIcons").style("opacity") == 1 ? 0 : 1);

     
  
    
  

}

var estadoactual = 1;

function transicionaMapaImagen(step) {
  
  console.log(" aaaa ")
  switch (step) {
        case 1: // esto es el mapa con los lugares \
      console.log(estadoactual, step);
      d3.select("#img1").transition().duration(500).style("opacity", estadoactual > step ? 1:0);
      break;

    case 2: // esto es el mapa con los lugares al aire libre
      d3.select("#img2").transition().duration(500).style("opacity", estadoactual > step ? 1 : 0);

      break;


    case 3:

     // d3.select("#img3").transition().duration(500).attr("opacity", estadoactual > step ? 1 : 0);
      break;



    case 4:

      break;

    case 5:


      break;


  }
  estadoactual = step;

}

