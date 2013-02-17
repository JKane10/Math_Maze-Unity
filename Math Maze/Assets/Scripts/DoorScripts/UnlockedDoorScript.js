#pragma strict
renderer.enabled = false;
var playerInRange = false;
var a = new DoorActivateScript();

function Start ()
{
		collider.enabled = true;
		playerInRange = false;

}

function Update () 
{
	if(playerInRange && Input.GetMouseButtonUp(0))
	{
		a.doorActivate();
	}
}



function OnTriggerEnter(other:Collider)
{
	if(other.tag == "Player")
	{
		playerInRange = true;
	}  
}

function OnTriggerExit(other:Collider)
{
	if(other.tag == "Player")
	{
		playerInRange = false;
	}
}


