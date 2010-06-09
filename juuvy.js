/*!
 * Juuvy 0.1 - JSON visualisation library
 *
 * Kenny Shen (http://www.northpole.sg)
 */
 
(function(window) {
    function Juuvy(keys, jsonobj){
        this.keys = keys;
        this.jsonobj = jsonobj;
    };
    
    Juuvy.prototype.juuv_it = function() {
        var numkeys = this.keys.length;
        //for (i in this.keys) {
        //    alert(this.jsonobj[this.keys[i]]);
        //}
        var paper = Raphael(50, 50, 800, 650);
        var layer = paper.image("../media/bg.gif", 0,0,800,650);
        var c = new Array();
        var keytxt = new Array();
        var valtxt = new Array();

        for(i in this.keys) {
            var x = Math.floor(Math.random()*700);
            var y = Math.floor(Math.random()*450);
            
            x = x + 50;
            y = y + 50;
            
            c[this.keys[i]] = paper.circle(x, y, 50);
            c[this.keys[i]].attr({fill:"white",stroke:"white"});
            var path_data = "M400 300L" + x + " " + y;
            paper.path(path_data).attr({stroke:"white",opacity:0.5});
            
            keytxt[i] = paper.text(x,y, this.keys[i]).attr({font:"10px Georgia", fill:"grey"});
            valtxt[i] = paper.text(x,y-15,this.jsonobj[this.keys[i]]).attr({font:"14px Georgia", fill:"red"});
        }
    };
    
    
    window.Juuvy = Juuvy;
})(window)