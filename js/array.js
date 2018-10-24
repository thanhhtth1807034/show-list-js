var student1 = {
    rollNumber : '02/04/2000',
    name : 'hoang tat thanh',
    phone : '0987654321',
    address : 'ha noi',
    avatar : 'https://www.virginexperiencedays.co.uk/content/img/product/large/supercar-thrill-at-top-09123651.jpg'
};
var student2 = {
    rollNumber : '14/10/2000',
    name : 'nguyen van dat',
    avatar : 'https://cdn.drivemag.net/media/default/0001/72/BMW-iNext-9135-default-large.jpeg',
    phone : '0987654321',
    address : 'hai duong'
};
var student3 = {
    rollNumber : '17/06/1976',
    name : 'tran quoc hoan',
    address : 'ha noi',
    phone : '0987654321',
    avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSunEjOZSMdGAMl271GXew8lVa7UtN6JjdV2l86Btsxw3w6kM9r'
};
var student4 = {
    rollNumber : '12/05/2000',
    name : 'tran trung tien',
    address : 'ha noi',
    phone : '0987654321',
    avatar :'https://cdn1.evo.co.uk/sites/evo/files/styles/gallery_adv/public/2017/12/alp_7149.jpg?itok=I5A01u7k'
};
var listStudent = new Array();
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
listStudent.push(student4);
    // for (var i = 0; i < listStudent.length; i++) {
    //     alert(listStudent[i].name);
    // }
var classMainContent = document.getElementsByClassName('main-content');
if (classMainContent != null && classMainContent.length >0){
    var mainContent = classMainContent[0];
    for (var i = 0; i < listStudent.length; i++) {
        var itemContent = '<div class="personal-infor">';
                itemContent += '<div class="avatar" style="background-image: url(\'' + listStudent[i].avatar + '\'); background-size: cover">';
                itemContent += '</div>';
                itemContent += '<div class="line-infor">';
                    itemContent += '<label>Rollnumber</label>';
                    itemContent += '<div>' + listStudent[i].rollNumber + '</div>';
                itemContent += '</div>';
                itemContent += '<div class="line-infor">';
                    itemContent += '<label>Name</label>';
                    itemContent += '<div>' + listStudent[i].name + '</div>';
                itemContent += '</div>';
                itemContent += '<div class="line-infor">';
                    itemContent += '<label>Phone</label>';
                    itemContent += '<div>' + listStudent[i].phone + '</div>';
                itemContent += '</div>';
                itemContent += '<div class="line-infor">';
                    itemContent += '<label>Address</label>';
                    itemContent += '<div>' + listStudent[i].address + '</div>';
                itemContent += '</div>';
            itemContent  += '</div>';
        mainContent.innerHTML += itemContent;
    }


}
