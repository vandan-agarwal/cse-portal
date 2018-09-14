//Faculty members-components
Vue.component('staff-item',{
    props: ['Faculty'],
    template:  '<div class="col-sm-4" style="margin-bottom: 20px;">'+
            '<div class="cardnew" style="height: 500px;">'+
                '<img class="faculty_image" v-bind:src="Faculty.img" style="margin-left: 15%; margin-top: 10px;"/>'+
                '<div class="cardnew-heading" style="height: 39px;">'+
                    '<a v-bind:href="Faculty.profileLink"  style="text-decoration: none;  top: 500px;" ><h3 class="cardnew-header">{{Faculty.name}}</h3></a>'+ 
                '</div>'+
                '<div class="cardnew-content" style="height: 170px; to0p: 300px; overflow-y: scroll; text-align: left; padding-left: 10%;">'+
                    '<em>PhD, {{Faculty.phdFrom}}</em><br/>'+
                    '<em>{{Faculty.currentPost}}</em><br/>'+
                    '<strong>Research Interests : </strong>{{Faculty.ResearchInterest}}<br/>'+
                    '<strong>e-mail:</strong> {{Faculty.email}}<br/>'+
                '</div>'+
                '<a class="Read-more" v-bind:href="Faculty.profileLink" target="_newTab">Read more <span class="glyphicon glyphicon-new-window"></span></a>'+
            '</div>'+
    '</div>'
})

//Faculty-members-object
var FacultyMembers = new Vue({
    el: '#FacultyMembers',
    data: {
      FacultyList:
      [    { 
            name: "Dr. Abhishek Srivastava",
            img: 'faculty_pics/abhishek.jpg',
            phdFrom: "University of Alberta, Edmonton, Canada",
            currentPost: "Associate Professor " ,
            ResearchInterest: "Service-Oriented Systems, Dynamic Systems, Geographically Distributed Development Environments, Agile Techniques, Software-as-a-Service." ,
            email: "asrivastava@iiti.ac.in",
            profileLink: "http://www.iiti.ac.in/people/~asrivastava"
        },