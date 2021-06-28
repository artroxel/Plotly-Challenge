d3.json("/samples.json").then(function(data) {
    console.log(data);

    var sample_values = samples.sample_values;
    var otu_ids = samples.otu_ids;


    var trace1 = {
        x: sample_values,
        y: otu_ids,
        type: "bar"
    };

    var data1 = [trace1];

    var layout1 = {
        title: "Top 10 OTUs Found",
        yaxis: { title: "OTU IDs"}
    };

    Plotly.newPlot("bar", data1, layout1);


    var trace2 = {
        x: otu_ids,
        y: sample_values,
        type: "bubble"
    };

    var data2 = [trace2];

    var layout2 = {
        markersize? = sample_values,
        markercolors? = otu_ids,
        textvalues? = otu_labels
    };

    Plotly.newPlot("bubble", data2, layout2);

};