var goldIdle = {
    gold : 0,
    clickIncrease : 1,
    clickUpgrades : 1,
    mineCost : 100,
    mineLevel : 0
};

var gold = goldIdle.gold
var clickIncrease = goldIdle.clickIncrease
var clickUpgrades = goldIdle.clickUpgrades
var clickCost = Math.floor(10 * Math.pow(1.1, clickUpgrades) + 20)
var mineCost = goldIdle.mineCost
var mineLevel = goldIdle.mineLevel


document.getElementById("upgradeGoldCost").innerHTML = clickCost
document.getElementById("goldMines").innerHTML = mineLevel
document.getElementById("mineCost").innerHTML = mineCost

function clickUpgrade() {
    clickCost = Math.floor(10 * Math.pow(1.1, clickUpgrades) + 20)
    if(gold >= clickCost) {
        clickIncrease += 1
        clickUpgrades = clickUpgrades + 1;
        gold = gold - clickCost;
        document.getElementById("gold").innerHTML = gold + " Gold"
        document.getElementById("goldClick").innerHTML = "Gain " + clickIncrease + " Gold";
    }
    else {
        alert("Not Enough Gold!")
    }
    var nextCost = Math.floor(10 * Math.pow(1.1, clickUpgrades) + 20);
    document.getElementById("upgradeGoldCost").innerHTML = nextCost;
}

function goldClick() {
    gold = gold + clickIncrease;
    document.getElementById("gold").innerHTML = gold + " Gold";
}

function buyMine() {
    mineCost = Math.floor(10 * Math.pow(1.3, mineLevel) + 100)
    if(gold >= mineCost) {
        mineLevel += 1;
        gold = gold - mineCost;
        document.getElementById("goldMines").innerHTML = mineLevel
        document.getElementById("gold").innerHTML = gold + " Gold"
    }
    else {
        alert("Not Enough Gold!");
    }
    mineCost = Math.floor(10 * Math.pow(1.3, mineLevel) + 100)
    document.getElementById("mineCost").innerHTML = mineCost
}

function idleGold() {
    gold = gold + mineLevel;
    document.getElementById("gold").innerHTML = gold + " Gold."
}

window.setInterval(function() {
    idleGold();
}, 1000);