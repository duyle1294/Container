let boxs = document.querySelectorAll('.box');
let selectedBox = null;

for (let box of boxs) {
    currentBox = box;
    box.onclick = () => {
        currentBox.classList.remove('active');
        box.classList.toggle('active');
        currentBox = box;

        selectedBox = box;
    }
}

let check = document.querySelector('.check');
let alert = document.querySelector('.alert');

check.onclick = (Event) => {

    console.log(selectedBox);

    if (selectedBox == null) {
        alert.classList.toggle('active')
        Event.preventDefault();
    }
}

let okBtn = document.querySelector('.container .blue');
okBtn.onclick = () => {
    alert.classList.remove('active');
}



// interiors sections js

let arrowLeft = document.querySelector('#minimize-menu');
let arrowRight = document.querySelector('#setting-menu');
let setting = document.querySelector('.content .setting');

arrowRight.onclick = () => {
    setting.classList.toggle('active');
    arrowLeft.classList.toggle('active');
}

arrowLeft.onclick = () => {
    setting.classList.remove('active');
    arrowLeft.classList.remove('active');
}

let delBtns = document.querySelectorAll('.icon .fa-trash');
let ok = document.querySelector('.delete-dialog .container .cancel');
let deleteConfirm = document.querySelector('.delete-dialog');


for (let delBtn of delBtns) {
    delBtn.onclick = () => {
        deleteConfirm.classList.toggle('active');
    }
}

ok.onclick = () => {
    deleteConfirm.classList.remove('active');
}

// drop down list starts

let sortArrows = document.querySelectorAll('.setting .box .main');
let sortDowns = document.querySelectorAll('.setting .box .sort-down');
let listItems = document.querySelectorAll('.sort-down .list-item');

for (let i = 0; i < sortArrows.length; i++) {

    seclected = sortDowns[i];

    sortArrows[i].onclick = () => {
        seclected.classList.remove('active');
        sortDowns[i].classList.toggle('active');
        // seclected = sortDowns[i];
    }
}

for (listItem of listItems) {
    listItem.onclick = () => {
        sortDowns.forEach(sortDown => {
            sortDown.classList.remove('active')
        })
    }
}

let addItem = document.querySelector('#item-btn')
let closeMark = document.querySelector('.close')
let itemDialog = document.querySelector('.add-item')
let addBtns = document.querySelectorAll('.add-btn')

addItem.onclick = () => {
    itemDialog.classList.toggle('active')
}

closeMark.onclick = () => {
    itemDialog.classList.remove('active')
}

for (ibtn of addBtns) {
    ibtn.onclick = () => {
        itemDialog.classList.remove('active')
    }
}



// tag actvie table active starts


let btn3s = document.querySelectorAll('.btn3')
let tables = document.querySelectorAll('.table')

for (let i = 0; i < btn3s.length; i++) {
    actived = btn3s[i];
    checked = tables[i];

    btn3s[i].onclick = () => {
        btn3s[0].classList.remove('active');
        tables[0].classList.remove('active');

        actived.classList.remove('active');
        checked.classList.remove('active');

        btn3s[i].classList.toggle('active');
        tables[i].classList.toggle('active');

        actived = btn3s[i];
        checked = tables[i];
    }
}

let itemBtns = document.querySelectorAll('.item-btn')
let itemTables = document.querySelectorAll('.item-table')

for (let j = 0; j < itemBtns.length; j++) {
    actived2 = itemBtns[j];
    checked2 = itemTables[j];

    itemBtns[j].onclick = () => {
        itemBtns[0].classList.remove('active');
        itemTables[0].classList.remove('active');

        actived2.classList.remove('active');
        checked2.classList.remove('active');

        itemBtns[j].classList.toggle('active');
        itemTables[j].classList.toggle('active');

        actived2 = itemBtns[j];
        checked2 = itemTables[j];
    }
}



// tag actvie table active ends

// tags view active starts

let btns = document.querySelectorAll('.btn')
let btn2s = document.querySelectorAll('.btn2')
let btn2Plus = document.querySelectorAll('.btn2-plus')
let inide = document.querySelector('.swith-view .in-side')
let outside = document.querySelector('.swith-view .out-side')
let arr = [
    {
        selectedID: 0,
        listItems: [
            {
                itemImg: './Assets/allview/allview-01.png'
            },
            {
                itemImg: './Assets/allview/allview-02.png'
            },
            {
                itemImg: './Assets/allview/allview-03.png'
            },
            {
                itemImg: './Assets/allview/allview-04.png'
            },
            {
                itemImg: './Assets/allview/allview-05.png'
            },
            {
                itemImg: './Assets/allview/allview-06.png'
            },
        ]
    },

    {
        selectedID: 0,
        listItems: [
            {
                itemImg: './Assets/allview/allview-07.png'
            },
            {
                itemImg: './Assets/allview/allview-08.png'
            },
            {
                itemImg: './Assets/allview/allview-09.png'
            },
            {
                itemImg: './Assets/allview/allview-10.png'
            },
            {
                itemImg: './Assets/allview/allview-11.png'
            },
        ]
    },
]

function removeBtnActvie() {
    btn2s.forEach(link => {
        document.querySelector('.perpective').src = null
        link.classList.remove('active')
    })

    btn2Plus.forEach(link2 => {
        document.querySelector('.perpective').src = null
        link2.classList.remove('active')
    })
}

function changeImage(url) {
    document.querySelector('.perpective').src = url
}

function addBtnActive() {
    btn2s[arr[0].selectedID].classList.toggle('active')

    btn2Plus[arr[1].selectedID].classList.toggle('active')
    console.log(btn2Plus,arr[1].selectedID);
}

addBtnActive()

for (const key in btn2s) {
    btn2s[key].onclick = () => {
        removeBtnActvie()
        arr[0].selectedID = key
        changeImage(arr[0].listItems[key].itemImg)
        addBtnActive()
    }
}

for (const key in btn2Plus) {
    btn2Plus[key].onclick = () => {
        removeBtnActvie()
        arr[1].selectedID = key
        changeImage(arr[1].listItems[key].itemImg)
        addBtnActive()
    }
}

btns[0].onclick = () => {
    // btn2s[0].classList.toggle('active')
    outside.classList.remove('active')
    inide.classList.remove('remove')
    btns[1].classList.remove('active')
    btns[0].classList.toggle('active')
    removeBtnActvie()
    addBtnActive()
    changeImage(arr[0].listItems[arr[0].selectedID].itemImg)
}

btns[1].onclick = () => {
    // btn2Plus[0].classList.toggle('active')
    inide.classList.toggle('remove')
    outside.classList.toggle('active')
    btns[0].classList.remove('active')
    btns[1].classList.toggle('active')
    removeBtnActvie()
    addBtnActive()
    changeImage(arr[1].listItems[arr[1].selectedID].itemImg)
}


