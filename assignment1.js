/********************************************************************************** 
 * WEB700 – Assignment 1* 
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.* 
 * No part of this assignment has been copied manually or electronically from any other source* 
 * (including web sites) or distributed to other students.*
 * Name: Nandita Rao 
 * Student ID: 129570222 
 * Date: 20th May, 2023
 * *********************************************************************************/


console.log("Hello World");

var ServerVerbs = [ "GET","GET", "GET","POST","GET", "POST"];
var ServerPaths = ["/", "/about", "/contact","/login", "/panel","/logout"];
var ServerResponses= ["Welcome to WEB700 Assignment 1", "This Assignment was prepared by Nandita Rao", "Nandita Rao: nmrao1@myseneca.ca","User Logged In","Main Panel","Logout Complete" ];

function HttpRequest(HttpVerb ,Path){
    for (let i = 0; i < ServerVerbs.length; i++) {
        if(ServerVerbs[i]==HttpVerb && ServerPaths[i]==Path){
            return "200: "+ServerResponses[i]
        }
      } 
      return "404: Unable to process "+ HttpVerb+ " request for "+Path
}

function Mathfunction(Max,Min){
    return Math.floor(Math.random()*(Max-Min)+Min);
}

function AutomateTests(){
var TestVerbs = [ "GET", "POST"];
var TestPaths = [ "/", "/about", "/contact","/login", "/panel","/logout","/randompath1","/randompath2"];

function randomRequest (){
    randVerb=Mathfunction(0,5)
    randPath=Mathfunction(0,12)
    console.log(HttpRequest(TestVerbs[randVerb],TestPaths[randPath]))
}

setInterval(randomRequest,1)
}

AutomateTests()