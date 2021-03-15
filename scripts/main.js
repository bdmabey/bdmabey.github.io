var goldIdle = {
    gold : 0,
    clickIncrease : 1,
    clickers : 1,
    mineCost : 110,
    mineLevel : 0,
    goldPerSecond : 0
};

var goldPerSecond = goldIdle.goldPerSecond
var gold = goldIdle.gold
var clickIncrease = goldIdle.clickIncrease
var clickers = goldIdle.clickers
var clickCost = Math.floor(10 * Math.pow(1.1, clickers) + 20)
var mineCost = goldIdle.mineCost
var mineLevel = goldIdle.mineLevel

displayData("buyClicker", clickCost, null, null);
displayData("goldMines", mineLevel, null, null)
displayData("mineCost", mineCost, null, null)
displayData("goldPerSecond", goldPerSecond, null, null)
displayData("clickers", clickers, null, null)

function displayData(id, value, preText, postText) {
    document.getElementById(id).innerHTML = preText + value + postText;
}

function clickUpgrade() {
    clickCost = Math.floor(10 * Math.pow(1.1, clickers) + 20)
    if(gold >= clickCost) {
        clickIncrease += 1
        clickers = clickers + 1;
        gold = gold - clickCost;
        displayData("gold", gold, null, " Gold")
        displayData("goldClick", clickIncrease, "Gain ", " Gold")
        displayData("clickers", clickers, null, null)
    }
    else {
        alert("Not Enough Gold!")
    }
    var nextCost = Math.floor(10 * Math.pow(1.1, clickers) + 20);
    displayData("buyClicker", nextCost, null, null)
}

function goldClick() {
    gold = gold + clickIncrease;
    displayData("gold", gold, null, " Gold")
}

function buyMine() {
    mineCost = Math.floor(10 * Math.pow(1.3, mineLevel) + 100)
    if(gold >= mineCost) {
        mineLevel += 1;
        gold = gold - mineCost;
        goldPerSecond = goldPerSecond + 1
        displayData("goldMines", mineLevel, null, null)
        displayData("gold", gold, null, " Gold")
        displayData("goldPerSecond", goldPerSecond, null, null)
    }
    else {
        alert("Not Enough Gold!");
    }
    mineCost = Math.floor(10 * Math.pow(1.3, mineLevel) + 100)
    displayData("mineCost", mineCost, null, null)
}

function idleGold() {
    gold = gold + mineLevel;
    displayData("gold", gold, null, " Gold")
}

window.setInterval(function() {
    idleGold();
}, 1000);