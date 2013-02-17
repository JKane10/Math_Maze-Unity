#pragma strict
renderer.enabled = false;
var playerInRange = false;
var displayMessage = false;
var a = new DoorActivateScript();

function Start ()
{
	collider.enabled = true;
	playerInRange = false;
}


function Update () 
{
	if(playerInRange && Input.GetMouseButtonUp(0) && PlayerStats.hasBlueKey == true)
	{
		a.doorActivate();
		playerInRange = false;
		delete();
	}
}

function delete()
{
Destroy(this);
}


function OnTriggerEnter(other:Collider)
{
	if(other.tag == "Player")
	{
		playerInRange = true;
		displayMessage = true;
	}  
}

function OnTriggerExit(other:Collider)
{
	if(other.tag == "Player")
	{
		playerInRange = false;
		displayMessage = false;
	}
}

function OnGUI()
{
        if ( displayMessage )
    {
        GUI.Label(new Rect(Screen.width /2, Screen.height / 2, 200, 200), "You need the Blue Key, then click to open");
    }
}