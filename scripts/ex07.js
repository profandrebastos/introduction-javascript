let nums=[];
nums.push
let qtde = prompt("Quantos números devo ordenar?");
for (let i = 0; i < qtde;i++){
    nums[i] = parseInt(prompt("Digite um valor:"));
}
function ordenar (nums) {
    nums.sort ((a,b) => a - b);
    console.log(nums);
}
ordenar(nums);