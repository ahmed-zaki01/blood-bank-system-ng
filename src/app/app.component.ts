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
  
    // Smooth Scroll for send request page
    
    
    // End Ahmed Zaki JS


  }
}
