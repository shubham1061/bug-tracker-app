const color = ["#b33a3a","#ff6700","#32cd32"]

export default (priority)=>{
    const level =["High","Medium","Low"]
    return{
        level:(level[priority]),
        color:color[priority-1]
    }
}