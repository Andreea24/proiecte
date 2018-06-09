 function vreme_acum(elem, e){
                    var elemCity = document.getElementById("city").value;
                    var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=4f640a9a9f3fdaa1a9204c8796a5dea4&units=metric&q="+elemCity;
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var x = JSON.parse(this.responseText);
					console.log(x);
					var str=""; 
						str = ` <li><span><img class="icon" src=http://openweathermap.org/img/w/${x.weather[0].icon}.png></span></li>
	                            <li>Descriere:&nbsp;${x.weather[0].description}</li>
								<li>Umiditate:&nbsp;${x.main.humidity}</li>
								<li>Presiune:&nbsp;${x.main.pressure}</li>
								<li>Temperatura curenta:&nbsp;${(x.main.temp).toFixed(0)}</li>
								<li>Minima zilei:&nbsp;${x.main.temp_min}</li>
								<li>Maxima zilei:&nbsp;${x.main.temp_max}</li>
                              `;
					 
					document.getElementById("child").innerHTML=str;
					
                    var lat=x.coord.lat;
					var lon=x.coord.lon;
        			var uluru = {lat: lat, lng: lon};
                    var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 11,
                    center: uluru });
                    var marker = new google.maps.Marker({
                    position: uluru,
                    map: map });
					                                            }
				}
                xhttp.open("GET", URL_CURRENT_WEATHER);
                xhttp.send();
			}
            function vremea_prognoza(elem1, e1){
                    var elemCity = document.getElementById("city").value;
                    var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=4f640a9a9f3fdaa1a9204c8796a5dea4&units=metric&q="+elemCity;
                    var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var vp = JSON.parse(this.responseText);
					console.log(vp);
                    //ziua0
                    var d = new Date();
                    var day = d.getDate();
                    var month = d.getMonth();
                    var year = d.getFullYear();
                    var date = day + "/" + ((month+1<10)?"0":"")+(month+1)+"/"+year;
                    //ziua1
                    var d1 = new Date(d.getTime()+24*60*60*1000);
                    var day1 = d1.getDate();
                    var month1 = d1.getMonth();
                    var year1 = d1.getFullYear();
                    var date1 = day1 + "/" + ((month1+1<10)?"0":"")+(month1+1)+"/"+year1;
                    
                    //ziua2
                    var d2 = new Date(d1.getTime()+24*60*60*1000);
                    var day2 = d2.getDate();
                    var month2 = d2.getMonth();
                    var year2 = d2.getFullYear();
                    var date2 = day2 + "/" + ((month2+1<10)?"0":"")+(month2+1)+"/"+year2;
                   
                    //ziua3
                    var d3 = new Date(d2.getTime()+24*60*60*1000);
                    var day3 = d3.getDate();
                    var month3 = d3.getMonth();
                    var year3 = d3.getFullYear();
                    var date3 = day3 + "/" + ((month3+1<10)?"0":"")+(month3+1)+"/"+year3;
                   
                   //ziua4
                    var d4 = new Date(d3.getTime()+24*60*60*1000);
                    var day4 = d4.getDate();
                    var month4 = d4.getMonth();
                    var year4 = d4.getFullYear();
                    var date4 = day4 + "/" + ((month4+1<10)?"0":"")+(month4+1)+"/"+year4;
                   
                   //ziua5
                   var d5 = new Date(d4.getTime()+24*60*60*1000);
                   var day5 = d5.getDate();
                   var month5 = d5.getMonth();
                   var year5 = d5.getFullYear();
                   var date5 = day5 + "/" + ((month5+1<10)?"0":"")+(month5+1)+"/"+year5;
				
                str1= `<div class="listavreme_container">
                                <div class="date">Ziua: ${date}</div>
                                <div class="date">Ziua: ${date1}</div>
                                <div class="date">Ziua: ${date2}</div>
                                <div class="date">Ziua: ${date3}</div>
                                <div class="date">Ziua: ${date4}</div>
                                <div class="date">Ziua: ${date5}</div>                                
                        `;
        	    var p= (vp.list[0].dt_txt).substr(11, 2);
			    for(p == 21; p > 0;){
                        str1+=`<div class="celula"></div>`;
                        p-=3;
                                    }
                listavreme=[];
                   for(var i=0; i<vp.list.length; i++){
                        str1+=`<div class="celula">
                                        <li><img src=http://openweathermap.org/img/w/${vp.list[i].weather[0].icon}.png style="margin-left: auto;margin-right: auto;display:block"></li>
                                        <li style="background-color:yellow;">Ora:&nbsp; ${(vp.list[i].dt_txt).substr(11, 5)}</li>
                                        <li>Temperatura: &nbsp;${vp.list[i].main.temp}</li>
                                        <li>Descriere: &nbsp;${vp.list[i].weather[0].description}</li>
                                </div>`;
                         listavreme.push(str1);
                        }
                    document.querySelector(".listavreme_container").innerHTML=str1;
                    console.log(str1);
                                                                }		
                                                    }
                xhttp.open("GET", URL_FORECAST_WEATHER);
                xhttp.send();
			    }
