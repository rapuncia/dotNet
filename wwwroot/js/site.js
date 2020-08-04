// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
(function(){
    'use strict';
    console.log('Is this working?');
    document.addEventListener('DOMContentLoaded', function(){
        var c = document.getElementById('current-time');
        
        var d = new Date();
        var hours = d.getHours();
	        if (hours > 12) {
		        hours -= 12;
	        }
        c.innerHTML = hours + ':' + d.getMinutes();
    });
    
    })();