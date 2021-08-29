 document.querySelector("#yes").addEventListener("click",addelement);
let k = 0;
function addelement(){
    let work = document.querySelector('input[type="text"]');
    let date = document.querySelector('input[type="date"]');
    let time = document.querySelector('input[type="time"]');
    if(work.value==="" || time.value ==="" || date.value==="")alert("Please add complete information");
    else {
        const ele = document.createElement('li');
        const tar = document.querySelector('#tasks');
        ele.setAttribute('class', 'row');
        const allinput= document.querySelectorAll('input');
        let i = 0;
        for(let c of allinput){
            const child = document.createElement('div');
            if(i==0)
            child.classList.add('col-md-6');
            if(i==1)
            child.classList.add('col-md-2');
            if(i==2)
            child.classList.add('col-md-2');
            i++
            child.classList.add('output');
            child.innerText=c.value;
            ele.append(child);
        }
        const btn = document.createElement('button');
        const it = document.createElement('i');
        it.classList.add('col-md-1');
        it.classList.add('fa');
        it.classList.add('fa-trash');
        btn.append(it);
        btn.classList.add("col-md-1");
        btn.classList.add("del");
        btn.setAttribute('id',k++);
        ele.append(btn);
        tar.append(ele);

        btn.onclick = function(){
            btn.parentElement.remove();
        }

    }
}