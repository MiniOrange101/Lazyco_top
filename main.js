var webDirectory = "/Users/miaomiaoli/Sites/Lazyco_top";
function loadHeader(page) {
  if (1 == 1) {
    var e_0 = document.createElement("div");
    e_0.setAttribute("class", "d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom");
    e_0.setAttribute("style", "margin-bottom: 0!important");
    var e_1 = document.createElement("a");
    e_1.setAttribute("href", "index.html");
    e_1.setAttribute("class", "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none");
    var e_2 = document.createElement("span");
    e_2.setAttribute("class", "fs-4");
    e_2.appendChild(document.createTextNode("Lazyco.top"));
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    var e_3 = document.createElement("ul");
    e_3.setAttribute("class", "nav nav-pills");
    var e_4 = document.createElement("li");
    e_4.setAttribute("class", "nav-item");
    var e_5 = document.createElement("a");
    e_5.setAttribute("href", webDirectory + "/index.html");
    e_5.setAttribute("class", "nav-link");
    e_5.appendChild(document.createTextNode("主页"));
    e_4.appendChild(e_5);
    e_3.appendChild(e_4);
    var e_6 = document.createElement("li");
    e_6.setAttribute("class", "nav-item");
    var e_7 = document.createElement("a");
    e_7.setAttribute("href", webDirectory + "/doc/index.html");
    e_7.setAttribute("class", "nav-link");
    e_7.appendChild(document.createTextNode("文档"));
    e_6.appendChild(e_7);
    e_3.appendChild(e_6);
    var e_8 = document.createElement("li");
    e_8.setAttribute("class", "nav-item");
    var e_9 = document.createElement("a");
    e_9.setAttribute("href", webDirectory + "/downloads/index.html");
    e_9.setAttribute("class", "nav-link");
    e_9.appendChild(document.createTextNode("下载"));
    e_8.appendChild(e_9);
    e_3.appendChild(e_8);
    var e_10 = document.createElement("li");
    e_10.setAttribute("class", "nav-item");
    var e_11 = document.createElement("a");
    e_11.setAttribute("href", webDirectory + "/makesite/index.html");
    e_11.setAttribute("class", "nav-link");
    e_11.appendChild(document.createTextNode("在线建站"));
    e_10.appendChild(e_11);
    e_3.appendChild(e_10);
    var e_12 = document.createElement("li");
    e_12.setAttribute("class", "nav-item");
    var e_13 = document.createElement("a");
    e_13.setAttribute("href", webDirectory + "/check/index.html");
    e_13.setAttribute("class", "nav-link");
    e_13.appendChild(document.createTextNode("作业"));
    e_12.appendChild(e_13);
    e_3.appendChild(e_12);
    e_0.appendChild(e_3);
    switch (page) {
      case "home":
        e_5.setAttribute("class", "nav-link active");
        break;
      case "doc":
        e_7.setAttribute("class", "nav-link active");
        break;
      case "downloads":
        e_9.setAttribute("class", "nav-link active");
        break;
      case "makesite":
        e_11.setAttribute("class", "nav-link active");
        break;
      case "check":
        e_13.setAttribute("class", "nav-link active");
        break;
    }
    document.write("<div id=\"headerNav\"><\/div>");
    document.getElementById("headerNav").appendChild(e_0);
  }
}
function loadFooter() {
  var container = document.createDocumentFragment();
  var e_0 = document.createElement("div");
  var e_1 = document.createElement("div");
  e_1.setAttribute("class", "b-example-divider");
  e_0.appendChild(e_1);
  var e_2 = document.createElement("div");
  e_2.setAttribute("class", "container");
  var e_3 = document.createElement("footer");
  e_3.setAttribute("class", "py-5");
  var e_4 = document.createElement("div");
  e_4.setAttribute("class", "row");
  var e_5 = document.createElement("div");
  e_5.setAttribute("class", "col-6 col-md-2 mb-3");
  var e_6 = document.createElement("h5");
  e_6.appendChild(document.createTextNode("热门页面"));
  e_5.appendChild(e_6);
  var e_7 = document.createElement("script");
  e_7.setAttribute("src", "main.js");
  e_5.appendChild(e_7);
  var e_8 = document.createElement("ul");
  e_8.setAttribute("id", "needre");
  e_8.setAttribute("class", "nav flex-column");
  var e_9 = document.createElement("li");
  e_9.setAttribute("class", "nav-item mb-2");
  var e_10 = document.createElement("a");
  e_10.setAttribute("href", webDirectory + "/makesite/index.html");
  e_10.setAttribute("class", "nav-link p-0 text-muted");
  e_10.appendChild(document.createTextNode("建站"));
  e_9.appendChild(e_10);
  e_8.appendChild(e_9);
  var e_11 = document.createElement("li");
  e_11.setAttribute("class", "nav-item mb-2");
  var e_12 = document.createElement("a");
  e_12.setAttribute("href", webDirectory + "/downloads/index.html");
  e_12.setAttribute("class", "nav-link p-0 text-muted");
  e_12.appendChild(document.createTextNode("下载"));
  e_11.appendChild(e_12);
  e_8.appendChild(e_11);
  var e_13 = document.createElement("li");
  e_13.setAttribute("class", "nav-item mb-2");
  var e_14 = document.createElement("a");
  e_14.setAttribute("href", webDirectory + "/doc/mc/index.html");
  e_14.setAttribute("class", "nav-link p-0 text-muted");
  e_14.appendChild(document.createTextNode("Minecraft教程"));
  e_13.appendChild(e_14);
  e_8.appendChild(e_13);
  var e_15 = document.createElement("li");
  e_15.setAttribute("class", "nav-item mb-2");
  var e_16 = document.createElement("a");
  e_16.setAttribute("href", webDirectory + "/check/index.html");
  e_16.setAttribute("class", "nav-link p-0 text-muted");
  e_16.appendChild(document.createTextNode("作业"));
  e_15.appendChild(e_16);
  e_8.appendChild(e_15);
  var e_17 = document.createElement("li");
  e_17.setAttribute("class", "nav-item mb-2");
  var e_18 = document.createElement("a");
  e_18.setAttribute("class", "nav-link p-0 text-muted");
  e_18.setAttribute("href", webDirectory + "/about.html");
  e_18.appendChild(document.createTextNode("关于"));
  e_17.appendChild(e_18);
  e_8.appendChild(e_17);
  e_5.appendChild(e_8);
  e_4.appendChild(e_5);
  /*
  var e_19 = document.createElement("div");
  e_19.setAttribute("class", "col-6 col-md-2 mb-3");
  var e_20 = document.createElement("h5");
  e_20.appendChild(document.createTextNode("自制页面"));
  e_19.appendChild(e_20);
  var e_21 = document.createElement("ul");
  e_21.setAttribute("class", "nav flex-column");
  var e_22 = document.createElement("li");
  e_22.setAttribute("class", "nav-item mb-2");
  var e_23 = document.createElement("a");
  e_23.setAttribute("href", "#");
  e_23.setAttribute("class", "nav-link p-0 text-muted");
  e_23.appendChild(document.createTextNode("Home"));
  e_22.appendChild(e_23);
  e_21.appendChild(e_22);
  var e_24 = document.createElement("li");
  e_24.setAttribute("class", "nav-item mb-2");
  var e_25 = document.createElement("a");
  e_25.setAttribute("href", "#");
  e_25.setAttribute("class", "nav-link p-0 text-muted");
  e_25.appendChild(document.createTextNode("Features"));
  e_24.appendChild(e_25);
  e_21.appendChild(e_24);
  var e_26 = document.createElement("li");
  e_26.setAttribute("class", "nav-item mb-2");
  var e_27 = document.createElement("a");
  e_27.setAttribute("href", "#");
  e_27.setAttribute("class", "nav-link p-0 text-muted");
  e_27.appendChild(document.createTextNode("Pricing"));
  e_26.appendChild(e_27);
  e_21.appendChild(e_26);
  var e_28 = document.createElement("li");
  e_28.setAttribute("class", "nav-item mb-2");
  var e_29 = document.createElement("a");
  e_29.setAttribute("href", "#");
  e_29.setAttribute("class", "nav-link p-0 text-muted");
  e_29.appendChild(document.createTextNode("FAQs"));
  e_28.appendChild(e_29);
  e_21.appendChild(e_28);
  var e_30 = document.createElement("li");
  e_30.setAttribute("class", "nav-item mb-2");
  var e_31 = document.createElement("a");
  e_31.setAttribute("href", "#");
  e_31.setAttribute("class", "nav-link p-0 text-muted");
  e_31.appendChild(document.createTextNode("About"));
  e_30.appendChild(e_31);
  e_21.appendChild(e_30);
  e_19.appendChild(e_21);
  e_4.appendChild(e_19);
  */
  var e_32 = document.createElement("div");
  e_32.setAttribute("class", "col-6 col-md-2 mb-3");
  var e_33 = document.createElement("h5");
  e_33.appendChild(document.createTextNode("文档"));
  e_32.appendChild(e_33);
  var e_34 = document.createElement("ul");
  e_34.setAttribute("class", "nav flex-column");
  var e_35 = document.createElement("li");
  e_35.setAttribute("class", "nav-item mb-2");
  var e_36 = document.createElement("a");
  e_36.setAttribute("href", webDirectory + "/doc/makesite/index.html");
  e_36.setAttribute("class", "nav-link p-0 text-muted");
  e_36.appendChild(document.createTextNode("在线建站基础教程"));
  e_35.appendChild(e_36);
  e_34.appendChild(e_35);
  var e_37 = document.createElement("li");
  e_37.setAttribute("class", "nav-item mb-2");
  var e_38 = document.createElement("a");
  e_38.setAttribute("href", webDirectory + "/doc/makesite/pro.html");
  e_38.setAttribute("class", "nav-link p-0 text-muted");
  e_38.appendChild(document.createTextNode("在线建站Pro教程"));
  e_37.appendChild(e_38);
  e_34.appendChild(e_37);
  var e_39 = document.createElement("li");
  e_39.setAttribute("class", "nav-item mb-2");
  var e_40 = document.createElement("a");
  e_40.setAttribute("href", "#");
  e_40.setAttribute("class", "nav-link p-0 text-muted");
  e_40.appendChild(document.createTextNode("示例"));
  e_39.appendChild(e_40);
  e_34.appendChild(e_39);
  var e_41 = document.createElement("li");
  e_41.setAttribute("class", "nav-item mb-2");
  var e_42 = document.createElement("a");
  e_42.setAttribute("href", "#");
  e_42.setAttribute("class", "nav-link p-0 text-muted");
  e_42.appendChild(document.createTextNode("示例"));
  e_41.appendChild(e_42);
  e_34.appendChild(e_41);
  var e_43 = document.createElement("li");
  e_43.setAttribute("class", "nav-item mb-2");
  var e_44 = document.createElement("a");
  e_44.setAttribute("href", "#");
  e_44.setAttribute("class", "nav-link p-0 text-muted");
  e_44.appendChild(document.createTextNode("示例"));
  e_43.appendChild(e_44);
  e_34.appendChild(e_43);
  e_32.appendChild(e_34);
  e_4.appendChild(e_32);
  var e_45 = document.createElement("div");
  e_45.setAttribute("class", "col-md-5 offset-md-1 mb-3");
  var e_46 = document.createElement("h5");
  e_46.appendChild(document.createTextNode("参与我们的开发"));
  e_45.appendChild(e_46);
  var e_47 = document.createElement("p");
  e_47.appendChild(document.createTextNode("我们需要你！你可以在"));
  var e_48 = document.createElement("a");
  e_48.setAttribute("href", "https://github.com/MiniOrange101/Lazyco_top/");
  e_48.setAttribute("class", "text-black");
  e_48.appendChild(document.createTextNode("Github"));
  e_47.appendChild(e_48);
  e_47.appendChild(document.createTextNode("参与我们的开发"));
  e_45.appendChild(e_47);
  var e_49 = document.createElement("h5");
  e_49.appendChild(document.createTextNode("反馈"));
  e_45.appendChild(e_49);
  var e_50 = document.createElement("div");
  e_50.setAttribute("class", "d-flex flex-column flex-sm-row w-100 gap-2");
  var e_51 = document.createElement("label");
  e_51.setAttribute("class", "visually-hidden");
  e_51.appendChild(document.createTextNode("输入反馈信息"));
  e_50.appendChild(e_51);
  var e_52 = document.createElement("input");
  e_52.setAttribute("id", "newsletter1");
  e_52.setAttribute("type", "text");
  e_52.setAttribute("class", "form-control");
  e_52.setAttribute("placeholder", "反馈信息");
  e_50.appendChild(e_52);
  var e_53 = document.createElement("button");
  e_53.setAttribute("class", "btn btn-primary");
  e_53.setAttribute("type", "button");
  e_53.setAttribute("style", "white-space:nowrap;")
  e_53.appendChild(document.createTextNode("发送"));
  e_50.appendChild(e_53);
  e_45.appendChild(e_50);
  e_4.appendChild(e_45);
  e_3.appendChild(e_4);
  var e_54 = document.createElement("div");
  e_54.setAttribute("class", "d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top");
  var e_55 = document.createElement("p");
  e_55.appendChild(document.createTextNode("Copyright ©2022 lazyco.top All rights reserved.备案号:沪ICP备2022016751号-1"));
  e_54.appendChild(e_55);
  var e_56 = document.createElement("ul");
  e_56.setAttribute("class", "list-unstyled d-flex");
  var e_57 = document.createElement("li");
  e_57.setAttribute("class", "ms-3");
  var e_58 = document.createElement("a");
  e_58.setAttribute("class", "link-dark");
  e_58.setAttribute("href", "https://github.com/MiniOrange101/Lazyco_top/");
  var e_59 = document.createElement("i");
  e_59.setAttribute("class", "fa fa-github");
  e_58.appendChild(e_59);
  e_57.appendChild(e_58);
  e_56.appendChild(e_57);
  var e_60 = document.createElement("li");
  e_60.setAttribute("class", "ms-3");
  var e_61 = document.createElement("a");
  e_61.setAttribute("class", "link-dark");
  e_61.setAttribute("href", "mailto:MiniOrange@foxmail.com");
  var e_62 = document.createElement("i");
  e_62.setAttribute("class", "fa fa-envelope");
  e_61.appendChild(e_62);
  e_60.appendChild(e_61);
  e_56.appendChild(e_60);
  var e_63 = document.createElement("li");
  e_63.setAttribute("class", "ms-3");
  var e_64 = document.createElement("a");
  e_64.setAttribute("class", "link-dark");
  e_64.setAttribute("href", "#");
  e_64.setAttribute("data-bs-toggle", "modal");
  e_64.setAttribute("data-bs-target", "#qqQun");
  var e_65 = document.createElement("i");
  e_65.setAttribute("class", "fa fa-qq");
  e_64.appendChild(e_65);
  e_63.appendChild(e_64);
  e_56.appendChild(e_63);
  var e_66 = document.createElement("li");
  e_66.setAttribute("class", "ms-3");
  var e_67 = document.createElement("a");
  e_67.setAttribute("class", "link-dark");
  var e_68 = document.createElement("i");
  e_68.setAttribute("class", "fa fa-weibo");
  e_67.appendChild(e_68);
  e_66.appendChild(e_67);
  e_56.appendChild(e_66);
  e_54.appendChild(e_56);
  e_3.appendChild(e_54);
  e_2.appendChild(e_3);
  e_0.appendChild(e_2);
  var e_69 = document.createElement("div");
  e_69.setAttribute("class", "modal fade");
  e_69.setAttribute("id", "qqQun");
  var e_70 = document.createElement("div");
  e_70.setAttribute("class", "modal-dialog modal-sm modal-dialog-centered");
  var e_71 = document.createElement("div");
  e_71.setAttribute("class", "modal-content");
  var e_72 = document.createElement("div");
  e_72.setAttribute("class", "modal-header");
  var e_73 = document.createElement("h4");
  e_73.setAttribute("class", "modal-title");
  e_73.appendChild(document.createTextNode("加入我们的qq交流群"));
  e_72.appendChild(e_73);
  var e_74 = document.createElement("button");
  e_74.setAttribute("type", "button");
  e_74.setAttribute("class", "btn-close");
  e_74.setAttribute("data-bs-dismiss", "modal");
  e_72.appendChild(e_74);
  e_71.appendChild(e_72);
  var e_75 = document.createElement("div");
  e_75.setAttribute("class", "modal-body");
  var e_76 = document.createElement("img");
  e_76.setAttribute("src", webDirectory + "/lazyco_top_comm.png");
  e_76.setAttribute("alt", "qq群 群名称:Lazyco.top交流群 群号:190265477");
  e_75.appendChild(e_76);
  e_71.appendChild(e_75);
  var e_77 = document.createElement("div");
  e_77.setAttribute("class", "modal-footer");
  var e_78 = document.createElement("button");
  e_78.setAttribute("type", "button");
  e_78.setAttribute("class", "btn btn-danger");
  e_78.setAttribute("data-bs-dismiss", "modal");
  e_78.appendChild(document.createTextNode("关闭"));
  e_77.appendChild(e_78);
  e_71.appendChild(e_77);
  e_70.appendChild(e_71);
  e_69.appendChild(e_70);
  e_0.appendChild(e_69);
  container.appendChild(e_0);
  document.write("<div id=\"footerNav\"><\/div>");
  document.getElementById("footerNav").appendChild(container);
}
document.write("<link rel=\"shortcut icon\" href=" + webDirectory + "icon.png type=\"image\/x-icon\"\/>");
