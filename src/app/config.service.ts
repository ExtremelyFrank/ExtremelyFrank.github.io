import { Injectable } from '@angular/core';


export const configuration = {

  home: {
    username: "ExtremelyFrank",
    chars: [
      {classname: "char1", animation: ".1s", letter: "W"},
      {classname: "char2", animation: ".2s", letter: "E"},
      {classname: "char3", animation: ".3s", letter: "L"},
      {classname: "char4", animation: ".4s", letter: "C"},
      {classname: "char5", animation: ".5s", letter: "O"},
      {classname: "char6", animation: ".6s", letter: "M"},
      {classname: "char7", animation: ".7s", letter: "E"},
      {classname: "char8", animation: ".8s", letter: " "},
      {classname: "char9", animation: ".9s", letter: "T"},
      {classname: "char10", animation: ".10s", letter: "O"}
    ],
    bubbles: [
      {classname: "bubble", size: "x1"},
      {classname: "bubble", size: "x2"},
      {classname: "bubble", size: "x3"},
      {classname: "bubble", size: "x4"},
      {classname: "bubble", size: "x5"},
      {classname: "bubble", size: "x6"},
      {classname: "bubble", size: "x7"},
      {classname: "bubble", size: "x8"},
      {classname: "bubble", size: "x9"},
      {classname: "bubble", size: "x10"}
    ]
  },
  about: {
    img: "../../assets/imgs/about_imgs/memol.png",
    title: "About Me...!",
    desc: "I am ExtremelyFrank"
  },
  projects: {
    title: "Projects... !",
    list: [
      /*
      {
          img: "../../assets/imgs/projects_imgs/1.PNG",
          name: "Facebook Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      {
          img: "../../assets/imgs/projects_imgs/2.PNG",
          name: "Focal Resume Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      {
          img: "../../assets/imgs/projects_imgs/3.PNG",
          name: "Prism Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      */
      {
          img: "../../assets/imgs/projects_imgs/4.PNG",
          name: "Lithophaniac",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      /*
      {
          img: "../../assets/imgs/projects_imgs/5.PNG",
          name: "Registeration Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      {
          img: "../../assets/imgs/projects_imgs/6.PNG",
          name: "Axit Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      {
          img: "../../assets/imgs/projects_imgs/7.PNG",
          name: "FreeLance Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      },
      {
          img: "../../assets/imgs/projects_imgs/8.PNG",
          name: "Torism Template",
          desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          more: "More..."
      }

       */
    ]
  },
  gallery: {
    title: "Gallery... !",
    imgs: [
      /*
      "../../assets/imgs/gallery_imgs/img3.jpg",
      "../../assets/imgs/gallery_imgs/img4.jpg",
      "../../assets/imgs/gallery_imgs/img5.jpg",
      "../../assets/imgs/gallery_imgs/img6.png",
      "../../assets/imgs/gallery_imgs/img7.gif",
      "../../assets/imgs/gallery_imgs/img8.jpg",
      "../../assets/imgs/gallery_imgs/img9.jpg",
      "../../assets/imgs/gallery_imgs/img10.jpg",
      "../../assets/imgs/gallery_imgs/img11.jpeg"

       */
    ]
  }
};

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public config = configuration;

  constructor() { }

  getConfig(){
    return this.config;
  }
}


