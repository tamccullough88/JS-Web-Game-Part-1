//background images. my inner window size is 1012w x 875h

function background(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}



// images and "objects"

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

//item function, set listener so that we can pick up and interact with the items when double clicked

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function(){
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}




// inventory bar
    let inventory = document.createElement('div')
function newInventory(){

    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    inventory.style.zindex = 5
    document.body.append(inventory)
}



//background definitions 

let horizon = window.innerWidth / 3.5
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

//background. see screenshot in assets for the view on my screen. How can we make it fill the screen automatically like a flex box would with js?

background('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
background('assets/grass.png', 0, 0,window.innerWidth/100, heightOfGrass/100)
newInventory()

// images 

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

//interactable items

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

