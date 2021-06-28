d3.json("samples.json").then(function(data) {
    console.log(data);

    var sample_values = samples.sample_values.slice(0,10);
    var otu_ids = samples.otu_ids.slice(0,10);
    console.log(sample_values);
    console.log(otu_ids);

    var rev_sample_values = sample_values.reverse();
    var rev_otu_ids = otu_ids.reverse();


    var trace1 = {
        x: rev_sample_values,
        y: rev_otu_ids,
        type: "bar",
        orientation: "h"
    };

    var data1 = [trace1];

    var layout1 = {
        title: "Top 10 OTUs Found",
        yaxis: { title: "OTU IDs"}
    };

    Plotly.newPlot("bar", data1, layout1);


    var trace2 = {
        x: samples.otu_ids,
        y: samples.sample_values,
        mode: "markers"
    };

    var data2 = [trace2];

    var layout2 = {
        markersize? = sample_values,
        markercolors? = otu_ids,
        textvalues? = otu_labels
    };

    Plotly.newPlot("bubble", data2, layout2);

};

d3.selectAll("#selDataset").on("change", updatePage);

function updatePage() {
    var dropdownMenu = d3.select("#selDataset");
    var dataset = dropdownMenu.property("value");
}