// //Đoạn code trên cho phép là chỉ tìm kiếm tag p trong element tab-item va tab-pane mà thôi.
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
//Lấy vị trí bên trái(offsetLeft: 0) và chiều ngang(offsetWidt:101)
//console.log([tabActive])
const line = $('.tabs .line')

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'


tabs.forEach((tab, index) =>{
    const pane = panes[index]

    tab.onclick = function(){

        //this la tab
        //line.style.left = this.offsetLeft + 'px'
        //line.style.width = this.offsetWidth + 'px'
        //tuong tu
        line.style.left = tab.offsetLeft + 'px'
        line.style.width = tab.offsetWidth + 'px'
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        //this o day la tab
        this.classList.add('active')
        pane.classList.add('active')
    }
})


//lan 1
// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const tabs = $$('.tab-item')
// const panes = $$('.tab-pane')

// const tabActive = $('.tab-item.active')

// const line = $('.tabs .line');

// line.style.left = tabActive.offsetLeft + 'px'
// line.style.width = tabActive.offsetWidth + 'px'

// tabs.forEach((tab, index)=>{
//     const pane = panes[index]
//     tab.onclick = function(){

//         line.style.left = this.offsetLeft + 'px'
//         line.style.width = this.offsetWidth + 'px'

//         $('.tab-item.active').classList.remove('active')
//         $('.tab-pane.active').classList.remove('active')


//         this.classList.add('active')
//         pane.classList.add('active')
//     }
// })

//Lan 2
// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);


// const tabs = $$('.tab-item');
// const panes = $$('.tab-pane');

// const tabActive = $('.tab-item.active');
// const line = $('.tabs .line')

// line.style.left = tabActive.offsetLeft + 'px';
// line.style.width = tabActive.offsetWidth + 'px';

// tabs.forEach((tab, index)=>{
//     const pane = panes[index]
//     tab.onclick = function(){

//         line.style.left = tab.offsetLeft + 'px';
//         line.style.width = tab.offsetWidth + 'px';
        
//         $('.tab-item.active').classList.remove('active')
//         $('.tab-pane.active').classList.remove('active')

//         this.classList.add('active')
//         pane.classList.add('active')
//     }
// })