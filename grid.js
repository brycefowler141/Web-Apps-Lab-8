class Grid
{
    constructor(numberOfColumns, numberOfRows, cards = [], gridClassName)
    {
        this.numberOfColumns = numberOfColumns;
        this.numberOfRows = numberOfRows;
        this.cards = cards;
        this.gridClassName = gridClassName;

    }

    discountGrid()
    {
        var returnVar = ``;
        for(let x = 0; x < this.numberOfColumns; x++)
        {
            returnVar += `<div class = "${this.cards[x].style}">
            <img src = ${this.cards[x].imageSource} alt = ${this.cards[x].cardTitle}>
            <h2>${this.cards[x].cardTitle}</h2>
            <p><span>${this.cards[x].cardDiscount}%</span> Off All ${this.cards[x].cardTitle}</p>
            </div>
            `;
        }
        return returnVar;
    }
}

class Table
{
    constructor(numberOfColumns, numberOfRows, cards = [], tableClassName)
    {
        this.numberOfColumns = numberOfColumns;
        this.numberOfRows = numberOfRows;
        this.cards = cards;
        this.tableClassName = tableClassName;
    }

    discountTable()
    {
        var returnVar = `
        <tr>
            <th>Items</th>
            <th>Original Price</th>
            <th>Today's Deal</th>
        </tr>
        `;
        for(let x = 0; x < this.numberOfRows; x++)
        {
            returnVar += `
            <tr>
                <td>${this.cards[x].cardTitle}</td>
                <td>$${this.cards[x].cardOriginal}</td>
                <td>$${this.cards[x].cardDiscounted}</td>
            </tr>
            `
        }
        return returnVar;
    }
}

class Card
{
    constructor(imageSource, cardTitle, cardDescription, cardDiscount, cardOriginal, cardDiscounted, style)
    {
        this.imageSource = imageSource;
        this.cardTitle = cardTitle;
        this.cardDescription = cardDescription;
        this.cardDiscount = cardDiscount;
        this.cardOriginal = cardOriginal;
        this.cardDiscounted = cardDiscounted;
        this.style = style;
    }
}

//for table
let christmasLightT = new Card("christmasLights.jpg","Christmas Lights","Sale On All Christmas Lights", 25, 10, 7.50, "");
let christmasTreeT = new Card("christmasTree.jpg","Christmas Trees","Sale On All Christmas Trees", 50, 250, 125, "");
let christmasDecorationT = new Card("christmasDecoration.jpg","Assorted Christmas Tree Decoration","Sale On All Christmas Decorations", 50, 20, 10, "");
let christmasStockingT = new Card("christmasStocking.jpg","Christmas Stockings","Sale On All Christmas Trees", 25, 10, 7.50, "");

let table = new Table(3,4,[christmasLightT, christmasTreeT, christmasStockingT, christmasDecorationT], "dealList");

//for grid
let christmasLight = new Card("christmasLights.jpg","Christmas Lights","Sale On All Christmas Lights", 25, 10, 7.50, "deal");
let christmasTree = new Card("christmasTree.jpg","Christmas Trees and Decorations","Sale On All Christmas Trees and Decorations", 50, 250, 125, "deal");
let christmasStocking = new Card("christmasStocking.jpg","Christmas Stockings","Sale On All Christmas Trees", 25, 10, 7.50, "deal");


let grid = new Grid(3,1,[christmasLight, christmasTree, christmasStocking],"dealsGrid");

var dealsGrid = document.getElementById("dealsGridID");
var displayGrid = grid.discountGrid();
dealsGrid.innerHTML = displayGrid;

var dealsTable = document.getElementById("dealsTable");
var displayTable = table.discountTable();
dealsTable.innerHTML = displayTable;


function animation()
{
    this.style = "transform: scale(1.25); animation-name: backgroundColor; animation-duration: 3s;"
}

function noAnimation()
{
    this.style = "transform: scale(1);"
}

document.querySelectorAll(".deal").forEach(item => item.addEventListener("mouseover", animation));
document.querySelectorAll(".deal").forEach(item => item.addEventListener("mouseout", noAnimation));




/*

                <div class = "deal">
                    <img src = "https://cdn.christmaslightsetc.com/images/productdetail/46109/Warm-White-T5-LED-Mini-Lights-Green-Wire-7044.jpg?w=555&h=555" alt = "Christmas Lights">
                    <h2>Christmas Lights</h2>
                    <p><span>25%</span> Off All Christmas Lights</p>
                </div>
                <div class = "deal">
                    <img src = "https://source.widen.net/content/axnq2oes2o/webp/BFR-T_BH-Balsam-Fir_LEDCA_SSC-10.webp?position=c&color=ffffffff&u=7mzq6p&q=70" alt = "Christmas Tree">
                    <h2>Christmas Trees and Decorations</h2>
                    <p><span>50%</span> Off On All Christmas Trees</p>
                    <p><span>28%</span> Off All Christmas Tree Decorations</p>
                </div>
                <div class = "deal">
                    <img src = "https://m.media-amazon.com/images/I/71y6keq9ZDL.jpg" alt = "Christmas Stocking">
                    <h2>Stockings</h2>
                    <p><span>25%</span> Off All Stocking Styles</p>
                </div>
*/