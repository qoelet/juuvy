/*!
 * Juuvy 0.1 - JSON visualisation library
 *
 * Kenny Shen (http://www.northpole.sg)
 */
 
(function(window) {
    function Juuvy(key, val, font, keyfontsize, valfontsize, orbcol, orbkeycol, orbvalcol, paper){
        this.key = key;
        this.val = val;
        this.font = font;
        this.orbcol = orbcol;
        this.orbkeycol = orbkeycol;
        this.orbvalcol= orbvalcol;
        this.keyfontstr = keyfontsize + " " + font;
        this.valfontstr = valfontsize + " " + font;
        this.paper = paper;
    };
    
    Juuvy.prototype.juuv_it = function() {
        var x = Math.floor(Math.random()*700);
        var y = Math.floor(Math.random()*450);
        
        x = x + 50;
        y = y + 50;
        
        this.orb = this.paper.circle(x, y, 50);
        this.orb.attr({fill:this.orbcol,stroke:this.orbcol});
        var path_data = "M400 300L" + x + " " + y;
        this.path = this.paper.path(path_data).attr({stroke:this.orbcol,opacity:0.5});
        
        // plot orbs
        this.orbkey = this.paper.text(x,y, this.key).attr({font:this.keyfontstr, fill:this.orbkeycol});
        if ((typeof(this.val) == "string") || (typeof(this.val) == "number"))
            this.orbval = this.paper.text(x,y-15,this.val).attr({font:this.valfontstr, fill:this.orbvalcol});
        else
            this.orbval = this.paper.text(x,y-15,"{obj/array}").attr({font:this.valfontstr, fill:this.orbvalcol});
            
    };    
    window.Juuvy = Juuvy;
})(window)