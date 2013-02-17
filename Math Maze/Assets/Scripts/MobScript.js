#pragma strict

var target : Transform;
var moveSpeed = 3;
var rotationSpeed = 3;
var myTransform : Transform;
var awake = false;
var HP : int;
var takeDamage : boolean = false;
var inRange : boolean = false;
var message = false;
renderer.enabled = true;
collider.enabled = true;
var hitSound : AudioClip;
var player : PlayerStats;

function Start () {
HP = 5;
target = GameObject.FindWithTag("Player").transform;
}

function Awake()
{
	myTransform = transform;
}

function Update () 
{
if (awake)
{
transform.LookAt(Vector3(target.position.x, transform.position.y, target.position.z));

myTransform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
}

if (HP <= 0)
{
Destroy(this);
renderer.enabled = false;
collider.enabled = false;
}

if (inRange && Input.GetMouseButtonUp(0))
{
	HP--;
}

}

function fight()
{
//if (PlayerStats.inRange())
//{
//awake = true;
//inRange = true;
//message = true;
//}
//else
//{
//inRange = false;
//message = false;
//}

while(inRange || player.inRange())
{
	AudioSource.PlayClipAtPoint(hitSound, transform.position);
	PlayerStats.changeHP(-5);
	yield WaitForSeconds(1.5);
}
}

function OnTriggerEnter(other:Collider)
{
if (other.tag == "Player")
{
	awake = true;
	inRange = true;
	takeDamage = true;
	message = true;
	fight();
}
}

function OnTriggerExit(other:Collider)
{
if (other.tag == "Player")
inRange = false;
takeDamage = false;
message = false;
fight();
}

function OnGUI()
{
if (message)
{
GUI.Label(Rect(Screen.width /2, (Screen.height / 2) + 150, 200, 200), "Click to deal damage!!!.");
}
}