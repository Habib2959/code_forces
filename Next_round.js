var [n, k] = readline().split(' ').map(Number);
var pointsOfParticipents = readline().split(' ').map(Number);
var successfulParticipents = 0;
var pointOfKthParticipent = pointsOfParticipents[k - 1];


for (let i = 0; i < pointsOfParticipents.length; i++) {
    if (pointsOfParticipents[i] <= 0) {
        successfulParticipents = i;
        break;
    }else if(pointsOfParticipents[i] >= pointOfKthParticipent){
        successfulParticipents++;
    }else{
        break;
    }
}

console.log(successfulParticipents);



