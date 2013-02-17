var inLava = false;
var damageSound : AudioClip;


function Update()
{

}

function OnTriggerEnter(other:Collider)
{
if(other.tag == "Player")
{
inLava = true;
takeDamage();
}    
}

function OnTriggerExit(other:Collider)
{
if(other.tag == "Player")
{
inLava = false;
takeDamage();
}
}

function takeDamage()
{
while (inLava)
{
AudioSource.PlayClipAtPoint(damageSound, transform.position);
PlayerStats.changeHP(-10);
yield WaitForSeconds(0.5);
}
}
