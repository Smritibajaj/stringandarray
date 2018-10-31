var myclass = document.getElementById("string");
var dataofstring ="I am going to learn JavaScript"
var node = document.createElement('div');      
node.innerHTML = dataofstring;
node.className = "margins";
node.id = "myid"
myclass.appendChild( node )

var theDiv = document.getElementById("result");
var data ="Result"
var newNode = document.createElement('div');      
newNode.innerHTML = data;
newNode.className = "margins";
theDiv.appendChild( newNode )

function split(){
    console.log('split pressed');
    var valueSplitres = dataofstring.split(' ');
    console.log(valueSplitres);
    var resultDiv = document.getElementById("result");
    var resultNode = document.createElement('div');      
    resultNode.innerHTML = valueSplitres;
    resultNode.className = "margins";
    resultDiv.appendChild( resultNode );
    return resultNode;
}
function slice(){
    console.log('slice pressed')
    var valueSplitres = dataofstring.slice(0,10);
    console.log(valueSplitres);
    var resultDiv = document.getElementById("result");
    var resultNode = document.createElement('div');      
    resultNode.innerHTML = valueSplitres;
    resultNode.className = "margins";
    resultDiv.appendChild( resultNode )
}
function splice(){
    console.log('splice pressed')
    var valueSplitres = dataofstring.split(' ');
    var a = Array.from(valueSplitres);
    a.splice(5,0, "daily");
    var b = a.join(' ');
    console.log(a);
    console.log(b);
    var resultDiv = document.getElementById("result");
    var resultNode = document.createElement('div');      
    resultNode.innerHTML = a;
    resultNode.className = "margins";
    resultDiv.appendChild( resultNode )
    var resultNode1 = document.createElement('div');   
    resultNode1.innerHTML = b;
    resultNode1.className = "margins";
    resultDiv.appendChild( resultNode1 )
}





