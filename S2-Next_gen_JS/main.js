const users = document.querySelectorAll(".users");
const addBtn = document.querySelector(".add");
const searchBtn = document.querySelector(".search");
const deleteBtn = document.querySelector(".delete");
const contentList = document.querySelector(".content__list");
const findInput = document.querySelector(".find");

const getUsersList = (list1, list2) => {
    const result = [];
    for (i=0; i<list1.length; i++) {
        const arr = {};
        arr["name"] = list1[i].innerHTML;
        arr["phone"] = list2[i].innerHTML;
        result.push(arr);   
    }
    return result;
}

const orderList = () => {
    const usersListName = document.querySelectorAll(".users__name");
    const usersListNum = document.querySelectorAll(".users__num");
    const users = getUsersList(usersListName,usersListNum);
    users.sort((a,b) => a.name.localeCompare(b.name));
    return users;
}

const displayContent = () => {
    const users = orderList();
    contentList.innerHTML = "";
    users.forEach((e) => {
        contentList.innerHTML += `
            <li class="users">
                <p class="users__name">${e.name}</p>
                <p class="users__num">${e.phone}</p>
            </li>
            `;
    })
    return contentList.innerHTML;  
}

displayContent();

addBtn.addEventListener('click', () => {
    const name = document.querySelector(".name").value;
    const phone = document.querySelector(".phone").value;
    if (name!= "" && phone != "") {
        contentList.innerHTML += `
        <li class="users">
        <p class="users__name">${name}</p>
        <p class="users__num">${phone}</p>
        </li>
        `;
        const users = orderList();
        console.log(users);
        displayContent();
    }  
})



deleteBtn.addEventListener('click', () => {
    const usersListName = document.querySelectorAll(".users__name");
    const usersListNum = document.querySelectorAll(".users__num");
    const test = getUsersList(usersListName,usersListNum);
    for (let i=0; i<test.length; i++) {
        for (let j=i+1; j<test.length; j++) {
            if (test[i].phone == test[j].phone) {
                usersListName[j].parentElement.remove();
            }
        }
    } 
})

console.log(users);

searchBtn.addEventListener('click', () => {
    const usersListName = document.querySelectorAll(".users__name");
    const usersListNum = document.querySelectorAll(".users__num");
    const usersList = getUsersList(usersListName,usersListNum);
    const searchValue = document.querySelector(".find").value;
    if (searchValue != "") {
        const result = usersList.filter((item) => {
            return item.name.toLowerCase() != searchValue.toLowerCase();
        })
        console.log(result);
        const x = [];
        usersListName.forEach(e => {
            const check = result.find(e1 =>  e.innerText == e1.name);
            if (check) {
                x.push(e);
            }
        })
        console.log(x);
        x.forEach(e => e.parentElement.classList.add('hidden'));
    }
});

findInput.addEventListener('focus', () => {
    const users = document.querySelectorAll(".users");
    console.log(users);
    users.forEach(e => e.classList.remove('hidden'));
})

