//Faculty me mbers-components
Vue.component('staff-item',{
    props: ['staff'],
    template:  
            '<div class="col-sm-3" style="margin-bottom: 15px;">'+
            '<div class="cardnew" style="height: 370px;">'+
                '<img class="staff_image" v-bind:src="staff.img" style="margin-left: 15%; margin-top: 10px;">'+
                '<div class="cardnew-heading" style="height: 30px;">'+
                    '<h4 class="cardnew-header">{{staff.name}}</h4>'+
                '</div>'+  
                '<div class="cardnew-content" style="height: 90px; top: 260px; overflow: hidden; text-align: left; padding-left: 10%;">{{staff.post}}<br><b>e-mail:</b>{{staff.email}}<br></div>'+
            '</div>'+
            '</div>'
})

//Faculty-members-object
var StaffMembers = new Vue({
    el: '#StaffMembers',
    data: {
      StaffList:
      [    { 
            name: "Mr. Shailendra Verma",
            img: 'imgs/shailendra.jpg',
            post: "Deputy Manager (LAB)" ,
            email: "shailendra.iiti.ac.in",
            },
            { 
            name: "Mr. Lalit Jain",
            img: 'imgs/lalit.jpg',
            post: "Deputy Manager (LAB)" ,
            email: " lalit.iiti.ac.in",
            },
            { 
            name: "Mr. Jagat Singh ",
            img: 'imgs/jagat.jpg',
            post: "Deputy Manager (LAB)" ,
            email: " jagat.iiti.ac.in",
            },
            { 
            name: "Ms. Ujavala Gorakh Langhi",
            img: 'imgs/images.jpg',
            post: "Deputy Manager" ,
            email: "jujavala@iiti.ac.in",
            },
            { 
            name: "Ms. Sonu Kaushal",
            img: 'imgs/images.jpg',
            post: "Deputy Manager" ,
            email: "jujavala@iiti.ac.in",
            }
      ]
  }
})