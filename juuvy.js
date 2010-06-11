/*!
 * Juuvy 0.1 - JSON visualisation library
 *
 * Kenny Shen (http://www.northpole.sg)
 */
 
(function(window) {
    // Construct a Juuvy.
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
        this.valfontsize = valfontsize;
        this.keyfontsize = keyfontsize;
        
        // drawing setup
        this.paper = paper;
        this.opc = 1;
        this.x = Math.floor(Math.random()*700) + 50;
        this.y = Math.floor(Math.random()*450) + 50;
        
        // info bar
        this.mykeytxt = paper.text(400,615,this.key).attr({font:this.keyfontstr,fill:"grey"});
        this.myvaltxt = paper.text(400,635,this.val.toString()).attr({font:this.keyfontstr,fill:"grey"});
		this.mykeytxt.hide();
		this.myvaltxt.hide();
		
    };
    
    // Make orbs
    Juuvy.prototype.juuv_it = function() {
        // plot orbs
        if(this.val.toString().replace(/\s+/g,'').length > 0) {}
        else {this.opc = 0.4}
        this.orb = this.paper.circle(this.x, this.y, this.orbsize);
        this.orb.attr({fill:this.orbcol,stroke:this.orbcol,opacity:this.opc});
        var path_data = "M400 300L" + this.x + " " + this.y;
        this.path = this.paper.path(path_data).attr({stroke:this.orbcol,opacity:0.5});
        
        // plot orb text
        if ((typeof(this.val) == "string") || (typeof(this.val) == "number")) {
            if((this.val.toString().length * parseInt(this.valfontsize.slice(0,2))) > (this.orbsize*2) ) {
                var shortenedval = this.val.toString().slice(0, parseInt(this.valfontsize.slice(0,2))-5) + '...';
                this.orbval = this.paper.text(this.x,this.y,shortenedval).attr({font:this.valfontstr, fill:this.orbvalcol});
            }
            else {
                this.orbval = this.paper.text(this.x,this.y,this.val.toString()).attr({font:this.valfontstr, fill:this.orbvalcol});
            }
        }
        else {
            this.orbval = this.paper.text(this.x,this.y,"{obj/array}").attr({font:this.valfontstr, fill:this.orbvalcol});
            // if nested data?
            return [this.val, this.x, this.y];
        }
        
        return;
    }; 
    
    // Getters?
    Juuvy.prototype.give_key = function() {
        return this.mykeytxt;
    };
    Juuvy.prototype.give_val = function() {
        return this.myvaltxt;
    };
    Juuvy.prototype.give_orb = function() {
        return this.orb;
    };
    Juuvy.prototype.give_orbval = function() {
        return this.orbval;
    }
    window.Juuvy = Juuvy;
})(window)