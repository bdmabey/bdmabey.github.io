var goldIdle = {
    gold : 0,
    clickIncrease : 1,
    clickers : 1,
    mineCost : 110,
    mineLevel : 0,
    mineUpgrade : 0,
    mineUpgradeCost : 500,
    goldPerSecond : 0
};

var goldPerSecond = goldIdle.goldPerSecond
var gold = goldIdle.gold
var clickIncrease = goldIdle.clickIncrease
var clickers = goldIdle.clickers
var clickCost = Math.floor(10 * Math.pow(1.1, clickers) + 20)
var mineCost = goldIdle.mineCost
var mineLevel = goldIdle.mineLevel
var mineUpgrade = goldIdle.mineUpgrade
var mineUpgradeCost = goldIdle.mineUpgradeCost

displayData("buyClicker", clickCost);
displayData("goldMines", mineLevel)
displayData("mineCost", mineCost)
displayData("goldPerSecond", goldPerSecond)
displayData("clickers", clickers)
displayData("mineUpgrade", mineUpgrade)
displayData("mineUpgradeCost", mineUpgradeCost)

clickCost = Math.floor(10 * Math.pow(1.1, clickers) + 20)
mineCost = Math.floor(10 * Math.pow(1.3, mineLevel) + 100)
mineUpgradeCost = Math.floor(Math.pow(1.5, mineUpgrade) + 500)

function displayData(id, value, preText = null, postText = null) {
    document.getElementById(id).innerHTML = preText + value + postText;
}

function clickUpgrade() {
    if(gold >= clickCost) {
        clickIncrease += 1
        clickers = clickers + 1;
        gold = gold - clickCost;
        displayData("gold", gold, null, " Gold")
        displayData("goldClick", clickIncrease, "Gain ", " Gold")
        displayData("clickers", clickers)
    }
    else {
        alert("Not Enough Gold!")
    }
    var nextCost = Math.floor(10 * Math.pow(1.1, clickers) + 20);
    displayData("buyClicker", nextCost)
}

function goldClick() {
    gold = gold + clickIncrease;
    displayData("gold", gold, null, " Gold")
}

function buyMine() {
    if(gold >= mineCost) {
        mineLevel += 1;
        gold = gold - mineCost;
        displayData("goldMines", mineLevel)
        displayData("gold", gold, null, " Gold")
    }
    else {
        alert("Not Enough Gold!");
    }
    mineCost = Math.floor(10 * Math.pow(1.3, mineLevel) + 100)
    displayData("mineCost", mineCost)
}

function upgradeMine() {
    if(gold >= mineUpgradeCost) {
        mineUpgrade += 1
    }
    else {
        alert("nah")
    }
}

function idleGold() {
    goldPerSecond = (mineLevel * (2 *(mineUpgrade)))
    gold = gold + goldPerSecond
    displayData("goldPerSecond", goldPerSecond)
    displayData("gold", gold, null, " Gold")
}

window.setInterval(function() {
    idleGold();
}, 1000);