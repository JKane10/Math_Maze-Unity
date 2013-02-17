#pragma strict

renderer.enabled = false;
var playerInRange = false;
var displayMessage = false;

function OnTriggerEnter(other:Collider)
{
	if(other.tag == "Player")
	{
		displayMessage = true;
	}  
}

function OnTriggerExit(other:Collider)
{
	if(other.tag == "Player")
	{
		displayMessage = false;
	}
}

public function disable()
{
Destroy(this);
}

function OnGUI()
{
        if ( displayMessage )
    {
        GUI.Label(Rect(Screen.width /2, Screen.height / 2, 200, 200), "You must find and answer a question to open this door.");
    }
}