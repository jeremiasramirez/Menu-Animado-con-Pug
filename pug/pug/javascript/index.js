let menulink = document.getElementById("menu__link-js") 
let submenu = document.getElementById("sub__menu-js") 
	
	menulink.addEventListener("click",function(e){
		e.preventDefault()
		submenu.classList.toggle('sub__menu-featured')
			
	})
		
		 
