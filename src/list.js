let createList = value => {
    return createNode(value);
};
const appendList = (list,value) => {
    const node = createNode(value);
    let x = list
    while(x.next){
        x = x.next
    }
    x.next === null // x 是最后一个节点
    x.next = node;
    return node;
};
const removeFromList = (list,node) => {
    let x = list
    let p = null
    while(x !== node){
        p = x
        x = x.next
    }
    // console.log(p === null || x 的上一个节点)
    // console.log(x === node || x === null)  
    p.next = x.next  
    // if(list === node){
    //   // 如果删除的是第一个节点
    //   // list 指向第二个节点
    //   list = node.next;
    // }else{
    //   // 如果删除的是第二个节点
    //   // 第一个节点.next = 第二个节点.next
    //   if(list.next === node){
    //       list = node.next
    //   }else{
    //       // 如果删除的是第三个节点
    //       // 第二个节点.next = 第三个节点.next
    //       if(list.next.next === node){
    //           list.next.next = node.next
    //       }else{
    //           // 如果删除的是第四个节点
    //           // 第三个节点.next = 第四个节点.next
    //           if(list.next.next.next === node){
    //               list.next.next.next = node.next;
    //           }
    //       }
    //   }
    // }
};

const createNode = (value) => {
    return {
        data: value,
        next: null
    };
};

const travelList = (list,fn) => {
    let x = list
    while(x !== null){
        fn(x)
        x = x.next;
    }
}

const list = createList(10);
const node2 = appendList(list,20);
const node3 = appendList(list,30);
const node4 = appendList(list,40);
const node5 = appendList(list,50);
const node6 = appendList(list,60);
removeFromList(list,node3)
removeFromList(list,node5)
console.log("list");
console.log(list);
travelList(list,(node)=>{
    console.log(node.data)
});