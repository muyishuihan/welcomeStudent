
//三级导航

var sub_nav_g = document.querySelector('#sub_nav_g').children,
    third_nav = document.querySelector('#third_nav'),
    college_club = document.querySelector('#college_club'), 
    stu_club = document.querySelector('#stu_club'),
    redrock_club = document.querySelector('#redrock_club'),
    great_vedio = document.querySelector('#great_vedio'),
    great_tech = document.querySelector('#great_tech'),
    great_stu = document.querySelector('#great_stu'),
    t_n_c = document.querySelector('#third_nav').children,
    left_side = document.querySelector('#left_sid').children,
    tuanwei = document.querySelector('#tuanwei_det'),
    stu_union = document.querySelector('#col_stu_union_det'),
    sci_union = document.querySelector('#sci_union_det'),
    club_union = document.querySelector('#club_union_det'),
    teen_volum = document.querySelector('#teen_volum_det'),
    stu_art = document.querySelector('#stu_art_det');
function bo_no(ele){
    if (ele.style.display="block") {
        ele.style.display = "none";
    };
}
function dis_nav(ele,newc){
    for (var i = ele.length - 1; i >= 0; i--) {
        ele[i].className = newc;
    }
};
function dis_fc(){
    bo_no(third_nav);
    bo_no(college_club);
    bo_no(stu_club);
    bo_no(redrock_club);
    bo_no(great_vedio);
    bo_no(great_stu);
    bo_no(great_tech);
};
function play_fc(){
    if (sub_nav_g[0].className == "clicked") {
            third_nav.style.display = "block";
            college_club.style.display = "block";
            dis_nav(t_n_c,"great_unclick");
            t_n_c[0].className = "great_click";
        } ;
    if (sub_nav_g[1].className == "clicked") {
            great_vedio.style.display = "block";
        };
    if (sub_nav_g[2].className == "clicked") {
            great_stu.style.display = "block";
        };
    if (sub_nav_g[3].className == "clicked") {
            great_tech.style.display = "block";
        };
}
function dis_club(){
    bo_no(college_club);
    bo_no(stu_club);
    bo_no(redrock_club);
}
function play_club(){
    if (t_n_c[0].className == "great_click") {
            college_club.style.display = "block";
        };
    if (t_n_c[1].className == "great_click") {
            stu_club.style.display = "block";
        };
    if (t_n_c[2].className == "great_click") {
            redrock_club.style.display = "block";
        };
}
function dis_cl(){
    bo_no(tuanwei);
    bo_no(stu_union);
    bo_no(sci_union);
    bo_no(club_union);
    bo_no(teen_volum);
    bo_no(stu_art);
};
for (var i = sub_nav_g.length - 1; i >= 0; i--) {
    sub_nav_g[i].addEventListener('click', function(){
        dis_nav(sub_nav_g,"unclick");
        dis_fc();
        this.className = "clicked";
        play_fc();
    })
};
for (var i = t_n_c.length - 1; i >= 0; i--) {
    t_n_c[i].addEventListener('click',function(){
        dis_nav(t_n_c,"great_unclick");
        dis_club();
        this.className = "great_click";
        play_club();
    })
}



//图片轮播
var left_aq = document.querySelector('.left_aq'),
    right_aq = document.querySelector('.right_aq'),
    vedio_group_one = document.querySelector('.vedio_group_one'),
    vedio_group_two = document.querySelector('.vedio_group_two'),
    vedio_group_three = document.querySelector('.vedio_group_three'),
    stu_group = document.querySelector('.stu_group'),
    stu_group_two = document.querySelector('.stu_group_two'),
    left_stu = document.querySelector('.left_stu'),
    right_stu =document.querySelector('.right_stu'),
    count_tech = 1;
left_stu.addEventListener('click',function () {
    stu_group.style.display = "block";
    stu_group_two.style.display = "none";
});
right_stu.addEventListener('click',function () {
    stu_group.style.display = "none";
    stu_group_two.style.display = "block";
})
left_aq.addEventListener('click',function () {
    if (count_tech == 1) {
        vedio_group_one.style.display = "block";
        vedio_group_two.style.display = "none";
        vedio_group_three.style.display = "none";
        count_tech =1;
        console.log(count_tech);
    }else if (count_tech == 2) {
        vedio_group_one.style.display = "block";
        vedio_group_two.style.display = "none";
        vedio_group_three.style.display = "none";
        count_tech = 1;
        console.log(count_tech);
    }else if (count_tech == 3) {
        vedio_group_one.style.display = "none";
        vedio_group_two.style.display = "block";
        vedio_group_three.style.display = "none";
        count_tech = 2;
        console.log(count_tech);
    };
});
right_aq.addEventListener('click',function () {
    if (count_tech == 1) {
        vedio_group_one.style.display = "none";
        vedio_group_two.style.display = "block";
        vedio_group_three.style.display = "none";
        count_tech =2;
        console.log(count_tech);
    }else if (count_tech == 2) {
        vedio_group_one.style.display = "none";
        vedio_group_two.style.display = "none";
        vedio_group_three.style.display = "block";
        count_tech = 3;
        console.log(count_tech);
    }else if (count_tech == 3) {
        vedio_group_one.style.display = "none";
        vedio_group_two.style.display = "none";
        vedio_group_three.style.display = "block";
        console.log(count_tech);
        count_tech = 3;
    };
});



//封装
var getStyle = function(dom,attr){
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
};

var dom = function (event) {
    return document.querySelector(event);
};
function indexOf(arr,value,start){
  //如果不设置start,则默认start为0
  if(arguments.length == 2){
    start = 0;
  }
  //如果数组中存在indexOf方法，则用原生的indexOf方法
  if(arr.indexOf){
    return arr.indexOf(value,start);
  }
  for( var i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return i;
    }
  }
  return -1;
}
//数组去重方法封装
function noRepeat(arr){
  var result = [];
  for( var i = 0; i < arr.length; i++){
    if(indexOf(result,arr[i]) == -1){
      result.push(arr[i]);
    }
  }
  return result;
}
//inArray方法封装
function inArray(arr,value){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return true;
    }
  }
  return false;
}
//去除首尾空格函数封装
function trim(arr){
  var result = arr.replace(/^\s+|\s+dom/g,'');
  return result;
}
function addClass(obj,classStr){
  var array = noRepeat(trim(obj.className).split('\s+'));
  if(!inArray(array,classStr)){
    array.push(classStr);
  }
  obj.className = array.join(' ');
  return obj;
}

function removeClass(obj,classStr){
  var array = noRepeat(trim(obj.className).split('\s+'));
  var index = indexOf(array,classStr);
  if(index != -1){
    array.splice(index,1);
    obj.className = array.join(' ');
  }
  return obj;
};


//飞机和回顶的闭包
(function(){

    var fix_l = dom(".fix-l");
        fix_r = dom(".fix-r");
        backTop = dom(".back"); //回顶按钮

    var tt = 500;
    
    //飞机和回顶按钮的隐藏
    window.onscroll = function(){  //兼容ie8
        var t = document.documentElement.scrollTop || document.body.scrollTop;
            bottom_t = document.documentElement.offsetHeight || document.body.offsetHeight;
            bottom_b = document.documentElement.clientHeight || document.body.clientHeight;
            bottom = bottom_t - bottom_b - t;

        if (bottom <= 10) {
            backTop.style.bottom = (-bottom) + 30 + "px";
        }else {
            backTop.style.bottom = 30 + "px";
        };

        if(t < tt && getStyle(backTop,"opacity")!="0"){
            backTop.style.opacity="0";
        }else if(t > tt && getStyle(backTop,"opacity")=="0"){
            backTop.style.opacity="1";
        }else{
            return false;
        };

        if(t < 1500 && getStyle(fix_l,"opacity")!="1"){
            fix_l.style.opacity="1";
        }else if(t > tt && getStyle(fix_l,"opacity")=="1"){
            fix_l.style.opacity="0";
        }else{
            return false;
        };

        if(t < 1500 && getStyle(fix_r,"opacity")!="1"){
            fix_r.style.opacity="1";
        }else if(t > tt && getStyle(fix_r,"opacity")=="1"){
            fix_r.style.opacity="0";
        }else{
            return false;
        };
    };


    //回到顶部
    backTop.addEventListener("click", back);
    function back() {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
            speed = 100;  //每次位移量
            interval = 20;
        if (t > 0) {
            document.documentElement.scrollTop = t - speed;
            document.body.scrollTop = t - speed;
            setTimeout(back, interval);
        };
    };

})();


//计时器的闭包
(function(){

    var timer = [dom(".day-l"), dom(".day-r"), dom(".hour-l"), dom(".hour-r"), dom(".min-l"), dom(".min-r"), dom(".sec-l"), dom(".sec-r")]
        startTime = new Date().getTime();
        timeNew = new Date();
        month = timeNew.getMonth() + 1;
        year = timeNew.getFullYear()
        day = 0;
        count = 0;
        stop = 0;

    function change(event, num){
        if (num == 0) {
            event.style.top = 0 + "px";
        };
        if (num == 1) {
            event.style.top = -37 + "px";
        };
        if (num == 2) {
            event.style.top = -73 + "px";
        };
        if (num == 3) {
            event.style.top = -110 + "px";
        };
        if (num == 4) {
            event.style.top = -147 + "px";
        };
        if (num == 5) {
            event.style.top = -183 + "px";
        };
        if (num == 6) {
            event.style.top = -220 + "px";
        };
        if (num == 7) {
            event.style.top = -257 + "px";
        };
        if (num == 8) {
            event.style.top = -293 + "px";
        };
        if (num == 9) {
            event.style.top = -330 + "px";
        };

    };

    if (month == 8 && year == 2016){
        day = 31+9;
    }else if (month == 9 && year == 2016) {
        day = 9;
    }else {
        stop = 1;
    };

    function timeChange(stop) {
        count++;

        var offset = new Date().getTime() - (startTime + count * 1000);
            nextTime = 1000 - offset;
            timeNew = new Date();
            sec = timeNew.getSeconds();
            min = timeNew.getMinutes();
            hour = timeNew.getHours();
            dayNew = day - timeNew.getDate();
            // console.log(timeNew.getDay())

        if (nextTime < 0) nextTime = 0;

        if (stop != 1) {
            var time = [parseInt((dayNew%100)/10), dayNew%10, (2 - parseInt((hour%100)/10)), (4 - hour%10), (5 - parseInt((min%100)/10)), (9 - min%10), (5 - parseInt((sec%100)/10)), (9 - sec%10)];
                length = timer.length;

            for (var i = 0; i < length; i++) {
                change(timer[i], time[i])
            };
            
        }else{
            for (var i = 0; i < length; i++) {
                change(timer[i], 0);
            };
        };
        setTimeout(timeChange, nextTime);
    };

    function _timeChange(stop) {
        return function(){
            timeChange(stop);
        }
    };
    setTimeout(_timeChange(stop), 1000);

})();


//滚动条
(function(){

    var college_club = dom('#college_club');
        school_details = dom('#school_details');
        float_line = dom('#float_line');
        flaot_d = dom('#flaot_d');
        body = dom('body')
        left_sid = dom('#left_sid');

    var move = 0;
        Y1 = 0;

    school_details.onscroll = function(){
        var t = school_details.scrollTop;
        bottom (t)
        flaot_d.style.top = (t/((school_details.scrollHeight - school_details.offsetHeight)/(float_line.offsetHeight - flaot_d.offsetHeight))) + "px";
    }

    //按钮变色
    function bottom (num) {
        if (num >= 0 && num < 1223 ) {
            classChange(0)
        }
        if (num >= 1223 && num < 3229 ) {
            classChange(1)
        }
        if (num >= 3229 && num < 4322 ) {
            classChange(2)
        }
        if (num >= 4322 && num < 5154 ) {
            classChange(3)
        }
        if (num >= 5154 && num < 6704 ) {
            classChange(4)
        }
        if (num == 6704) {
            classChange(5)
        }
    }
    function classChange(numb) {
        for (var i = 0; i < left_sid.children.length; i++) {
            left_sid.children[i].className = "col_club_class";
        }
        left_sid.children[numb].className = "col_club_class_click";
    }

    //点击按钮切换
    left_sid.addEventListener("click", function (e) {
        if (e.target.className == "col_club_class_click") {
            bottomCahnge(e.target, e.target.children[0].id);
        }
        if (e.target.className == "col_club_class") {
            bottomCahnge(e.target, e.target.children[0].id);
        }
        if (e.target.className == "span_font") {
            bottomCahnge(e.target.parentNode, e.target.id);
        }
    })
    function bottomCahnge (event1, event2) {

        for (var i = 0; i < left_sid.children.length; i++) {
            left_sid.children[i].className = "col_club_class";
        }
        event1.className = "col_club_class_click";

        switch (event2) {
            case "tuanwei":
                school_details.scrollTop = 0;
                flaot_d.style.top = 0;
                break;
            case "col_stu_union":
                school_details.scrollTop = 1223;
                flaot_d.style.top = 75 + "px";
                break;
            case "sci_union":
                school_details.scrollTop = 3229;
                flaot_d.style.top = 198 + "px";
                break;
            case "club_union":
                school_details.scrollTop = 4322;
                flaot_d.style.top = 265 + "px";
                break;
            case "teen_volum":
                school_details.scrollTop = 5154;
                flaot_d.style.top = 316 + "px";
                break;
            case "stu_art":
                school_details.scrollTop = 6704;
                flaot_d.style.top = 411 + "px";
                break;
        }
    }

    //拖动滚动条
    flaot_d.onmousedown = mousedown_g;
    flaot_d.onmousemove = mousemove_g;
    flaot_d.onmouseup = mouseup_g;
    flaot_d.ondragstart = dragstart_g;
    flaot_d.onmouseout = mouseout_g;


    function mousedown_g () {
        Y1 = window.event.y - parseInt(flaot_d.offsetTop);
        move = 1;
    }
    function mousemove_g () {
        if (move == 1) {
            var t = school_details.scrollTop;
            bottom (t);
            addClass(body, "way_masking");
            flaot_d.style.top = (window.event.y - Y1) + "px";
            school_details.scrollTop = (((school_details.scrollHeight - school_details.offsetHeight)/(float_line.offsetHeight - flaot_d.offsetHeight))*(window.event.y - Y1));
            if ((window.event.y - Y1) < 0) {
                flaot_d.style.top = 0 + "px";
                school_details.scrollTop = 0;
            }
            if ((window.event.y - Y1) > (float_line.offsetHeight - flaot_d.offsetHeight)) {
                flaot_d.style.top = (float_line.offsetHeight - flaot_d.offsetHeight) + "px";
                school_details.scrollTop = (school_details.scrollHeight - school_details.offsetHeight);
            }
        }
    }
    function mouseup_g () {
        move = 0;
        function _timeChange(stop) {
            return function(){
                removeClass(body, "way_masking");
            }
        };
        setTimeout(_timeChange(stop), 1000);
    }
    function mouseout_g () {
        move = 0;
        function _timeChange(stop) {
            return function(){
                removeClass(body, "way_masking");
            }
        };
        setTimeout(_timeChange(stop), 1000);
    }
    function dragstart_g (){
        window.event.returnValue = false;
    }

})();
