/*!
 * Juuvy 0.1 - JSON visualisation library
 *
 * Kenny Shen (http://www.northpole.sg)
 */
 
(function(window) {
    function Juuvy(key, val, font, keyfontsize, valfontsize, orbsize, orbcol, orbkeycol, orbvalcol, paper){
        this.key = key;
        this.val = val;
        this.orb = {};
        
        // user settings
        this.font = font;
        this.orbcol = orbcol;
        this.orbsize = orbsize;
        this.orbkeycol = orbkeycol;
        this.orbvalcol= orbvalcol;
        this.keyfontstr = keyfontsize + " " + font;
        this.valfontstr = valfontsize + " " + font;
        
        // drawing setup
        this.paper = paper;
        this.x = Math.floor(Math.random()*700) + 50;
        this.y = Math.floor(Math.random()*450) + 50;
        
        // info bar
        this.mykeytxt = paper.text(400,615,key).attr({font:this.keyfontstr,fill:"grey"});
        this.myvaltxt = paper.text(400,635,val).attr({font:this.keyfontstr,fill:"grey"});
		this.mykeytxt.hide();
		this.myvaltxt.hide();
    };
    
    Juuvy.prototype.juuv_it = function() {
        // plot orbs
        this.orb = this.paper.circle(this.x, this.y, this.orbsize);
        this.orb.attr({fill:this.orbcol,stroke:this.orbcol});
        var path_data = "M400 300L" + this.x + " " + this.y;
        this.path = this.paper.path(path_data).attr({stroke:this.orbcol,opacity:0.5});
        
        // plot orb text
        if ((typeof(this.val) == "string") || (typeof(this.val) == "number"))
            this.orbval = this.paper.text(this.x,this.y,this.val).attr({font:this.valfontstr, fill:this.orbvalcol});
        else
            this.orbval = this.paper.text(this.x,this.y,"{obj/array}").attr({font:this.valfontstr, fill:this.orbvalcol});
            
    }; 
    
    Juuvy.prototype.give_key = function() {
        return this.mykeytxt;
    }
    Juuvy.prototype.give_val = function() {
        return this.myvaltxt;
    }
    window.Juuvy = Juuvy;
})(window)