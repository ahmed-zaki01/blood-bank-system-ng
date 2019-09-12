import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blood-bank-system';

  ngOnInit() {
    
    $(window).scroll(function() {
      let Top = $(window).scrollTop();
      if (Top >= $("nav").outerHeight(true) + 150) {
        $("nav").addClass("fixed-top");
        $("#navbarSupportedContent").css({ border: "none" });
        $("#navbarSupportedContent ul li").css({ border: "none" });
        $("nav").addClass("navbarBGColorScroll");
        //$('nav a.nav-link').css('color', 'white !important');
        
      } else {
        $("nav").removeClass("fixed-top");
        $("nav").removeClass("navbarBGColorScroll");
        $("nav #navbarSupportedContent").css({ borderTop: "2px solid #E5E5E5" });
        $("nav #navbarSupportedContent").css({ borderBottom: "2px solid #E5E5E5" });
        $("nav #navbarSupportedContent ul li").css({
          borderRight: "2px solid #E5E5E5"
        });
        $("nav #navbarSupportedContent ul li:last-child").css({
          borderRight: "none"
        });
      }
    });
    
    /* to top scroll */
    $("#btnUp").click(function() {
      $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    
    /* register page */
    let months = `<option value="" selected disabled>mm</option>`;
    for (let i = 1; i <= 12; i++) {
      months += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("monthes").innerHTML = months;
    
    let days = `<option value="" selected disabled>dd</option>`;
    for (let i = 1; i <= 31; i++) {
      days += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("days").innerHTML = days;
    
    function myFunction() {
      var d = new Date();
      var n = d.getFullYear();
    }
    let years = `<option value="" selected disabled>yy</option>`;
    let d = new Date();
    let n = d.getFullYear();
    for (let i = 1900; i <= n; i++) {
      years += `<option value="${i}">${i}</option>`;
    }
    document.getElementById("years").innerHTML = years;
    
   /*  $("#myBtn").click(function validate() {
      let phoneNum = document.getElementById("phone").Value;
      let regexPhone = /^01[0125][0-9]{8}$/;
      if (regexPhone.text(phoneNum)) {
        $("#phone").popover({ content: "Valid" });
      }
    }); */
    
    // End of Mohammed Abd El-Mon3em JS
    
    // Ahmed Zaki JS
    // Validation
    
    // validation for email
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
    
    // validation for password
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
    
    
    /* // validation for age
    let patientAge = $('patient-age').value;
    if (patientAge < 1 || patientAge > 120) {
        console.log("Your Age is not valid!");
    }
     */
    // validation for textarea
    
    let commentRegex = /[^A-Z0-9]+/ig
    
    
    // Smooth Scroll for send request page
    
    
    // End Ahmed Zaki JS


  }
}
