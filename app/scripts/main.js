// jshint devel:true

var drawing, sim;

// when the browser resizes (or switches between vertical and
// horizontal on mobile), we potentially want to scale our diagram up
// or down.
var scaleDrawing = function() {
    var viewport = $('#model1').find('#viewport')[0];
    if (!viewport)
        return;
    var bbox = viewport.getBBox();
    // truncate to 2 decimal places
    var scale = ((($('.jumbotron').width()/bbox.width)*100)|0)/100;
    drawing.transform(scale, -bbox.x*scale, -bbox.y*scale);
    $('#model1').attr('height', ((bbox.height*scale)|0) + 20);
}

$(window).resize(scaleDrawing);

$(function(){
    sd.load('population.xmile', function(model) {
        drawing = model.drawing('#model1', true);

        scaleDrawing();

        sim = model.sim();
        sim.setDesiredSeries(Object.keys(drawing.named_ents));
        sim.runToEnd().then(function(data) {
            drawing.visualize(data);
        });
    });
});
