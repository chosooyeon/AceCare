import React, { useState, useEffect } from "react";

function SlideAnim(){
  useEffect(()=>{
    const elements = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let elem:any = entry.target;

        if(entry.intersectionRatio > 0){
          elem.classList.add('animate-slide')
        }
        // else{
        //   elem.classList.remove('slide')
        // }
      });
    });

    const debounce = setTimeout(()=>{
      elements.forEach((el) => {
          observer.observe(el);
      });
    },1000);

    return () => clearTimeout(debounce)
  }, [])
}

export {SlideAnim}