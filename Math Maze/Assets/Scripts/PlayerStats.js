#pragma strict

static var HP = 100.00;
var alive = true;
var displayTime : float = 5.0;
public static var hasBlueKey = false;
public static var hasYellowKey = false;
public static var hasRedKey = false;
var displayMessage = false;
var inRange = false;
private var startTime : float;
var textTime : String;
var goodLuck : AudioClip;
static var welcomeMessage = false;


//public static var damageSound : AudioClip;
//public static var healthSound : AudioClip;

function Start () {
Screen.showCursor = false; 
HP = 100.00;
displayMessage = false;
 hasBlueKey = false;
 hasYellowKey = false;
 hasRedKey = false;
 startTime = Time.time;
 welcome();
}

function welcome()
{
welcomeMessage = true;
yield WaitForSeconds(15);
AudioSource.PlayClipAtPoint(goodLuck, transform.position);
welcomeMessage = false;
}

function Update () {
if (HP <= 0.0)
{
alive = false;
}
if (!alive)
{
hasDied();
}

}



function hasDied()
{
	displayMessage = true;
  	Time.timeScale = 0.01;
  	yield WaitForSeconds(0.03);
  	Time.timeScale = 1.0;
  	
  	Application.LoadLevel(0);
  	
 	
    displayMessage = false;
}

function OnTriggerEnter(other:Collider)
{
if (other.tag == "Mob")
{
	inRange = true;
}
}

function OnTriggerExit(other:Collider)
{
if (other.tag == "Mob")
	inRange = false;
}

static function changeHP(change : float)
{
//{
//if (change < 0)
//{
//AudioSource.PlayClipAtPoint(damageSound, 0);
//}
//if (change > 0)
//{
//AudioSource.PlayClipAtPoint(healthSound, 0);
//}
var a = 0;
a = change;
HP= HP+a;
}

static function getBlueKey()
{
hasBlueKey=true;
}

static function getRedKey()
{
hasRedKey=true;
}

static function getYellowKey()
{
hasYellowKey=true;
}

function OnGUI()
{
	if (welcomeMessage)
	{
	GUI.Label(new Rect(2,2, 750, 400), "Welcome to my Math Maze\nCreated by : Josh Kane using Unity" +
	"\nMusic : AngryRobotsIII by DSTGames @ http://www.gamedev.net/topic/593283-free-game-music-for-developers/ " + 
	"\nSound Effects : http://www.freesound.org/browse/tags/sound-effects/ \n\n\n\n\n\n" + 
	"\nRun your way through the maze to the exit! Open doors and activate switches by solving math problems!" +
	"\nTo hit monsters simply get close and click them! Make sure to pick up as much health as you can \nand try to " +
	"beat your best time! \n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tGood Luck!");
	}

        if ( displayMessage )
    {
        GUI.Label(new Rect(Screen.width /2, Screen.height /2, 200, 200), "You have died, reloading");
    }
    var keyText = "";
    if (hasBlueKey)
    {
    keyText += "Blue";
    }
    if (hasRedKey)
    {
    keyText += " Red";
    }
    if (hasYellowKey)
    {
    keyText += " Yellow";
    }
    
    var gameTime : float = Time.time;
    var guiTime = gameTime - startTime;
    var minutes : int = guiTime/60;
    var seconds : int = guiTime % 60;
    var fraction : int = (guiTime * 100) % 100;
    
    textTime = String.Format("{0:00}:{1:00}:{2:000}", minutes, seconds, fraction);
    GUI.Label (Rect (Screen.width/2, Screen.height-20, 100, 20), textTime);
    
    GUI.Label (Rect (Screen.width/2, Screen.height-50, 100, 20), "Health: " + HP);
    GUI.Label (Rect (Screen.width/2, Screen.height-35, 200, 200), "Keys: " + keyText);
}