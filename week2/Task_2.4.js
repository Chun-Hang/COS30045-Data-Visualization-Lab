function init(){



	d3.csv("Task_2.4_data.csv").then(function(data){
            console.log(data);
            wombatSightings = data;

			barChart(wombatSightings);

        });
    
  	d3.csv("pet_ownership.csv").then(function(data){
            console.log(data);
            pet_ownership = data;

			barChart2(pet_ownership);

        });      


	function barChart(){

		var w = 500;
        var h = 100;
		var barPadding = 2;

		var svg1 = d3.select("#chart1")
        .append("svg")
        .attr("width", w)
        .attr("height", h);


		svg1.selectAll("rect")
	        .data(wombatSightings)
		    .enter()
		    .append("rect")
		    .attr("x",function(d,i){
			    return i * (w / wombatSightings.length);
	    	})
	    	 .attr("y",function(d){
	    		return h - (d.wombats * 4);
	    	})        
			.attr("width", w/ wombatSightings.length  - barPadding)
            .attr("height", function(d,i){
            return d.wombats*5
            })
			.attr("fill", d =>{
            if(d.wombats<=9){
                return "#00FFFF";
            }else
            {
                return "#0000FF";
            }});
        
        

	};

    function barChart2(){

		var w = 700;
        var h = 150;
		var barPadding = 4;


        var svg2 = d3.select("#chart2")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        var svg3 = d3.select("#chart3")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

        svg2.selectAll("rect")
	        .data(pet_ownership)
		    .enter()
		    .append("rect")
            .attr("fill", "#368BC1")
		    .attr("x",function(d,i){
			    return i * (w / pet_ownership.length);
	    	})
	    	 .attr("y",function(d){
	    		return 100 - (d.pets2019 * 1.5);
	    	})        
			.attr("width", w/ pet_ownership.length  - barPadding)
            .attr("height", function(d,i){
            return d.pets2019*1.5;
            });
        
        svg2.selectAll("text")
            .data(pet_ownership)
            .enter()
            .append("text")
            .attr("fill", "green")
            .attr("x", function(d,i) { 
                return 25+(i*97); 
            })
            .attr("y", h / 1.2 )
            .attr("dy", ".35em")
            .text(function(d) { 
                return d.animal; 
            });
        
        svg3.selectAll("rect")
	        .data(pet_ownership)
		    .enter()
		    .append("rect")
            .attr("fill", "#368BC1")
		    .attr("x",function(d,i){
			    return i * (w / pet_ownership.length);
	    	})
	    	 .attr("y",function(d){
	    		return 100 - (d.pets2021 * 1.5);
	    	})        
			.attr("width", w/ pet_ownership.length  - barPadding)
            .attr("height", function(d,i){
            return d.pets2021*1.5;
            });
        
        svg3.selectAll("text")
            .data(pet_ownership)
            .enter()
            .append("text")
            .attr("fill", "green")
            .attr("x", function(d,i) { 
                return 25+(i*97); 
            })
            .attr("y", h / 1.2 )
            .attr("dy", ".35em")
            .text(function(d) { 
                return d.animal; 
            });

    };
}
window.onload = init;