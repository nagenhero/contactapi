//1.first fetch 20 rnadom user on page load
//2.filter user by gender
//3.filter user by name

const apiUrl ="https://randomuser.me/api/?";
const listElm=document.querySelector("#user-list");
const counterElm=document.querySelector("#user-count");
let usrArgs=[];
const displayUsers=users=>{
    let str="";
   
    users.map(user=>{
        str +=`
        <div class="card col-md-6 col-lg-3 py-2" >
        <div class="user-card">
        </div>
    
                    <img src="${user.picture.medium}" class="card-img-top" alt="...">
                    
                    <h4>${user.name.title} ${user.name.first}${user.name.last}
                    </h4>
                    <div class="card-body">
                    <div>
                    <span><i class="fas fa-mobile"></i></span>
                    
                    ${user.cell}
                    </div>

                    <div>
                    <span><i class="fas fa-envelope"></i></span>
                    
                    ${user.email}
                    </div>


                    <div>
                    <span><i class="fas fa-location"></i></span>
                    
                    ${user.location.city}
                    </div>

                
                      
                    </div>
                  </div>
        `;
    });
listElm.innerHTML=str;
console.log("nagen");
console.log( users.length);
counterElm.innerText=users.length;
};
const fetchUser =(params="results=20")=>
{

    //fetch from api
    fetch(apiUrl +params).then((response)=>
    {
        return response.json();
    }).then(data=>{
        console.log(data);
        usrArgs=data.results;
       
       
            displayUsers(usrArgs);
            
       

    }).catch(error=>console.log(error));
};
fetchUser();
//for dropdown menu change
const handleOnChange =e=>
{
    console.log(e.value);
    const params= `results=20&gender=${e.value}`;
    fetchUser(params);

};

const handleOnSearch=e=>
{
    //console.log(e.value);
    const str=e.value.toLowerCase();
    
    const filteredArgs=usrArgs.filter(item=>{
        const userFullName=(item.name.first +""+ item.name.last).toLowerCase();
        if(userFullName.includes(str))
        {
           console.log(item);
            return item;
        }


    });
    displayUsers(filteredArgs);
};
