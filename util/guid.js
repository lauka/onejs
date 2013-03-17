define("ojs/util/guid", function(){

	var create = function(){
		if(ActiveXObject){

			return (new ActiveXObject("Scriptlet.TypeLib")
	                                    .GUID.substr(1, 36));

		}else{
			function G(){
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			}

			return (G() + G() + "-" + G() + "-" + G() + "-" +
						G() + "-" + G() + G() + G()).toUpperCase();
		}
	};

	return { create : create };

});