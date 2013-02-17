#pragma strict

var displayMessage = false;

function OnTriggerEnter(other:Collider)
{
if(other.tag == "Player")
{

  displayMessage = true;
  Time.timeScale = 0.01;
  yield WaitForSeconds(0.03);
  Time.timeScale = 1.0;
  	
  Application.LoadLevel(0);
}    
}

function OnGUI()
{
        if ( displayMessage )
    {
        GUI.Label(new Rect(Screen.width /2, Screen.height / 2, 200, 200), "You have completed level 1!");
    }
}